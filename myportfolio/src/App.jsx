import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Timeline from "./Timeline.jsx";
import Projects from "./Projects.jsx";


function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <h3 className="text-white">Mirafe-Joy Aoanan</h3>
                </div>
            </nav>
            <section className="bg-dark text-light">
                <div className="container">
                    <div className="intro">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, autem dolor dolore eaque nostrum
                                nulla optio voluptate! Aliquam animi corporis, dolore harum magnam nemo qui quod voluptatem.
                                Atque dolore esse exercitationem ipsa nostrum quaerat, reprehenderit.</p>
                        </div>
                        <div>
                            <img src="/assets/Portfolioimg.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="myTimeLine">
                <Timeline></Timeline>
            </section>

            <section className="bg-dark text-light">
                <div className="container">
                    <h2>Projects</h2>
                </div>
                
            </section>

        </>
    )
}

export default App
