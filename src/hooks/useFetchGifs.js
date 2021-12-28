import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifts(category).then((img) => {
      setstate({
        data: img,
        loading: false,
      });
    });
  }, [category]);
  return state;
};
