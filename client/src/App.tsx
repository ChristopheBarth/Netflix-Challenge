import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TopList from "./components/TopList";

function App() {
  return (
    <div id="root-container">
      <NavBar />
      <div className="page-content">
        <Outlet />
        <TopList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
