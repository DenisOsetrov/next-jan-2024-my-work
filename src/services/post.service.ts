import {urlBuilder} from "@/services/api.service";

export const postService = {

    getAllPosts: async (): Promise<IPost[]> => {
        try {
            const response = await fetch(urlBuilder.allPosts());
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const posts = await response.json();
            console.log(posts);
            return posts;
        } catch (e) {
            console.error('Error fetching posts:', e);
            return [];
        }

    },

    getPostById: async (id: string | number): Promise<IPost | null> => {
        try {
            const response = await fetch(urlBuilder.singlePost(id));
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const post = await response.json();
            console.log(post);
            return post;
        } catch (e) {
            console.error(`Error fetching post with id ${id}:`, e);
            return null;
        }
    }
}