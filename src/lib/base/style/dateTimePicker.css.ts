import { css } from "@emotion/react";
import { ThemeOptions } from "../../saigon.types";

const DateTimePickerCSS = (theme: ThemeOptions) => css`
  .date-time-picker {
    --date-time-picker-headerHeight: 60px;
    --date-time-picker-bodyHeight: 250px;
    --date-time-picker-dateBlockWidth: 320px;

    border-radius: var(--${theme.cssVarPrefix}border-radius-sm);
    border: var(--${theme.cssVarPrefix}border-width)
      var(--${theme.cssVarPrefix}border-style)
      var(--${theme.cssVarPrefix}border-color);
    background-color: var(--${theme.cssVarPrefix}white);
    box-shadow: var(--${theme.cssVarPrefix}box-shadow);

    .anim-container {
      translate: 0%;
      height: 100%;

      &.prev {
        animation: anim-date-time-picker-prev
          var(--date-time-picker-time, 400ms) ease-in-out 0s 1 normal forwards;
      }
      &.next {
        animation: anim-date-time-picker-next
          var(--date-time-picker-time, 400ms) ease-in-out 0s 1 normal forwards;
      }

      @keyframes anim-date-time-picker-prev {
        from {
          translate: 0%;
        }
        to {
          translate: 100%;
        }
      }

      @keyframes anim-date-time-picker-next {
        from {
          translate: 0%;
        }
        to {
          translate: -100%;
        }
      }
    }

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: var(--sg-border-width) var(--sg-border-style)
        var(--sg-border-color);
      padding: 1rem 1rem 0 1rem;
      height: var(--date-time-picker-headerHeight);

      h5 {
        display: inline-block;
        font-weight: bold;
        font-size: medium;
        text-align: center;
        flex: 2;

        label {
          margin-left: 5px;
          padding: 0 5px;
        }

        .sec:hover {
          cursor: pointer;
          color: var(--sg-btn-bg);
        }
      }

      .hour12:hover {
        cursor: pointer;

        label {
          cursor: pointer;
          color: var(--sg-btn-hover-color);
          border-radius: var(--sg-border-radius-sm);
          background: var(--sg-btn-bg);
        }
      }
    }

    .body-block {
      display: flex;
      flex-direction: row;

      .btn {
        color: var(--sg-btn-bg);
        border-color: transparent;
        background: unset;

        &:hover {
          border-color: unset;
        }
      }

      .date-month-block {
        flex: 2;
        width: var(--date-time-picker-dateBlockWidth);

        .date-cont {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          height: var(--date-time-picker-bodyHeight);

          .day-list {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .day-item {
              opacity: 0.5;
              width: 14.2%;
              text-align: center;
              font-size: smaller;
            }
          }

          .cell-container {
            position: relative;
            overflow: hidden;
            flex: 2;
            width: 100%;

            .cell-sheet {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              position: absolute;
              margin-top: 1rem;
              width: 100%;
              top: 0;
            }

            .cell {
              width: 14.2%;
              text-align: center;
              padding-top: 0.25rem;
              padding-bottom: 0.25rem;
              font-size: smaller;
              border: var(--sg-border-width) var(--sg-border-style) transparent;
              border-radius: var(--sg-border-radius-sm);

              &.gray {
                opacity: 0.35;
              }

              &.hide {
                opacity: 0;
              }

              &:hover {
                cursor: pointer;
                background: rgba(0, 0, 0, 0.1);
              }

              &.active {
                color: var(--sg-btn-color);
                border: var(--sg-border-width) var(--sg-border-style)
                  var(--sg-btn-border-color);
                background: var(--sg-btn-bg);

                &:hover {
                  cursor: pointer;
                  color: var(--sg-btn-hover-color);
                  border: var(--sg-border-width) var(--sg-border-style)
                    var(--sg-btn-hover-border-color);
                  background: var(--sg-btn-hover-bg);
                }
              }

              &.highlight {
                border: var(--sg-border-width) var(--sg-border-style)
                  var(--sg-btn-border-color);
              }

              &:hover(:not(.hide)) {
                cursor: pointer;
                color: var(--sg-btn-hover-color);
                border: var(--sg-border-width) var(--sg-border-style)
                  var(--sg-btn-hover-border-color);
              }
            }
          }
        }

        .month-cont {
          position: relative;
          height: var(--date-time-picker-bodyHeight);
          overflow: hidden;

          .month-body {
            position: absolute;
            top: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
            width: 100%;
            height: 100%;

            .month-row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              .cell {
                width: 30%;
                text-align: center;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                font-size: smaller;
                border: var(--sg-border-width) var(--sg-border-style)
                  rgba(0, 0, 0, 0);
                border-radius: var(--sg-border-radius-sm);

                &:hover {
                  cursor: pointer;
                  background: rgba(0, 0, 0, 0.1);
                }

                &.active {
                  color: var(--sg-btn-color);
                  border: var(--sg-border-width) var(--sg-border-style)
                    var(--sg-btn-border-color);
                  background: var(--sg-btn-bg);

                  &:hover {
                    cursor: pointer;
                    color: var(--sg-btn-hover-color);
                    border: var(--sg-border-width) var(--sg-border-style)
                      var(--sg-btn-hover-border-color);
                    background: var(--sg-btn-hover-bg);
                  }
                }

                &.highlight {
                  border: var(--sg-border-width) var(--sg-border-style)
                    var(--sg-btn-border-color);
                }
              }
            }
          }
        }
      }

      .time-block {
        display: flex;
        flex-direction: column;
        border-left: var(--sg-border-width) var(--sg-border-style)
          var(--sg-border-color);

        .time-body {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 250px;

          .time-col {
            width: 40px;
            overflow-y: scroll;

            &::-webkit-scrollbar {
              width: 5px;
            }
            ::-webkit-scrollbar-track {
              background: #f1f1f1;
              visibility: hidden;
            }

            ::-webkit-scrollbar-thumb {
              background: #888;
              visibility: hidden;
            }

            &:hover {
              ::-webkit-scrollbar-track {
                visibility: visible;
              }
              ::-webkit-scrollbar-thumb {
                background: #555;
                visibility: visible;
              }
            }

            &.bcenter {
              border-left: var(--sg-border-width) var(--sg-border-style)
                var(--sg-border-color);
              border-right: var(--sg-border-width) var(--sg-border-style)
                var(--sg-border-color);
            }

            .cell {
              text-align: center;
              font-size: smaller;
              padding-top: 0.25rem;
              padding-bottom: 0.25rem;
              border-radius: var(--sg-border-radius-sm);

              &:hover {
                cursor: pointer;
                background: rgba(0, 0, 0, 0.1);
              }

              &.active {
                color: var(--sg-btn-color);
                border: var(--sg-border-width) var(--sg-border-style)
                  var(--sg-btn-border-color);
                background: var(--sg-btn-bg);

                &:hover {
                  cursor: pointer;
                  color: var(--sg-btn-hover-color);
                  border: var(--sg-border-width) var(--sg-border-style)
                    var(--sg-btn-hover-border-color);
                  background: var(--sg-btn-hover-bg);
                }
              }
            }
          }
        }
      }

      .year-cont {
        display: flex;
        flex-direction: column;
        border-left: var(--sg-border-width) var(--sg-border-style)
          var(--sg-border-color);

        .year-body {
          padding: 1rem;
          width: 100%;
          height: 250px;
          overflow-y: scroll;

          .year-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .cell {
              width: 30%;
              text-align: center;
              padding-top: 0.25rem;
              padding-bottom: 0.25rem;
              font-size: smaller;
              border: var(--sg-border-width) var(--sg-border-style)
                rgba(0, 0, 0, 0);
              border-radius: var(--sg-border-radius-sm);

              &:hover {
                cursor: pointer;
                background: rgba(0, 0, 0, 0.1);
              }

              &.active {
                color: var(--sg-btn-color);
                border: var(--sg-border-width) var(--sg-border-style)
                  var(--sg-btn-border-color);
                background: var(--sg-btn-bg);

                &:hover {
                  cursor: pointer;
                  color: var(--sg-btn-hover-color);
                  border: var(--sg-border-width) var(--sg-border-style)
                    var(--sg-btn-hover-border-color);
                  background: var(--sg-btn-hover-bg);
                }
              }

              &.highlight {
                border: var(--sg-border-width) var(--sg-border-style)
                  var(--sg-btn-border-color);
              }
            }
          }
        }
      }
    }

    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: var(--sg-border-width) var(--sg-border-style)
        var(--sg-border-color);
      padding: 0.5rem 1rem;

      .btn {
        min-width: 25%;
      }
    }
  }
`;

export default DateTimePickerCSS;
