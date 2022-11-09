import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isloading,
  };
};
