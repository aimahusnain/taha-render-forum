"use client";

import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface Community {
  id: string;
  name: string;
  memberCount: number;
}

const CommunitiesList: FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios.get("/api/communities");
        setCommunities(response.data);
      } catch (error) {
        console.error("Error fetching communities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  return (
    <div className="border-[1px] col-span-1 bg-white border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-24 max-h-[80vh] overflow-hidden overflow-y-auto h-fit">
      <h3 className="text-lg font-semibold capitalize">Communities</h3>
      {loading ? (
        <div className="mt-4 flex flex-col gap-5">
          <Skeleton className="h-[35px] w-[40%]" />
          <Skeleton className="h-[35px] w-[80%]" />
          <Skeleton className="h-[35px] w-[70%]" />
          <Skeleton className="h-[35px] w-[90%]" />
          <Skeleton className="h-[35px] w-[50%]" />
        </div>
      ) : (
        <ul className="mt-4 font-in text-base">
          {communities.map((community) => (
            <li
              key={community.id}
              className="border border-gray-300 p-3 my-4 rounded-md transition duration-300 hover:shadow-md text-zinc-600 hover:text-zinc-800"
            >
              <Link className="font-semibold" href={`/r/${community.name}`}>
                {community.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommunitiesList;
