import "./newsitem.css"
import { NewsType } from "./../types/newsType"

type Props = {
    article: NewsType
}

export const NewsItem = ({ article }: Props) => {
    return (
        <div className="news-grid-item">
            <img alt={article.title} src={article.urlToImage} />
            <h3 className="">
                {article.title}
                <i className="fa-regular fa-bookmark bookmark"></i>
            </h3>
        </div>
    )
}

