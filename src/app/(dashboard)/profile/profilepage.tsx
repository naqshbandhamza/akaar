import Tabs from "./tabs"
import { logout } from "../../../../utils/libs/libs";
import { redirect } from "next/navigation";
import Dropdown from "./dropdown";

export default async function Page({ session }) {
    let usero = session.oks

    return (
        <>
            <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
                <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
                    <svg className="w-8 h-8 text-indigo-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <input className="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring" type="search" placeholder="Search for anything…" />
                    <Dropdown usero={usero} />
                </div>
                <Tabs usero={usero} />
            </div>
        </>

    );
}