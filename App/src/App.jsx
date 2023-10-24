import './App.css'
import Header from "./components/Header";
import Explanation from "./components/Explanation";
import Voting from "./components/Voting";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Hero from "./components/Hero/index.jsx";
const App = () =>(
    <>
        <Header/>
        <Hero/>
        <Explanation/>
        <Voting/>
        <Register/>
        <Footer/>
    </>
);

export default App