import { SignInButton } from "../../_components/signInButton";
import { signIn } from "../../actions";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-lg font-semibold">Welcome!</h2>
      <div className="w-40">
        <form action={signIn}>
          <SignInButton />
        </form>
      </div>
    </div>
  );
}
