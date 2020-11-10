import { getBlogBySlug } from 'lib/api'

export default async function enablePreview(req, res) {

    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    const blog = await getBlogBySlug(req.query.slug)

    if (!blog) {
        return res.status(401).json({ message: 'Invalid Slug' })
    }

    res.setPreviewData({})
    res.writeHead(307, { location: `/posts/${blog.slug}` })

    res.end()
}