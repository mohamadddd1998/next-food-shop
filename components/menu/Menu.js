"use client";

import ProductsTabItem from "../product/ProductsTabItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Empty from "../Empty";
import { RequestFilterProductsApi } from "@/lib/api";

const Menu = ({ categories, products }) => {
  const router = useRouter();
  const [productsList, setProductsList] = useState(products.products);
  const [links, setLinks] = useState(products.meta.links.slice(1, -1));
  const [loading, setLoading] = useState(false);
  const [categoryActive, setCategoryActive] = useState();
  const [sort, setSort] = useState();
  const [flag,setFlage]=useState(false)
  useEffect(() => {
    setFlage(false)
    RequestFilterProductsApi(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/menu?`,
      setProductsList,
      setLoading,
      setLinks,
      flag,
      null,
      setCategoryActive,
      setSort,
      () => {}
    );
  }, []);

  const handleFilter = async (key, value) => {
    setFlage(true)
    RequestFilterProductsApi(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/menu?`,
      setProductsList,
      setLoading,
      setLinks,
      flag,
      { [key]: value },
      setCategoryActive,
      setSort,
      (query) => router.push(`/menu?${query}`, undefined, { shallow: true })
    );
  };

  return (
    <>
      <Sidebar
        handleFilter={handleFilter}
        categories={categories}
        sort={sort}
        categoryActive={categoryActive}
      />
      {productsList.length > 0 ? (
        <>
          {loading ? (
            <div className="col-sm-12 col-lg-9">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="spinner-border" role="status"></div>
              </div>
            </div>
          ) : (
            <div className="col-sm-12 col-lg-9">
              <div className="row gx-3">
                {productsList.length > 0 &&
                  productsList.map((product, index) => (
                    <ProductsTabItem product={product} key={index} />
                  ))}
              </div>
              <nav className="d-flex justify-content-center mt-5">
                <ul className="pagination">
                  {productsList.length > 0 &&
                    links.map((link, index) => (
                      <li
                        className={
                          link.active ? "page-item active" : "page-item"
                        }
                        key={index}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() => handleFilter("page", link.label)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className="col-sm-12 col-lg-9">
          <Empty message={"محصولی یافت نشد"} />
        </div>
      )}
    </>
  );
};
export default Menu;
