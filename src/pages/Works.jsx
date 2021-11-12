import SwipeableViews from 'react-swipeable-views';

import arrow from '../assets/img/arrow.svg';

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    }
};

const Works = props => {

    const data = [
        {
            title: "Membership App",
            tools: "React - Firebase - Redux - Sass - Hooks",
            url: "https://github.com/cuneydbolukoglu/membership-app",
        },
        {
            title: "Scrum Board App via firebase & Redux",
            tools: "React - Firebase - Redux - Sass - Hooks - i18n - Bootstrap",
            url: "https://github.com/cuneydbolukoglu/Scrum-Board",
        },
        {
            title: "Audio Player - jQuery",
            tools: "JavaScript - jQuery - Audio",
            url: "https://codepen.io/cuneyd/pen/dyoqqMa"
        }
    ]


    return (
        <section className="works">
            <div className="works-content">
                <SwipeableViews enableMouseEvents>
                    {data.map((item, index) =>
                        <div style={Object.assign({}, styles.slide, styles.slide || index)} key={index}>
                            <p>
                                <a href={item.url} className="nav-a" target="blank">
                                    <h4>{item.title}</h4>
                                </a>
                                <h5>{item.tools}</h5>
                            </p>
                        </div>
                    )}
                </SwipeableViews>
            </div >
            <span style={{ bottom: "110px" }} className="slide-nav"><img style={{ transform: "rotate(180deg)" }} src={arrow} alt="" />SWIPE TO VIEW NEXT<img src={arrow} alt="" /></span>
        </section >
    )
}

export default Works;