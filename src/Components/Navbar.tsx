import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="user">
                <img alt="user image" src="/public/images/user.jpg" />
                <p>Marys blog</p>
            </div>
            <nav className="categories">
                <h1 className="nav-heading">Categories</h1>
                <div className="nav-links">
                    <a href="#" className="navlink">Bussiness</a>
                    <a href="#" className="navlink">Entertainment</a>
                    <a href="#" className="navlink">General</a>
                    <a href="#" className="navlink">Health</a>
                    <a href="#" className="navlink">Sports</a>
                    <a href="#" className="navlink">Science</a>
                    <a href="#" className="navlink">Technology</a>
                    <hr />
                    <a href="#" className="navlink">Bookmarks <i className="fa-regular fa-bookmark"></i></a>
                </div>
            </nav>
        </div>
    )
}
