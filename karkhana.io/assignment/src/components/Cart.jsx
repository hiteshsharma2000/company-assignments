import React from "react";

function Cart({ cart, total, handleDelete }) {
  const discount = total * 0.1;
  const grandTotal = total - discount + 4;

  return (
    <div className="Cart">
      <div style={{ margin: "25px" }}>
        <div
          className="user"
          style={{
            backgroundColor: "#F6F6F6",
            fontSize: "1.2em",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <i class="bx bxs-user-circle"></i>&nbsp;&nbsp;&nbsp;jimmy
          </span>
          <i class="bx bxs-comment-edit"></i>{" "}
        </div>
        <div id="items">
          {cart.map((item, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h3> {item.name} </h3>
              <h3>${item.price.toFixed(2)}</h3>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                <i class="bx bx-coffee-togo"></i>
              </button>
            </div>
          ))}
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Subtotal:</h3>
          <h3> ${total.toFixed(2)}</h3>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Discount (10%):</p>
          <p>${discount.toFixed(2)}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Gratuity: </p>
          <p>$4.00</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Total:</h3>
          <h3> ${grandTotal.toFixed(2)}</h3>
        </div>
      </div>
      <div
        id="bottom"
        style={{
          margin: "25px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ border: "2px dashed gray", width: "90%" }}>
          <p style={{ display: "flex", placeContent: "center" }}>Add voucher</p>
        </div>
        <button style={{ width: "91%" }}>Print Reciept</button>
      </div>
    </div>
  );
}

export default Cart;
