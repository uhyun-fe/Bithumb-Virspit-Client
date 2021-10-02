import React, { useEffect, useState } from "react";
// test
import testImage from "../../assets/images/test.jpg";
// Api
import { orderApi, productApi, sportsApi } from "../../utils/api";

const HomeLogic = ({ match, history }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({ category_id: 0, is_team: false });
   const [categories, setCategories] = useState([]);
   const [nftList, setNftList] = useState([]);

   useEffect(() => {
      getAllSports();
   }, []);

   useEffect(() => {
      // // test
      // const testNFTList = [
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      // ];
      // setNftList(testNFTList);

      getProductList();
   }, [state.category_id]);

   // 전체 종목리스트 조회
   const getAllSports = async () => {
      try {
         setLoading(true);
         const {
            data: { data: list },
         } = await sportsApi.getSportsList({});
         setCategories([{ id: 0, name: "All" }].concat(list));
         console.log("전체종목리스트", list);

         // // test //
         // const data = [
         //    {
         //       iconUrl: "https://cdn-icons-png.flaticon.com/512/731/731956.png",
         //       id: 1,
         //       name: "배구",
         //    },
         //    {
         //       iconUrl: "https://cdn-icons-png.flaticon.com/512/731/731956.png",
         //       id: 2,
         //       name: "축구",
         //    },
         // ];
         // test end //
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
            data: { data: list },
         } = await productApi.getProductList({});
         console.log("상품리스트", list);

         // // test //
         // const data = [
         //    {
         //       count: 0,
         //       createdDate: "2021-10-01T06:25:29.083Z",
         //       description: "string",
         //       exhibition: false,
         //       id: 1,
         //       name: "테스트 NFT",
         //       nftUri: testImage,
         //       price: 100,
         //       startDate: "2021-10-01T06:25:29.084Z",
         //       type: "PLAYER",
         //       updatedDate: "2021-10-01T06:25:29.084Z",
         //    },
         // ];

         setNftList(list);
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

   return { loading, state, categories, nftList, setSelectedCategoryId, setIsTeam };
};

export default HomeLogic;
