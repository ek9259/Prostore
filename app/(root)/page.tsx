import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.ations";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return <ProductList data={latestProducts} title="Newest Arrival" ></ProductList>
}

export default Homepage;