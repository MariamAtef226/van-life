import { getVanDetails } from "../config";
import { useLoaderData, useParams, Link, useLocation } from "react-router-dom";

export function loader({ params }) {
    async function loadVanDetails(id) {
        let van = getVanDetails(id);
        return van;
    }
    return loadVanDetails(params.id);
}

export default function VansDetails() {

    try {
        let van = useLoaderData();
        const params = useParams(); // catching the id from the URL
        let locationState = useLocation().state;

        var bgcolor =
            van.type.toLowerCase() == "rugged"
                ? "#0f5e5b"
                : van.type == "simple"
                    ? "#e27553"
                    : "#17151b";
        var url = locationState?.search || "";

        return (
            <div className="van-detail ms-auto me-auto i">
                <Link
                    to={url ? "..?" + url : ".."}
                    relative="path"
                    style={{
                        padding: "20px",
                        fontSize: "1.2rem",
                        color: "black",
                        textDecoration: "underline",
                    }}
                >
                    &larr; Back to {locationState.search ? van.type : "all "} vans
                </Link>

                <div className=" img-container mb-4 pb-2 mt-2">
                    <img src={van.imageUrl} width="600" />
                </div>
                <div className="type" style={{ backgroundColor: bgcolor }}>
                    {van.type}
                </div>

                <div className="name">{van.name}</div>
                <div className="price">
                    ${van.price}
                    <span className="dayword">/day</span>
                </div>
                <p className="desc">{van.description}</p>

            </div>
        )


    }
    catch (err) {
        return err;
    }







}