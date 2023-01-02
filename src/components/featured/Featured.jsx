import './featured.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Hamaliya</h1>
                    <h3>202 properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Corcovado</h1>
                    <h3>234 properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Vanese</h1>
                    <h3>104 Properties</h3>
                </div>
            </div>
        </div>
    )
};
export default Featured;