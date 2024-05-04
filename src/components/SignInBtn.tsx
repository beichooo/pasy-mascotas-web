"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import googleIcon from "../../public/google-icon-session.svg";
import Link from "next/link";

function SignInBtn() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex justify-items-center p-4 flex-col gap-2">
      {session?.user ? (
        <div>
          <p className="text-center text-pasy-brown-text font-base mb-2">
            Bienvenido {session.user.name}
          </p>
          <Link
            className="flex flex-row gap-2 items-center font-fredoka text-2xl font-medium mx-auto w-fit border-green-600 border-2 bg-white text-green-600 rounded-xl px-3 py-2"
            href={"/dashboard"}
          >
            <img
              src={session.user.image || "../../public/google-icon-session.svg"}
              alt="user profile photo"
              className="w-8 h-8 rounded-full"
            />
            Administrar
          </Link>
        </div>
      ) : (
        <div>
          <p className="text-center text-pasy-brown-text font-base mb-2">
            Para dar en adopción a una mascota debes registrarte
          </p>
          <button
            className="flex flex-row gap-2 items-center font-fredoka text-2xl font-medium mx-auto w-fit border-green-600 border-2 bg-white text-green-600 rounded-xl px-3 py-2"
            onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
          >
            <Image src={googleIcon} alt="google icon" />
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
}
export default SignInBtn;
