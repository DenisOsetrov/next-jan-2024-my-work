import React from 'react';
import {Metadata} from "next";
// import {Metadata} from "next";

// локальна метадата, що відображається на вкладці браузера - статична!!
export const metadata: Metadata = {
    title: "UserLayout",
    description: "Local metadata in 'head' in html",
};


type Props = {children: React.ReactNode};

const UsersLayout = ({ children }:Props) => {
  return (
    <div>
                Start UsersLayout - not component
      {children}
                End UsersLayout - not component
    </div>
  );
};

export default UsersLayout;