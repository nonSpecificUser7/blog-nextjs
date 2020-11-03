import React from 'react'
import Navbar from 'components/Navbar'
import { Container } from 'react-bootstrap'

const PageLayout = ({ children, className }) => {
    return (
        <Container>
            <Navbar />

            <div className={`page-wrapper ${className}`}>
                {children}
            </div>

            <footer className="page-footer">
                <div>
                    <a href="#">github</a>
                </div>
            </footer>
        </Container>

    )
}

export default PageLayout
