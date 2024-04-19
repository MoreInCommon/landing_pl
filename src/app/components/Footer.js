"use client";
import { usePathname } from "next/navigation";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";
import { urls } from "@/app/utils";
import { getIfGreenUrl } from "@/app/utils";
import Logo from "../../../public/tempImages/image22.png";

const Footer = () => {
  const pathname = usePathname();
  const isGreenUrl = getIfGreenUrl(pathname);

  return (
    <footer
      className={`relative bg-white shadow-footer-shadow text-themeableColors-darkBlue ${isGreenUrl}`}
    >
      <div className="max-w-full m-auto w-full bg-white">
        <div className="flex justify-between py-8 px-full max-xl:px-tablet max-sm:px-mobile items-stretch max-sm:flex-col-reverse gap-10">
          <div className="flex flex-col gap-6 max-xl:gap-2">
            <Link href={urls.home}>
              <span className="sr-only">More in common</span>
              <Image src={Logo} alt="More in common" width={143} height={44} />
            </Link>
            <SocialMediaIcons />
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
            <div className="flex flex-col">
              <h5 className="uppercase font-bold mb-6">Co robimy</h5>
              <Link href={urls.whatWeDo} className="mb-4">
                Nasze projekty
              </Link>
              <Link href={urls.media} className="mb-4">
                W mediach
              </Link>
            </div>
            <div className="flex flex-col">
              <h5 className="uppercase font-bold mb-6">Kontakt</h5>
              <Link href={urls.contact} className="mb-4">
                Nasze biuro
              </Link>
              <Link href={urls.workWithUs} className="mb-4">
                Pracuj z nami
              </Link>
            </div>
            <div className="flex flex-col">
              <h5 className="uppercase font-bold mb-6">O nas</h5>
              <Link href={urls.mission} className="mb-4">
                Misja
              </Link>
              <Link href={urls.team} className="mb-4">
                Zespół
              </Link>
              <Link href={urls.statut}>Statut</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
