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

export default function AdminTheme() {
    const isDarkmode = useSelector((state) => state.isDarkmode)
    console.log(isDarkmode);
    return (
        <div>
            <Navbar />
            <div className={`${isDarkmode ? 'dark' : ''} `}>
                <div className="grid dark:bg-mine bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
                    <AdminSideBar selected="dashboard" />
                    <div className="flex flex-col">
                        <main className="flex flex-col gap-4 p-2 md:gap-8 md:p-6">
                            <div className="flex gap-2 lg:flex-row sm:flex-col flex-col w-full p-[1.5rem]  dark:bg-mine bg-gray-100   ">
                                <div className=" rounded-xl m-2  lg:w-[calc(63%-4px)] sm:w-full h-[596px] dark:bg-m2 bg-gray-200 p-6">

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




                                </div>

                                <div className="lg:w-full m-2 sm:w-full sm: h-[596px] h-[506px]  bg-gray-200 dark:bg-m2 relative border-solid rounded-xl ">
                                    <div className="sm:flex-row flex-col ml-[30px] ">


                                        <div className="relative overflow-x-auto">
                                            <h1 className="dark:text-gray-400 font-bold text-2xl text-center">Themes</h1>
                                            <br></br>
                                            <table className="w-[96%] text-sm text-left rtl:text-right text-gray-500 dark:text-purple-400">
                                                <thead className="texxt-xs text-gray-900 uppercase dark:text-gray-400 ">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Name
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Food
                                                        </th>

                                                        <th scope="col" className="px-6 py-3">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-gray-100 hover:dark:bg-purple-900 dark:bg-gray-800">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Halloween Theme
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            North Indian
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $2999
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-gray-100 dark:bg-gray-800  hover:dark:bg-purple-900">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Dino Theme
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            South Indian
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $1999
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-gray-100 dark:bg-gray-800  hover:dark:bg-purple-900">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Magic Mouse 2
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Black
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $99
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-gray-100 dark:bg-gray-800  hover:dark:bg-purple-900">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Magic Mouse 2
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Black
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $99
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Magic Mouse 2
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Black
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $99
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Magic Mouse 2
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Black
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $99
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Magic Mouse 2
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Black
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $99
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Magic Mouse 2
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            Black
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            $99
                                                        </td>
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
