import { useState } from "react";
import Input from "../../components/Input";
import Image from "../../components/Image";

const AddCategory = () => {

    let token = localStorage.getItem("token");

    //Calling add category api
    const submitCategory = async (info) => {
        try {
            const res = await fetch("http://localhost:8000/api/v1/admin/add_category",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json",
                    Authorization : "Bearer " + token,
                },
                body: JSON.stringify(info)
            });

            const data = await res.json();
            alert("Category has been added successfully ✅");
            window.location.reload ();
            return data;
        } catch (error){
            console.log(error)
        }
    };

    // Initialize Input State
    const [category_name, setName] = useState("");
    const [images, setImage] = useState("");

    //Add data to Backend on Submit
    const onSubmit = (e) => {
        e.preventDefault();
        if ( !category_name || !images ) {
            alert("Please fill all fields!");
            return;
        }
        
        submitCategory({category_name, images})
        setName("");
        setImage("");
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>

        <Input type={"text"} placeholder={"Insert Name"} label={"Category Name"} set={setName} />
        
        <Image set={setImage} />

        <input type={"submit"} value="Create Category" className="btn btn-block" />

      </form>
    );
};

export default AddCategory;