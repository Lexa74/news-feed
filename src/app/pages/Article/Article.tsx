import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNewsStore} from "../../../store/store";

export const Article = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const getNewsById = useNewsStore((state) => state.getNewsById);
    const articles = useNewsStore((state) => state.newsById);
    useEffect(() => {
        if (articleId != null) {
            getNewsById(articleId);
        }
    }, [articleId, getNewsById]);

    if (!articles[0]) {
        return <div>Статья не найдена</div>;
    }
    return (
        <>
            <h1>{articles[0].title}</h1>
            <p>{articles[0].description}</p>
        </>
    )
}