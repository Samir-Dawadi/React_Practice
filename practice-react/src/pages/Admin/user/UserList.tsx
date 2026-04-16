import { NavLink } from "react-router";
import { H2 } from "../../../components/ui/typography/PageTitle";
import { LuChevronLeft, LuChevronRight, LuPlus } from "react-icons/lu";
import ShowComponent from "../../../components/auth/AllowAccess";
import { RowSkeleton } from "../../../components/ui/table/Skeleton";

export default function UserList() {
    return (
        <section className="bg-white w-full p-5">
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



                        <RowSkeleton rows={5} cols={5} showAction={true}></RowSkeleton>
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
