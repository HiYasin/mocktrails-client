import Banner from "../components/Banner";
import BannerImage from "../components/BannerImage";
import OfferingsGrid from "../components/OfferingsGrid";
import Review from "../components/Review";
import Search from "../components/Search";
import Mentors from "../components/Mentors";
import CategoriesGrid from "../components/categories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerImage></BannerImage>
            <Search></Search>
            <OfferingsGrid></OfferingsGrid>
            <CategoriesGrid></CategoriesGrid>
            <Mentors></Mentors>
            <Review></Review>
        </div>
    );
};

export default Home;