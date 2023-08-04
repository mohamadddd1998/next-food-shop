import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="col-sm-12 col-lg-3">
      <ul className="list-group">
        <li className="list-group-item">
          <Link href={"/profile"}>اطلاعات کاربر</Link>
        </li>
        <li className="list-group-item">
          <Link href={"/profile/orders"}>سفارشات</Link>
        </li>
        <li className="list-group-item">
          <Link href={"/profile/transactions"}>تراکنش ها</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
