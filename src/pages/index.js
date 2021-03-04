import Navbar from '../components/Navbar/Navbar'
//import Link from 'next/link'


//const spaceApi =  'https://rickandmortyapi.com/api/character'
//const space = 'https://api.spacexdata.com/v4/ships'


export async function getServerSideProps(){
  const res = await fetch('https://api.spacexdata.com/v4/ships')
  const ships = await res.json()
  return{
    props: {
      ships
    } 
  }
  
}

const Home =  ({ ships }) =>{
  //const  [] = ship;
  //console.log(ship);
  return(
    <div className="home">
      <Navbar/>
      <div className= "home__contain">
        <h1>SPACE X AUTONOMY AND RECOVERY SHIPS</h1>
        {ships.map(ship =>{
        const { name, image } = ship;
        return(
          <div className="home__ships">
            <div className="home__ships_item" >
              <h2 >{name}</h2>
              <img src={image} alt=""/>
            </div>
          </div>
        ) 

        })}
    </div>
    </div>

   
  
  )
}
export default Home;



  /*  <div className="home__title">
      <h2>Space X RECOVERY SHIPS</h2>
      {results.map(result =>{
        const {id, name, image} = result

        return(
            <h1>{ name }</h1>    
        )
      })}
    </div> */




 /*  const [shipsList, setShipList] = useState([])

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
} */


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

