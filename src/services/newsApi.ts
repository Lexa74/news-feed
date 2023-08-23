import axios from "axios";
const apiKey = '44e76e190e004d17a52ba3892afefc2d'

export const getAllNews = async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    return response.data
}

export const getNewsById = async (nameId: string) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${nameId}&apiKey=${apiKey}`)
    return response.data
}