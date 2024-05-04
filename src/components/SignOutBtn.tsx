"use client";

import { signOut } from "next-auth/react";

function SignOutBtn() {
  return (
    <>
      <div>
        <button
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Cerrar sesión
        </button>
      </div>
    </>
  );
}
export default SignOutBtn;
