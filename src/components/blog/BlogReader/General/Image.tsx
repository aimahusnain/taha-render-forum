import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import React from "react";

interface BlogReaderImageProps {
  parmy: any;
}

const BlogReaderImage: React.FC<BlogReaderImageProps> = ({ parmy }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === parmy.slug);

  if (!blog) {
    // Handle case where the blog is not found
    return <div>Blog not found</div>;
  }

  return (
    <div>
      {blog.image && (
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          draggable={false}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full lg:h-[553px] md:h-[396px] sm:h-[207px] h-full object-cover object-center lg:rounded-[40px] md:rounded-[30px] sm:rounded-[20px] rounded-xl myshadow-black"
          priority
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default BlogReaderImage;