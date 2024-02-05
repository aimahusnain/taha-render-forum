import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDefaultLayout = ({ blog }: {blog: any}) => {
  return (
    <div className="group flex flex-col items-center text-light">
      <Link aria-label="article image" href={blog.url} className="h-full rounded-3xl overflow-hidden">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="max-w-full h-64 object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-primary font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <Link aria-label={blog.title} href={blog.url} className="inline-block my-1">
          <h2 className="hover:text-primary hover:underline capitalize text-[24px] font-bold leading-relaxed mb-[0.5rem]">
              {blog.title}
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-[18px]">
          {blog.description}
        </span>
      </div>
    </div>
  );
};

export default BlogDefaultLayout;