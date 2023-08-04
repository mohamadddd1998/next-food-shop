"use client";

import { useState } from "react";
import ProductsTabItem from "./ProductsTabItem";

const ProductsTab = ({ ...productsTab }) => {
  const [active, setActive] = useState("پیتزا");

  const filterProducts = (tab) => {
    setActive(tab);
  };
  return (
    <>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="divider-section"></div>
          <ul className="filters_menu">
            {productsTab.tabList.map((tab, index) => {
              return (
                <li
                  className={tab === active ? "active" : ""}
                  key={index}
                  onClick={() => filterProducts(tab)}
                >
                  {tab}
                </li>
              );
            })}
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {productsTab.tabPanel.map((panel) =>
                panel.map((product, index) => {
                  if (product.category === active) {
                    return <ProductsTabItem product={product} key={index} />;
                  }
                })
              )} 
            </div>
          </div>
          <div className="btn-box">
            <a href="">مشاهده بیشتر</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsTab;
