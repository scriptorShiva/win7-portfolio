"use client";

import GlossyRing from "@/components/atom/glossy-ring-loader";
import LockScreenLayout from "@/layout/lock-screen";
import { useRouter } from "next/navigation";
import React from "react";

const BootLoadingWelcome = () => {
  const router = useRouter();

  // after 2sec redirect it to deskotp screen
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/desktop");
    }, 2000);
  }, []);

  return (
    <div>
      <LockScreenLayout>
        <div className="flex justify-center items-center h-full gap-3">
          <GlossyRing size={25} speed={2} />
          <span
            style={{
              fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 400,
              fontSize: "1.25rem",
              letterSpacing: "0.1rem",
              color: "white",
              textShadow: "0 0 5px rgba(0,0,0,0.6)",
            }}
          >
            Welcome
          </span>
        </div>
      </LockScreenLayout>
    </div>
  );
};

export default BootLoadingWelcome;
