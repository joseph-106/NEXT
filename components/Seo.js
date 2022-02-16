import Head from "next/head";

export default function Seo(props) {
  return (
    <Head>
      <title>{props.title} | Next Movies</title>
    </Head>
  );
}
