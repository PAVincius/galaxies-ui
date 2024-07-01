"use client";

import Link from "next/link";
import { Icons } from "../icons";
import { Balancer } from "react-wrap-balancer";
import { siteConfig } from "@/config/site-config";
import { SocialLinks } from "../social-links";
import { ModeToggle } from "../toggle-theme";
import { SearchPopOver } from "../search";
import { Pages } from "@/config/docs-config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Banner } from "@/components/banner";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { SideBar } from "../side-bar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <header className="fixed w-full top-0 left-0  z-10">
      {pathname === "/" && <></>}
      <div className="flex items-center justify-between px-4 py-2 h-14 border-b border-border bg-background">
        <nav className="mx-auto max-w-screen-2xl flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link href="/" className="flex items-center gap-2 ">
              <Icons.logo className="h-10 w-10 fill-current" />
              <Balancer
                as={"span"}
                className=" font-bold truncate text-ellipsis "
              >
                {siteConfig.name}
              </Balancer>
            </Link>
            {Pages.map((page) => {
            const isActive = pathname.includes(page.path ?? "");
            return (
              <NavigationMenu key={page.title}>
                <NavigationMenuList>
                    {page.pages ? (
                      <NavigationMenuItem key={page.title}>
                      <NavigationMenuTrigger>
                        {page.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {page.pages.map((component) => (
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" key={component.title} href={component.path}>
                              <div className="text-sm font-medium leading-none">{component.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{component.description}</p>
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <Link href={page.path as string} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {page.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                </NavigationMenuList>
              </NavigationMenu>
            );
          })}
          </div>
          <div className="flex items-center gap-1 xs:gap-2">
            <SearchPopOver />
            <SocialLinks className="hidden xs:flex" />
            <div className="flex xs:hidden">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="size-4" />
          <span className="sr-only">menu</span>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SideBar setOpen={setOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
