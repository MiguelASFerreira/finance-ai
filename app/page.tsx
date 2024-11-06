import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();
    if (!userId) {
        redirect('/login')
    }
  return (
    <div className="w-full flex items-center justify-center">
      <UserButton showName />
    </div>
  );
}

export default Home