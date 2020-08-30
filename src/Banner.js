import React, { useState} from 'react'
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from "react-router-dom";
function Banner() {
    const history = useHistory();
    const [showPicker, setShowPicker] = useState(false);
    const [searchText, setSearchText] = useState("Show Dates");
    function handleOnClick(){
        setShowPicker(!showPicker);
        if(searchText === 'Show Dates'){
            setSearchText('Hide');
        }else{
            setSearchText('Show Dates');
        }
    }
    return (
        <div className='banner'>
            <div className='banner__search'>
                {showPicker && <Search/>}
                <Button variant='outlined' 
                className='banner__search_button'
                onClick={handleOnClick}>{searchText}</Button>
            </div> 
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outlined' onClick={()=> history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
