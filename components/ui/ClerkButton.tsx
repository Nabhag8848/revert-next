import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

async function ClerkButton() {
  const user = await currentUser();
  return (
    <div className="flex items-center">
      <UserButton />
      <p className="ml-3">{user?.fullName ?? "User Name"}</p>
    </div>
  );
}

export default ClerkButton;
