import { useParams, useSearchParams } from "react-router"

export default function UserDetail() {
    // params and query
    const params = useParams<{ username: string }>();

    const [query, setquery] = useSearchParams();

    return (

        <>
            User Details of {params.username}       //http://localhost:5173/admin/user/helloworld/detail

            <br></br>

            Quiry : Search:{query.get("search")}  ,  Page:{query.get("page")}                  //http://localhost:5173/admin/user/helloworld/detail/?search=youtube&page=78

        </>

    )
}