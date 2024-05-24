import SignOutBtn from "@/components/SignOutBtn";
import UserAvatar from "@/components/UserAvatar";

import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if (session?.user) {
    const data = session.user;

    fetch("http://localhost:3000/api/userSave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  if (!session) return <div>Porfavor inicia sesión</div>;

  return (
    <div>
      <div>
        Dashboard page
        <SignOutBtn />
        <UserAvatar />
      </div>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
    </div>
  );
}
