import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidePanel from "../../components/auth/RightSidePanel";


export default function HomePage() {
    return (
        <section className="bg-gray-100 h-screen flex  p-5 gap-5">

            <LeftSidePanel />
            <RightSidePanel />
        </section>
    )
}