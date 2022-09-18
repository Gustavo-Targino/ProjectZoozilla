import React from "react";
import { useEffect, useState } from "react";

function GoAnimal() {
  const[animal, setAnimal] = useState('animals here');

  useEffect(() => {
    getAnimal();
  },[]);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");

     const data = await response.json();
     setAnimal(data);
  };

  return (
    <>
    <div className='container'>
        <h1>Animal Facts</h1>

      <div className='animal'>
        <img src={animal.image_link}></img>
        <p>Name: {animal.name}</p>
        <p>Latin name: <em>{animal.latin_name}</em></p>
        <p>Natural Habitat: {animal.habitat}</p>
        <p>Diet: {animal.diet}</p>
        <p>Location: {animal.geo_range}</p>
        </div>

      <button type="button" className="btn" onClick={getAnimal}>
        Get Another Animal
        </button>  
    </div>
 </>
  )
}

export default GoAnimal;