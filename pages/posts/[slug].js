import PageLayout from 'components/PageLayout'
import PostHeader from 'components/PostHeader'
import { getBlogBySlug, getAllBlogs } from 'lib/api'
import { Row, Col } from 'react-bootstrap'
import BlockContent from 'components/BlockContent'
import { urlFor } from 'lib/api'

const PostDetail = ({ blog }) => {
    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <PostHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={urlFor(blog.coverImage).height(600).url()}
                        author={blog.author}
                        date={blog.date}
                    />
                    <hr />
                    <BlockContent content={blog.content} />
                </Col>
            </Row>
        </PageLayout>
    )
}

export async function getStaticProps({ params }) {
    const blog = await getBlogBySlug(params.slug);
    return {
        props: { blog }
    }
}

export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    return {
        paths: blogs?.map(b => ({ params: { slug: b.slug } })),
        fallback: false
    }
}

export default PostDetail;
