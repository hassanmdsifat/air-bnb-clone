import React from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({
    src, location, title, description, price, star, total
}) {
    return (
        <div className='search-result'>
            <img src={src} alt='pic'/>
            <FavoriteBorderIcon className='search-result__heart'/>
            <div className='search-result__info'>
                <div className='info__top'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_______</p>
                    <p>{description}</p>
                </div>
                <div className='info__bottom'>
                    <div className='search_result__star'>
                        <StarIcon className='star-icon'/>
                        <strong>{star}</strong>
                    </div>
                    <div className='search_result__price'>
                        <h4>{price}</h4>
                        <h5>{total}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
