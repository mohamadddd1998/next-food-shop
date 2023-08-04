import Link from "next/link";

const Empty = ({ message }) => {
  return (
    <div className="cart-empty">
      <div className="text-center">
        <div>
          <i
            className="bi bi-exclamation-diamond text-danger"
            style={{ fontSize: "80px" }}
          ></i>
        </div>
        <h4 className="text-bold">{message}</h4>
        <Link href="/" className="btn btn-outline-dark mt-3">
          صفحه ی اصلی
        </Link>
      </div>
    </div>
  );
};
export default Empty;
