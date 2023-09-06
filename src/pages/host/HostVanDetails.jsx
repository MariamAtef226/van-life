import { getHostVansDetails } from "../../config";


import {
    Link,
    useLoaderData,
    defer,
    Await
} from "react-router-dom";

import {Suspense} from 'react';



export function loader({ params }) {
    return defer({ vanDetails: getHostVansDetails(params.id) });
}

export default function HostVanDetails() {
    const data = useLoaderData();


    function rendering(data) {

        var bgcolor =
            data.type.toLowerCase() == "rugged"
                ? "#0f5e5b"
                : data.type == "simple"
                    ? "#e27553"
                    : "#17151b";
        return (
            <>
                <div className="details">
                    <Link
                        to=".."
                        relative="path"
                        style={{
                            padding: "20px",
                            fontSize: "1.2rem",
                            color: "black",
                            textDecoration: "underline",
                        }}
                    >
                        &larr; Back to all vans
                    </Link>
                    <div className="carDetails p-2">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                            <div className="img-container mb-3 mb-md-0">
                                <img src={data.imageUrl} />
                            </div>
                            <div className="data ps-md-4">
                                <div className="type" style={{ backgroundColor: bgcolor }}>
                                    {data.type}
                                </div>
                                <h3 className="name fw-bold">{data.name}</h3>
                                <div className="price">
                                    <span className="fw-bold">${data.price}</span>/day
                                </div>
                                <p className="desc">{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <Suspense fallback={<h1>Loading Van Details...</h1>}>
            <Await resolve={(data.vanDetails)}>
                {rendering}
            </Await>
        </Suspense>
    )



}



