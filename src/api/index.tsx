import { axiosInstance } from "../lib/axios";

export const getRecentMovies = async () => {
  try {
    const response = await axiosInstance.get("/api/movies/recent");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMoviesByTitle = async (title: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/movies/search?title=${title}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/movies/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
