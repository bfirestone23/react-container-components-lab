import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className="review-list">
            <div className="review">
                {props.reviewData.display_title} by {props.reviewData.byline}
            </div>
        </div>
    )
}
