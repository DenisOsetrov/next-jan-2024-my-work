import React, { ReactNode } from 'react';
import {Metadata} from "next";
import {postService} from "@/services/post.service";

export const generateMetadata = async ({params}: {params:{id:string}}): Promise<Metadata>  => {
    let post = await postService.getPostById(params.id);
    return {title: post?.body};
};

type Props = {children: ReactNode};

const PostByIdLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default PostByIdLayout;