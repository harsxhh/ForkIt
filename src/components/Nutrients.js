import React from 'react'

const Nutrients = ({data}) => {
    console.log(data);
  return (
    <div>
        <p>Calories: {data?.Calories}</p>
        <p>Protein: {data['Protein (g)']}</p>
        <p>Carbohydrates: {data['Carbohydrate, by difference (g)']}</p>
    </div>
  )
}

export default Nutrients
