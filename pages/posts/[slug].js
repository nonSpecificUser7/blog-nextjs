import PageLayout from 'components/PageLayout';
import PostHeader from 'components/PostHeader';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap'

const PostDetail = ({ blog }) => {
    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <PostHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={blog.coverImage}
                        author={blog.author}
                        date={blog.date}
                    />
                    <hr />
                    {/*  */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deleniti necessitatibus, reprehenderit in soluta similique architecto maiores dignissimos quaerat repellendus perferendis modi. Labore minima quos, delectus aperiam voluptate neque dolorum. Explicabo eligendi alias debitis, aperiam dolores architecto. Temporibus, officia quod..
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
