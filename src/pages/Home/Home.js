import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const { services } = useFirebase();
    return (
        <>
            {/* ---------Home page banner section --------------*/}
            <div className='homeBanner'>

                <div className='bannerInfo'>
                    {/* <h1>Health Care24</h1> */}
                    <h2>Your care is our dedication</h2>
                    <p> A healthy individual is a person who is physically, mentally, and socially well balanced. And the balance factor may vary from person to person.</p>
                    <br />
                    {
                        <Link to='/program'>
                            <button className='bannerButton'>Our Programs</button>
                        </Link>
                    }
                </div>
            </div>

            {/* ------------------Home Page services section ----------------- */}
            <div className='services'>
                <h1 className='text-center mt-4 mb-3'>Our Services</h1>
                <div className='singleService'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        > </Service>)
                    }
                </div>

            </div>
        </>
    );
};

export default Home;