import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import swr from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);

  const url = `https://swapi.dev/api/people/${slug}`;

  const { data, error, isLoading } = swr(slug ? url : null, fetcher);
  if (!data) return;

  const { name, height, eye_color, birth_year } = data;
  console.log(data);
  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>error.message</h1>;
  return (
    <Layout>
      <Card
        id={slug}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
