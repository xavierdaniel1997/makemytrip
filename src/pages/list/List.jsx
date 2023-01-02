
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {format} from 'date-fns';
import {DateRange} from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';


const List =  () => {
    const location = useLocation();

    const [destiontion,setDestination] = useState(location.state.destiontion)
    const [date,setDate] = useState(location.state.date)
    const [openDate,setOpenDate] = useState(false);
    const [options,setOptions] = useState(location.state.options)

    return (
        <div>
            <Navbar/>
            <Header props="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                       <h1 className="listTitle">Search</h1>
                       <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destiontion}/>
                       </div>
                       <div className="lsItem">
                            <label>Check-in Date</label>
                            <span className="datespan" onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"dd/MM/YYY")}`} to {`${format(date[0].endDate,"dd/MM/YYY")}`}</span>
                            {openDate &&< DateRange onChange={(item) => setDate([item.selection])}
                            minDate = {new Date()}
                            ranges={date}
                            />}
                       </div>
                       <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Min price <samll>per night</samll></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Max price <samll>per night</samll></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Rooms</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                       </div>
                       <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default List;