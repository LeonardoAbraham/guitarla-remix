import { getPost } from "../models/posts"

export async function loader({params}){
    const { postUrl } = params;
    const post = await getPost(postUrl);

    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

    return post
}

export default function Post() {
    return (
        <div>posts.$postUrl</div>
    )
}
