import React from 'react'
import { Button } from '@material-ui/core';
import './SearchPage.css';
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='search-page'>
            <div className='search-page__info'>
                <p>62 stays . 26 auguts to 30 august. 2 guest</p>
                <h1> Stays nearby </h1>
                <Button variant='outlined'>
                    Cancelation Flexibility
                </Button>
                <Button variant='outlined'>
                    Type of Place
                </Button>
                <Button variant='outlined'>
                    Price
                </Button>
                <Button variant='outlined'>
                    Instant Book
                </Button>
            </div>
            <SearchResult
                src="https://lh3.googleusercontent.com/p/AF1QipNe0_q2PcxfTvtW1Ey0RucZWo88TwfQCSzA9ij1=w296-h202-n-k-rw-no-v1"
                title="Green View Resort Convention Center Ltd"
                description="Set in lush gardens, this relaxed resort is 8 km from Uttara Lake, 3 km from the Baitur Rauf Jame Mosque and 8 km from Hazrat Shahjalal International Airport." 
                star={4.00}
                price='300 BDT / night'
                total='4000 total'
                location='Moinertek, Dhaka 1230'
            />
            <SearchResult
                src="https://lh3.googleusercontent.com/p/AF1QipP8Jm1nWZwsuTkBV-_o7W1YUZvls_rgkMR1BPkW=w296-h202-n-k-rw-no-v1"
                title="CCULB Resort and Convention Hall"
                description="Spaces that are more than just a place to sleep" 
                star={4.5}
                price='700 BDT / night'
                total='6000 total'
                location="কুচিলাবারি উলুখোলা, Kaliganj"
            />
            <SearchResult
                src="https://lh3.googleusercontent.com/p/AF1QipNWswCNJjrH-LdikOrX-AGK0837qZI6-4araYcE=w296-h202-n-k-rw-no-v1"
                title="La Riveria Resort & Park"
                description="Located at the very bank of the river Shitalakshya at 300 Feet, With a finely designed 3-storey restaurant serving flavorsome dishes, a huge park equipped with ..."
                star={3.5}
                price='1000 BDT / night'
                total='8000 total'
            />
            <SearchResult
                src="https://lh3.googleusercontent.com/p/AF1QipNe0_q2PcxfTvtW1Ey0RucZWo88TwfQCSzA9ij1=w296-h202-n-k-rw-no-v1"
                title="Green View Resort Convention Center Ltd"
                description="Set in lush gardens, this relaxed resort is 8 km from Uttara Lake, 3 km from the Baitur Rauf Jame Mosque and 8 km from Hazrat Shahjalal International Airport." 
                star={4.00}
                price='300 BDT / night'
                total='4000 total'
                location='Moinertek, Dhaka 1230'
            />
            <SearchResult
                src="https://lh3.googleusercontent.com/p/AF1QipP8Jm1nWZwsuTkBV-_o7W1YUZvls_rgkMR1BPkW=w296-h202-n-k-rw-no-v1"
                title="CCULB Resort and Convention Hall"
                description="Spaces that are more than just a place to sleep" 
                star={4.5}
                price='700 BDT / night'
                total='6000 total'
                location="কুচিলাবারি উলুখোলা, Kaliganj"
            />
            <SearchResult
                src="https://lh3.googleusercontent.com/p/AF1QipNWswCNJjrH-LdikOrX-AGK0837qZI6-4araYcE=w296-h202-n-k-rw-no-v1"
                title="La Riveria Resort & Park"
                description="Located at the very bank of the river Shitalakshya at 300 Feet, With a finely designed 3-storey restaurant serving flavorsome dishes, a huge park equipped with ..."
                star={3.5}
                price='1000 BDT / night'
                total='8000 total'
            />
        </div>
    )
}

export default SearchPage
