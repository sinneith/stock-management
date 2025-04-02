import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getData = async (category: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/${category}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getStockShortage = async (category: string) => {
  try {
    const res = await getData(category);
    if (res) {
      return res.filter((item: { quantity: number }) => item.quantity === 0);
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
