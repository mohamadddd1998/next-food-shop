import Menu from "@/components/menu/Menu";
import axios from "axios";
import { notFound } from "next/navigation";

const getCategories = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_API_URL}/categories`, {
      cache: "no-store",
    });
    return response.data;
  } catch (error) {
    return notFound();
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_API_URL}/menu`, {
      cache: "no-store",
    });
    return response.data.data;
  } catch (error) {
    return notFound();
  }
};
export const metadata = {
  title: "منو",
};
const MenuPage = async () => {
  const categories = await getCategories();
  const products = await getProducts();
  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <Menu products={products} categories={categories.data} />
        </div>
      </div>
    </section>
  );
};
export default MenuPage;
