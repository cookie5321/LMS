import Link from "next/link";
import clsx from "clsx";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl">LMS</div>
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--pretendard)]">
          로그인 또는 회원가입하여 시작하세요.
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button link="/register">회원가입</Button>
          <Button link="/login" filled={false}>로그인</Button>
        </div>
      </main>
    </div>
  );
}

export function Button({children, link, filled=true}: {children: string, link: string, filled?: boolean}) {
  return <Link
      className={clsx({"rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5": filled,
          "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5": !filled})}
      href={link}
  >{children}</Link>
}