import {useState,useEffect} from "react";

const Navbar = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
          const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_category",{
            method : "GET",
          });
          const data = await res.json();
          return data.results;
      };

    //Get categories
    useEffect(() => {
        const getData = async () => {
          const categoriesFromServer = await getCategories();
          setCategories(categoriesFromServer)
        };
        getData();
    }, []);

    return (
        
        <div className="buttom-navbar">
            {categories.map((category) => (
                <div>
                    <p value={category.category_name} className="category-para" >{category.category_name}</p>
                    <img src={category.images} alt="category" className="category-img" />
                </div>
            ))}           
        </div>
    )
};

export default Navbar;