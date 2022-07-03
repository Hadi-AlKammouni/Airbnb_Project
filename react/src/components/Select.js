import {useState,useEffect} from "react";

const Select = ( {set}) => {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
          const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_category",{
            method : "GET",
          });
          const data = await res.json();
          return data.results;
      };

    //Get contacts
    useEffect(() => {
        const getData = async () => {
          const contactsFromServer = await getCategories();
          setCategories(contactsFromServer)
        };
        getData();
    }, []);

    return (
        <>
            <select onChange={(e) => {set(e.target.value)}}>
                 <option value={""}>--SELECT--</option>
                {categories.map((category) => (
                <option value={category.category_name}>{category.category_name}</option>
                ))};                
            </select>
        </>
    )
}

export default Select;