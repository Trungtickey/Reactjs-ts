import useSelection from "antd/es/table/hooks/useSelection";
import React from "react";
import { useSelector } from "react-redux";
import { StoreInterface } from "../store/bt3";

const bt3 = () => {
  const product = useSelector((state: StoreInterface) => state.userStore3);
  return (
    <div>
      {product.map((a) => (
        <>
          <p>ID: {a.id}</p>
          <p>Name: {a.name}</p>

          <p>Date: {a.price}</p>
          <p>Address: {a.quantity}</p>
        </>
      ))}
    </div>
  );
};

export default bt3;