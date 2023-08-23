import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";

const NodeBird = ({Component}) => {
  return (
    <>
      <Head>
        <title>Node Bird</title>
      </Head>
      <AppLayout>
        <Component/>
      </AppLayout>
    </>
  );
};

export default NodeBird;