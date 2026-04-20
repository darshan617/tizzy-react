import { useGetPostsQuery } from "@/redux/apis/loginApi";
import { selectName, setName } from "@/redux/slices/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const data = useGetPostsQuery();
  const disptach = useDispatch();
  const name = useSelector(selectName);
  return (
    <div>
      home
    </div>
  );
};

export default Home;
