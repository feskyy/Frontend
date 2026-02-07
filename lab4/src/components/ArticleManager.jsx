import React from "react";

const ArticleManager = () => {
    const [articles, setArticles] = React.useState([
        {id: 1, title: 'Article 1', summary: 'Summary of article 1.'},
        {id: 2, title: 'Article 2', summary: 'Summary of article 2.'},
    ]);

    const [title, setTitle] = React.useState('');
    const [summary, setSummary] = React.useState('');

    const onClickAdd = () => {
        if (!title.trim() || !summary.trim()) return;

        const newArticle = {
            id: Date.now(),
            title, 
            summary,

        };

        setArticles([...articles, newArticle]);
        setTitle('');
        setSummary('');

    };

    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));

    };

    return (
        <div>
            <h1>Articles</h1>
                <section>
                    <input
                    placeholder="Заголовок"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                    placeholder="Краткое содержание"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    />
                    <button onClick={onClickAdd}>Добавить статью</button>                         
                </section>



        </div>
    )