import SingleProductGridItem from "../../components/products/SingleProductGridItem"
import { H1 } from "../../components/ui/typography/PageTitle"

export default function ProductDetail() {
    return (
        <>

            Poduct detail

            related products

            <section className=" max-w-7xl mx-auto flex flex-col gap-5">
                <H1>Product Lists</H1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                    <SingleProductGridItem />
                </div>
            </section>

        </>
    )
}