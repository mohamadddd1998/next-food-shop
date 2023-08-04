"use client";
import Image from "next/legacy/image";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalOrder = ({ orderItems }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        محصولات
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>محصولات سفارش شماره 44</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table align-middle">
            <thead>
              <tr>
                <th>محصول</th>
                <th>نام</th>
                <th>قیمت</th>
                <th>تعداد</th>
                <th>قیمت کل</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((orderItem, index) => (
                <tr key={index}>
                  <th>
                    <Image
                      className="img-fluid"
                      src={orderItem.product_primary_image}
                      alt=""
                      width={60}
                      height={60}
                      layout="responsive"
                    />
                  </th>
                  <td class="fw-bold">{orderItem.product_name}</td>
                  <td>{orderItem.price} تومان</td>
                  <td>{orderItem.quantity}</td>
                  <td>{orderItem.subtotal} تومان</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalOrder;
