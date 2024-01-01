import React from 'react'
import './categories.css'
import Wedding from '../../assets/wedding.png'
import Birthday from '../../assets/birthday.png'
import Business from '../../assets/business.png'
import Charity from '../../assets/charity.png'
import Workshop from '../../assets/workshop.png'
import Network from '../../assets/network.png'
import Function from '../../assets/function.png'

import CategoryCard from '../CategoryCard/CategoryCard'

const Categories = () => {
    return (
        <div id="categories">
            <div className="categoriesDescription">
                <h1>Our Venue Categories</h1>
                <p>Find what will work best for you!</p>
            </div>
            <div className="categoryCards">
                <CategoryCard img={Wedding} categoryCount={22} categoryName='Wedding' />
                <CategoryCard img={Birthday} categoryCount={22} categoryName='Birthday' />
                <CategoryCard img={Business} categoryCount={22} categoryName='Business' />
                <CategoryCard img={Charity} categoryCount={22} categoryName='Charity' />
                <CategoryCard img={Workshop} categoryCount={22} categoryName='Workshop' />
                <CategoryCard img={Network} categoryCount={22} categoryName='Network' />
                <CategoryCard img={Function} categoryCount={22} categoryName='Function' />

            </div>
        </div>
    )
}

export default Categories