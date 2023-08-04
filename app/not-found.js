'use client'
import Link from "next/link";

const NotFound = (props) => {
  console.log(props)
  return (
    <div className="cart-empty">
      <div className="text-center">
        <h4 className="text-bold">مشکلی در بارگذاری صفحه پیش آمده است</h4>
        <Link href="/" className="btn btn-outline-dark mt-3">
          صفحه ی اصلی
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
