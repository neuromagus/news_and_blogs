import "./header.css"

export const Header = () => {
    return (
        <>
            <header className="header">
                <h1 className="logo">News & Blogs</h1>
                <div className="search-bar">
                    <form>
                        <input type="text" placeholder="Search news" />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </header>
        </>
    )
}