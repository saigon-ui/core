import styled from "@emotion/styled";
import SGLogoFill from "@asset/image/sg_logo_fill.svg";
import "@asset/scss/docs.scss";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  --text-yellow: #ffc800;
  --text-margin: 46px;

  .gradient {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    opacity: 30%;
    z-index: 0;

    .green {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        50% 90% at 0% 0%,
        #a6da2f 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    .red {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      background: radial-gradient(
        50% 90% at 0% 0%,
        #da2020 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .blue {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      /*
    background: linear-gradient(
      180deg,
      rgba(232, 197, 71, 0) 0%,
      rgba(71, 79, 232, 0.2) 1.17%,
      rgba(255, 255, 255, 0) 94.62%
    );
    */
      background: linear-gradient(
        180deg,
        rgba(71, 79, 232, 0.8) 1.17%,
        rgba(255, 255, 255, 0) 94.62%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
  }

  .section {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 1;

    font-family: Inconsolata, system-ui, -apple-system, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";

    .logo {
      width: 100%;
      margin-top: var(--text-margin);
      text-align: center;
      filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));
    }

    .info {
      margin: auto;
      margin-top: var(--text-margin);
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0 1rem;

      h1 {
        text-align: center;
        font-weight: bold;
        font-size: 24px;
      }

      h4 {
        margin-top: var(--text-margin);
        text-align: center;
        font-size: 16px;
      }

      p {
        margin-top: var(--text-margin);
        text-align: center;
        font-size: 16px;
        font-style: italic;
        color: darkgreen;
      }

      .coming-soon {
        flex: 2;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: darkgreen;

        section {
          width: 260px;
          margin: auto;
          border-radius: 1rem;
          border: 1px solid darkgreen;
          background-color: white;
          padding: 12px 24px 6px 24px;
        }

        h1 {
          display: inline-block;
          text-transform: uppercase;
          text-align: left;
          opacity: 1;
          transition: all 200ms ease-in-out;
          font-size: 22px;

          &.hide {
            opacity: 0;
          }
        }
      }

      @media (min-width: 1100px) {
        width: 1100px;
        padding: 0;

        h1 {
          font-size: 58px;
        }

        h4 {
          font-size: 28px;
        }

        p {
          font-size: 32px;
        }

        .coming-soon {
          section {
            width: 80%;
          }
        }
      }
    }
  }
`;

export default function MaintenancePage() {
  function Blinker() {
    const [counter, setCounter] = useState(0);
    const ref = useRef<any>({ id: 0 });
    useEffect(() => {
      clearInterval(ref.current.id);
      ref.current.id = setInterval(() => {
        setCounter((v) => v + 1);
      }, 1000);
    }, []);

    let txt = "",
      idx = counter % 5;
    for (let i = 0; i < idx; i++) txt += ".";

    return <h1 className={txt ? "" : "hide"}>{`Coming soon ${txt}`}</h1>;
  }

  /*
  Saigon UI is a React UI framework designed to simplify the development of web applications. 
  It offers pre-designed components and tools to enhance user interface creation while prioritizing 
  customization and ease of use. Check the site for detailed documentation and features.
   */
  return (
    <Wrapper>
      <div className="section">
        <div className="logo">
          <SGLogoFill width="180px" height="180px" />
        </div>
        <div className="info">
          <div>
            <h1>
              Build fast, flexible, responsive sites with{" "}
              <span style={{ color: "var(--text-yellow)" }}>Saigon UI</span>.
            </h1>
            <h4>
              Powerful, extensible, and prebuilt front-end components. Build and
              customize with Sass, utilize the grid system and rich components,
              and easily bring projects to life.
            </h4>
            <p>
              “<span style={{ color: "var(--text-yellow)" }}>Saigon UI</span>
              {" = "}
              <span style={{ color: "#41e0fd" }}>React</span>(
              <span style={{ color: "#712cf9" }}>Bootstrap</span>
              {" + "}
              <span style={{ color: "#D26AC2" }}>styled</span>)”
            </p>
          </div>
          <div className="coming-soon">
            <section>
              <h1 style={{ marginLeft: 5 }}>$</h1> <Blinker />
            </section>
          </div>
        </div>
      </div>
      <div className="gradient">
        <div className="green" />
        <div className="red" />
        <div className="blue" />
      </div>
    </Wrapper>
  );
}
