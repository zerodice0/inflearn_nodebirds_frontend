import React from 'react';
import Link from 'next/link';
import {Menu, Input, Button} from 'antd';

const AppLayout = ({children}) => {
  return <div>
    <Menu mode="horizontal">
      <Menu.Item key="home"><Link href="/">Node Birds</Link></Menu.Item>
      <Menu.Item key="profile"><Link href="/profile">Profile</Link></Menu.Item>
      <Menu.Item key="mail">
        <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
      </Menu.Item>
      <Menu.Item key="signup">
        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </Menu.Item>
    </Menu>
    <div>
      {children}
    </div>
  </div>;
};

export default AppLayout;