import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header';
import './home.css';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperites from '../../components/featuredProperites/FeaturedProperites';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
     <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Home guests love</h1>
            <FeaturedProperites/>
            <MailList/>
            <Footer/>
        </div>
     </div>
    )
}
export default Home;