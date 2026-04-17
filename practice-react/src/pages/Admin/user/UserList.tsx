import { NavLink } from "react-router";
import { H2 } from "../../../components/ui/typography/PageTitle";
import { LuChevronLeft, LuChevronRight, LuPen, LuPlus } from "react-icons/lu";
import ShowComponent from "../../../components/auth/AllowAccess";
import { RowSkeleton } from "../../../components/ui/table/Skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axiosInstance from "../../../config/ApiClient";
import type { IUserDetail } from "../../../components/auth/Auth.contract";
import ucFirst from "../../../lib/utilities/helpers";


export interface IUserListResponse {
    limit: number,
    skip: number,
    total: number,
    users: Array<IUserDetail>
}

export interface IPaginationType {
    limit: number,
    total: number,
    skip: number,
    totalNoOFPages: number
}

export default function UserList() {


    {/* listing manage */ }
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<Array<IUserDetail> | null>(null);
    const [pagination, setPagination] = useState<IPaginationType>({
        limit: 5,
        total: 0,
        skip: 0,
        totalNoOFPages: 1
    })

    // data fetch garni func
    const getAllUsers = async (limit = pagination.limit, skip = pagination.skip) => {
        try {
            const response = await axiosInstance.get('/users', {    //config -> {} vitra parameter pathauni in params obj 
                params: {
                    // limit: 5,        //5 wota user ko data dinxa
                    // skip: 10          //agadi ko 10 wota user ko data skip garera paxiko 5 wota user detail dinxa
                    limit: limit,
                    skip: skip,
                    select: "id,firstName,lastName,email,role,status,gender,address,image"
                }
            }) as IUserListResponse
            // console.log(response)
            setUsers(response.users)
            setPagination({
                limit: +response.limit,
                skip: +response.limit,
                total: +response.total,
                totalNoOFPages: Math.ceil(+response.total / pagination.limit)
            })

        } catch (exception) {
            console.log(exception)
            toast.error("Error while fetching user list")
        }
        finally {
            setLoading(false)                   //helps to show the list of user in the table , without this the skeleton will only load in the user list table
        }
    }


    useEffect(() => {
        getAllUsers()               //component render vayesi matra call garni
    }, [])
    return (
        <section className="bg-white w-full p-5">
            {/*page header */}
            <div className="flex w-full justify-between items-center border-b border-b-emerald-800/10 pb-5">
                <H2>User List</H2>
                <div className="w-1/3 flex gap-3">
                    <input
                        type="search"
                        className="w-full border border-gray-200 p-2 rounded shadow-lg bg-gray-50"
                        placeholder="Enter your search keyword..."
                    />
                    <ShowComponent role={'admin'}>           //only admin role can see and use the add user buttoon
                        <NavLink
                            to="/admin/user/create"
                            className={
                                "w-50 bg-emerald-900 p-2 text-white text-center rounded-md transition duration-500 hover:scale-96 flex items-center justify-center gap-2 font-semibold"
                            }
                        >
                            <LuPlus className="size-5" /> Add users
                        </NavLink>
                    </ShowComponent>
                </div>
            </div>
            {/* data listing */}
            <div className="w-full mt-5">
                <table className="w-full">
                    <thead className="bg-gray-900">
                        <tr>
                            <th className="p-2 text-white border-r border-gray-100">
                                Full Name
                            </th>
                            <th className="p-2 text-white border-r border-gray-100">Email</th>
                            <th className="p-2 text-white border-r border-gray-100">Role</th>
                            <th className="p-2 text-white border-r border-gray-100">
                                Status
                            </th>
                            <th className="p-2 text-white border-r border-gray-100">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            loading ? (<RowSkeleton rows={5} cols={5} showAction={true}></RowSkeleton>) :      //if loading is true i.e by default xa so teti bela rowskeleton will be seen in table , and after all the user detail is fetched and at finally block the loading is set false by the setLoading which means that the skeleton will be removed and the data will be provided in the table as loading ? skeletton : data haru

                                (
                                    users && users.map((users: IUserDetail, i: number) => {
                                        return (
                                            <tr key={i}>
                                                <td className="p-2 border-r border-gray-500 border">
                                                    <div className="flex items-center gap-2">
                                                        <img src={users.image} className="size-4" />
                                                        {`${users.firstName} ${users.lastName}`}
                                                    </div>
                                                </td>
                                                <td className="p-2 border-r border-gray-500 border-b">
                                                    <a href={`mailto:${users.email}`} className="text-teal-600 underline">
                                                        {users.email}
                                                    </a>
                                                </td>
                                                <td className="p-2 border-r border-gray-500 border-b">
                                                    {ucFirst(users.role)}
                                                </td>
                                                <td className="p-2 border-r border-gray-500 border-b">
                                                    {ucFirst(users.gender)}
                                                </td>
                                                <td className="p-2 border-r border-gray-500 border-b">
                                                    <NavLink className={""} to={"/admin/user/xyz"}>
                                                        <LuPen />
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )
                        }
                        {/* <tr>
                        </tr>
                        <tr>
                            <td className="p-2 border-r border-gray-500 border">User Name</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                user@user.com
                            </td>
                            <td className="p-2 border-r border-gray-500 border-b">Admin</td>
                            <td className="p-2 border-r border-gray-500 border-b">Active</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                <NavLink className={""} to={"/admin/user/xyz"}>
                                    <LuPen />
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 border-r border-gray-500 border">User Name</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                user@user.com
                            </td>
                            <td className="p-2 border-r border-gray-500 border-b">Admin</td>
                            <td className="p-2 border-r border-gray-500 border-b">Active</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                Edit / Delete
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 border-r border-gray-500 border">User Name</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                user@user.com
                            </td>
                            <td className="p-2 border-r border-gray-500 border-b">Admin</td>
                            <td className="p-2 border-r border-gray-500 border-b">Active</td>
                            <td className="p-2 border-r border-gray-500 border-b">
                                Edit / Delete
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

            {/* pagination  */}
            <div className="flex w-full mt-5 justify-end">
                <ul className="flex gap-2">
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 bg-gray-100 items-center justify-center flex rounded-full shadow">
                        <LuChevronLeft />
                    </li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 items-center justify-center flex rounded-full shadow bg-teal-100">
                        1
                    </li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 bg-gray-100 items-center justify-center flex rounded-full shadow">
                        <span>2</span>
                    </li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 bg-gray-100 items-center justify-center flex rounded-full shadow">
                        <span>3</span>
                    </li>
                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 bg-gray-100 items-center justify-center flex rounded-full shadow">
                        <LuChevronRight />
                    </li>
                </ul>
            </div>
        </section>
    );
}
