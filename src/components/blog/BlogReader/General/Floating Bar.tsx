"use client";

import { Button } from "@/src/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialogi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/src/components/ui/dropdown-menu";
import siteMetadata from "@/src/utils/siteMetaData";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaHackerNews,
  FaLinkedinIn,
  FaRedditAlien,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Butybar = ({ blogy }: { blogy: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconClasses =
    "text-lg text-default-500 pointer-events-none flex-shrink-0";
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy URL to clipboard");
    }
  };

  const [scrollMargin, setScrollMargin] = useState(0);

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

  const currentUrl = window.location.href;

  const handleFacebookShare = () => {
    const encodedUrl = encodeURIComponent(currentUrl);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=Check out this article`;

    window.open(facebookShareUrl, "_blank");
  };

  const handleWhatsappShare = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `Check out this article: ${currentUrl}`
    )}`;

    window.open(whatsappShareUrl, "_blank");
  };

  const handleTwitterShare = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent("Check out this article")}`;

    window.open(twitterShareUrl, "_blank");
  };

  const handleRedditShare = () => {
    const redditShareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent("Check out this article")}`;

    window.open(redditShareUrl, "_blank");
  };

  const handleLinkedInShare = () => {
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent("Check out this article")}`;

    window.open(linkedInShareUrl, "_blank");
  };

  const handleHackerNewsShare = () => {
    const hackerNewsShareUrl = `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
      currentUrl
    )}&t=${encodeURIComponent("Check out this article")}`;

    window.open(hackerNewsShareUrl, "_blank");
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <nav
        className="border border-white w-max px-10 py-0.5 border-solid rounded-full font-medium capitalize items-center flex fixed bottom-6 right-1/2 translate-x-1/2 bg-black/50 z-50 backdrop-blur-2xl transition-all ease duration-300 gap-4"
        style={{
          bottom: isVisible ? "1.5rem" : "-5rem",
        }}
      >
        <Dialog>
          <DialogTrigger>
            <button
              className="capitalize text-white rounded-full bg-transparent focus:border focus:border-black"
              aria-label="Table of Contents"
            >
              <FaBarsStaggered />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Table of Contents</DialogTitle>
            </DialogHeader>

            <ul className="mt-4 text-base">
              {blogy.toc.map((heading: any) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <button
                      onClick={(e) => handleButtonClick(e, `${heading.slug}`)}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-zinc-500/10 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 w-full hover:bg-alightdarkbg transition-all duration-400 rounded-lg p-3 flex items-center justify-start !text-left"
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
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="h-7 bg-zinc-500 w-[0.25px]" />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="w-10 h-10 p-2 flex text-white items-center justify-center transition-all duration-150 rounded-full">
              <FaShareAlt />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-[150px] space-y-2 flex items-start flex-col text-xl font-semibold">
            <DropdownMenuItem
              className="gap-4 cursor-pointer"
              key="permalink"
              onClick={() =>
                copyToClipboard(`${siteMetadata.siteUrl}${blogy.url}`)
              }
            >
              <LuLink className={iconClasses} />
              Permalink
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-4 cursor-pointer"
              key="twitter"
              onClick={handleTwitterShare}
            >
              <RiTwitterXFill className={iconClasses} /> Twitter
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-4 cursor-pointer"
              key="reddit"
              onClick={handleRedditShare}
            >
              <FaRedditAlien className={iconClasses} /> Reddit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-4 cursor-pointer"
              key="linkedin"
              onClick={handleLinkedInShare}
            >
              <FaLinkedinIn className={iconClasses} /> Linkedin
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-4 cursor-pointer"
              key="Hacker News"
              onClick={handleHackerNewsShare}
            >
              <FaHackerNews className={iconClasses} /> Hacker News
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-4 cursor-pointer"
              key="facebook"
              onClick={handleFacebookShare}
            >
              <FaFacebook className={iconClasses} /> Facebook
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-4 cursor-pointer"
              key="whatsup"
              onClick={handleWhatsappShare}
            >
              <FaWhatsapp className={iconClasses} /> Whats App
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Butybar;
