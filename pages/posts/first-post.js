import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>NestJS First Post</title>
        <Script src="strategy='lazyOnlod' onLoad={()}" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      </Head>
      <h1>First Blog Post</h1>
    </>
  );
}
