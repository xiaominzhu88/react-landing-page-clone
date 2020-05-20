/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Footer from './Footer.js';
import Content2 from './Content2.js';
import Content4 from './content4';
import Signup from './Signup';
import FooterContainer from './FooterContainer';
import FooterContainer2 from './FooterContainer2';
import budibaseBig from './budibaseBig.svg';
import image8 from './8.png';
import fluid from './fluid.svg';
import fluidSmall from './9.png';

function App() {
  const uheadersectionStyle = css`
    z-index: 1;
    background-color: #f9f9f9 !important;
    box-sizing: border-box;
  `;

  const logoAndNav = css`
    @media (min-width: 992px) {
      max-width: 960px;
    }
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    display: block;
  `;

  const navbarStyle = css`
    @media (min-width: 992px) {
      flex-wrap: wrap;
    }
    @media (min-width: 992px) {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
  `;

  const aStyle = css`
    @media (min-width: 992px) {
      padding-top: 1rem;
      padding-bottom: 0.9375rem;
      padding-right: 1rem;
    }
    width: 12rem;
    display: inline-block;
    margin-right: 1rem;
    font-size: 1rem;
    white-space: nowrap;
    color: #0055ff;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    cursor: pointer;
  `;

  const h1Style = css`
    font-size: calc(1.8rem + (1vw - 3.75px) * 1.6901);
    line-height: calc(2.5rem + (1vw - 3.75px) * 2.2535);
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 0;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    color: #000333;
    box-sizing: border-box;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const formStyle = css`
    box-sizing: border-box;
    display: block;
    margin-top: 0em;
  `;

  const h2_style = css`
    font-size: calc(1.375rem + (1vw - 3.75px) * 1.1268);
    line-height: calc(1.875rem + 6 * ((100vw - 21rem) / 680));
    font-weight: 700;
    margin: 80px 0px 20px 0px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    color: #000333;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const pStyle = css`
    margin-bottom: 0 !important;
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.8;
    color: #000333;
    margin-top: 0;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    @media (min-width: 576px) {
      text-align: center;
    }
  `;
  const ulStyle = css`
    @media (min-width: 992px) {
      width: 100%;
      margin-left: 0;
    }
    @media (min-width: 992px) {
      align-items: center;
      padding-top: 0;
      padding-bottom: 0;
    }
    @media (min-width: 992px) {
      flex-direction: row;
    }
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  `;

  const liStyle = css`
    padding-bottom: 0.5rem !important;
    padding-top: 0.5rem !important;
    align-items: center !important;
    display: flex !important;
    box-sizing: border-box;
    text-align: -webkit-match-parent;
  `;

  const spanStyle = css`
    font-weight: 900;
    font-family: 'Font Awesome 5 Free';
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    font-size: 0.8125rem;
    color: #6a78d1 !important;
    margin-right: 1rem !important;
    box-sizing: border-box;
  `;

  return (
    <div
      className="App"
      css={css`
        display: block;
        margin: auto;
        font-family: 'Nunito', Helvetica, Arial, sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        color: #000333;
        text-align: left;
        background-color: #fff;
      `}
    >
      <header
        id="headerDropdown"
        className="u-header"
        css={css`
          top: 0;
          position: fixed;
          width: 100%;
          z-index: 1;
          box-sizing: border-box;
        `}
      >
        <div className="u-header-section" css={uheadersectionStyle}>
          <div id="logoandnav" css={logoAndNav}>
            <div
              className="sticky_inner"
              css={css`
                max-height: 90vh;
                box-sizing: border-box;
                display: block;
              `}
            >
              <nav css={navbarStyle} className="navbar">
                <div
                  className="u-header"
                  css={css`
                    box-sizing: border-box;
                    display: block;
                  `}
                >
                  <a
                    css={aStyle}
                    className="navbar-brand u-header__navbar-brand"
                    href="/"
                  >
                    <img
                      className="u-header__navbar-brand-default"
                      src={budibaseBig}
                      alt="Logo"
                      css={css`
                        @media (min-width: 576px) {
                          display: inline-block;
                        }
                        vertical-align: middle;
                        border-style: none;
                        box-sizing: border-box;
                      `}
                    />
                  </a>
                </div>

                <div
                  css={css`
                    @media (min-width: 992px) {
                      display: flex !important;
                      flex-basis: auto;
                    }
                    padding-bottom: 0 !important;
                    padding-top: 0 !important;
                    flex-grow: 1;
                    align-items: center;
                    box-sizing: border-box;
                  `}
                  id="navBarDropdown"
                  className="collapse navbar-collapse"
                >
                  <ul css={ulStyle} className="navbar-nav u-header__navbar-nav">
                    <li
                      css={css`
                        box-sizing: border-box;
                        display: list-item;
                        text-align: -webkit-match-parent;
                      `}
                      className="nav-item u-header__nav-item"
                    >
                      <a
                        css={css`
                          @media (min-width: 992px) {
                            padding-top: 1.375rem;
                            padding-bottom: 1.375rem;
                            padding-right: 0.875rem;
                            padding-left: 0.875rem;
                          }
                          color: #000333;
                          font-size: 18px;
                          font-weight: 400;
                          display: block;
                          text-decoration: none;
                          background-color: transparent;
                          box-sizing: border-box;
                          cursor: pointer;
                        `}
                        className="nav-link u-header__nav-link"
                        href="/build-a-web-app"
                      >
                        Build
                      </a>
                    </li>
                    <li
                      css={css`
                        box-sizing: border-box;
                        display: list-item;
                        text-align: -webkit-match-parent;
                      `}
                      className="nav-item u-header__nav-item"
                    >
                      <a
                        css={css`
                          @media (min-width: 992px) {
                            padding-top: 1.375rem;
                            padding-bottom: 1.375rem;
                            padding-right: 0.875rem;
                            padding-left: 0.875rem;
                          }
                          color: #000333;
                          font-size: 18px;
                          font-weight: 400;
                          display: block;
                          text-decoration: none;
                          background-color: transparent;
                          box-sizing: border-box;
                          cursor: pointer;
                        `}
                        className="nav-link u-header__nav-link"
                        href="/host-a-web-app"
                      >
                        Launch
                      </a>
                    </li>
                    <li
                      css={css`
                        box-sizing: border-box;
                        display: list-item;
                        text-align: -webkit-match-parent;
                      `}
                      className="nav-item u-header__nav-item"
                    >
                      <a
                        css={css`
                          color: #000333;
                          font-size: 18px;
                          font-weight: 400;
                          display: block;
                          text-decoration: none;
                          background-color: transparent;
                          box-sizing: border-box;
                          cursor: pointer;
                        `}
                        className="nav-link u-header__nav-link"
                        href="/manage-a-web-app"
                      >
                        Grow
                      </a>
                    </li>

                    <div
                      css={css`
                        @media (min-width: 992px) {
                          margin-left: auto;
                          align-items: center;
                        }
                        @media (min-width: 992px) {
                          padding-left: 1rem;
                        }
                        @media (min-width: 992px) {
                          flex-direction: row;
                        }
                        display: flex;
                        margin-bottom: 0;
                        list-style: none;
                        box-sizing: border-box;
                        justify-content: space-around;
                      `}
                      className=" navbar-nav u-header__nav-item-btn"
                    >
                      <li
                        css={css`
                          box-sizing: border-box;
                          display: list-item;
                          text-align: -webkit-match-parent;
                        `}
                        className="nav-item u-header__nav-item"
                      >
                        <a
                          css={css`
                            @media (min-width: 992px) {
                              padding-top: 1.375rem;
                              padding-bottom: 1.375rem;
                              padding-right: 0.875rem;
                              padding-left: 0.875rem;
                            }
                            color: #000333;
                            font-size: 18px;
                            font-weight: 400;
                            display: block;
                            text-decoration: none;
                            background-color: transparent;
                            box-sizing: border-box;
                            cursor: pointer;
                          `}
                          className="nav-link u-header__nav-link"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </li>

                      <li
                        css={css`
                          overflow: hidden;
                          position: relative;
                          box-sizing: border-box;
                          display: list-item;
                          text-align: -webkit-match-parent;
                        `}
                        className="nav-item u-header__nav-item hs-has-sub-menu hs-sub-menu-opened"
                      >
                        <a
                          css={css`
                            @media (min-width: 992px) {
                              padding-top: 1.375rem;
                              padding-bottom: 1.375rem;
                              padding-right: 0.875rem;
                              padding-left: 0.875rem;
                            }
                            color: #000333;
                            font-size: 18px;
                            font-weight: 400;
                            display: block;
                            text-decoration: none;
                            background-color: transparent;
                            box-sizing: border-box;
                            cursor: pointer;
                          `}
                          className="nav-link u-header__nav-link"
                          href="/"
                        >
                          Company ▾
                        </a>
                      </li>

                      <li
                        css={css`
                          @media (min-width: 992px) {
                            margin-left: auto;
                            align-items: center;
                          }
                          @media (min-width: 992px) {
                            padding-left: 1rem;
                          }
                          box-sizing: border-box;
                          display: list-item;
                          text-align: -webkit-match-parent;
                        `}
                        className="nav-item u-header__nav-item-btn"
                      >
                        <a
                          css={css`
                            cursor: pointer;
                            padding: 0.625rem 1.125rem;
                            font-size: 0.875rem;
                            line-height: 1.5;
                            color: #fff;
                            background-color: #0055ff;
                            box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
                            border-radius: 4px !important;
                            border-width: 0;
                            border-color: transparent;
                            border-style: solid;
                            border: 0.1rem solid transparent;
                            transition: all 0.2s ease-in-out;
                            text-decoration: none;
                            box-sizing: border-box;
                          `}
                          className="btn btn-sm btn-primary"
                          href="/"
                        >
                          Request Access
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className="bg.img-hero bg_light"
        css={css`
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
          background-color: #f9f9f9 !important;
          box-sizing: border-box;
          display: block;
        `}
      >
        <div
          className="container space-3-top--md space-3-top space-2-bottom"
          css={css`
            @media (min-width: 768px) {
              padding-top: 8.125rem;
            }
            padding-bottom: 4.0625rem;
            @media (min-width: 768px) {
              max-width: 720px;
            }
            @media (min-width: 1200px) {
              max-width: 1140px;
            }

            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            box-sizing: border-box;
            display: block;
          `}
        >
          <div
            className="row align-items-lg-center"
            css={css`
              @media (min-width: 992px) {
                -ms-flex-align: center !important;
                align-items: center !important;
              }
              display: flex;
              flex-wrap: wrap;
              margin-right: -15px;
              margin-left: -15px;
              box-sizing: border-box;
            `}
          >
            <div
              className="container-text-center"
              css={css`
                text-align: center !important;
                @media (min-width: 992px) {
                  flex: 0 0 100%;
                  max-width: 100%;
                }
                position: relative;
                width: 100%;
                min-height: 1px;
                padding-right: 15px;
                padding-left: 15px;

                margin-right: auto;
                margin-left: auto;
                box-sizing: border-box;
                display: block;
              `}
            >
              <div
                className="w-md-80 mx-auto mb-4"
                css={css`
                  @media (min-width: 768px) {
                    width: 80% !important;
                  }

                  margin-left: auto !important;
                  margin-right: auto !important;
                  margin-bottom: 1.5rem !important;
                  box-sizing: border-box;
                  display: block;

                  @media (min-width: 768px) {
                    width: 80% !important;
                  }
                `}
              >
                <h1 css={h1Style} className="display">
                  Build a web app you're proud of
                </h1>

                <p
                  className="lead mb-0"
                  css={css`
                    font-size: 1.2rem;
                  `}
                >
                  Budibase is an open-source low code platform, designed for
                  speed and making it easier to build web apps. When you need to
                  quickly build and launch a web application, Budibase has you
                  covered.
                </p>
              </div>

              <form className="js-validate" css={formStyle}>
                <div
                  className="row mx-gutters-2 mx-md-auto w-md-60 d-sm-flex justify-content-sm-center"
                  css={css`
                    @media (min-width: 768px) {
                      width: 60% !important;
                    }
                    @media (min-width: 768px) {
                      margin-left: auto !important;
                    }
                    @media (min-width: 768px) {
                      margin-right: auto !important;
                    }
                    @media (min-width: 576px) {
                      justify-content: center !important;
                    }
                    @media (min-width: 576px) {
                      display: flex !important;
                    }
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    text-align: center !important;
                  `}
                >
                  <div
                    className="col-sm-7 mb-2"
                    css={css`
                      padding-right: 8px;
                      padding-left: 8px;
                      margin-bottom: 0.5rem !important;
                      @media (min-width: 576px) {
                        flex: 0 0 58.33333%;
                        max-width: 58.33333%;
                      }
                      position: relative;
                      width: 100%;
                      min-height: 1px;
                      box-sizing: border-box;
                      display: block;
                    `}
                  >
                    <div
                      className="js-form-message"
                      css={css`
                        box-sizing: border-box;
                        display: block;
                      `}
                    >
                      <div
                        className="js-focus-state input-group form"
                        css={css`
                          transition: all 0.2s ease-in-out;
                          border-radius: 0.25rem;
                          position: relative;
                          display: flex;
                          flex-wrap: wrap;
                          align-items: stretch;
                          width: 100%;
                          box-sizing: border-box;
                        `}
                      >
                        <input
                          className="form-control form__input"
                          id="MERGE0"
                          placeholder="Submit Email Address"
                          css={css`
                            border-top-left-radius: 0;
                            border-bottom-left-radius: 0;

                            position: relative;
                            flex: 1 1 auto;
                            width: 1%;
                            margin-bottom: 0;

                            z-index: 2;
                            display: block;
                            height: calc(3.2rem + 2px);
                            padding: 0.75rem 1rem;
                            font-size: 1rem;
                            line-height: 1.7;
                            color: #000333;
                            background-color: #fff;
                            background-clip: padding-box;
                            border: 1px solid #d4d7dd;
                            border-radius: 0.25rem;
                            transition: all 0.2s ease-in-out;
                            overflow: visible;
                            margin: 0;
                            font-family: inherit;
                            box-sizing: border-box;
                            text-rendering: auto;
                            text-transform: none;
                            text-indent: 0px;
                            text-shadow: none;
                            text-align: start;
                            -webkit-appearance: textfield;
                            -webkit-rtl-ordering: logical;
                            cursor: text;
                            font: 400 11px system-ui;
                          `}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-sm-5 mb-2"
                    css={css`
                      .mx-gutters-2 > .col,
                      .mx-gutters-2 > [className*='col-'] {
                        padding-right: 8px;
                        padding-left: 8px;
                      }

                      margin-bottom: 0.5rem !important;
                      @media (min-width: 576px) {
                        flex: 0 0 41.66667%;
                        max-width: 41.66667%;
                      }
                      position: relative;
                      width: 100%;
                      min-height: 1px;
                      box-sizing: border-box;
                      display: block;
                    `}
                  >
                    <button
                      type="submit"
                      className="btn btn-block btn-primary"
                      css={css`
                        .btn:not(:disabled):not(.disabled) {
                          cursor: pointer;
                        }
                        width: 156.5px;
                        height: 64px;
                        display: block;
                        width: 100%;
                        color: #fff;
                        background-color: #0055ff;
                        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
                        border-radius: 4px !important;
                        border-width: 0;
                        border-color: transparent;
                        border-style: solid;
                        white-space: nowrap;
                        font-weight: 900;
                        font-family: 'Roboto', Helvetica, Arial, sans-serif;
                        text-align: center;
                        white-space: nowrap;
                        user-select: none;
                        border: 0.1rem solid transparent;
                        padding: 0.75rem 1rem;
                        font-size: 1rem;
                        line-height: 1.7;
                        transition: all 0.2s ease-in-out;
                        button,
                        html [type='button'],
                        [type='reset'],
                        [type='submit'] {
                          -webkit-appearance: button;
                        }
                        text-transform: none;
                        overflow: visible;
                        margin: 0;
                        box-sizing: border-box;
                        -webkit-writing-mode: horizontal-tb !important;
                        text-rendering: auto;
                        letter-spacing: normal;
                        word-spacing: normal;
                        text-indent: 0px;
                        text-shadow: none;
                        align-items: flex-start;
                        font: 400 11px system-ui;
                        button,
                        html [type='button'],
                        [type='reset'],
                        [type='submit'] {
                          -webkit-appearance: button;
                        }
                      `}
                    >
                      Request Access
                    </button>
                  </div>
                </div>
              </form>

              <img
                src={image8}
                css={css`
                  width: 1113.19px;
                  height: 802.95px;
                  display: block;
                  margin: 0 auto;
                `}
                alt="Saas hosting"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container space-2-bottom"
        css={css`
          display: block;
        `}
      ></div>

      <div
        className="rightmobile text-centre"
        css={css`
          @media (min-width: 576px) {
            text-align: center;
          }

          padding-bottom: 8.125rem;
          @media (min-width: 768px) {
            width: 80% !important;
          }
          margin: auto !important;
          position: relative;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
          box-sizing: border-box;
          display: block;
        `}
      >
        <div
          className="mb-5"
          css={css`
            margin-bottom: 2rem !important;
            box-sizing: border-box;
            display: block;
          `}
        >
          <h2 css={h2_style}>All-in-one low code platform</h2>
          <p css={pStyle}>
            Budibase is changing the way you build web applications, saving you
            time and giving you unmatched functionality. Unlike other low code
            platforms, Budibase provides you with a platform to build faster,
            host securely, and manage smarter.
          </p>

          <img
            css={css`
              margin-top: 2em;
            `}
            className="img-fluid"
            src={fluid}
            alt="SaaS hosting"
          />
        </div>
      </div>

      <div
        className="row justify-content-lg-between align-items-md-center space-3-bottom space-1-top space-2-bottom--lg col-12"
        css={css`
          padding-bottom: 8.125rm;
          padding-top: 2rem;
          @media (min-width: 768px) {
            align-items: center !important;
          }
          width: 100%;
          padding-right: 15px;
          display: flex;
          margin-left: -15px;
          box-sizing: border-box;
        `}
      >
        <div
          className="col-md-6 order-md-2 mb-5 mb-md-0"
          css={css`
            @media (min-width: 768px) {
              -webkit-order: 2;
            }
            @media (min-width: 768px) {
              max-width: 50%;
            }
            padding-right: 15px;
          `}
        >
          <div className="pl-md-4">
            <span
              className="u-label u-label--purple mb-3"
              css={css`
                color: #6a78d1;
                background-color: rgba(121, 110, 255, 0.1);
                display: inline-block;
                font-size: 1rem;
                font-weight: 900;
                padding: 0.625rem 1.125rem;
                border-radius: 5px;
                transition: 0.2s ease-in-out;
                margin-bottom: 1rem !important;
                box-sizing: border-box;
              `}
            >
              Build
            </span>

            <h3
              css={css`
                font-size: 1.4rem;
                margin-bottom: 0.5rem;
                font-weight: 700;
                line-height: 1.5;
                color: #000333;
                margin-top: 0;
                font-family: 'Roboto', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 1.17em;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
              `}
            >
              Design freely, build faster
            </h3>
            <h5
              css={css`
                font-size: 1.1rem;
                font-weight: 500;
                line-height: 1.5;
                color: #000333;
                margin-top: 0;
                font-family: 'Roboto', Helvetica, Arial, sans-serif;
                margin-block-start: 1.67em;
              `}
            >
              Currently in Alpha
            </h5>

            <p css={pStyle}>
              All tech startups run into the same problems; lengthy dev times,
              tedious repetition, and multiple headaches. Budibase solves these
              problems, speeding up the dev process by eliminating repetition
              and automating workflows.
            </p>
          </div>
          <li css={liStyle} className="d-flex align-items-center py-2">
            <span
              css={spanStyle}
              className="fa fa-check text-purple font-size-13 mr-3"
            ></span>
            Automate your backend
          </li>
          <li css={liStyle} className="d-flex align-items-center py-2">
            <span
              css={spanStyle}
              className="fa fa-check text-purple font-size-13 mr-3"
            ></span>
            Use components to build your web app
          </li>
          <li css={liStyle} className="d-flex align-items-center py-2">
            <span
              css={spanStyle}
              className="fa fa-check text-purple font-size-13 mr-3"
            ></span>
            Design with an intuitive UI builder
          </li>

          <div className="pl-md-4 space-1">
            <a className="text-purple border-bottom" href="/build-a-web-app">
              Build your web app &gt;
            </a>
          </div>
        </div>

        <img
          className="img-fluid"
          css={css`
            width: 35%;
            height: 286.88px;
            display: block;
            margin: 0 auto;
          `}
          src={fluidSmall}
          alt="Low code platform"
        />
      </div>

      <Content2 />
      <Content4 />

      <FooterContainer />
      <FooterContainer2 />
      <Signup />

      <Footer />
    </div>
  );
}

export default App;
