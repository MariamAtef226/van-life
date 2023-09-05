import { getHostVans } from "../../config";
import { useLoaderData, Link } from "react-router-dom";


export function loader() {
    let data = getHostVans(localStorage.getItem('userId'));
    return data;
}
export default function HostVans() {
    let vans = useLoaderData();
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