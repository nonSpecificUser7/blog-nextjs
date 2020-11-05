import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router'

const postDetails = () => {
    const { query } = useRouter();
    return (
        <PageLayout>
            <h1>Hello - {query?.slug}</h1>
        </PageLayout>
    )
}

export default postDetails
