import React from "react";
import useTranslation from "next-translate/useTranslation";
import { DBGSLogo } from "../DGBSLogo";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Header() {
  // const { t, lang } = useTranslation("common");
  // const example = t("lang");
  // console.log(example);
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <DBGSLogo/>
        <p className="font-bold text-inherit">DGBS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            DS Công bố
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Biển số sắp đấu giá
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Phòng đấu giá
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Kết quả đấu giá
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-blink">
            Thông báo đấu giá
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Đăng nhập</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Đăng ký
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
