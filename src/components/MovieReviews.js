import React from 'react'



const Review = ({
    headline,
    byline,
    link,
    mpaa_rating,
    summary_short
}) => {
    return (
        <div
            key={headline}
            className="review"
        >
            <header>
                <a className="review-link" href={link.url}>
                    {headline}
                </a>
                <span className="author">{byline}</span>
            </header>
            Rated: {mpaa_rating}
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews