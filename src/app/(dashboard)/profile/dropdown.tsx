"use client"
import { useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function Dropdown({ usero }) {
    const router = useRouter()

    useEffect(() => {
        const button: any = document.getElementById('menu-button');
        const dropdown: any = document.getElementById('menu-dropdown');

        document.addEventListener('click', (event) => {
            if (!button.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });
    }, [])

    const handlelogout = async () => {
        let data = await fetch('http://localhost:3000/api/logout')
        let res = await data.json()
        // console.log(res)
        if (res.message === "ok") {
            router.push("/login-by-akaar-admin576")
        }
    }

    return (
        <>
            <div className="flex items-center justify-left w-40 h-8 ml-auto" >
                <h1><b>{usero.username}</b></h1>
                <button className=" overflow-hidden rounded-full cursor-pointer h-8 w-8 ml-auto" id="menu-button" onClick={() => {
                    const dropdown: any = document.getElementById('menu-dropdown');

                    dropdown.classList.toggle('hidden');

                }}>
                    <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt="" />
                </button>
            </div>
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" id="menu-dropdown" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" id="menu-item-0">Edit</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" id="menu-item-1">Duplicate</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" id="menu-item-2">Archive</a>
                    <button onClick={handlelogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}