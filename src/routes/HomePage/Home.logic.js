import React, { useEffect, useState } from "react";
// Api
import { productApi, sportsApi } from "../../utils/api";

const HomeLogic = ({ match, history }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({ category_id: 0, is_team: false, page: 1, size: 3, total: 0 });
   const [categories, setCategories] = useState([]);
   const [nftList, setNftList] = useState([]);

   useEffect(() => {
      getAllSports();
   }, []);

   useEffect(() => {
      if (state.page) getProductList();
   }, [state.category_id, state.page, state.is_team]);

   // 전체 종목리스트 조회
   const getAllSports = async () => {
      try {
         setLoading(true);
         const {
            data: { data: list },
         } = await sportsApi.getSportsList({});
         setCategories([{ id: 0, name: "All" }].concat(list));
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   };

   // 전체 상품리스트 조회
   const getProductList = async () => {
      try {
         setLoading(true);
         const {
            data: {
               data: { list, totalCount },
            },
         } = await productApi.getProductList({ page: state.page, size: state.size, sportsId: state.category_id || undefined, isTeam: state.is_team });
         setNftList(list);
         setState({ ...state, total: totalCount });
         // console.log("상품리스트", list);
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   };

   // set selected category
   const setSelectedCategoryId = (id) => {
      setState({ ...state, category_id: id });
   };

   // set selected is_team
   const setIsTeam = (bool) => {
      setState({ ...state, is_team: bool });
   };

   // set page
   const paging = ({ target: { value } }) => {
      setState({ ...state, page: value });
   };

   return { loading, state, categories, nftList, setSelectedCategoryId, setIsTeam, paging };
};

export default HomeLogic;
