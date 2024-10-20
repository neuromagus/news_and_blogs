import { useState } from "react";
import { CategoryType } from "../types/categoryType";
import "./navbar.css"

type Props = {
    handleCategoryClick: (e: React.SyntheticEvent, category: CategoryType) => void;
}

export const Navbar = ({ handleCategoryClick }: Props) => {
    const [selected, setSelected] = useState<CategoryType>("business")
    
    const categories: CategoryType[] = ["business", "entertainment", "general",
        "health", "science", "sports", "technology"];

    const handleSelect = (e: React.SyntheticEvent, category: CategoryType) => {
        setSelected(category)
        handleCategoryClick(e, category)
    }

    return (
        <div className="navbar">
            <div className="user">
                <img alt="user image" src="/public/images/user.jpg" />
                <p>Marys blog</p>
            </div>
            <nav className="categories">
                <h1 className="nav-heading">Categories</h1>
                <div className="nav-links">
                    {categories.map(category => (
                        <a
                            key={category}
                            href="#"
                            className={`navlink ${selected === category ? 'selected' : ''}`}
                            onClick={e => handleSelect(e, category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    )
}
