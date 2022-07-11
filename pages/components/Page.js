import Layout from '../layout/layout.js';

export default function Page(props) {
  return (
    <Layout>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts = { title: 'ServerSide Post', description: 'Get It ServerSide rendering!' };

  return {
    props: posts,
  };
}
