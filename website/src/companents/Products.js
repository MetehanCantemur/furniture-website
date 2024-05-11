import React from "react";
import { Data } from "../helpers/Data";
import "../styles/Menu.css";
import MenuItem from "./MenuItem";

export const Products = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Mobilyalar</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}

        
      </div>
    </div>
  );
};
