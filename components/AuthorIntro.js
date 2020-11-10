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
                        src="https://cdn.sanity.io/images/pwtkoahp/production/e3567ea69586c6075a07e0e94de5a4f3cf0aa376-801x801.png"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5 className="font-weight-bold mb-0">Welcome!</h5>
                        <p className="welcome-text">
                            This is a blog app built with NextJS framework and Sanity.io CMS
                </p>
                    </Media.Body>
                </Media>
            </Col>
        </Row>
    )
}

export default AuthorIntro
