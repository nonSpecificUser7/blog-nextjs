import React from 'react'
import Navbar from 'components/Navbar'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import { useTheme } from 'providers/ThemeProvider';

const PageLayout = ({ children, className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={theme.type}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Container>
                <Navbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <div className={`page-wrapper ${className}`}>
                    {children}
                </div>
                <footer className="page-footer">
                    <div>
                        <a href="https://github.com/nonSpecificUser7/">github</a>
                    </div>
                </footer>
            </Container>
            <style jsx global>{`
            html, body {
                background: ${theme.background};
                color: ${theme.fontColor};
                transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
            }
            `}
            </style>
        </div>
    )
}

export default PageLayout
