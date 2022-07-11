import Layout from '../layout/layout.js';

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = { title: 'My New Post', description: 'Post data from Static Props' };

  return {
    props: { posts },
  };
}
