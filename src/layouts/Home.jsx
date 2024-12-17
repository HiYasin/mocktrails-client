import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <>
            <header className="w-11/12 max-w-screen-xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main>
                <h1 className="text-center">Home Page</h1>
                <Outlet></Outlet>
            </main>
            <footer>
                <h1 className="text-center">This is Footer</h1>
            </footer>
        </>
    );
};

export default Home;