import {Link} from 'react-router-dom'

export default function NotFound(){
    return <div className='p-5'>
        <h1 className='pt-5 pb-5 fw-bold'>Sorry, the page you were looking for is not found.</h1>
        <Link to='/' className='notfound-backhome'>Go back to home page</Link>
    </div>
}