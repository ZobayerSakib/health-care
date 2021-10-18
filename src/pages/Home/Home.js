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
                    <h1>Health Care24</h1>
                    <h2>Your care is our dedication</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eligendi aspernatur similique recusandae optio veritatis neque </p>
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