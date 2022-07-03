import { useState } from "react";
import Input from "../../components/Input";

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

    //Convert the uploaded image into base 64
    let base64String="";
    const imageUploaded = async () => {
        var file = document.querySelector('input[type=file]')['files'][0];
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result;
            var disp=document.getElementById('display');
            disp.innerHTML='';
            disp.innerHTML=`<img src="`+base64String+`">`
        }
        reader.readAsDataURL(file); 
    }

    // Initialize Input State
    const [category_name, setName] = useState("");

    //Add data to Backend on Submit
    const onSubmit = (e) => {
        let images = base64String;
        e.preventDefault();
        if ( !category_name || !images ) {
            alert("Please fill all fields!");
            return;
        }
        
        submitCategory({category_name, images})
        setName("");
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>

        <Input type={"text"} placeholder={"Insert Name"} label={"Category Name"} set={setName} />
        
        <div className="uploadpic">
            <div>
                <div><label htmlFor="fileId"></label></div>
                <div><input type="file" name="photo" id="fileId" onChange={imageUploaded}/></div>
                <div className="upload" id="upload">
                    <div id="display"></div>
                </div>   
            </div>
        </div>  

        <input type={"submit"} value="Create Category" className="btn btn-block" />

      </form>
    );
};

export default AddCategory;