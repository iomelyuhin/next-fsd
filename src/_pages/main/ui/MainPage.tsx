"use server";
import Image from "next/image";
import cls from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <main className={cls.main}>
      <Image
        src="/next_server/icons/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      <div>Main page</div>
    </main>
  );
};
