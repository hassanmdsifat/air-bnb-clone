import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home__section'>
                <Card 
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    desctiption="Unique activities we can do together, led by a world of hosts."
                    />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    desctiption="Spaces that are more than just a place to sleep" 
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title='Entire Homes'
                    desctiption='Comfortable private places, with room for friends or family.' 
                />
            </div>
            <div className='home__section'>
                <Card
                    src="https://cf.bstatic.com/images/hotel/max1024x768/219/219412239.jpg"
                    title='Sarah Resort'
                    desctiption='Friendly and Comfortable'
                    price="790BDT"
                />
                <Card
                    src="https://cf.bstatic.com/images/hotel/max1024x768/219/219412239.jpg"
                    title='Sarah Resort'
                    desctiption='Friendly and Comfortable'
                    price="790BDT"
                />
                <Card
                    src="https://cf.bstatic.com/images/hotel/max1024x768/219/219412239.jpg"
                    title='Sarah Resort'
                    desctiption='Friendly and Comfortable'
                    price="790BDT"
                />
            </div>
        </div>
    )
}

export default Home
