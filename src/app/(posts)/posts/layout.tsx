import React, { ReactNode } from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "PostsLayout",
};

type Props = {children: ReactNode};

const UsersLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default UsersLayout;