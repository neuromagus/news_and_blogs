import "./newsitem.css"

export const NewsItem = () => {
    return (
        <div className="news-grid-item">
            <img alt="image item" src="/public/images/sports.jpg" />
            <h3 className="">
                Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare?
                <i className="fa-regular fa-bookmark bookmark"></i>
            </h3>
        </div>
    )
}

