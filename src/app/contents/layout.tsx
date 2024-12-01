import {Button} from "@/app/page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}

export function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
            >
                <div className="w-32 text-white md:w-40">안녕하세요, ...님.
                </div>
                <div><Button link={"/contents/apply"}>수강신청</Button><Button link={"/contents"}>전체 게시물</Button></div>
            </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        placeholder
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}