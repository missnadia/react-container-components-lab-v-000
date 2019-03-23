import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zpinOlkXoCEmptGkktYAHiNJgmSlHWJB';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    componentWillMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(resp => this.setState({ reviews: resp.results }))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}