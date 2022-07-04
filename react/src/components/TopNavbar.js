import { useNavigate } from "react-router-dom";


const TopNavbar = () => {
    const navigate = useNavigate();

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
};

export default TopNavbar;
