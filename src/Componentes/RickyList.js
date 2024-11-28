import React from 'react'
import { useState,useEffect } from 'react'
import RickyCard from './RickyCard'
import './ricky.css'

export default function RickyList() {
    const [characters,setcharacters] = useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((response) => setcharacters(response.results))

},[])
  return (
    <div>
        <h1>Ricky and Morty</h1>
        <div className='heroes-container'>
            {characters.map(character =>{
                return(
                    <RickyCard character={character}/>
                )
            })

            }
        </div>
    </div>
  )
}
