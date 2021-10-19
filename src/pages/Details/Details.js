import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'
const Details = () => {
    const { serviceId } = useParams();

    return (
        <div className='text-center mt-3 details'>
            <h4> Our service number {serviceId}</h4>
            <Link to='/home'>Go Back</Link>
        </div>
    );
};

export default Details;