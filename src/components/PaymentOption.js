import React from "react";

export default function PaymentOption() {
  return (
    <div className="payment-option">
      <div className="range-section">
        <div className="range-tooltip">
          <span>18 ay</span>
        </div>
        <div className="range-container">
          <span className="bar">
            <span className="fill"></span>
          </span>
          <input type="range" min="6" max="18" step="3" />
        </div>
        <ul>
          <li>
            <p>6</p>
          </li>
          <li>
            <p>9</p>
          </li>
          <li>
            <p>12</p>
          </li>
          <li>
            <p>15</p>
          </li>
          <li>
            <p>18</p>
          </li>
        </ul>
      </div>
      <div className="payment-info">
        <ul>
          <li>
            <p>0%</p>
          </li>
          <li>
            <p>İlkin ödəniş 0 M</p>
          </li>
          <li>
            <p>Aylıq ödəniş 43.7 M</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
