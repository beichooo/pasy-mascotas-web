// import { signOut } from "next-auth/react";
import { signOut } from "@/auth";

function SignOutBtn() {
  return (
    <>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Sign Out
          </button>
        </form>
      </div>
    </>
  );
}
export default SignOutBtn;
