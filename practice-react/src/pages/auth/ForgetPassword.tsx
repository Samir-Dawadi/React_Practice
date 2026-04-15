// import Logo from "../../components/Logo/logo";

// export default function ForgetPassword() {
//     return (
//         <>
//             <section className="h-screen flex gap-7 bg-gray-200 rounded-xl ">

//                 <div className=" mt-5  w-1/3 flex-1 flex items-center flex-col gap-5 p-5 justify-center bg-emerald-200">
//                     <h1>Forget Page</h1>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     </p>
//                 </div>

//                 <div className="mt-5 w-1/3 flex-2 bg-black-900 flex flex-col gap-30 roundex-xl">

//                     <h1 className="text-green-800 text-5xl text-semibold italic shadow-2xl bg-white-600">Reset Password</h1>

//                     <form className="flex flex-col gap-10 ">

//                         <div className="flex w-full">
//                             <div className="w-1/3">
//                                 <label htmlFor="username">UserName:</label>
//                             </div>
//                             <div className="w-2/3 border">
//                                 <input type="email" name="username" id="username" className="w-full" />
//                             </div>
//                         </div>

//                         <div className="flex w-full ">
//                             <div className="w-1/3 ">
//                                 <label htmlFor="password">Password:</label>

//                             </div>

//                             <div className="w-2/3 border">
//                                 <input type="text" name="password" id="password" className="w-full" />

//                             </div>

//                         </div>
//                         <div className="w-full flex gap-2">
//                             <button className="w-[50%] bg-red-300 hover:bg-red-600">
//                                 Reset
//                             </button>

//                             <button className="w-[50%] bg-blue-300 hover:bg-blue-600">
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//             </section>
//         </>
//     )
// }




// import Logoo from "../../assests/image/logo.png";
import { useNavigate } from "react-router";
import ForgetPasswordForm from "../../components/auth/ForgetPasswordForm"
import Logo from "../../components/Logo/logo"
import { H1 } from "../../components/ui/typography/PageTitle"
import { useAuth } from "../../lib/hooks/useAuth";
import { useEffect } from "react";
// import LoginForm from "../../components/auth/LoginForm"


export default function ForgetPassword() {

    const { authUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (authUser && authUser.role) {
            navigate('/' + authUser.role)                     //after / the url will be added based on role of user here the role is admin so if we try to change the url then we only get redirected to the admin page , we cannot redirect to other page
        }
    }, [authUser])


    return (
        <>


            <ForgetPasswordForm />

            <div className="flex w-full justify-center">
                <a
                    href="/"
                    className=" w-full text-center text-xl text-bold border  bg-green-200/50 hover:bg-green-300 rounded-xl px-6 py-2 mt-20 text-teal-700 hover:underline hover:text-teal-600 transition hover:scale-96"
                >
                    Login Page
                </a>
            </div>
        </>
    )
}