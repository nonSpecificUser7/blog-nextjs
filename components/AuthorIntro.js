import React from 'react'
import { Container, Row, Col, Media, Image, Card } from 'react-bootstrap';

const AuthorIntro = () => {
    return (
        <Row>
            <Col md="8">
                <Media className="mb-4 admin-intro">
                    <Image
                        roundedCircle
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://i.insider.com/55ba87b8dd0895c81c8b4581?width=400&format=jpeg&auto=webp"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5 className="font-weight-bold mb-0">nonSpecificUser,</h5>
                        <p className="welcome-text">
                            Hello there, it is a typical blog app.
                </p>
                    </Media.Body>
                </Media>
            </Col>
        </Row>
    )
}

export default AuthorIntro
