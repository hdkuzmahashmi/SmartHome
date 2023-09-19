import useSWR from "swr";

export default function AllProducts() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <section>
      {data.map((product) => (
        <div key={product.id}>
          <span>Name: {product.name}</span>
          <span>Description: {product.description}</span>
          <span>Price: {product.price}</span>
          <span>Currency: {product.currency}</span>
          <span>Category: {product.category}</span>
        </div>
      ))}
    </section>
  );
}
