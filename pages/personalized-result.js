import React, { useEffect, useState } from 'react';
import Layout from '../src/layout/Layout';
import axios from 'axios';
import Personalized1 from '../src/components/Personalized1';
import Personalized2 from '../src/components/Personalized2';
import Personalized3 from '../src/components/Personalized3';
const PersonalizedResult = () => {
    const [ageGroup, setAgeGroup] = useState('');
    const [jobType, setJobType] = useState('');
    const [physicalActivity, setPhysicalActivity] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [recipes1, setRecipes1] = useState([]);   
    const [recipes2, setRecipes2] = useState([]);
   console.log(recipes);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://apis-new.foodoscope.com/recipe-search/recipesByNutrition', {
                    energyMin: "500"
                }, {
                    headers: {
                        Authorization: "Bearer zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ",
                        Accept: "application/json"
                    }
                });
                const data = response.data;
                console.log(data);
                setRecipes(data.payload.data); // Set the recipes state here
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        if (ageGroup) { 
            fetchData();
        }
    }, [ageGroup]); 
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://apis-new.foodoscope.com/recipe-search/recipesByNutrition', {
                    proteinMin: "80"
                }, {
                    headers: {
                        Authorization: "Bearer zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ",
                        Accept: "application/json"
                    }
                });
                const data = response.data;
                console.log(data);
                setRecipes1(data.payload.data); // Set the recipes state here
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        if (jobType) { // Only fetch data if ageGroup state is truthy (i.e., not empty)
            fetchData();
        }
    }, [jobType]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://apis-new.foodoscope.com/recipe-search/recipesByNutrition', {
                    proteinMin: "80"
                }, {
                    headers: {
                        Authorization: "Bearer zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ",
                        Accept: "application/json"
                    }
                });
                const data = response.data;
                console.log(data);
                setRecipes2(data.payload.data); // Set the recipes state here
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        if (physicalActivity) { // Only fetch data if ageGroup state is truthy (i.e., not empty)
            fetchData();
        }
    }, [physicalActivity]);
    const handleJobTypeChange = () => {
        if(!jobType)
        setJobType(true);
        else
        setJobType(false);
    };

    const handlePhysicalActivityChange = () => {
        if(!physicalActivity)
        setPhysicalActivity(true);
        else
        setPhysicalActivity(false); 
    };

    const handleAge = () => {
        if(!ageGroup)
        setAgeGroup(true);
        else
        setAgeGroup(false);
    };
    return (
        <Layout>
            <h2 className='pt-40 pb-40' style={{ textAlign: "center" }}>Get Personalized Recipes</h2>
            <section className="feature-section pb-250 rpb-70 rel z-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 " onClick={handleAge}>
                            <div className="feature-item wow fadeInUp delay-0-2s">
                                <div className="content">
                                    <span className="number">01</span>
                                    <div className="image" style={{ width: "300px" }}>
                                        <img
                                            src="assets/images/services/age_group.png"
                                            alt="Feature"
                                        />
                                    </div>
                                    <h4>Age Group</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" onClick={handleJobTypeChange}>
                            <div className="feature-item color-two wow fadeInUp delay-0-4s">
                                <div className="content">
                                    <span className="number">02</span>
                                    <div className="image">
                                        <img
                                            src="assets/images/services/job.png"
                                            alt="Feature"
                                            style={{ width: "250px" }}
                                        />
                                    </div>
                                    <h4>What type of Job?</h4>
                                    {/* Add your dropdown component here */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" onClick={handlePhysicalActivityChange}>
                            <div className="feature-item color-three wow fadeInUp delay-0-6s">
                                <div className="content">
                                    <span className="number">03</span>
                                    <div className="image">
                                        <img
                                            src="assets/images/services/physical.png"
                                            alt="Feature"
                                            style={{ width: "250px" }}
                                        />
                                    </div>
                                    <h4>Physical Activity</h4>
                                    {/* Add your dropdown component here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {ageGroup && <section className="recipes-section">
                <div className="container">
                    <div className="row">
                        {recipes.map((recipe, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <Personalized1 item={recipe} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>}
            {jobType && <section className="recipes-section">
                <div className="container">
                    <div className="row">
                        {recipes1.map((recipe, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <Personalized2 item={recipe} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>}
            {physicalActivity && <section className="recipes-section">
                <div className="container">
                    <div className="row">
                        {recipes2.map((recipe, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <Personalized3 item={recipe} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>}
        </Layout>
    );
};

export default PersonalizedResult;

