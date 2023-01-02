
import './searchItem.css';

const SearchItem = () => {
    return(
        <div className="searchItem">
            <img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg" alt="" className="searchItemImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower steel Apartment</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport Taxi</span>
                <span className="siSubtitle">Studio Appartment with air conditioning</span>
                <span className="siFeatures">Entire studio . 1 bathroom . queen size bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later , so lock in this great price today !</span>

            </div>
            <div className="searchItemDetials">
                <div className="siRating">
                    <span>Execllent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetialText">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckBtn">See availability</button>
                </div>
            </div>
        </div>
    )
};
export default SearchItem;