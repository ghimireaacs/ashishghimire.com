import Image from "next/image";
import Link from "next/link";
import navMobileIcon from "@public/images/illustrations/navMobileIcon.svg";

const MobileMenu = () => {
    return (
        <div className="flex items-center gap-4 justify-end">
            <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <Image src={navMobileIcon} alt={"Mobile Nav Icon"} />
                </button>
            </div>
        </div>
    );
};
export default MobileMenu;
