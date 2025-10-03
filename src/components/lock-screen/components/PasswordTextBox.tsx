"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

type FormData = {
  password: string;
};

export default function PasswordTextBox() {
  const router = useRouter();
  const [isShaking, setIsShaking] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    setError,
  } = useForm<FormData>();

  // methods
  const onSubmit = (data: FormData) => {
    if (data.password === "shivapal") {
      router.push("/boot-loading"); // correct → go to boot screen
    } else {
      setError("password", { message: "Wrong password" }); // error handling
      reset({ password: "" }); // clear field after wrong attempt
      setIsShaking(true);
    }
  };

  return (
    <>
      {/* Textbox / Password */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <motion.div
            animate={isShaking ? { x: [-10, 10, -10, 6, -6, 0] } : {}}
            transition={{ duration: 0.4 }}
            onAnimationComplete={() => setIsShaking(false)} // reset shake
            className="flex gap-2"
          >
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-72 px-3 rounded-sm bg-white border border-black placeholder-gray text-black focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="cursor-pointer">
              <Image
                src="/icons/right-arrow-continue.png"
                alt="right-arrow-continue"
                width={30}
                height={30}
              />
            </button>
          </motion.div>
        </div>
      </form>
    </>
  );
}
