import { AuthButton } from "../../_components/authButton";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-lg font-semibold">Welcome!</h2>
      <div className="w-40">
        <AuthButton type="signIn" />
      </div>
    </div>
  );
}
