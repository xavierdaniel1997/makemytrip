import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faGlobe, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './header.css';
import {DateRange} from 'react-date-range';
import {format} from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { useNavigate } from 'react-router-dom';


const Header = ({props}) => {
    const [destiontion,setDestination] = useState(" ")
    const [openDate,setOpenDate] = useState(false);

    const [date,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions,setOpenOptions] = useState(false);

    const [options,setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate()

    const handleOption = (name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]:operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        });
    }
    
    const handleSearch = () =>{
        navigate('/hotels',{ state: {destiontion,date,options}});
    }

    return (
    <div className="header">
        <div className={props === "list" ? "headerContainer listMode": "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faGlobe}/>
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport taxies</span>
                </div>
            </div>
            { props !== "list" &&
                <><h1 className="headerTitle">A Lifetime of discount? It's Genius.</h1>
                <p className="headerDesc">Get Rewards for travells - unlock instant saving 10% or more with 
                a free makemytrip account!</p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                        <input className="headerSearchInput" type="text" placeholder='Where are you going?' 
                        onChange={(e) => setDestination(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"dd/MM/YYY")}`} to {`${format(date[0].endDate,"dd/MM/YYY")}`}</span>
                        {openDate && <DateRange
                         editableDateInputs={true}
                         onChange={item => setDate([item.selection])}
                         moveRangeOnFirstSelection={false}
                         ranges={date}
                         className="date"
                         minDate = {new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} rooms`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div></>}
                
        </div>
    </div>
    
    )
};
export default Header;