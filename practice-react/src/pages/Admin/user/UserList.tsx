import { NavLink } from "react-router";
import { H2 } from "../../../components/ui/typography/PageTitle";
import { LuChevronLeft, LuChevronRight, LuPen, LuPlus, LuTrash } from "react-icons/lu";
import ShowComponent from "../../../components/auth/AllowAccess";
import { RowSkeleton } from "../../../components/ui/table/Skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axiosInstance from "../../../config/ApiClient";
import type { IUserDetail } from "../../../components/auth/Auth.contract";
import ucFirst from "../../../lib/utilities/helpers";
import { Badge } from "../../../components/ui/badge/Badge";


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
    totalNoOFPages: number,
    currentPage?: number
}

export default function UserList() {


    {/* listing manage */ }
    const [keyword, setkyeword] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<Array<IUserDetail> | null>(null);
    const [pagination, setPagination] = useState<IPaginationType>({
        limit: 10,
        total: 0,
        skip: 0,
        totalNoOFPages: 1,
        currentPage: 1
    })

    // data fetch garni func
    const getAllUsers = async (limit = pagination.limit, skip = pagination.skip, page = 1) => {
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
                currentPage: page,
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

    const searchUsers = async (search = '') => {
        try {
            const response = await axiosInstance.get('/users/search', {
                params: {
                    q: search
                }
            }) as IUserListResponse
            // console.log(response)
            setUsers(response.users)
            setPagination({
                currentPage: 1,
                limit: +response.limit,
                skip: +response.limit,
                total: +response.total,
                totalNoOFPages: Math.ceil(+response.total / pagination.limit)
            })

        } catch {
            toast.error("Error while fetching user list")
        }
        finally {
            setLoading(false)                   //helps to show the list of user in the table , without this the skeleton will only load in the user list table
        }
    }

    const handleNextPageChange = async (page = 1) => {
        const skip = (page - 1) * (pagination.limit)         //for 1 -> (1-1)*(10) //for 2 -> 2-1 * 10
        setLoading(true)
        setPagination({
            ...pagination,
        })
        await getAllUsers(pagination.limit, skip, page)

    }

    useEffect(() => {
        //debounce
        const timeout = setTimeout(() => {
            if (keyword !== undefined) {
                searchUsers(keyword);
            }
        }, 500)

        return () => clearTimeout(timeout)
    }, [keyword])


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
                        onChange={(e) => {
                            setkyeword(e.target.value)
                        }}
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
                                                    <Badge type={users.role === "admin" ? "success" :
                                                        users.role === "moderator" ? "warning" :
                                                            users.role === "user" ? "info" : "warning"
                                                    }>
                                                        {ucFirst(users.role)}
                                                    </Badge>
                                                </td>
                                                <td className="p-2 border-r border-gray-500 border-b">
                                                    {ucFirst(users.gender)}
                                                </td>
                                                <td className="p-2 border-r border-gray-500 border-b">
                                                    <div className="flex gap-3 items-center justify-center">
                                                        <NavLink className={"size-7 flex justify-center items-center text-white bg-green-700 hover:scale-110 hover:bg-green-900 rounded-full "} to={"/admin/user/xyz"}>
                                                            <LuPen />
                                                        </NavLink>
                                                        <NavLink className={"size-7 flex justify-center items-center text-white bg-red-700 hover:scale-110 hover:bg-red-900 rounded-full"} to={"/admin/user/xyz"}>
                                                            <LuTrash />
                                                        </NavLink>
                                                    </div>
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

                    {
                        [...Array(pagination.totalNoOFPages)].map((_, i: number) => (         //page number dekhauna lagako loop ..
                            <li className={`size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 items-center justify-center flex rounded-full shadow  
                                ${(i + 1) === pagination.currentPage ? "bg-teal-100" : "bg-gray-100"}`}
                                onClick={() => {
                                    handleNextPageChange(i + 1)
                                }}
                            >
                                {i + 1}
                            </li>
                        ))
                    }

                    <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 bg-gray-100 items-center justify-center flex rounded-full shadow">
                        <LuChevronRight />
                    </li>
                </ul>
            </div>
        </section>
    );
}
