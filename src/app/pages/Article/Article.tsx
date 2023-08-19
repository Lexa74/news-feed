import React from "react";
import {useParams} from "react-router-dom";
import {useNewsStore} from "../../../store/store";

export const Article = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const news = useNewsStore((state) => state.news);

    const article = news.articles.find(article => article.source.id === articleId);

    if (!article) {
        return <div>Статья не найдена</div>;
    }
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
        </>
    )
}