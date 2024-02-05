import { allBlogs } from "contentlayer/generated";
const BlogDetails = lazy(() => import("./General/BlogDetails"));
const RenderMdx = lazy(() => import("./General/RenderMdx"));
const Butybar = lazy(() => import("./General/Floating Bar"));
const TableofContents = lazy(() => import("./General/TableofContents"));
const BlogReaderImage = lazy(() => import("./General/Image"));
import { lazy } from "react";


const BlogReading = ({ parmy, blogy }: { parmy: any; blogy: any }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === parmy.slug);
  if (!blog) {
    // Handle case where the blog is not found
    return <div>Blog not found</div>;
  }
  return (
      <div className="mb-20 mt-16 flex items-center flex-col text-left">
        <div className="lg:w-[60%] md:w-[72%] sm:w-[62%] text-center space-y-5">
          <BlogDetails blog={blogy} slug={parmy.slug} />
          <h1 className="capitalize sm:text-4xl md:text-5xl lg:text-6xl text-4xl font-bold leading-tight">
            {blog.title}
          </h1>
        </div>

        <div className="sm:px-32 px-5 w-full sm:my-16 my-10">
          <BlogReaderImage parmy={parmy} />
        </div>

        <Butybar blogy={blogy} />
        <div className="lg:w-[60%] md:w-[72%] sm:w-[62%] w-[80%]">
          <TableofContents parmy={parmy} />
          <RenderMdx blog={blogy} />
        </div>

    </div>
  );
};

export default BlogReading;