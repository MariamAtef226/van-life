
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div className="home-page">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <div className="text">
                Add adventure to your life by joining the #vanlife movement.
            </div>
            <div className="text">
                Rent the perfect van to make your perfect road trip.
            </div>
            <Link to='/vans'><button className="btn">Find your van</button></Link>
        </div>
    )
}