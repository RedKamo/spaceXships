import React, {useEffect, useState} from 'react'

import Navbar from '../components/Navbar/Navbar'

import Link from 'next/link'

const HomePage = ()=>{


  const [shipsList, setShipList] = useState([])

  useEffect(() => {
    window
    .fetch('/api/ships')
    .then( response => response.json())
    .then(({ data }) => {
      setShipList(data)
    })
  }, [])
 

  return(
    <>
			<Navbar/>
    	<h1>Platzi next spaceX - Maritime ships</h1>
      {shipsList.map((ship) => (
        <div>
          <Link href={`/ship/${ship.id}`}>
          {ship.name}
        </Link>
        </div>
        
      ))}
		</>
    )
}

export default HomePage;


/*  useEffect(async ()=>{
    try {
      const res = await window.fetch('/api/ships')
      const { data } = await Response.json()
      setShips(data)
    } catch (error) {
      setShips([])
    }
  }, [])
 */

