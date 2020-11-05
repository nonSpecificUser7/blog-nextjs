import PageLayout from 'components/PageLayout';
import { getBlogBySlug } from 'lib/api';

const postDetails = ({ blog }) => {
    return (
        <PageLayout>
            <h1>Hello {blog.slug}</h1>
        </PageLayout>
    )
}

export async function getServerSideProps({ params }) {
    const blog = await getBlogBySlug(params.slug)
    return {
        props: { blog }
    }
}

export default postDetails
