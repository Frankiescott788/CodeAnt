import {Button, Divider, Input, Chip} from "@nextui-org/react";
import {Add, Refresh} from "iconsax-react";

export default function MainContent () {
    return (
        <main className="lg:ms-[19dvw] lg:me-[1rem] absolute left-0 right-0 border-1 lg:border-gray-200">
            <div className="bg-white lg:mt-[1rem]  lg:rounded-lg py-4">
                <div className="lg:flex justify-between px-4 lg:px-4">
                    <div>
                        <p className="text-2xl">Repositories</p>
                        <p className="text-sm">33 total repositories</p>
                    </div>
                    <div className="flex gap-3 pt-3">
                        <Button className="flex" variant="bordered">
                            <div>
                                <Refresh/>
                            </div>
                            <p>Refresh All</p>
                        </Button>
                        <Button className="flex bg-[#1570EF] text-white">
                            <div>
                                <Add size="28" color="white"/>
                            </div>
                            <p className="text-md">Repository</p>
                        </Button>
                    </div>

                </div>
                <div className={"my-3 px-4 lg:px-4"}>
                    <Input placeholder="Search Repositories" startContent={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}
                             color={"#000000"} fill={"none"}>
                            <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                    }
                           className={"lg:w-[20rem]"}
                           variant={"bordered"}
                    />
                </div>
                <Divider/>
                <div className={"p-4"}>
                    <div className={"flex gap-2"}>
                        <p className={"text-lg"}>design-system</p>
                        <Chip content={"Public"} color={"primary"} variant="flat" size={"sm"}
                              className={"mt-1"}>Public</Chip>
                    </div>
                    <div className={"flex gap-7 pt-3"}>
                        <div className={"flex gap-2"}>
                            <p>React</p>
                            <div className={"h-2 w-2 bg-blue-500 rounded-full mt-[10px]"}></div>
                        </div>
                        <div className={"flex gap-1"}>
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={17}
                                     color={"#000000"} fill={"none"}>
                                    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M8 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>

                            </div>
                            <p>7320 KB</p>
                        </div>
                        <p>Updated 1 Day ago</p>
                    </div>
                </div>
                <Divider/>
                <div className={"p-4"}>
                    <div className={"flex gap-2"}>
                        <p className={"text-lg"}>design-system</p>
                        <Chip content={"Public"} color={"primary"} variant="flat" size={"sm"}
                              className={"mt-1"}>Public</Chip>
                    </div>
                    <div className={"flex gap-7 pt-3"}>
                        <div className={"flex gap-2"}>
                            <p>React</p>
                            <div className={"h-2 w-2 bg-blue-500 rounded-full mt-[10px]"}></div>
                        </div>
                        <div className={"flex gap-1"}>
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={17}
                                     color={"#000000"} fill={"none"}>
                                    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M8 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>

                            </div>
                            <p>7320 KB</p>
                        </div>
                        <p>Updated 1 Day ago</p>
                    </div>
                </div>
                <Divider/>
                <div className={"p-4"}>
                    <div className={"flex gap-2"}>
                        <p className={"text-lg"}>design-system</p>
                        <Chip content={"Public"} color={"primary"} variant="flat" size={"sm"}
                              className={"mt-1"}>Public</Chip>
                    </div>
                    <div className={"flex gap-7 pt-3"}>
                        <div className={"flex gap-2"}>
                            <p>React</p>
                            <div className={"h-2 w-2 bg-blue-500 rounded-full mt-[10px]"}></div>
                        </div>
                        <div className={"flex gap-1"}>
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={17}
                                     color={"#000000"} fill={"none"}>
                                    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M8 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>

                            </div>
                            <p>7320 KB</p>
                        </div>
                        <p>Updated 1 Day ago</p>
                    </div>
                </div>
                <Divider/>
                <div className={"p-4"}>
                    <div className={"flex gap-2"}>
                        <p className={"text-lg"}>design-system</p>
                        <Chip content={"Public"} color={"primary"} variant="flat" size={"sm"}
                              className={"mt-1"}>Public</Chip>
                    </div>
                    <div className={"flex gap-7 pt-3"}>
                        <div className={"flex gap-2"}>
                            <p>React</p>
                            <div className={"h-2 w-2 bg-blue-500 rounded-full mt-[10px]"}></div>
                        </div>
                        <div className={"flex gap-1"}>
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={17}
                                     color={"#000000"} fill={"none"}>
                                    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M8 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>

                            </div>
                            <p>7320 KB</p>
                        </div>
                        <p>Updated 1 Day ago</p>
                    </div>
                </div>
                <Divider/>
                <div className={"p-4"}>
                    <div className={"flex gap-2"}>
                        <p className={"text-lg"}>design-system</p>
                        <Chip content={"Public"} color={"primary"} variant="flat" size={"sm"}
                              className={"mt-1"}>Public</Chip>
                    </div>
                    <div className={"flex gap-7 pt-3"}>
                        <div className={"flex gap-2"}>
                            <p>React</p>
                            <div className={"h-2 w-2 bg-blue-500 rounded-full mt-[10px]"}></div>
                        </div>
                        <div className={"flex gap-1"}>
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={17}
                                     color={"#000000"} fill={"none"}>
                                    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M8 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>

                            </div>
                            <p>7320 KB</p>
                        </div>
                        <p>Updated 1 Day ago</p>
                    </div>
                </div>
                <Divider/>
                <div className={"p-4"}>
                    <div className={"flex gap-2"}>
                        <p className={"text-lg"}>design-system</p>
                        <Chip content={"Public"} color={"primary"} variant="flat" size={"sm"}
                              className={"mt-1"}>Private</Chip>
                    </div>
                    <div className={"flex gap-7 pt-3"}>
                        <div className={"flex gap-2"}>
                            <p>React</p>
                            <div className={"h-2 w-2 bg-blue-500 rounded-full mt-[10px]"}></div>
                        </div>
                        <div className={"flex gap-1"}>
                            <div className="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={17}
                                     color={"#000000"} fill={"none"}>
                                    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
                                          stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M8 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>

                            </div>
                            <p>7320 KB</p>
                        </div>
                        <p>Updated 1 Day ago</p>
                    </div>
                </div>
            </div>
        </main>
    )
}