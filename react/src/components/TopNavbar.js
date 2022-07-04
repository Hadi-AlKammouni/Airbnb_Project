import { useNavigate } from "react-router-dom";


const TopNavbar = () => {
    const navigate = useNavigate();
    // let name = localStorage.get("user_name")
    let name = localStorage.getItem("user_name")

    if (name === null){
        return (
            <>
                <div className="top-bar">
                    
                    <img src="assets/airbnb-logo-vector.jpg" alt="logo" />
                    <button type="button" className="logo-btn" onClick={() => {
                  navigate("admin/Login");
                }}>Admin Login</button>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="top-bar">
                    
                    <img src="assets/airbnb-logo-vector.jpg" alt="logo" />
                    <button type="button" className="logo-btn" onClick={() => {
                navigate("/");
                }}>Home</button>
                </div>
            </>
    )}
};

export default TopNavbar;
