import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const HomeLayout = () => {
    return (
        <>
            <header className="w-full md:w-11/12 max-w-screen-xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </main>
            <footer className="bg-gray-200">
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;