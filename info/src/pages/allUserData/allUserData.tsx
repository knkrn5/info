import React, { useEffect } from "react";

import { fetchUserInfo } from "../../utils";

export function AllUserData() {
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserInfo();
      console.log("Fetched user info data:", data);
    };
    getData();
  }, []);
  
  return <div>All User Data</div>;
}
