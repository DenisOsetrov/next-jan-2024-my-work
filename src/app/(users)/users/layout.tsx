import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const UsersLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
                Start UsersLayout - not component
      {children}
                End UsersLayout - not component
    </div>
  );
};

export default UsersLayout;