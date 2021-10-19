import React from 'react';
import { Link } from 'react-router-dom';
import './Training.css'
const Training = () => {
    return (
        <div className='commonDesign'>
            <div id='training-headerId' className="training-header mt-5">
                <h2>Health Care24</h2>
                <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields</p>
            </div>

            <div className='trainingPartHeader'>
                <h4 className='mt-4 text-center'>Training of Health Care24</h4>
            </div>
            <div className='trainingPartInfo'>
                <div  >
                    <h5>*Training Program for Human Resource Development of CBHC (2011-2022)</h5>
                    <ul>
                        <li>Upazila Health System</li>
                        <li>Medical Waste Management</li>
                        <li>Urban Health</li>
                        <li>Refresher training for the CHCPs</li>
                        <li>CHCP Training on Data collection format</li>
                        <li>Refresher training for the CHCPs</li>
                        <li>HA & FWA Training</li>
                        <li>Training on different level supervisors</li>

                    </ul>
                </div>
                <div className='mt-4'>
                    <h5>*Foreign Training</h5>
                    <ul>
                        <li>Community Clinic</li>
                        <li>UMedical Waste Management</li>
                        <li>Urban Health</li>
                        <li>Tribal Health</li>
                    </ul>

                </div>
                <div className='mt-4'>
                    <h5>*Training of JICA (2019-2022)</h5>
                    <ul>
                        <li>Community Group (CG) Training</li>
                        <li>Community Support Group (CSG) Training</li>
                        <li>Training of Local Government Representative</li>
                        <li>Training on different level supervisors</li>
                        <li>Supervision & Monitoring</li>
                    </ul>
                </div>

            </div>
            {<Link to='/home'>
                <button className='btn'>Home</button>
            </Link>}
            {<Link to='/fakePage'>
                <button className='btn'>Top</button>
            </Link>}
            {<Link to='/fakePage'>
                <button className='btn'>Back</button>
            </Link>}
        </div>
    );
};

export default Training;