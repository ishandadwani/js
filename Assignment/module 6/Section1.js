import './/Sectionone.css'

export default function Section1() {


    return (
        <section className="sec1">

            <header>
                <nav className="navbar">
                    <div className="links d_flex space_around">
                        <div className="link1">
                            <ul>
                                <li>
                                    <a href="#">get the app</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link1">
                            <ul>

                                <li>
                                    <a href="#">investor relation</a>
                                </li>
                                <li>
                                    <a href="#">Add restaurant</a>
                                </li>
                                <li>
                                    <a href="#">log in</a>
                                </li>
                                <li>
                                    <a href="#">sign up</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="name">
                    <h1>zomato</h1>
                </div>
                <div className="pera">
                    <p>discover the best food and drinks in ahmedabad</p>
                </div>
                <div className="ser_bar_city d_flex specify_center">
                    <div className="optionmenue">
                        <select id="optionMenu">
                            <option value="option1">Ahmedabad</option>
                            <option value="option2">Rajkot</option>
                            <option value="option3">Surendranagar</option>
                        </select>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                </div>
            </header>
        </section>
    )
}