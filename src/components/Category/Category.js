import React from "react";

// Styles
import { CategoryItem } from "./Category.style";
import { CenterColumnFlexDiv } from "../../assets/styles/basic.style";

const Category = ({ categories, selected_id, selectCategory }) => {
   return (
      <CenterColumnFlexDiv>
         {categories.map((category, i) => (
            <CategoryItem
               key={i}
               image={category.iconUrl}
               className={selected_id === category.id ? "selected" : ""}
               onClick={() => selectCategory(category.id)}
            >
               <span>{category.name}</span>
            </CategoryItem>
         ))}
      </CenterColumnFlexDiv>
   );
};

export default Category;
