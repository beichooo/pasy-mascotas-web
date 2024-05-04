import Image from "next/image";
import googleIcon from "../../public/icon-google.svg";
import { signIn } from "@/auth";
import { auth } from "@/auth";
import Link from "next/link";

async function SignInBtn() {
  const session = await auth();
  if (!session?.user)
    return (
      <div>
        <p className="text-center text-pasy-brown-text font-base mb-2">
          Para dar en adopción a una mascota debes registrarte
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="flex flex-row gap-2 items-center font-fredoka text-2xl font-medium mx-auto w-fit border-green-600 border-2 bg-white text-green-600 rounded-xl px-3 py-2"
          >
            <Image src={googleIcon} alt="google icon" />
            Registrarse
          </button>
        </form>
      </div>
    );

  return (
    <div className="flex justify-items-center p-4 flex-col gap-2">
      <div>
        <p className="text-center text-pasy-brown-text font-base mb-2">
          Bienvenido {session.user.name || "usuario"}
        </p>
        <Link
          className="flex flex-row gap-2 items-center font-fredoka text-2xl font-medium mx-auto w-fit border-green-600 border-2 bg-white text-green-600 rounded-xl px-3 py-2"
          href={"/dashboard"}
        >
          <img
            src={session.user.image || "../../public/default-user-icon.svg"}
            alt="user profile photo"
            className="w-8 h-8 rounded-full"
          />
          Administrar
        </Link>
      </div>
    </div>
  );
}
export default SignInBtn;
