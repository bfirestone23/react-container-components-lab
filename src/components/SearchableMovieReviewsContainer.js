import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    getSearchResults = (query) => {
        let endpoint = URL + `&query=${query}`;
        fetch(endpoint)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getSearchResults(this.state.searchTerm)
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.searchTerm} />
                    <h2>Search Results:</h2>
                    <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }
}
