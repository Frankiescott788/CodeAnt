import {ReactElement, useState} from "react";
import {Card, CardBody, CardHeader, Divider, Image} from "@nextui-org/react";
import Logo from "../assets/Group 37110 (1).png"
import {ArrowUp, Graph} from "iconsax-react";
import Substract from "../assets/Subtract.png"
import Github from "../assets/github-light.svg";
import Bitbucket from "../assets/bitbucket.svg";
import Azure from "../assets/azure.svg";
import Gitlab from "../assets/gitlab.svg";
import {useNavigate} from "react-router-dom";

export default function Signup(): ReactElement {

    const [type, setType] = useState("saas");
    const navigate = useNavigate();


    return (
        <section>
            <div>
                <div className={"grid grid-cols-12"}>
                    <div className={"hidden lg:block col-span-6"}>
                        <div className={"flex justify-center items-center mt-[10rem]"}>
                            <Card className={"w-[25rem]"}>
                                <CardHeader>
                                    <div className={"flex gap-1"}>
                                        <div>
                                            <Image src={Logo}/>
                                        </div>
                                        <div className={"pt-1 font-semibold"}>
                                            <p>AI to Detect & Autofix Bad Code</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <div className={"flex justify-between py-3"}>
                                        <div className={"text-center"}>
                                            <p className={"font-semibold"}>30+</p>
                                            <p className={"text-tiny"}>Language support</p>
                                        </div>
                                        <div className={"text-center"}>
                                            <p className={"font-semibold"}>10K+</p>
                                            <p className={"text-tiny"}>Developers</p>
                                        </div>
                                        <div className={"text-center"}>
                                            <p className={"font-semibold"}>100K+</p>
                                            <p className={"text-tiny"}>Hours Saved</p>
                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                            <Card className={"w-[13rem] absolute mt-[15rem] ms-[18rem]"}>
                                <CardBody>
                                    <div>
                                        <div>
                                            <div className={"flex justify-between"}>
                                                <div className={"bg-[#9D90FA40] p-1 rounded-full"}>
                                                    <Graph size="32" color="#9D90FA" variant="Bold"/>
                                                </div>
                                                <div className={"mt-1"}>
                                                    <div className={"flex gap-2"}>
                                                        <div>
                                                            <ArrowUp size={"15"} color={"#0049C6"}/>
                                                        </div>
                                                        <p className={"text-tiny font-bold text-[#0049C6]"}>14 %</p>
                                                    </div>
                                                    <p className={"text-tiny text-center font-bold"}>This week</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Issues fixed</p>
                                                <p className={"text-3xl font-semibold"}>500K+</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className={"absolute bottom-0 left-0"}>
                                <Image src={Substract}/>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6 bg-[#FAFAFA] h-screen"}>
                        <div>
                            <Card className={" mx-[1rem] lg:mx-[2rem] mt-[5rem] py-4"} shadow={"sm"} radius={"sm"}>
                                <div>
                                    <div className={"flex justify-center"}>
                                        <div className="flex gap-1 mx-3 py-3">
                                            <Image src={Logo} className="w-[2rem] object-cover"/>
                                            <p className="text-2xl mt-1 ">CodeAnt AI</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className={"text-center text-2xl font-semibold"}>Welcome to CodeAnt AI</p>
                                    <div
                                        className={"flex justify-center text-sm px-2 lg:px-0 my-5  lg:mx-[131px] rounded-lg"}>
                                        <div className={`px-[4rem] py-2 lg:px-[5rem] lg:py-2  ${type === "saas" ? "bg-blue-500" : "bg-[#FAFAFA]"} rounded-md cursor-pointer`} onClick={() => setType("saas")}>
                                            <p className={`text-center ${type === "saas" ? "text-white" : "text-black"} "`}>SAAS</p>
                                        </div>
                                        <div className={`px-[4rem] py-2 lg:px-[5rem] lg:py-2  ${type === "saas" ? "bg-[#FAFAFA]" : "bg-blue-500"} rounded-md cursor-pointer`} onClick={() => setType("selfhost")}>
                                            <p  className={`text-center ${type !== "saas" ? "text-white" : "text-black"} "`}>Self Hosted</p>
                                        </div>
                                    </div>
                                </div>
                                <Divider className={"mb-4"}/>
                                {type === "saas" && (

                                    <div className={"lg:flex justify-center pb-5 px-2  lg:px-3"}>
                                        <div className={"flex flex-col gap-2"}>
                                            <div
                                                className={"flex justify-center gap-2 border-2 px-3 lg:px-[7rem] py-3 lg:py-2 rounded-lg "}
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                <Image src={Github} className={"h-8 w-8"}/>
                                                <p className={"mt-1"}>Sign in with Github</p>
                                            </div>
                                            <div
                                                className={"flex justify-center gap-2 border-2 px-3 lg:px-[7rem] py-3 lg:py-2 rounded-lg  "}
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                <Image src={Bitbucket} className={"h-8 w-8"}/>
                                                <p className={"mt-1"}>Sign in with Bitbucket</p>
                                            </div>
                                            <div
                                                className={"flex justify-center gap-2 border-2 px-3 lg:px-[7rem] py-3 lg:py-2 rounded-lg  "}
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                <Image src={Azure} className={"h-8 w-8"}/>
                                                <p className={"mt-1"}>Sign in with Azure Devops</p>
                                            </div>
                                            <div
                                                className={"flex justify-center gap-2 border-2 px-3 lg:px-[7rem] py-3 lg:py-2 rounded-lg  "}
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                <Image src={Gitlab} className={"h-8 w-8"}/>
                                                <p className={"mt-1"}>Sign in with GitLab</p>
                                            </div>
                                        </div>
                                    </div>

                                )}
                                {type !== "saas" && (
                                    <div className={"lg:flex justify-center pb-5 px-2  lg:px-3"}>
                                        <div className={"flex flex-col gap-2"}>

                                            <div
                                                className={"flex justify-center gap-2 border-2 px-3 lg:px-[7rem] py-3 lg:py-2 rounded-lg  "}
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                <Image src={Gitlab} className={"h-8 w-8"}/>
                                                <p className={"mt-1"}>Sign in with GitLab</p>
                                            </div>
                                            <div
                                                className={"flex justify-center gap-2 border-2 px-3 lg:px-[7rem] py-3 lg:py-2 rounded-lg  "}
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                                                     height={24} color={"#000000"} fill={"none"}
                                                    className={"mt-1"}
                                                >
                                                    <path
                                                        d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                    <path d="M17.5 6.5L16.5 7.5" stroke="currentColor" strokeWidth="1.5"
                                                          strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                <p className={"mt-1"}>Sign in with SSO</p>
                                            </div>
                                        </div>
                                    </div>

                                )}

                            </Card>
                            <p className={"text-center py-5"}>By signing up you agree to the <span
                                className={"font-semibold"}>Privacy Policy</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}