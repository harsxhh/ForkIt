import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../src/layout/Layout';

function Compare() {
  const [searchText1, setSearchText1] = useState('');
  const [searchText2, setSearchText2] = useState('');
  const [recipes1, setRecipes1] = useState([]);
  const [recipes2, setRecipes2] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleSearch1 = async () => {
    setLoading1(true);
    const apiKey = '5gtCRn6CMFkrTs6p2RSyfUcuD_-lSfTznLlnxSxdSZgsDnZk';
    try {
      const response = await axios.get(`https://apis-new.foodoscope.com/recipe-search/recipe?searchText=${searchText1}&page=1&pagesize=1`,{
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        }
      });
      console.log(response.data);
      setRecipes1(response.data.payload.data[0]);
      setLoading1(false);
    } catch (error) {
      console.error('Error fetching recipes for side 1:', error);
      setLoading1(false);
    }
  };

  const handleSearch2 = async () => {
    setLoading2(true);
    const apiKey = '5gtCRn6CMFkrTs6p2RSyfUcuD_-lSfTznLlnxSxdSZgsDnZk';
    try {
      const response = await axios.get(`https://apis-new.foodoscope.com/recipe-search/recipe?searchText=${searchText2}&page=1&pagesize=1`,{
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        }
      });
      console.log(response.data)
      setRecipes2(response.data.payload.data[0]);
      setLoading2(false);
    } catch (error) {
      console.error('Error fetching recipes for side 2:', error);
      setLoading2(false);
    }
  };

  const renderSearchBar = (searchText, setSearchText, handleSearch, loading) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleSearch}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    );
  };

  return (
    <Layout>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', padding: '20px', border: '1px solid #ccc', marginRight: '10px' }}>
        <h2>Side 1</h2>
        {renderSearchBar(searchText1, setSearchText1, handleSearch1, loading1)}
        <img src={recipes1.img_url} alt={recipes1['Recipe_title']} style={{ width: '250px',padding:"20px",height:"250px" }} />
        <h4>Name: {recipes1.Recipe_title}</h4>
        <h4>Calories: {parseFloat(recipes1['Calories'])} kCal</h4>
        <h4>Continent/Region: {recipes1.Continent}</h4>
        <h4>Sub-Region: {recipes1.Sub_region} </h4>
        <h4>Processes: {recipes1.Processes}</h4>
        <h4>Servings: {recipes1.servings}</h4>
        <h4>Total Time: {recipes1.total_time} minutes</h4>
      </div>
      <div style={{ flex: '1', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Side 2</h2>
        {renderSearchBar(searchText2, setSearchText2, handleSearch2, loading2)}
        <img src={recipes2.img_url} alt={recipes1['Recipe_title']} style={{ width: '250px',padding:"20px",height:"250px" }} />
        <h4>Name: {recipes2.Recipe_title}</h4>
        <h4>Calories: {parseFloat(recipes2['Calories'])} kCal</h4>
        <h4>Continent/Region: {recipes2.Continent}</h4>
        <h4>Sub-Region: {recipes2.Sub_region} </h4>
        <h4>Processes: {recipes2.Processes}</h4>
        <h4>Servings: {recipes2.servings}</h4>
        <h4>Total Time: {recipes2.total_time} minutes</h4>
      </div>
      {/* Display difference between recipes */}
    </div>
    </Layout>
  );
}

export default Compare;
