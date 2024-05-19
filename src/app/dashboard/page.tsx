import SignOutBtn from "@/components/SignOutBtn";
import UserAvatar from "@/components/UserAvatar";

import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  console.log(session?.user?.email);

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
