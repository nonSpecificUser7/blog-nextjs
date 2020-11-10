import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';
import { Col } from 'react-bootstrap';
import CardItem from 'components/CardItem';
import CardItemBLank from 'components/CardItemBlank';
import CardListItem from 'components/CardListItem';
import { useEffect } from 'react'

export const useGetBlogsPages = ({ blogs, filter }) => {

    useEffect(() => {
        window.__pagination__init = true
    }, [])

    return useSWRPages(
        'index-page',
        ({ offset, withSWR }) => {
            let initialData = !offset && blogs

            if (typeof window !== 'undefined' && window.__pagination__init) {
                initialData = null
            }

            const { data: paginatedBlogs } = withSWR(useGetBlogs({ offset, filter }, initialData));
            debugger
            if (!paginatedBlogs) {
                return Array(3)
                    .fill(0)
                    .map((_, i) =>
                        <Col key={i} md='4'>
                            <CardItemBLank />
                        </Col>
                    )

            }

            return paginatedBlogs
                .map(blog =>
                    filter.view.list ?
                        <Col key={`${blog.slug}-list`} md="9">
                            <CardListItem
                                author={blog.author}
                                title={blog.title}
                                subtitle={blog.subtitle}
                                date={blog.date}
                                link={{
                                    href: '/posts/[slug]',
                                    as: `/posts/${blog.slug}`
                                }}
                            />
                        </Col>
                        :
                        <Col key={blog.slug} md="4">
                            <CardItem
                                author={blog.author}
                                title={blog.title}
                                subtitle={blog.subtitle}
                                date={blog.date}
                                image={blog.coverImage}
                                link={{
                                    href: '/posts/[slug]',
                                    as: `/posts/${blog.slug}`
                                }}
                            />
                        </Col>
                )
        },
        (SWR, index) => {
            if (SWR.data && SWR.data.length === 0) { return null; }
            return (index + 1) * 3
        },
        [filter]
    )
}