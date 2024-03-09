import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import RecipeModal from './RecipeModal';

function Search() {
    const router = useRouter();
    const { query } = router;
    const { category } = query;
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        if (category) {
            fetchData(category);
        }
    }, [category]);

    const fetchData = async (category) => {
        const apiUrl = `https://apis-new.foodoscope.com/recipe-search/categories?searchText=${category}&region=Indian%20Subcontinent&subRegion=Indian&page=1&pageSize=20`;
        const apiKey = 'zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ';
        try {
            const res = await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Accept': 'application/json',
                }
            });
            setRecipes(res.data.payload.data);
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };
    

    const handleReadMore = (recipe) => {
        setSelectedRecipe(recipe); // Set the selected recipe when Read More is clicked
    };
    console.log(selectedRecipe);
    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        if (!filters.includes(selectedFilter)) {
            setFilters([...filters, selectedFilter]);
        }
    };

    const handleRemoveFilter = (filter) => {
        setFilters(filters.filter((f) => f !== filter));
    };

    return (
        <div>
            <section className="what-we-provide-two rel z-1 pt-65 rpt-100 pb-115 rpb-55">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="sub-title mb-20">Use our varied filters &amp;</span>
                        <h2>Here is your favourite recipe</h2>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-md-4">
                            <div className="what-we-provide-right">
                                {/* <form action="#" className="search-form">
                                    <input type="text" placeholder="Enter dish name" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form> */}
                                {/* <select onChange={handleFilterChange}>
                                    <option value="">Select Filter</option>
                                    {/* Add filter options here */}
                                    {/* <option value="ingredient">Ingredient</option>
                                    <option value="name">Recipe Name</option>
                                    <option value="category">Category</option>
                                </select> */} 
                                {filters.map((filter) => (
                                    <div key={filter}>
                                        {filter}
                                        <button onClick={() => handleRemoveFilter(filter)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* design cards as per search filters to be displayed */}
                    <div className="row" style={{ paddingTop: "20px" }}>
                        {recipes.map((recipe, index) => (
                            (recipe?.wikiimage || recipe?.wikiimage === "NF") && (
                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                    <div className="card h-100 border-0 shadow" style={{ transition: "transform 0.3s ease-in-out", ":hover": { transform: "translateY(-5px)" } }}>
                                        <img src={recipe?.wikiimage} className="card-img-top img-fluid" alt="Recipe" style={{ height: "200px", objectFit: "cover" }} />
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <div>
                                                <h5 className="card-title">{recipe?.generic_name}</h5>
                                            </div>
                                            {/* <div className="mt-4">
                                                <button className="btn btn-primary" onClick={() => handleReadMore(recipe)}>Read More</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;
