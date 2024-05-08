import { auth } from "../auth";

export default async function UserAvatar() {
  const session = await auth();
  console.log(session);

  // TODO: Search how use a Image for the remote images
  if (!session?.user) return null;

  return (
    <div>
      <p>{session.user.name}</p>
      <img
        src={session.user.image || "../../public/default-user-icon.svg"}
        alt="User Avatar"
        width={60}
        height={60}
      />
    </div>
  );
}
