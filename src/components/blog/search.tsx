"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogLayoutThree from "./BlogLayouts/BlogDefaultLayout";
import { allBlogs } from "@/.contentlayer/generated";
import Categories from "./Category/Categories";
import { slug } from "github-slugger";
import SocialMediaIcons from "./General/SocialMediaIcons";
import FeaturedPostsDesign from "./BlogLayouts/FeaturedPostlayout";

const SearchPage = ({ parmy }: { parmy: any }) => {
  const router: any = useRouter();
  const { q } = router.query || { q: "" };
  const allCategories: string[] = ["all"];
  const [searchTerm, setSearchTerm] = useState(q);
  const [isTyping, setIsTyping] = useState(false); // New state to track typing status

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsTyping(!!e.target.value.trim()); // Set isTyping to true if there is input
  };

  const filteredBlogs = allBlogs.filter((blog) => {
    const normalizedTitle = blog.title.toLowerCase();
    const normalizedQuery = searchTerm.toLowerCase();
    return (
      normalizedTitle.includes(normalizedQuery) &&
      blog.tags &&
      blog.tags.some((tag: string) => {
        const slugified = slug(tag);
        if (!allCategories.includes(slugified)) {
          allCategories.push(slugified);
        }
        if (
          parmy.slug === "all" &&
          (!isTyping ? !blog.jfkFeatured : blog.jfkFeatured)
        ) {
          return true;
        }
        return slugified === parmy.slug;
      })
    );
  });

  const extraClassnames: { [key: string]: string } = {
    all: "mr-5",
  };

  const maxFeaturedBlogs = 5;
  const featuredBlogs = allBlogs
    .filter((blog) => blog.jfkFeatured === true)
    .slice(0, maxFeaturedBlogs);

  return (
    <div className="mt-7">
      <Categories
        categories={allCategories}
        currentSlug={parmy.slug}
        extraClassnames={extraClassnames}
      />

      <div className="flex flex-col">
        <h1 className="capitalize mt-3 font-semibold text-2xl md:text-4xl lg:text-5xl">
          {parmy.slug}
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center gap-5 pt-2 text-sm md:grid-cols-2">
        <div className="relative col-span-1">
          <input
            type="text"
            placeholder="Search articles…"
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="w-full rounded-full border focus:!border-primary text-black border-slate-200 px-4 py-2 text-base focus:bg-transparent transition-all"
          />
        </div>
        <div className="col-span-1 flex flex-row flex-wrap gap-1 text-slate-800 md:flex-nowrap justify-end">
          <SocialMediaIcons gap="gap-10" />
        </div>
      </div>

      {parmy.slug === "all" && !isTyping && (
        <FeaturedPostsDesign blogs={allBlogs} featuredBlogs={featuredBlogs} />
      )}

      <div className="mt-5 sm:mt-10 md:mt-24 sx:mt-32 flex flex-col gap-10">
        {parmy.slug === "all" && !isTyping && (
          <h2 className="text-5xl font-bold">Blogs</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16">
          {filteredBlogs.map((blog, index: number) => (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
