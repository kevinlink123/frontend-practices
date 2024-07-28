import Image from "next/image";
import React from "react";
import "./style.css";

export default function page() {
    return (
        <div className="qr-main-component">
            <Image
                className="qr"
                alt="qr code"
                src="/image-qr-code.png"
                width={288}
                height={120}
            />
            <div className="description-container">
                <h3 className="title">
                    Improve your front-end skills by building projects
                </h3>
                <p className="paragraph">
                    Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level
                </p>
            </div>
            <div></div>
        </div>
    );
}
