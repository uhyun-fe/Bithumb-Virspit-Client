import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";
import { productApi } from "../../utils/api";

const SearchLogic = ({ match, history }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({ is_nft: true, total: 0, list: [], page: 1, size: 4 });

   useEffect(() => {
      getSearchedList();
   }, [state.page]);

   useEffect(() => {
      getSearchedList();
   }, [match.params.keyword]);

   // Set Search Result Category
   const setResultCategory = ({ is_nft }) => {
      setState({ ...state, is_nft });
   };

   // Get Searched List
   async function getSearchedList() {
      try {
         setLoading(true);
         const {
            data: {
               data: { list, totalCount },
            },
         } = await productApi.getProductList({ page: state.page, size: state.size, title: match.params.keyword });
         setState({ ...state, list, total: totalCount });
         // console.log("상품정보", list, totalCount);
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   // set page
   const paging = ({ target: { value } }) => {
      setState({ ...state, page: value });
   };

   return { loading, state, setResultCategory, paging };
};

export default SearchLogic;
