import React from "react";
import CartProducts from "./CartProducts";
import FindBestCombinatorComponent from "../_components/FindBestCombinatorComponent";

export default function ShopAppIndex() {

  return (
    <div>
      <CartProducts/>
      <hr />
      <FindBestCombinatorComponent/>
    </div>
  );
}