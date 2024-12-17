import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <>
            <header className="w-full md:w-11/12 max-w-screen-xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <h1 className="text-center">This is Footer</h1>
            </footer>
        </>
    );
};

export default HomeLayout;