import { useState } from "react";
// import NotFoundPage from "../NotFound";

import { Card } from "../../Components/card";
import { Button } from "../../Components/button";
import { Label } from "../../Components/label";
import { Input } from "../../Components/input";
import { Textarea } from "../../Components/textarea";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";

import { useSelector } from 'react-redux';
import AdminSideBar from "../../Components/AdminSidebar";

export default function AdminEvents() {
    const isDarkmode = useSelector((state) => state.isDarkmode)
    console.log(isDarkmode);
    return (
        <div>
            <Navbar />
            <div className={`${isDarkmode ? 'dark' : ''} `}>
                <div className="grid dark:bg-mine bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
                    <AdminSideBar selected="dashboard" />
                    <div className="flex flex-col">
                        <main className="flex flex-col gap-4 md:gap-8 md:p-6">
                            <div className="flex gap-2 lg:flex-row sm:flex-col flex-col w-full p-[1.5rem]  dark:bg-mine bg-gray-100   ">
                                {/* <div className=" rounded-xl m-2  lg:w-[calc(63%-4px)] sm:w-full h-[596px] dark:bg-m2 bg-gray-200 p-6">

                                <Card className=" dark:bg-gray-800 bg-gray-50 shadow-md">
                                    <h1 className="text-3xl text-center font-semibold py-4  dark:text-white">Add Theme</h1>
                                    <form className="grid gap-4 p-6 dark:text-white">
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Theme Name</Label>
                                            <Input id="title" placeholder="Title" className="input bg-gray-50 focus:bg-gray-100 dark:text-black" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Theme Description</Label>
                                            <Textarea id="description" placeholder="Describe the theme here..." className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="file">Theme Cost</Label>
                                            <Input id="cost" type="number" placeholder="₹500" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" defaultValue={500} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="file">Theme Image</Label>
                                            <Input id="file" type="file" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                        </div>
                                        <Button className="btn btn-success btn-outline bg-gray-50  dark:text-black" type="submit">Submit</Button>
                                    </form>
                                </Card>




                            </div> */}

                                <div className="lg:w-full m-2 sm:w-full sm: h-[596px] h-[506px]  bg-gray-50 dark:bg-m2 relative border-solid rounded-xl ">
                                    <div className="sm:flex-row flex-col ml-[30px] ">


                                        <div className="relative overflow-x-auto">
                                            <h1 className="dark:text-gray-400 font-bold text-2xl text-center">All events</h1>
                                            <br></br>
                                            <table className="w-full caption-bottom text-sm">
                                                <thead className="[&amp;_tr]:border-b">
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted dark:text-white">
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Event Name
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Theme
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Date
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Number of Guests Attended
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="[&amp;_tr:last-child]:border-0 dark:text-gray-300">
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">John's Birthday Party</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Superheroes</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">October 15, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">25</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$150.00</td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Sarah's Sweet 16</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Princesses</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">June 5, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">50</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$250.00</td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Mike's Sports Bash</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Sports</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">August 20, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">75</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$350.00</td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Ava's Dance Celebration</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Dance Party</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">April 10, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">40</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$200.00</td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Noah's Adventure Quest</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Adventure</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">July 25, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">30</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$180.00</td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Noah's Adventure Quest</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Adventure</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">July 25, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">30</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$180.00</td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Sarah's Sweet 16</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Princesses</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">June 5, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">50</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$250.00</td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">Mike's Sports Bash</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Sports</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">August 20, 2022</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">75</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">$350.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
