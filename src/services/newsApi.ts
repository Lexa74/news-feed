import axios from "axios";
const apiKey = ''

export const getAllNews = async (sortBy: string = '') => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&sortBy=${sortBy}&apiKey=${apiKey}`)
    return response.data
}