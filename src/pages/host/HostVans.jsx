import { getHostVans } from "../../config";
import { useLoaderData, Link, Await, defer } from "react-router-dom";
import {Suspense} from 'react'


export function loader() {
    return defer({vans:getHostVans(localStorage.getItem('userId'))});
}
export default function HostVans() {
    let vans = useLoaderData();

    function rendering(vans){
        let vansArray = vans.map((v) => {
            return (
                <Link
                    key={v.id}
                    className="myVan d-flex col-md-4 align-items-center"
                    to={v.id}
                >
                    <div className="img-container">
                        <img src={v.imageUrl} />
                    </div>
                    <div className="data fw-bold">
                        <div className="name">{v.name}</div>
                        <div className="price">${v.price}/day</div>
                    </div>
                </Link>
            );
        });
        return (
            <>
                <h1 className="p-3">Your Listed Vans</h1>
                <div className=" row justify-content-left justify-content-md-center w-100">{vansArray}</div>
            </>
        )

    }

    return (
        <Suspense fallback={<h1>Loading Vans List...</h1>}>
            <Await resolve={vans.vans}>
                {rendering}
            </Await>
        </Suspense>
    )

}