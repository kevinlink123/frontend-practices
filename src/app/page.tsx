import FooterItem from "@/components/Home/FooterItem";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="main-content relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <div className="footer mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <FooterItem
                    link="/contact-form"
                    title="Contact Form"
                    description="A simple contact form with input checking."
                />
                <FooterItem
                    link="/RRSS-links"
                    title="RSSS Links"
                    description="Screen with social media redirect links."
                />
                <FooterItem
                    link="/qr"
                    title="QR Code Component"
                    description="Component with a QR code, title and subtitle"
                />
            </div>
        </>
    );
}
