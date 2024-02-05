// categories/[slug].tsx
import { allBlogs, Blog } from "@/.contentlayer/generated";
import Search from "@/src/components/blog/search";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const categories: string[] = [];
  const paths: { slug: string }[] = [{ slug: "all" }];

  allBlogs.map((blog: Blog) => {
    if (blog.isPublished && blog.tags) {
      blog.tags.map((tag: string) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<{ title: string; description: string }> {
  return {
    title: `${params.slug.replaceAll("-", " ")} Articles`,
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  return (
    <article className="mt-6 flex gap-5 flex-col text-white px-5 sm:px-10 md:px-24 sxl:px-32">
      <Search parmy={params} />
    </article>
  );
};

export default CategoryPage;
