import React from 'react';
import styles from './PrimaryLayout.module.css';
import Head from 'next/head';

export interface IPrimaryLayout {
  children: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
