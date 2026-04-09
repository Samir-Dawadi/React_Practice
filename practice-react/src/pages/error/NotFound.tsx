export default function NotFound() {
    return (
        <div className="h-screen bg-blue-300 flex flex-col gap-7 items-center justify-center">
            <h1 className="text-4xl animate-bounce">404 !</h1>
            <h2 className="text-3xl">Opps ! Page Not Found</h2>
            <a href="/" className=" text-bold text-xl border bg-green-200 px-4 p-y-2 rounded-md hover:bg-green-300 hover:underline">Home</a>
        </div>
    )
}