import { LuCircleUserRound } from "react-icons/lu";
import Logo from "../../components/Logo/logo";
import { Outlet } from "react-router";
import { AdminSidebar } from "../../components/ui/sidebar/AdminSidebar";
import { useAuth } from "../../lib/hooks/useAuth";

export default function AdminLayout() {
    // const LoggedInUser = {
    //     name: "Samir Dawadi",
    //     role: "admin"
    // }

    const { authUser } = useAuth();

    return (
        <>
            <section className="w-full bg-gray-100 h-screen">
                <header className="bg-gray-300 p-5 w-full shadow flex justify-between ">
                    <div className="flex items-center gap-2">
                        <Logo className="size-10" />
                        <h2 className="text-2xl font-bold text-emerald-900 text-shadow-lg">Admin Portal</h2>
                    </div>
                    <div>
                        <div className="flex items-center text-emerald-900 text-shadow-lg gap-2">
                            <LuCircleUserRound className="size-7" />
                            <span className="text-bold ">{authUser?.firstName} {authUser?.lastName}</span>

                            <div className="relative inline-flex">
                                <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                                    <button type="button" className=" hidden px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative">
                                        Product
                                    </button>

                                    <button type="button" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative" aria-label="Menu">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                                        </svg>
                                    </button>
                                </span>

                                <div role="menu" className=" hidden absolute inset-end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900" role="menuitem">
                                        Storefront
                                    </a>

                                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900" role="menuitem">
                                        Warehouse
                                    </a>

                                    <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900" role="menuitem">
                                        Stock
                                    </a>

                                    <button type="button" className="block w-full px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 ltr:text-left rtl:text-right">
                                        Delete
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>

                </header>
                <main className="w-full flex gap-5">

                    {/* {
                        (LoggedInUser.role === "admin") ? <AdminSidebar /> : <></>
                    } */}

                    <AdminSidebar LoggedInUser={authUser} />

                    <section className="w-full bg-gray-200 p-3 mt-3 rounded-md">
                        <Outlet />
                    </section>
                </main>

            </section>
        </>
    )
}