import axios from "axios";
import { ApiResponse, Image } from "./images-api.types";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos"
});

export const requestImagesByQuery = async (query: string = "", page: number = 1): Promise<Image[]> => {
  const response = await instance.get<ApiResponse>(
    `?client_id=1JiscWumc7hyT3HnHO9G5joNOUGyAs6VivZWQD9gP6c&page=${page}&query=${query}`
  );
  return response.data.results;
};

