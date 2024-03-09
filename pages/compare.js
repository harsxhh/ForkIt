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
    const apiKey = 'zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ';
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
    const apiKey = 'zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ';
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
        <button
          disabled={!searchText}
          onClick={handleSearch}
          style={{
          marginTop:"10px",
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    );
  };
  const maxCharacters = 50; 
  const truncatedText = recipes1 && recipes1.Processes ? recipes1.Processes.substring(0, maxCharacters) : '';
const isTruncated = recipes1 && recipes1.Processes && recipes1.Processes.length > maxCharacters;
  return (
    <Layout>
    <div  style={{ display: 'flex' }}>
      <div  className='w-50' style={{ flex: '1', padding: '20px', border: '1px solid #ccc', marginRight: '10px' }}>
        <h2>Side 1</h2>
        {renderSearchBar(searchText1, setSearchText1, handleSearch1, loading1)}
        <img src={recipes1?.img_url} alt={recipes1['Recipe_title']} style={{ width: '250px',padding:"20px",height:"250px" }} />
        <h4>Name:</h4> {recipes1?.Recipe_title}
        <h4>Calories: </h4>{parseFloat(recipes1['Calories'])} kCal
        <h4>Continent/Region: </h4>{recipes1?.Continent}
        <h4>Sub-Region:</h4> {recipes1?.Sub_region} 
        <h4>Processes:</h4> <div  style={{ overflowWrap: 'break-word' }}>{recipes1?.Processes}</div>
        <h4>Servings:</h4> {recipes1?.servings}
        <h4>Total Time: </h4>{recipes1?.total_time} minutes
      </div>
      <div style={{ flex: '1', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Side 2</h2>
        {renderSearchBar(searchText2, setSearchText2, handleSearch2, loading2)}
        <img src={recipes2?.img_url} alt={recipes1['Recipe_title']} style={{ width: '250px',padding:"20px",height:"250px" }} />
        <h4>Name:</h4> {recipes2?.Recipe_title}
        <h4>Calories: </h4>{parseFloat(recipes2['Calories'])} kCal
        <h4>Continent/Region:</h4> {recipes2?.Continent}
        <h4>Sub-Region:</h4> {recipes2?.Sub_region} 
        <h4>Processes:</h4> <div  style={{ overflowWrap: 'break-word' }}>{recipes2?.Processes}</div>
        <h4>Servings:</h4> {recipes2?.servings}
        <h4>Total Time: </h4>{recipes2?.total_time} minutes
      </div>
      {/* Display difference between recipes */}
    </div>
    </Layout>
  );
}

export default Compare;
