import { Blogs } from "./Components/Blogs"
import { Calendar } from "./Components/Calendar"
import { Footer } from "./Components/Footer"
import { Weather } from "./Components/Weather"
import { Header } from "./Components/Header"
import "./app.css"
import { Navbar } from "./Components/Navbar"
import { NewsItem } from "./Components/NewsItem"
import { useEffect, useState } from "react"
import { NewsType } from "./types/newsType"


export const App = () => {
    const [headline, setHeadline] = useState<NewsType | null>(null)
    const [news, setNews] = useState([])
    const pageSize = 7
    const myAPIKey = import.meta.env.VITE_NEWSAPI_KEY
    const searchTerm = ""
    const category = "general"
    const URL = `https://newsapi.org/v2/top-headlines?q=${searchTerm}&category=${category}`
        + `&sortBy=publishedAt&pageSize=${pageSize}&apiKey=${myAPIKey}`

    useEffect(() => {
        const getNews = async () => {
            const response = await fetch(URL)

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const data = await response.json();

            setHeadline(data.articles[0])
            setNews(data.articles.slice(1, 7))
        }

        getNews()
    }, [URL])


    return (
        <div className="container">
            <div className="news-blogs-app mylayouts">
                <Header />
                <div className="content">
                    <Navbar />
                    {headline && (
                        <>
                            <div className="news">
                                <div className="news-headline">
                                    <img alt={headline.title}
                                        src={headline.urlToImage || "/public/images/no-img.png"} />
                                    <h2 className="news-headline-title">
                                        {headline?.title}
                                        <i className="fa-regular fa-bookmark bookmark"></i>
                                    </h2>
                                </div>
                                <div className="news-grid">
                                    {news && news.map((article, index) => (
                                        <NewsItem key={index} article={article}/>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    <div className="blogs">
                        <Blogs />
                    </div>
                    <div className="weather-calendar">
                        <Weather />
                        <Calendar />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
