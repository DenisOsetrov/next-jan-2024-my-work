import {urlBuilder} from "@/services/api.service";

export const commentService = {

    getAllComments: async ():Promise<IComment[]> => {
try {
    const response = await fetch(urlBuilder.allComments());
    return await response.json();
} catch (e) {
    console.error('Error fetching error:', e);
    return [];
}
    }
}