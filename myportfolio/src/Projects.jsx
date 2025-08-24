import './Projects.css'

function Projects() {
    return (
        <>
            <div className="myProjects">
                <div className="cards">

                    <input type="radio" id="radio-1" name="radio-card" checked/>
                    <article className="card" style="--angle:4deg">
                        <img className="card-img" src="https://picsum.photos/id/21/200/300" alt=""/>
                        <div className="card-data">
                            <span className="card-num">1/7</span>
                            <h2>Alejandro Escamilla</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque
                                atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                            <footer>
                                <label htmlFor="radio-7" aria-label="Previous">&#10094;</label>
                                <label htmlFor="radio-2" aria-label="Next">&#10095;</label>
                            </footer>
                        </div>
                    </article>


                    <input type="radio" id="radio-2" name="radio-card"/>
                    <article className="card" style="--angle:-8deg">
                        <img className="card-img" src="https://picsum.photos/id/30/200/300" alt=""/>
                        <div className="card-data">
                            <span className="card-num">2/7</span>
                            <h2>Shyamanta Baruah</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque
                                atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                            <footer>
                                <label htmlFor="radio-1" aria-label="Previous">&#10094;</label>
                                <label htmlFor="radio-3" aria-label="Next">&#10095;</label>
                            </footer>
                        </div>
                    </article>


                    <input type="radio" id="radio-3" name="radio-card"/>
                    <article className="card" style="--angle:-7deg">
                        <img className="card-img" src="https://picsum.photos/id/39/200/300" alt=""/>
                        <div className="card-data">
                            <span className="card-num">3/7</span>
                            <h2>Luke Chesser</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque
                                atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                            <footer>
                                <label htmlFor="radio-2" aria-label="Previous">&#10094;</label>
                                <label htmlFor="radio-4" aria-label="Next">&#10095;</label>
                            </footer>
                        </div>
                    </article>


                    <input type="radio" id="radio-4" name="radio-card"/>
                    <article className="card" style="--angle:11deg">
                        <img className="card-img" src="https://picsum.photos/id/103/200/300" alt=""/>
                        <div className="card-data">
                            <span className="card-num">4/7</span>
                            <h2>Ilham Rahmansyah</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque
                                atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                            <footer>
                                <label htmlFor="radio-3" aria-label="Previous">&#10094;</label>
                                <label htmlFor="radio-5" aria-label="Next">&#10095;</label>
                            </footer>
                        </div>
                    </article>


                    <input type="radio" id="radio-5" name="radio-card"/>
                    <article className="card" style="--angle:13deg">
                        <img className="card-img" src="https://picsum.photos/id/175/200/300" alt=""/>
                        <div className="card-data">
                            <span className="card-num">5/7</span>
                            <h2>petradr</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque
                                atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                            <footer>
                                <label htmlFor="radio-4" aria-label="Previous">&#10094;</label>
                                <label htmlFor="radio-6" aria-label="Next">&#10095;</label>
                            </footer>
                        </div>
                    </article>


                    <input type="radio" id="radio-6" name="radio-card"/>
                    <article className="card" style="--angle:-17deg">
                        <img className="card-img" src="https://picsum.photos/id/349/200/300" alt=""/>
                        <div className="card-data">
                            <span className="card-num">6/7</span>
                            <h2>Caleb George</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque
                                atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                            <footer>
                                <label htmlFor="radio-5" aria-label="Previous">&#10094;</label>
                                <label htmlFor="radio-7" aria-label="Next">&#10095;</label>
                            </footer>
                        </div>
                    </article>


                    <input type="radio" id="radio-7" name="radio-card"/>
                    <article className="card" style="--angle:20deg">
                        <img className="card-img" src="https://picsum.photos/id/401/200/300" alt=""/>
                        <div className="card-data">
                            <span className="card-num">7/7</span>
                            <h2>Austin Ban</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque
                                atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!</p>
                            <footer>
                                <label htmlFor="radio-6" aria-label="Previous">&#10094;</label>
                                <label htmlFor="radio-1" aria-label="Next">&#10095;</label>
                            </footer>
                        </div>
                    </article>
                </div>
            </div>

        </>
    )
}

export default Projects
