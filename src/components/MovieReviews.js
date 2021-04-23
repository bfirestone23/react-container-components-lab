import React from 'react'

let Review = (review) => {
    return (<div key={review.headline} className="review">

    <header>
        <a className="review-link" href={review.link.url}>
          {review.headline}
        </a>
        <br/>
        <span className="author">{review.byline}</span>
      </header>

      <blockquote>{review.summary_short}</blockquote>
    </div>)
}

export default function MovieReviews(props) {
    return (
        <div className="review-list">
            <div>
                <div>
                {/* {props.reviews.map(review => review.display_title)} */}
                </div>
                {props.reviews.map(review => Review(review))}
            </div>
        </div>
    )
}
