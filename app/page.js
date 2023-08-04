import Features from "@/components/Features";
import axios from "axios";
import ProductsTab from "@/components/product/ProductsTab";
import Contact from "@/components/Contact";
import { notFound } from "next/navigation";

const getProductsTabs = async () => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_API_URL}/products/products-tabs`,
      {
        cache: "no-store",
      }
    ); 
    return response.data;
  } catch (error) {
    return notFound();
  }
};
export const metadata = {
  title: "خانه",
};
const Home = async () => {
  const productsTab = await getProductsTabs();
  return (
    <>
      <Features />
      {productsTab.data ? (
        <ProductsTab {...productsTab.data} />
      ) : (
        <Empty message={"محصولی برای نمایش وجود ندارد"} />
      )}
      <Contact />
    </>
  );
};
export default Home;
