import React, { ReactNode } from 'react';
import {Metadata} from "next";
import {userService} from "@/services/user.service";


// локальна метадата - динамічна!!
export const generateMetadata = async ({params}:{params:{id:string}}): Promise<Metadata> => {
  console.log(params.id, '!!!!!!'); // цей консоль теж на сервері відображається
  let user = await userService.getUserById(params.id);
  return {title: user?.email};
}

type Props = {children: ReactNode};

const UsersLayout: React.FC<Props> = ({ children }) => {


  return (
    <div>
      {children}
    </div>
  );
};

export default UsersLayout;