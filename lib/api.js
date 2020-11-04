import client from './sanity';

const blogFields = `
    title, 
    subtitle, 
    slug
`

export async function getAllBlogs() {
    const results = await client
        .fetch(`*[_type == "blog"]{${blogFields}}`);
    return results;
}