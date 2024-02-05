import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";
import siteMetadata from "@/src/utils/siteMetaData";

interface CategoriesProps {
  categories: any;
  currentSlug: any;
  extraClassnames: { [key: string]: string };
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  currentSlug,
  extraClassnames,
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-full !text-black sm:mx-0 mx-10 md:mx-10"
    >
      <CarouselContent className="px-6">
        {categories.map((cat: any) => (
          <CarouselItem key={cat} className="flex w-fit basis-auto">
            <Category
              key={cat}
              link={`${siteMetadata.siteUrl}/blog/categories/${cat}`}
              name={cat}
              active={currentSlug === slug(cat)}
              extraClassName={extraClassnames[cat]}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="!text-black" />
      <CarouselNext className="!text-black" />
    </Carousel>
  );
};

export default Categories;
