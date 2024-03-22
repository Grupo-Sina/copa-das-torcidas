"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import logoedsheader from "../../../../public/logoedsheader.png";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [activePathname, setActivePathname] = useState<string>(pathname);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="h-[93px] bg-[#0F1768] w-screen flex justify-between"
      position="static"
      classNames={{
        wrapper: "justify-center",
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden bg-transparent text-white mx-2"
      />

      <NavbarContent justify="start" className="flex">
        <Link href="/" className="mx-auto">
          <Image src={logoedsheader} alt="logoedsheader" />
        </Link>
      </NavbarContent>

      <NavbarMenu className="bg-[#0F1768] bg-opacity-80">
        <NavbarMenuItem className="mt-10 relative overflow-hidden">
          <Link
            href="/"
            className="cursor-pointer text-xl font-robotoBold hover:text-[#00E46F] text-white rounded-full w-full p-4"
          >
            Início
          </Link>
          <hr
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.20)",
            }}
          />
          <span className="absolute bg-[#00E46F] h-[4px] bottom-0 left-0 right-0 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/about"
            className="cursor-pointer text-xl font-robotoBold hover:text-[#00E46F] text-white rounded-full w-full p-4"
          >
            Sobre
          </Link>
          <hr
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.20)",
            }}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/missions"
            className="cursor-pointer text-xl font-robotoBold hover:text-[#00E46F] text-white rounded-full w-full p-4"
          >
            Missões
          </Link>
          <hr
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.20)",
            }}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/teams"
            className="cursor-pointer text-xl font-robotoBold hover:text-[#00E46F] text-white rounded-full w-full p-4"
          >
            Times
          </Link>
          <hr
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.20)",
            }}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/ranking"
            className="cursor-pointer text-xl font-robotoBold hover:text-[#00E46F] text-white rounded-full w-full p-4"
          >
            Ranking
          </Link>
          <hr
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.20)",
            }}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/faq"
            className="cursor-pointer text-xl font-robotoBold hover:text-[#00E46F] text-white rounded-full w-full p-4"
          >
            FAQ
          </Link>
          <hr
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.20)",
            }}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/"
            className="cursor-pointer text-xl font-robotoBold hover:text-[#00E46F] text-white rounded-full w-full p-4"
          >
            Tutoriais
          </Link>
          <hr
            style={{
              borderTopColor: "rgba(255, 255, 255, 0.20)",
            }}
          />
        </NavbarMenuItem>
      </NavbarMenu>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/"
            className={`${activePathname === "/" ? 'text-[#00E46F]' : 'text-white'} font-robotoRegular`}
          >
            Início
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className={`${activePathname === "/about" ? 'text-[#00E46F]' : 'text-white'} font-robotoRegular`}
          >
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link            
            href="/missions"
            className={`${activePathname === "/missions" ? 'text-[#00E46F]' : 'text-white'} font-robotoRegular`}
          >
            Missões
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/teams"
            className={`${activePathname === "/teams" ? 'text-[#00E46F]' : 'text-white'} font-robotoRegular`}
          >
            Times
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/ranking"
            className={`${activePathname === "/ranking" ? 'text-[#00E46F]' : 'text-white'} font-robotoRegular`}
          >
            Ranking
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/faq"
            className={`${activePathname === "/faq" ? 'text-[#00E46F]' : 'text-white'} font-robotoRegular`}
          >
            FAQ
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            href="/tutorials"
            className={`${activePathname === "/tutorials" ? 'text-[#00E46F]' : 'text-white'} font-robotoRegular`}
          >
            Tutoriais
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Button
            as={Link}
            radius="full"
            className="bg-[#00E46F] text-[#003B9C] hidden md:flex py-3 px-8 font-headingBold text-[16px]"
          >
            CADASTRE-SE
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
