"use client";
import { RequestProfileInternalApi } from "@/lib/api";
import { useEffect, useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    RequestProfileInternalApi(
      `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/profile/transactions`,
      {
        page: 1,
      },
      setTransactions,
      setLoading, 
      setLinks, 
      "transactions"
    );
  }, []);
  const handleTransactionPaginate = (url) => {
    if (url) {
      let newUrl = new URL(url);
      const params = newUrl.searchParams;
      RequestProfileInternalApi(
        `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/profile/transactions`,
        {
          page: params.get("page"),
        },
        setTransactions,
        setLoading,
        setLinks,
        "transactions"
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
                  <th>مبلغ</th>
                  <th>وضعیت</th>
                  <th>شماره پیگیری</th>
                  <th>تاریخ</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 &&
                  transactions.map((transaction, index) => (
                    <tr key={index}>
                      <th>{transaction.order_id}</th>
                      <td>{transaction.amount} تومان</td>
                      <td>
                        {transaction.status == "موفق" && (
                          <span className="text-success">
                            {transaction.status}
                          </span>
                        )}
                        {transaction.status == "ناموفق" && (
                          <span className="text-danger">
                            {transaction.status}
                          </span>
                        )}
                      </td>
                      <td>{transaction.trans_id || "ثبت نشده"}</td>
                      <td>{transaction.created_at}</td>
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
                        onClick={() => handleTransactionPaginate(link.url)}
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
                        onClick={() => handleTransactionPaginate(link.url)}
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
                      onClick={() => handleTransactionPaginate(link.url)}
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
export default Transactions;
