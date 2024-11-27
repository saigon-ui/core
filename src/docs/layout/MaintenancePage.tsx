import styled from "@emotion/styled";
import SGLogoFill from "@asset/image/sg_logo_fill.svg";
import "@asset/scss/docs.scss";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  --text-yellow: #ffc800;

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
      margin-top: 46px;
      text-align: center;
      filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));
    }

    .info {
      margin: auto;
      margin-top: 46px;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0 1rem;

      h1 {
        text-align: center;
        font-weight: bold;
        font-size: 30px;
      }

      h4 {
        margin-top: 46px;
        text-align: center;
        font-size: 17px;
      }

      p {
        margin-top: 46px;
        text-align: center;
        color: var(--text-yellow);
        font-size: 17px;
        font-style: italic;
      }

      .coming-soon {
        flex: 2;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: darkgreen;

        section {
          width: 460px;
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

          &.hide {
            opacity: 0;
          }

          span {
            letter-spacing: -18px;
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

    let txt = "";
    switch (counter % 4) {
      case 1:
        txt = ".";
        break;
      case 2:
        txt = "..";
        break;
      case 3:
        txt = "...";
        break;
    }
    return (
      <h1 className={txt ? "" : "hide"}>
        Coming soon
        <span>{txt}</span>
      </h1>
    );
  }
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
              customize with Sass, utilize the prebuilt grid system and
              components, and easily bring projects to life.
            </h4>
            <p>“Saigon UI = React(Bootstrap + styled)”</p>
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
