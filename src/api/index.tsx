import { axiosInstance } from "../lib/axios";

export const getRecentMovies = async () => {
    try {
        const response = await axiosInstance.get("/api/movies/recent")
        return response.data
    } catch (error) {
        console.log(error);

    }
}