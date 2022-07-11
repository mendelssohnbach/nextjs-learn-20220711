import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from './layout/layout.js';

export default function Home() {
  return (
    <Layout home>
      <Link href="/posts/first-post">Go to First Post</Link>
    </Layout>
  );
}
