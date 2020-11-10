import PageLayout from 'components/PageLayout'
import PostHeader from 'components/PostHeader'
import ErrorPage from 'next/error'
import { getBlogBySlug, getAllBlogs } from 'lib/api'
import { Row, Col } from 'react-bootstrap'
import BlockContent from 'components/BlockContent'
import { urlFor } from 'lib/api'
import { useRouter } from 'next/router'

const PostDetail = ({ blog }) => {
    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode="404" />
    }

    if (router.isFallback) {
        console.log('Loading fallback page')
        return (
            <PageLayout className="blog-detail-page">
                Loading...
            </PageLayout>
        )
    }
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
    const paths = blogs?.map(b => ({ params: { slug: b.slug } }));
    return {
        paths,
        fallback: true
    }
}

export default PostDetail;
