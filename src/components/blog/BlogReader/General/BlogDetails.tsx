import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const BlogDetails = ({ blog, slug: blogSlug }: { blog: any; slug: any }) => {
  return (
    <div className="uppercase leading-4 tracking-[2px] font-bold text-slate-400 flex flex-wrap justify-center items-center gap-2">
      <Link
        href={`/categories/${slug(blog.tags[0])}`}
        className="mx-3 hover:text-white"
      >
        #{blog.tags[0]}
      </Link>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {format(parseISO(blog.publishedAt), "LLL d, yyyy")}
          </TooltipTrigger>
          <TooltipContent>
            {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
     
    </div>
  );
};

export default BlogDetails;
