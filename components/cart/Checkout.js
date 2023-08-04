const Checkout = ({ totalPrice, percentage }) => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-body p-4">
            <h5 className="card-title fw-bold">مجموع سبد خرید</h5>
            <ul className="list-group mt-4">
              <li className="list-group-item d-flex justify-content-between">
                <div>مجموع قیمت :</div>
                <div>{totalPrice} تومان</div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  تخفیف :<span className="text-danger ms-1">{percentage}%</span>
                </div>
                <div className="text-danger">
                  {(totalPrice * percentage) / 100} تومان
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>قیمت پرداختی :</div>
                <div>{totalPrice - (totalPrice * percentage) / 100} تومان</div>
              </li>
            </ul>
            <button className="user_option btn-auth mt-4">پرداخت</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
