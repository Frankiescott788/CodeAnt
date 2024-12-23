import {Image} from "@nextui-org/react";
import {ArrowDown2, Book, Call, Cloud, HambergerMenu, Home2, Setting2} from "iconsax-react";
import Logo from "../../assets/Group 37110 (1).png"
import Logouticon from "../../assets/Frame 10.svg"
import MainContent from "./mainContext.tsx";

export default function Dashboard() {
    return (
        <div className="bg-[#E9EAEB] h-screen">
            <aside className=" hidden lg:block fixed bottom-0 left-0 top-0 border-e w-[17rem] bg-white">
                <div className="px-2">
                    <div className="flex gap-1 mx-3 py-3">
                        <Image src={Logo} className="w-[2rem] object-cover"/>
                        <p className="text-2xl mt-1 ">CodeAnt AI</p>
                    </div>
                    <div className="flex">
                        <div className="flex justify-between w-[18rem] border p-2 mx-3 rounded-lg">
                            <p>UtkarshDhairPa...</p>
                            <div>
                                <ArrowDown2 size="24" color="black"/>
                            </div>
                        </div>
                    </div>
                    <ul className="px-3 flex flex-col gap-2 py-3">
                        <li className="flex gap-3 bg-[#1570EF] p-2 rounded-md">
                            <div>
                                <Home2 size="24" color="white"/>
                            </div>
                            <div>
                                <p className="text-white">Repositories</p>
                            </div>
                        </li>
                        <li className="flex gap-3 p-2 rounded-md">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}
                                     color={"#000000"} fill={"none"}>
                                    <path
                                        d="M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M14.5 4L9.5 20" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <p className="">AI Code Review</p>
                            </div>
                        </li>
                        <li className="flex gap-3 p-2 rounded-md">
                            <div>
                                <Cloud/>
                            </div>
                            <div>
                                <p className="">Cloud Security</p>
                            </div>
                        </li>
                        <li className="flex gap-3 p-2 rounded-md">
                            <div>
                                <Book/>
                            </div>
                            <div>
                                <p className="">How to</p>
                            </div>
                        </li>
                        <li className="flex gap-3 p-2 rounded-md">
                            <div>
                                <Setting2 />
                            </div>
                            <div>
                                <p className="">Settings</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="absolute bottom-0 px-3 flex flex-col gap-2 py-4">
                        <li className="flex gap-3 p-2">
                            <div>
                                <Call/>
                            </div>
                            <div>
                                <p>Support</p>
                            </div>
                        </li>
                        <li className="flex gap-3 p-2">
                            <div>
                                <Image src={Logouticon}/>
                            </div>
                            <div>
                                <p>Log out</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>

            <nav className={"bg-white lg:hidden block"}>
                <div className={"flex justify-between px-2"}>
                    <div className="flex gap-1 mx-3 py-3">
                        <Image src={Logo} className="w-[2rem] object-cover"/>
                        <p className="text-2xl mt-1 ">CodeAnt AI</p>
                    </div>
                    <div className={"pt-3"}>
                        <HambergerMenu size="40" color="black"/>
                    </div>
                </div>
            </nav>
            <MainContent/>
        </div>
    )
}