import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { LuInspect } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { RiRobot2Line } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { Button } from "./ui/Button";

const SideBar = () => {
  return (
    <div className="flex-none w-1/4 bg-white border border-zinc-400 fixed h-screen overflow-auto pt-20 bottom-0 px-8">
      <div className="p-4 flex flex-col gap-2 font-semibold text-lg">
        <Link href="/" className="flex gap-2 items-center">
          <FaHome />
          Home
        </Link>
        <hr />
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              <Link href="/r" className="hover:underline underline-black">
                Communities
              </Link>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4 text-md">
                <li>
                  <Link
                    href="/r/create"
                    className="flex gap-2 items-center text-slate-600 hover:text-zinc-900 "
                  >
                    <FaPlus className="w-5 h-5" />
                    Create a Community
                  </Link>
                </li>

                <li>
                  <Link
                    href="/r"
                    className="flex text-slate-600 hover:text-zinc-900 gap-2 items-center"
                  >
                    <LuInspect className="w-5 h-5" />
                    Explore Communities
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <hr />
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              Resources
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4 text-md">
                <li>
                  <Link
                    href="/about"
                    className="flex gap-2 items-center text-slate-600 hover:text-zinc-900 "
                  >
                    <RiRobot2Line className="w-5 h-5" />
                    About Taha Render Forum
                  </Link>
                </li>

                <li>
                  <Link
                    href="/help"
                    className="flex text-slate-600 hover:text-zinc-900 gap-2 items-center"
                  >
                    <IoIosHelpCircleOutline className="w-5 h-5" />
                    Help
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog/categories/all"
                    className="flex text-slate-600 hover:text-zinc-900 gap-2 items-center"
                  >
                    <IoBookOutline className="w-5 h-5" />
                    Blog
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
