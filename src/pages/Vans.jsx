import { getVans } from "../config"
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import Van from '../components/Van'
import { Suspense } from "react";

export function loader() {
    return defer({ data: getVans() });
}

export default function Vans() {
    let vans = useLoaderData();
    let [searchParams, setSearchParams] = useSearchParams();

    function rendering(vans) {
        let typeFilter = searchParams.get("type");
        if (typeFilter) {
            vans = vans.filter((v) => v.type == typeFilter)
        }

        return (
            <>
                <div className="van-list-filter-buttons d-flex flex-wrap mb-5 mt-3 ps-2 ps-md-3">
                    <button
                        onClick={() =>
                            setSearchParams((prev) => {
                                prev.set("type", "simple");
                                return prev;
                            })
                        }
                        className={
                            (typeFilter == "simple" ? "selected " : "") +
                            "van-type simple m-1"
                        }
                    >
                        Simple
                    </button>
                    <button
                        onClick={() =>
                            setSearchParams((prev) => {
                                prev.set("type", "luxury");
                                return prev;
                            })
                        }
                        className={
                            (typeFilter == "luxury" ? "selected " : "") +
                            "van-type luxury m-1"
                        }
                    >
                        Luxury
                    </button>
                    <button
                        onClick={() =>
                            setSearchParams((prev) => {
                                prev.set("type", "rugged");
                                return prev;
                            })
                        }
                        className={
                            (typeFilter == "rugged" ? "selected " : "") +
                            "van-type rugged m-1"
                        }
                    >
                        Rugged
                    </button>
                    {typeFilter != null && (
                        <button
                            onClick={() =>
                                setSearchParams((prev) => {
                                    prev.delete("type");
                                    return prev;
                                })
                            }
                            className="clear-filters m-1"
                        >
                            Clear filter
                        </button>
                    )}
                </div>

                <div className=" row justify-content-center w-100 van-row">
                    {
                        vans.map((v) => {
                            return <Van {...v} key={v.id} search={searchParams.toString()} />;
                        })}
                </div>
            </>
        )


    }
    return (
        <Suspense fallback={<h1>Loading Vans List...</h1>}>
            <Await resolve={vans.data}>
                {rendering}
            </Await>
        </Suspense>
    )

}