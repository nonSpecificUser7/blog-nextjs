import highlight from 'highlight.js'
import { createRef, useEffect } from 'react'
import { findDOMNode } from 'react-dom'

const CodeSnippet = ({ children, language }) => {
    const code = createRef()

    useEffect(() => {
        highlight.highlightBlock(findDOMNode(code.current))
    }, [])

    return (
        <pre>
            <code
                ref={code}
                className={language}>
                {children}
            </code>
        </pre>
    )
}

export default CodeSnippet
