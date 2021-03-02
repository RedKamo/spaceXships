//import React from 'react'
import { useState , useEffect} from 'react'
import { useRouter }  from 'next/router'


const shipItem = () => {
  
  const router = useRouter()
  const { id } = router.query 

  const [ship, setShip] = useState({})

  useEffect(() => {
    if (query.id){
    window
    .fetch(`/api/ships/${id}`)
    .then(response  => response.json())
    .then(data => {
      setShip(data)
      })
    }
  }, [id])

    return (
			<div>
        <h2>ONLY SHIP SPACEX</h2>
        <h1>{ship.name}</h1>
        <img src={ship.image} alt=""/>
			</div>
        
    )
}

export default shipItem;

/*   const router = useRouter()
    const {pid} = router.query */