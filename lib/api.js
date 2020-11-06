import client from './sanity';

const blogFields = `
    title, 
    subtitle, 
    'slug': slug.current,
    date,
    'coverImage': coverImage.asset->url,
    'author': author->{name, 'avatar': avatar.asset->url},
`

export async function getAllBlogs() {
    const results = await client
        .fetch(`*[_type == "blog"]{${blogFields}} | order(_createdAt desc)`);
    return results;
}

export async function getBlogBySlug(slug) {
    const result = await client
        .fetch(`*[_type == "blog" && slug.current == $slug]{
            ${blogFields}
            content[]{..., "asset": asset->}
        }`, { slug }).then(res => res?.[0]);
    return result;
}