import React, { useState } from 'react';
import Layout from '../src/layout/Layout';
import Link from 'next/link';

const PersonalizedResult = () => {
    const [ageGroup, setAgeGroup] = useState('');
    const [jobType, setJobType] = useState('');
    const [physicalActivity, setPhysicalActivity] = useState('');

    const handleAgeGroupChange = (value) => {
        setAgeGroup(value);
    };

    const handleJobTypeChange = (value) => {
        setJobType(value);
    };

    const handlePhysicalActivityChange = (value) => {
        setPhysicalActivity(value);
    };

    return (
        <Layout>
            <h2 className='pt-40 pb-40' style={{ textAlign: "center" }}>Get Personalized Recipes</h2>
            <section className="feature-section pb-250 rpb-70 rel z-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="feature-item wow fadeInUp delay-0-2s">
                                <div className="content">
                                    <span className="number">01</span>
                                    <div className="image">
                                        <img
                                            src="assets/images/features/feature1.png"
                                            alt="Feature"
                                        />
                                    </div>
                                    <h4>Age Group</h4>
                                    <p>{ageGroup}</p>
                                </div>
                                {/* <div className="dropdown">
                                    <select onChange={(e) => handleAgeGroupChange(e.target.value)}>
                                        <option value="">Select Age Group</option>
                                        <option value="18-30">18-30</option>
                                        <option value="31-50">31-50</option>
                                        <option value="51+">51+</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="feature-item color-two wow fadeInUp delay-0-4s">
                                <div className="content">
                                    <span className="number">02</span>
                                    <div className="image">
                                        <img
                                            src="assets/images/features/feature2.png"
                                            alt="Feature"
                                        />
                                    </div>
                                    {/* <h4>What type of Job?</h4>
                                    <p>{jobType}</p> */}
                                </div>
                                {/* <div className="dropdown">
                                    <select onChange={(e) => handleJobTypeChange(e.target.value)}>
                                        <option value="">Select Job Type</option>
                                        <option value="Office Job">Office Job</option>
                                        <option value="Manual Labor">Manual Labor</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="feature-item color-three wow fadeInUp delay-0-6s">
                                <div className="content">
                                    <span className="number">03</span>
                                    <div className="image">
                                        <img
                                            src="assets/images/features/feature3.png"
                                            alt="Feature"
                                        />
                                    </div>
                                    {/* <h4>Physical Activity</h4>
                                    <p>{physicalActivity}</p> */}
                                </div>
                                {/* <div className="dropdown">
                                    <select onChange={(e) => handlePhysicalActivityChange(e.target.value)}>
                                        <option value="">Select Physical Activity</option>
                                        <option value="Sedentary">Sedentary</option>
                                        <option value="Lightly Active">Lightly Active</option>
                                        <option value="Moderately Active">Moderately Active</option>
                                        <option value="Very Active">Very Active</option>
                                        <option value="Extra Active">Extra Active</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PersonalizedResult;
