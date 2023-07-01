import { useEffect, useState } from "react";
import Loading from './components/Loading.jsx'
import Tours from './components/Tours.jsx'
import './css/appStyle.css'
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [notFound, setNotFound] = useState(false)
  console.log(tours);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch((url));
      if (response.status === 200) {
        const tours = await response.json();
        setTours(tours);
      }
      else{
        setNotFound(true);
      }

    }
    catch (error) {
      console.log(error);
      setNotFound(true)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  }

  if (loading) {
    return (
      <div className="loadingDiv">
        <Loading />
      </div>
    )
  }

  if (tours.length === 0) {
    return (
      <div className="refreshTours">
        <h3>No Tours Found</h3>
        <button onClick={() => fetchTours() }>Refresh</button>
      </div>
    )
  }

  if(notFound){
    return(<div className="notFoundPage">
      <h4>Something Went Wrong</h4>

    </div>)
  }

  return (
    <div>
      <div className="title">
        <h3>Current Tours List</h3>
      </div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};
export default App;
