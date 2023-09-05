import img from "../../assets/income-graph.png"
import { BsStarFill } from "react-icons/bs";

export default function Dashboard() {

    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (<>
        <section className="host-dashboard-earnings">
            <div className="info">
                <h1>Welcome!</h1>
                <p>
                    Income last <span>30 days</span>
                </p>
                <h2>$2,260</h2>
            </div>
        </section>
        <section className="host-dashboard-reviews">
            <h2>Review score</h2>
            <BsStarFill className="star" />
            <p className="pb-0 mb-0">
                <span>5.0</span>/5
            </p>
        </section>
        <section className="host-income m-0 d-flex flex-column flex-md-row row align-items-center justify-content-evenly">
            <div className="col-md-5">
                <img
                    className="graph mt-3"
                    src={img}
                    alt="Income graph"
                    width='500'

                />
            </div>
            <div className="col-md-5">
                <div className="info-header">
                    <h3>Your transactions (3)</h3>
                    <p>
                        Last <span>30 days</span>
                    </p>
                </div>
                <div className="transactions">
                    {transactionsData.map((item) => (
                        <div key={item.id} className="transaction">
                            <h3>${item.amount}</h3>
                            <p>{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}