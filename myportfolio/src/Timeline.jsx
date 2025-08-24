import './Timeline.css'

function Timeline() {
    return (
        <>
            <div className="timeline">
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon ">
                        <i className="lni-cake"></i>
                    </div>
                    <div className="timeline__event__date">
                        June 2025
                    </div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            University of Washington Graduation
                        </div>
                        <div className="timeline__event__description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium
                                id aut architecto harum quidem dolorem in!</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        <i className="lni-burger"></i>

                    </div>
                    <div className="timeline__event__date">
                        June 2021
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Highline Community College Graduation
                        </div>
                        <div className="timeline__event__description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium
                                id aut architecto harum quidem dolorem in!</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-slim"></i>

                    </div>
                    <div className="timeline__event__date">
                        June 2021
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Thomas Jefferson Highschool Gradutation
                        </div>
                        <div className="timeline__event__description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium
                                id aut architecto harum quidem dolorem in!</p>
                        </div>

                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-cake"></i>

                    </div>
                    <div className="timeline__event__date">
                        June 2002
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Birthday
                        </div>
                        <div className="timeline__event__description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium
                                id aut architecto harum quidem dolorem in!</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Timeline
