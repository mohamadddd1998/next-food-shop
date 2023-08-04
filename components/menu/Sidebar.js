"use client";
import { useState } from "react";

const Sidebar = ({ handleFilter, categoryActive, sort, categories }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="col-sm-12 col-lg-3" id="sidebar">
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="نام محصول ..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <a
            className="input-group-text"
            id="basic-addon2"
            onClick={() => handleFilter("search", search)}
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-search"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="filter-list">
        <div className="form-label">دسته بندی</div>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={
                categoryActive == category.id
                  ? "my-2 cursor-pointer filter-list-active"
                  : "my-2 cursor-pointer"
              }
              onClick={() => handleFilter("category", category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <label className="form-label">مرتب سازی</label>
        <div className="form-check my-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => handleFilter("sortBy", "max")}
            checked={sort === "max" ? true : false}
          />
          <label
            className="form-check-label cursor-pointer"
            htmlFor="flexRadioDefault1"
          >
            بیشترین قیمت
          </label>
        </div>
        <div className="form-check my-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={() => handleFilter("sortBy", "min")}
            checked={sort === "min" ? true : false}
          />
          <label
            className="form-check-label cursor-pointer"
            htmlFor="flexRadioDefault2"
          >
            کمترین قیمت
          </label>
        </div>
        <div className="form-check my-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            onChange={() => handleFilter("sortBy", "bestseller")}
            checked={sort === "bestseller" ? true : false}
          />
          <label
            className="form-check-label cursor-pointer"
            htmlFor="flexRadioDefault3"
          >
            پرفروش ترین
          </label>
        </div>
        <div className="form-check my-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
            onChange={() => handleFilter("sortBy", "sale")}
            checked={sort === "sale" ? true : false}
          />
          <label
            className="form-check-label cursor-pointer"
            htmlFor="flexRadioDefault4"
          >
            با تخفیف
          </label>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
