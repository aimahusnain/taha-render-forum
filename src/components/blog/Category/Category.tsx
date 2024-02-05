import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  link?: string;
  name: string;
  active?: boolean;
  className?: string;
  extraClassName?: string;
}

const Category: React.FC<CategoryProps> = ({
  link = "#",
  name,
  active,
  className,
  extraClassName,
}) => {
  return (
    <Link
      href={link}
      className={cx(
        "bg-zinc-200 !w-fit !inline-flex py-1.5 md:py-2 px-6 md:px-10 rounded-full hover:scale-105 transition-all capitalize ease duration-200",
        className,
        extraClassName,
        active ? "text-slate-900 border-neutral-800 border-2" : "text-slate-700"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
