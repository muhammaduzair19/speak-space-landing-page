import React from 'react'
import './categorycard.css'

const CategoryCard = ({ img, categoryCount, categoryName }) => {


    return (
        <div
            className="category-card">
            <img className='category-img' src={img} alt="" />
            <div className="card-text">
                <p className="card-title">
                    {categoryName}
                </p>
                <p className="category-count">
                    <span>{categoryCount}</span> Vendors
                </p>
            </div>

        </div>
    )
}

export default CategoryCard