import { Blogs } from "./Components/Blogs"
import { Calendar } from "./Components/Calendar"
import { Footer } from "./Components/Footer"
import { Weather } from "./Components/Weather"
import { Header } from "./Components/Header"
import "./app.css"
import { Navbar } from "./Components/Navbar"
import { NewsItem } from "./Components/NewsItem"


export const App = () => {
    return (
        <div className="container">
            <div className="news-blogs-app mylayouts">
                <Header />
                <div className="content">
                    <Navbar />
                    <div className="news">
                        <div className="news-headline">
                            <img alt="Headline image" src="/public/images/tech.jpg" />
                            <h2 className="news-headline-title">
                                Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h2>
                        </div>
                        <div className="news-grid">
                            
                            <NewsItem />
                        </div>
                    </div>
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
