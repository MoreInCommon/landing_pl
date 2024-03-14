"use client";
import { usePathname } from "next/navigation";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";
import { getIfGreenUrl } from "@/app/utils";
import Logo from "../../../public/tempImages/image22.png";

const Footer = () => {
  const pathname = usePathname();
  const isGreenUrl = getIfGreenUrl(pathname);

  return (
    <footer
      className={`relative bg-white shadow-footer-shadow text-themeableColors-darkBlue ${isGreenUrl}`}
    >
      <div className="max-w-[1440px] m-auto w-full bg-white">
        <div className="flex justify-between py-8 px-[100px] items-stretch">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <span className="sr-only">More in common</span>
              <Image src={Logo} alt="More in common" width={143} height={44} />
            </Link>
            <SocialMediaIcons />
            <span className="mt-10">
              © 2024 More in Common{" "}
              <a href="#" className="ml-8">
                <span className="text-themeableColors-darkBlue underline">
                  Polityka prywatności
                </span>
              </a>
            </span>
          </div>
          <div className="flex gap-[120px] justify-between mr-[60px]">
            <div className="flex flex-col">
              <h5 className="uppercase font-bold mb-6">Co robimy</h5>
              <Link href="/#" className="mb-4">
                Nasze projekty
              </Link>
              <Link href="/#" className="mb-4">
                W mediach
              </Link>
            </div>
            <div className="flex flex-col">
              <h5 className="uppercase font-bold mb-6">Kontakt</h5>
              <Link href="/#" className="mb-4">
                Nasze biuro
              </Link>
              <Link href="/#" className="mb-4">
                Pracuj z nami
              </Link>
            </div>
            <div className="flex flex-col">
              <h5 className="uppercase font-bold mb-6">O nas</h5>
              <Link href="/#" className="mb-4">
                Misja
              </Link>
              <Link href="/#" className="mb-4">
                Zespół
              </Link>
              <Link href="/#">Status</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
