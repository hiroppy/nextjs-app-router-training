// [!code word:useOptimistic]
"use client";

import { Boundary } from "@/app/_components/boundary";
import { useOptimistic, useRef, useState } from "react";
import { type Message, post } from "./actions";

type OptimisticMessage = Message & { sending: boolean };

export default function Page() {
  const ref = useRef<HTMLFormElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    OptimisticMessage[]
  >(
    messages,
    // @ts-expect-error type definition is wrong
    (state: Message[], newMessage: string) => [
      ...state,
      { message: newMessage, sending: true },
    ],
  );

  const onSubmit = async (formData: FormData) => {
    const message = formData.get("message");

    if (typeof message === "string" && message.length > 0) {
      addOptimisticMessage(message);
      setMessages((messages) => [...messages, { message }]);
      ref?.current?.reset();
      await post(message);
    }
  };

  return (
    <Boundary label="Page">
      <form action={onSubmit} ref={ref} className="flex gap-4">
        <input type="text" name="message" className="bg-slate-600 flex-1" />
        <button type="submit">Submit</button>
      </form>
      {optimisticMessages.map(({ message, sending }, i) => (
        // biome-ignore lint: i is key
        <p key={`${message}_${i}`}>
          {message}
          {sending && <small> (Sending...)</small>}
        </p>
      ))}
    </Boundary>
  );
}
