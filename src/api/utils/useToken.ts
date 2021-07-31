import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString!);
    return userToken;
  };

  const existingToken = getToken();

  const [token, setToken] = useState(existingToken);

  const saveToken = (userToken: any) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
