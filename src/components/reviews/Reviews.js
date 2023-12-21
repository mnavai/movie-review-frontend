import React from 'react'
import api from '../../API/axiosConfig'
import { useEffect, useRef } from 'react'
import { Container, TableRow, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'
import { useParams } from 'react-router-dom'

const Reviews = ({ getMovieData, movie, reviews, setREviews }) => {
    
    const revText = useRef()
    let params = useParams()
    const movieId = params.movieId

    useEffect(()=>{
        getMovieData(movieId)
    },[])

    const addReview = async (e) => {
        e.preventDefault()

        const rev = revText.current

        try{
            const response = await api.post('/api/v1/reviews', {reviewBody:rev.value, imdbId: movieId});
            const updateReviews = [...reviews, {body: rev.value}];
            rev.value = ""
            setREviews(updateReviews)

        } catch(err) {

            console.log(err)

        }

        

    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row>
            <Col>
                <img src={movie?.poster} alt='' />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews