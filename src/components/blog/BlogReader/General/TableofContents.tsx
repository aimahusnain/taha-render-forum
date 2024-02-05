"use client";

import { allBlogs } from "contentlayer/generated";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const TableofContents = ({ parmy }: { parmy: any }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === parmy.slug);
  const [scrollMargin, setScrollMargin] = useState(0);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const handleButtonClick = (e: any, myelement: string) => {
    const newScrollMargin = 60;
    setScrollMargin(newScrollMargin);

    const element = document.getElementById(myelement);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - newScrollMargin,
        behavior: "smooth",
      });
    }
  };

  return (
    <details
      className="border-[1px] mt-2 mb-10 border-solid border-zinc-500 text-light rounded-xl p-4 overflow-hidden overflow-y-auto"
      open
    >
      <summary className="text-lg font-semibold capitalize cursor-pointer">
        Table Of Content
      </summary>
      <ul className="mt-4 text-base">
        {blog.toc.map((heading: any) => {
          return (
            <li key={`#${heading.slug}`} className="py-1">
              <button
                onClick={(e) => handleButtonClick(e, `${heading.slug}`)}
                data-level={heading.level}
                className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-zinc-500/10 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 w-full hover:bg-alightdarkbg hover:border hover:border-primary transition-all duration-400 rounded-lg p-3 flex items-center justify-start !text-left"
              >
                {heading.level === "three" ? (
                  <span className="flex w-4 h-4 rounded-full mr-1 items-center justify-start">
                    <ChevronRight className="-mr-4" />
                  </span>
                ) : null}

                <p className="pl-4">{heading.text}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

export default TableofContents;
