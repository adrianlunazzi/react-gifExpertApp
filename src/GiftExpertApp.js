import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
