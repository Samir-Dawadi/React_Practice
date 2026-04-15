import { NavLink } from "react-router";
import type { IUserDetail } from "../../auth/Auth.contract";

export const AdminSidebar = ({ LoggedInUser }: Readonly<{ LoggedInUser: IUserDetail }>) => {
    return (
        <aside className="w-64">
            <div className="flex h-[95vh] flex-col justify-between border-e border-gray-100 bg-white">
                <div className="p-4">
                    <ul className="space-y-1">
                        {LoggedInUser && LoggedInUser.role === "admin" ? (
                            <li>
                                <NavLink
                                    to="/admin"
                                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                                    end
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        ) : (
                            <></>
                        )}

                        <li>
                            <NavLink
                                to="/admin/food-items"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Food Items
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/admin/menu"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Menu
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/admin/users"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Users
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/admin/orders"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Orders
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Inventory
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Invoices
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Offers
                            </a>
                        </li>

                        {/* <li>
              <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li> */}
                    </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
                    >
                        <img
                            alt=""
                            src={LoggedInUser?.image}
                            className="size-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-xs">
                                <strong className="block font-medium">{LoggedInUser?.firstName + " " + LoggedInUser?.lastName}</strong>

                                <span>{LoggedInUser?.email}</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </aside>
    );
}