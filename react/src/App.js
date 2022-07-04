import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddCategory from "./pages/Admin/AddCategory";
import AddPlace from "./pages/Admin/AddPlace";
import Login from "./pages/Admin/Login";
import TopNavbar from "./components/TopNavbar";
import ButtomNavbar from "./components/ButtomNavbar";
import ViewPlaces from "./pages/Guest/ViewPlaces";

function App() {
  return (
    <BrowserRouter>
    <TopNavbar/>
    <ButtomNavbar/>
      <Routes>
        <Route path="admin/Login" element={<Login/>}></Route>
        <Route path="admin/AddCategory" element={<AddCategory/>}></Route>
        <Route path="admin/AddPlace" element={<AddPlace/>}></Route>
        <Route path="guest/ViewPlaces" element={<ViewPlaces/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
