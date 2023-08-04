import Empty from "@/components/Empty";
import Related from "@/components/product/Related";
import Single from "@/components/product/Single";
import axios from "axios";
import { notFound } from "next/navigation";

const getProduct = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_API_URL}/products/${slug}`
    );
    return await response.data;
  } catch (error) {
    return notFound()
  }
};
const getRelatedProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_API_URL}/random-products?count=4`
    );
    return await response.data;
  } catch (error) {
    return notFound()
  }
};
export const metadata = {
  title: "جزییات محصول",
};
const ProductPage = async ({ params }) => {
  const product = await getProduct(params.slug);
  const relatedProducts = await getRelatedProducts();
  return (
    <>
      {product.data && product.status == "success" ? (
        <Single product={product.data} />
      ) : (
        <Empty message={'محصولی برای نمایش وجود ندارد'} />
      )}
      <div className="divider-section"></div>
      {relatedProducts.data && relatedProducts.status == "success" ? (
        <Related products={relatedProducts.data} />
      ) : (
        <Empty message={'محصولی برای نمایش وجود ندارد'} />
      )}
    </>
  );
};
export default ProductPage;
