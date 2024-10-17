import { Blogs } from "./Components/Blogs"
import { Calendar } from "./Components/Calendar"
import { Footer } from "./Components/Footer"
import { Weather } from "./Components/Weather"
import { Header } from "./Components/Header"
import "./app.css"
import { Navbar } from "./Components/Navbar"


export const App = () => {
    return (
        <div className="container">
            <div className="news-blogs-app mylayouts">
                <Header />
                <div className="content">
                    <Navbar />
                    <div className="news">
                        <div className="news-headline">Headline</div>
                        <div className="news-grid">News grid</div>
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
