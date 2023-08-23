'use client'

import Link from 'next/link';
import {Row, Col, Menu, Input, Button, Space} from 'antd';

const {Search} = Input;

const AppLayout = ({children}) => {
  const menuItems = [
    {
      label: (<Link href="/">Home</Link>),
      key: "home",
    },
    {
      label: (<Link href="/profile">Profile</Link>),
      key: "profile"
    },
    {
      label: (<Link href="/signup">Sign Up</Link>),
      key: "signup"
    }
  ];

  return <div>
    <Row>
      <Col span={3}>
        <Menu mode="horizontal" items={menuItems}/>
      </Col>
      <Col span={3} style={{verticalAlign: "middle"}}>
         <Search enterButton/>
      </Col>
      <Col style={{verticalAlign: "middle"}}>
        <Link href="/signup">
          <Button>SignUp</Button>
        </Link>
      </Col>
    </Row>
    <div>
      {children}
    </div>
  </div>;
};

export default AppLayout;
