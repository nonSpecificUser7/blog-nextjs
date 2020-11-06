import BlockContent from '@sanity/block-content-to-react'
import CodeSnippet from 'components/CodeSnippet'
import { urlFor } from 'lib/api'

const serializers = {
    types: {
        code: ({ node: { language, code, filename } }) => (
            <CodeSnippet language={language}>
                {code}
                <div className='code-filename'>{filename}</div>
            </CodeSnippet>
        ),
        image: ({ node: { asset, Alt } }) => {
            return (
                <div className='blog-image'>
                    <img src={urlFor(asset).height(300).fit('max').url()} />
                    <div className='image-alt'>{Alt}</div>
                </div>
            )
        }
    }
}

const BlogContent = ({ content }) => {
    return (
        <BlockContent
            serializers={serializers}
            blocks={content}
        />
    )
}

export default BlogContent
