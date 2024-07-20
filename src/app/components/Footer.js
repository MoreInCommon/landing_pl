"use client";
import { usePathname } from "next/navigation";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";
import { StoryblokComponent } from "@storyblok/react";
import Logo from "../../../public/tempImages/image22.png";

const Footer = ({ blok }) => {
  const pathname = usePathname();
  const isGreenUrl = pathname?.includes("fokus-na-klimat") ? "bg-themeGreen" : "";
  const navItems = blok.blocks.filter((block) => block.component === "footer items");
  const socialMediaLink = blok.blocks.filter((block) => block.component === "social media link");
  const twitter = socialMediaLink.find((block) => block.type === "twitter").url.url;
  const linkedin = socialMediaLink.find((block) => block.type === "linkedin").url.url;
  return (
    <footer
      className={`relative bg-white shadow-footer-shadow text-themeableColors-darkBlue ${isGreenUrl}`}
    >
      <div className="max-w-full m-auto w-full bg-white">
        <div className="flex justify-between py-8 px-full max-xl:px-tablet max-sm:px-mobile items-stretch max-sm:flex-col-reverse gap-10">
          <div className="flex flex-col gap-6 max-xl:gap-2">
            <Link href="/">
              <span className="sr-only">More in common</span>
              <Image src={Logo} alt="More in common" width={143} height={44} />
            </Link>
            <SocialMediaIcons xUrl={twitter} linkedinUrl={linkedin} />
            <span className="mt-10 max-lg:flex max-lg:flex-col">
              © 2024 More in Common{" "}
              <Link href="/polityka-prywatnosci" className="ml-8 max-lg:ml-0">
                <span className="text-themeableColors-darkBlue underline">
                  Polityka prywatności
                </span>
              </Link>
            </span>
          </div>
          <div className="flex gap-[120px] justify-between mr-[60px] max-xl:mr-0 max-lg:gap-10 max-sm:gap-6">
            {navItems.map((item) => (
              <StoryblokComponent blok={item} key={item._uid} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
