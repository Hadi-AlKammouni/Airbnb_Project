import { useState } from "react";
import Input from "../../components/Input";
import Image from "../../components/Image";
import Select from "../../components/Select";
import { useNavigate } from "react-router-dom";

const AddPlace = () => {
    const navigate = useNavigate();

    let token = localStorage.getItem("token");

    //Calling add place api
    const submitPlace = async (info) => {
        try {
            const res = await fetch("http://localhost:8000/api/v1/admin/add_place",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json",
                    Authorization : "Bearer " + token,
                },
                body: JSON.stringify(info)
            });

            const data = await res.json();
            alert("Place has been added successfully ✅");
            navigate("/")
            return data;
        } catch (error){
            console.log(error)
        }
    };

    // Initialize Input State
    const [place_name, setName] = useState("");
    const [place_location, setLocation] = useState("");
    const [place_distance, setDistance] = useState("");
    const [place_date, setDate] = useState("");
    const [place_price, setPrice] = useState("");
    const [place_description, setDescription] = useState("");
    const [images, setImage] = useState("");
    const [place_category, setCategory] = useState("");

    //Add data to Backend on Submit
    const onSubmit = (e) => {
        e.preventDefault();
        if ( place_name === "" || place_location === "" || place_distance === "" || place_date === "" || place_price === "" || place_description === "" || images === "" || place_category === "" ) {
            alert("Please fill all fields!");
            return;
        }
        
        submitPlace({ place_name, place_location, place_distance, place_date, place_price, place_description, images, place_category })
        setName("");
        setLocation("");
        setDistance("");
        setDate("");
        setPrice("");
        setDescription("");
        setImage("");
        setCategory("");
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>

        <Input type={"text"} placeholder={"Insert Name"} label={"Place Name"} set={setName} />
        <Input type={"text"} placeholder={"Insert Location"} label={"Place Location"} set={setLocation} />
        <Input type={"text"} placeholder={"Insert Distance"} label={"Place Distance"} set={setDistance} />
        <Input type={"text"} placeholder={"Insert Date"} label={"Place Date"} set={setDate} />
        <Input type={"number"} placeholder={"Insert Price"} label={"Place Price"} set={setPrice} />
        <Input type={"text"} placeholder={"Insert Description"} label={"Place Description"} set={setDescription} />
        <Image set={setImage} />
        <Select set={setCategory} />

        <input type={"submit"} value="Add Place" className="btn btn-block" />

      </form>
    );
};

export default AddPlace;