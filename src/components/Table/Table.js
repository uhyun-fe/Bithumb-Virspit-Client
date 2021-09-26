import React from "react";

// Styles
import { TableArea } from "./Table.style";
import { LeftFlexDiv } from "../../assets/styles/basic.style";

// contents: [{th: "상품명", td: "test product"}];
const Table = ({ contents }) => {
   return (
      <TableArea>
         {contents.map((content, i) => (
            <LeftFlexDiv key={i} className="tr">
               <span className="th">{content.th}</span>
               <span>{content.td}</span>
            </LeftFlexDiv>
         ))}
      </TableArea>
   );
};

export default Table;
