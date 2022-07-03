import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddCategory from "./pages/Admin/AddCategory";
import AddPlace from "./pages/Admin/AddPlace";
import Login from "./pages/Admin/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin/Login" element={<Login/>}></Route>
        <Route path="admin/AddCategory" element={<AddCategory/>}></Route>
        <Route path="admin/AddPlace" element={<AddPlace/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
