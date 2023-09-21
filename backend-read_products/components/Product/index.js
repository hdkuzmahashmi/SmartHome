import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <h2>Reviews</h2>
      <ul>
        {data.reviews &&
          data.reviews.map((review) => (
            <li key={review._id}>
              <small>{review.title}</small>
              <br></br>
              <small>{review.text}</small>
              <br></br>
              <small>{review.rating}</small>
            </li>
          ))}
      </ul>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
