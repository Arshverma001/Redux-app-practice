import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { depositeMoney, withdrawMoney } from "./state/action-creators";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);
  const { withdrawMoney, depositeMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposite/Withdraw money</h2>
      {/* <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.depositeMoney(100))}
      >
        +
      </button> */}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance : {balance}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositeMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
