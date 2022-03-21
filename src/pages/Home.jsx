import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    (function () {
      // Init
      var container = document.getElementById("container"),
        inner = document.getElementById("inner");

      // Mouse
      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function (e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function () {
          return "(" + this.x + ", " + this.y + ")";
        },
      };

      // Track the mouse position relative to the center of the container.
      mouse.setOrigin(container);

      //----------------------------------------------------

      var counter = 0;
      var refreshRate = 10;
      var isTimeToUpdate = function () {
        return counter++ % refreshRate === 0;
      };

      //----------------------------------------------------

      var onMouseEnterHandler = function (event) {
        update(event);
      };

      var onMouseLeaveHandler = function () {
        inner.style = "";
      };

      var onMouseMoveHandler = function (event) {
        if (isTimeToUpdate()) {
          update(event);
        }
      };

      //----------------------------------------------------

      var update = function (event) {
        mouse.updatePosition(event);
        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
      };

      var updateTransformStyle = function (x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };

      //--------------------------------------------------------

      container.onmousemove = onMouseMoveHandler;
      container.onmouseleave = onMouseLeaveHandler;
      container.onmouseenter = onMouseEnterHandler;
    })();
  }, []);

  return (
    <>
      <section className="homepage">
        <div id="container">
          <div id="inner">
            <figure>Hello</figure>
            <article>
              <h1>I’M CUNEYD</h1>
              <h2>FRONT-END DEVELOPER</h2>
              <h3>at Sekom from Turkey</h3>
            </article>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-left">
          <article className="slide-nav">
            <h4>👋HI</h4>
            <p>everyone</p>
          </article>
        </div>
        <div className="about-right">
          <article>
            <h5>About Me</h5>
            <p>
              My Name is Cüneyd, a Front-end developer, I create great sites and
              web applications with HTML and CSS and decorate them with{" "}
              <b>Javascript</b>.
            </p>
            <p>
              Photoshop, Sketch, Adobe XD, Figma, Zeplin etc. I create
              responsive and mobile compatible products by using BOOTSTRAP
              technologies. You can follow my works on <b>GitHub</b> and{" "}
              <b>CodePen</b>.
            </p>
            <p>
              If you have anything to ask, you can{" "}
              <a href="mailto:cuneydbolukogluu@gmail.com">
                <b>contact me</b>
              </a>
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
