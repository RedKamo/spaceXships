//import Navbar from '../components/Navbar/Navbar'
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Message from "../components/Message/Message";
import Navbar from "../components/Navbar/Navbar";
//const spaceApi =  'https://rickandmortyapi.com/api/character'
//const space = 'https://api.spacexdata.com/v4/ships'

export async function getServerSideProps() {
  const res = await fetch("https://api.spacexdata.com/v4/ships");
  const ships = await res.json();
  return {
    props: {
      ships,
    },
  };
}

const Home = ({ ships }) => {
  //const  [] = ship;
  //console.log(ship);
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>SPACE X AUTONOMY AND RECOVERY SHIPS</h1>
        <Message />
        <div className="home__contain">
          {ships.map((ship) => {
            const { name, image, id } = ship;
            return (
              <div className="home__ships" key={ship.id}>
                <div className="home__ships__item">
                  <Link href="/ships/[id]" as={`/ships/${id}`}>
                    <a>
                      <h3>{name}</h3>
                      {ship.image ? (
                        <img src={image} alt="" />
                      ) : (
                        <h3 className="home__ships__no">No available image</h3>
                      )}
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};
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
