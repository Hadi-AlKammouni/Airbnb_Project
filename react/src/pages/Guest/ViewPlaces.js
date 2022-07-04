import {useState,useEffect} from "react";

const ViewPlaces = () => {

    const [places, setPlaces] = useState([]);

    const getPlaces = async () => {
          const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_place",{
            method : "GET",
          });
          const data = await res.json();
          console.log(data)
          return data.places;
      };

    //Get places
    useEffect(() => {
        const getData = async () => {
          const placesFromServer = await getPlaces();
          setPlaces(placesFromServer)
        };
        getData();
    }, []);

    return (
        
        <div className="places">
            {places.map((place) => (
                <div>
                    <img src={place.images} alt="place" className="place-img" />
                    <p className="place-para" >{place.place_name}, {place.place_location}</p>
                    <p className="place-para" >{place.place_distance}</p>
                    <p className="place-para" >{place.place_date}</p>
                    <p className="place-para" >${place.place_price} {place.place_description}</p>
                </div>
            ))}           
        </div>
    )
};

export default ViewPlaces;