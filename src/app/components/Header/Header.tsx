import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import logoedsheader from "../../../../public/logoedsheader.png";

export default function Header() {
  return (
    <Navbar maxWidth="2xl" className="h-[93px] bg-[#0F1768] w-screen flex" position="static">
      <NavbarContent justify="start">
        <Image src={logoedsheader} alt="logoedsheader" />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" color="success" aria-current="page" className="font-robotoRegular">
            Início
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="text-white font-robotoRegular">Sobre</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/missions" className="text-white font-robotoRegular">Missões</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/teams" className="text-white font-robotoRegular">Times</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/ranking" className="text-white font-robotoRegular">Ranking</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/faq" className="text-white font-robotoRegular">FAQ</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tutorials" className="text-white font-robotoRegular">Tutoriais</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} radius="full" className="bg-[#00E46F] text-[#003B9C] py-3 px-8 font-headingBold text-[16px]">
            CADASTRE-SE
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
