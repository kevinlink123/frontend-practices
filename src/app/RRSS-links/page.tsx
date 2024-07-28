import Image from "next/image";
import localFont from "next/font/local";
import Button from "@/components/RRSSLinks/Button";

const myFont = localFont({ src: "../../../public/fonts/custom-font.ttf" });

export default function page() {
    return (
        <div className="background w-full max-w-5xl p-10 items-center justify-center lg:flex">
            <div className="main-container py-10 px-14 rounded-3xl flex flex-col justify-center items-center bg-bg-1F1F1F">
                <Image
                    src="/avatar-jessica.jpeg"
                    alt="Avatar photo"
                    className="rounded-[50%] pb-6"
                    width={110}
                    height={50}
                />
                <h2 className="py-2 text-2xl font-bold text-white">Kevin Ybarra</h2>
                <h3 className="font-semibold text-[#9ac416]">
                    Buenos Aires, Argentina
                </h3>
                <h4 className="py-8 text-white">
                    "Fullstack developer and basketball lover"
                </h4>
                <Button text="Github" link="#" />
                <Button text="Instagram" link="#" />
                <Button text="LinkedIn" link="#" />
                <Button text="Twitter" link="#" />
            </div>
        </div>
    );
}
