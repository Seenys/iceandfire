import axios from "axios";

const API_URL = "https://anapioficeandfire.com/api/";

export const getHouses = async () => {
  const response = await axios.get(`${API_URL}houses`);
  return response.data;
};

export const getHousesById = async (id: string) => {
  const response = await axios.get(`${API_URL}houses${id}`);
  return response.data;
};
