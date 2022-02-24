import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const [title, poster] = params;
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
      <img src={`https:/image.tmdb.org/t/p/w500/${poster}`} />
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
