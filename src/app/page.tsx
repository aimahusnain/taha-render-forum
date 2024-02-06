import Communities from "@/src/components/Communites";
import SideBar from "@/src/components/SideMenu";
import CustomFeed from "@/src/components/homepage/CustomFeed";
import GeneralFeed from "@/src/components/homepage/GeneralFeed";
import { getAuthSession } from "@/src/lib/auth";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <div className="flex gap-x-5 bg-white max-h-full">
      <div className="flex-none lg:w-1/4 w-1/3 md:block hidden">
        <SideBar />
      </div>

      <div className="lg:flex-2 flex-none mt-10 md:mx-0 mx-8 lg:w-1/2 w-full">
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}
      </div>

      <div className="w-1/4 mr-5 lg:block hidden">
        <Communities />
      </div>
    </div>
  );
}
