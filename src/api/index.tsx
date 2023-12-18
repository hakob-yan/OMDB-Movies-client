import { axiosInstance } from "../lib/axios";

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get(`/api/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addUser = async (userName: string) => {
  try {
    const response = await axiosInstance.post(`/api/users/add`, {
      user_name: userName,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

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
export const deleteMovieById = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/api/movies/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
