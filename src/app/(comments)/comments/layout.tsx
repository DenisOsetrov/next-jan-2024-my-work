import React, { ReactNode } from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "CommentsLayout",
};

type Props = {children: ReactNode};

const CommentsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default CommentsLayout;