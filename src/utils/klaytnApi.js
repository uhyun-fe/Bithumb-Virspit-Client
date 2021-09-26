import axios from "axios";

const ACCOUNT_BASIC_URL = "https://wallet-api.klaytnapi.com/v2/account";
const KLAYTN_BASIC_URL = "https://node-api.klaytnapi.com/v1/klaytn";

const basic_config = {
   "x-chain-id": 1001,
   "Content-type": "application/json",
};

export const walletApi = {
   // 기본계정생성
   createAccount: (authorization) => axios({ method: "post", url: ACCOUNT_BASIC_URL, headers: { ...basic_config, Authorization: authorization } }),
   // 계정목록조회
   getAccountList: (authorization) => axios({ method: "get", url: ACCOUNT_BASIC_URL, headers: { ...basic_config, Authorization: authorization } }),
   // 1개 계정조회
   getAccountDetail: (authorization, address) =>
      axios({
         method: "get",
         url: ACCOUNT_BASIC_URL + `/${address}`,
         headers: { ...basic_config, Authorization: authorization },
      }),
   // 계정 삭제
   deleteAccount: (authorization, address) =>
      axios({
         method: "delete",
         url: ACCOUNT_BASIC_URL + `/${address}`,
         headers: { ...basic_config, Authorization: authorization },
      }),
   // 계정별 클레이튼 잔액 조회
   getBalanceOfAccount: (authorization, address) =>
      axios({
         method: "post",
         url: KLAYTN_BASIC_URL,
         headers: { ...basic_config, Authorization: authorization },
         data: JSON.stringify({ id: 1, jsonrpc: "2.0", method: "klay_getBalance", params: [address, "latest"] }),
      }),
};
