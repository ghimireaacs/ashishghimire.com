import logo from "@public/images/logos/blackLogo.svg";
import Link from "next/link";
import Image from "next/image";

export const RightSideImage = () => {
    return (
        <>
            <div className="relative group">
                <div className="absolute flex md:flex md:items-right md:gap-12 size-12 lg:justify-end">
                    <Link href="/">
                        <Image src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </>
    );
};
export default RightSideImage;
