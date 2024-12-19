import Banner from "../components/Banner";
import BannerImage from "../components/BannerImage";
import OfferingsGrid from "../components/OfferingsGrid";
import Search from "../components/Search";
import Mentors from "../components/Mentors";
import CategoriesGrid from "../components/CategoriesGrid";
import Testimonials from "../components/Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerImage></BannerImage>
            <Search></Search>
            <OfferingsGrid></OfferingsGrid>
            <CategoriesGrid></CategoriesGrid>
            <Mentors></Mentors>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;