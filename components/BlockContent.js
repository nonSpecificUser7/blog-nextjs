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
        image: ({ node: { asset, Alt, position = 'center' } }) => {
            let style = {}
            if (position === 'left') {
                style.float = position;
                style.marginRight = '30px';
            }

            if (position === 'right') {
                style.float = position;
                style.marginLeft = '30px';
            }

            return (
                <div className='blog-image' style={{ ...style }}>
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
