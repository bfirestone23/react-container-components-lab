import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }

    fetchLatestReviews = () => {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    renderLatestReviews = () => {
        return this.state.reviews.map(review => {
            return <MovieReviews key={review.id} reviewData={review} />
        })
    }

    componentDidMount() {
        this.fetchLatestReviews();
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                {this.renderLatestReviews()}
            </div>
        )
    }
}

