import {Link} from 'react-router-dom'
import { useRouteError } from "react-router-dom"

export default function Error(){
    let err = useRouteError();
    return <div className='p-5 error'>
        <h1 className='pt-5 pb-5 fw-bold'>An error has occured while loading this page!</h1>
        <h2 className=' pb-5 fw-bold'>{err.message}</h2>
        <Link to='/' className='notfound-backhome'>Go back to home page</Link>
    </div>
}