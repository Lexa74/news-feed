import axios from "axios";
const apiKey = '44e76e190e004d17a52ba3892afefc2d'

export const getAllNews = async (sortBy: string = '') => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&sortBy=${sortBy}&apiKey=${apiKey}`)
    return response.data
}