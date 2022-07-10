import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
// import nextjs from '../../public/images/next-js.svg';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>NestJS First Post</title>
        <Script src="strategy='lazyOnload' onLoad={()}" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      </Head>
      <h1>First Blog Post</h1>
      {/* <Image src={nextjs} /> */}
      <Image
        src="/images/next-js.svg"
        width={300}
        height={300}
        // layout="fill"
      />
    </>
  );
}
