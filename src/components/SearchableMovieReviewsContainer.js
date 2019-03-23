import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zpinOlkXoCEmptGkktYAHiNJgmSlHWJB';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()

        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL.concat(this.state.query))
            .then(resp => resp.json())
            .then(resp => this.setState({ reviews: resp.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input
                        type="text"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}