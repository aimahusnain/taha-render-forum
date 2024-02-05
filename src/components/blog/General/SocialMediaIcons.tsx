import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

const SocialMediaIcons = ({ gap }: { gap: string }) => {
  return (
    <div className={`h-fit flex ${gap} py-8 justify-center`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link target="_blank" href="https://www.instagram.com/alightmotion">
              <FaInstagram
                size={20}
                className="hover:scale-125 transition-all"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link target="_blank" href="https://twitter.com/alightcreative">
              <RiTwitterXFill
                size={20}
                className="hover:scale-125 transition-all"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              target="_blank"
              href="https://www.facebook.com/alightcreative"
            >
              <MdOutlineFacebook
                size={20}
                className="hover:scale-125 transition-all"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link target="_blank" href="https://youtube.com/alightmotion">
              <SlSocialYoutube
                size={20}
                className="hover:scale-125 transition-all w-8"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Youtube</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialMediaIcons;
