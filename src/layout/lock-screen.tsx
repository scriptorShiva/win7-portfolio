import React from "react";
import Image from "next/image";

const LockScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-screen h-screen">
        <Image
          src="/images/bg/home.jpg"
          alt="home-bg"
          fill
          style={{ objectFit: "cover" }} // Cover the entire div
          priority // Optional: loads faster
        />

        {/* Content from pages */}
        <section className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {children}
        </section>

        {/* footer section */}
        <section className="absolute bottom-6 w-full flex items-center justify-center">
          <Image
            src="/icons/window-7-icon.png"
            alt="footer"
            width={50}
            height={50}
          />
          <span>
            <span className="font-[200] text-4xl">Windows</span>
            <span className="font-[200] text-4xl">7</span>
            <span className="font-[200] text-2xl"> Portfolio</span>
          </span>
        </section>
      </div>
    </>
  );
};

export default LockScreenLayout;
