import { Button } from "@/src/components/ui/Button";
import Link from "next/link";
import { BiSolidUpvote } from "react-icons/bi";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { RiCommunityFill } from "react-icons/ri";

const about = () => {
  return (
    <div className="mt-7">
      <section className="flex items-center bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="px-4 mb-10 text-center md:mb-20">
            <p className="mb-2 text-lg font-semibold text-green-600 dark:text-gray-400">
              About Us
            </p>
            <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              What we do
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded mx-auto md:mb-14">
              <div className="flex-1 h-2 bg-green-200"></div>
              <div className="flex-1 h-2 bg-green-400"></div>
              <div className="flex-1 h-2 bg-green-300"></div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="/About Page Image.jpg"
                alt=""
                className="relative z-40 object-cover rounded-xl md:rounded-l-none w-full h-96"
              />
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-green-500 dark:border-green-400 dark:text-gray-300">
                Dive Into Anything
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                Taha Render Forum is home to thousands of communities and
                Whether you&apos;re into breaking news, sports, TV fan theories, or a
                never-ending stream of the internet&apos;s cutest animals, there&apos;s a
                community on Render Forum for you.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-black">
                    <BsFileEarmarkPostFill />
                  </span>
                  Post
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-black">
                    <RiCommunityFill />
                  </span>
                  Community
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-black">
                    <BiSolidUpvote />
                  </span>
                  Vote
                </li>
              </ul>
              <Link href="/r">
                <Button>Discover More!</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
