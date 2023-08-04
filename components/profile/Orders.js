"use client";

import { useEffect, useState } from "react";

import ModalOrder from "./ModalOrder";
import { RequestProfileInternalApi } from "@/lib/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    RequestProfileInternalApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/profile/orders`,
      {
        page: 1,
      }, 
      setOrders,
      setLoading,
      setLinks,
      "orders" 
    );
  }, []);

  const handleOrderPaginate = (url) => {
    if (url) {
      let newUrl = new URL(url);
      const params = newUrl.searchParams;
      RequestProfileInternalApi(
        `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/profile/orders`,
        {
          page: params.get("page"),
        },
        setOrders,
        setLoading,
        setLinks,
        "orders"
      );
    }
  };
  return (
    <>
      {loading ? (
        <div className="col-sm-12 col-lg-9">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border" role="status"></div>
          </div>
        </div>
      ) : (
        <div className="col-sm-12 col-lg-9">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>شماره سفارش</th>
                  <th>آدرس</th>
                  <th>وضعیت</th>
                  <th>وضعیت پرداخت</th>
                  <th>قیمت کل</th>
                  <th>تاریخ</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders.map((order, index) => (
                    <tr key={index}>
                      <th>{order.id}</th>
                      <td>{order.address_title}</td>
                      <td>{order.status}</td>
                      <td>
                        {order.payment_status == "موفق" && (
                          <span className="text-success">پرداخت شده</span>
                        )}
                        {order.payment_status == "ناموفق" && (
                          <span className="text-danger">پرداخت نشده</span>
                        )}
                      </td>
                      <td>{order.paying_amount} تومان</td>
                      <td> {order.created_at}</td>
                      <td>
                        <ModalOrder orderItems={order.order_items} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <nav className="d-flex justify-content-center mt-5">
            <ul className="pagination">
              {links.length > 0 &&
                links.map((link, index) => {
                  if (index == 0) {
                    return (
                      <li
                        className="page-item"
                        key={index}
                        onClick={() => handleOrderPaginate(link.url)}
                      >
                        <a className="page-link" href="#">
                          قبلی
                        </a>
                      </li>
                    );
                  }
                  if (index == links.length - 1) {
                    return (
                      <li
                        className="page-item"
                        key={index}
                        onClick={() => handleOrderPaginate(link.url)}
                      >
                        <a className="page-link" href="#">
                          بعدی
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li
                      className={link.active ? "page-item active" : "page-item"}
                      key={index}
                      onClick={() => handleOrderPaginate(link.url)}
                    >
                      <a className="page-link" href="#">
                        {link.label}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Orders;
