import { Route, Routes } from "react-router-dom";
import "../src/stylesheets/App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-legend bg-primary min-h-screen text-white">
      <Header />
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
