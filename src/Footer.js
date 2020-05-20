/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import budibaseWhiteEmblem from './budibase.svg';
import twitter from './twitter.png';
export default function Footer() {
  const footerAStyle = css`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
    display: block;
    text-decoration: none;
    a:-webkit-any-link {
      cursor: pointer;
    }
  `;
  const footerh3Style = css`
    color: #fff !important;
    margin-bottom: 1rem !important;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const footerDivStyle = css`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    box-sizing: border-box;
  `;

  const divRowStyle = css`
    margin-bottom: 3rem !important;
    @media (min-width: 768px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
  `;

  return (
    <footer
      className="bg-dark"
      css={css`
        background-color: #000333 !important;
        display: block;
        box-sizing: border-box;
      `}
    >
      <div
        className="container space-2"
        css={css`
          padding-top: 4.0625rem;
          padding-bottom: 4.0625rem;
          @media (min-width: 768px) {
            max-width: 720px;
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
          className="row justify-content-md-between"
          css={css`
            @media (min-width: 768px) {
              justify-content: space-between !important;
            }
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
            box-sizing: border-box;
          `}
        >
          <div
            className="col-6 col-md-3 col-lg-2 order-lg-3 mb-7 mb-lg-0"
            css={divRowStyle}
          >
            <h3 css={footerh3Style} className="h6 text-white mb-3">
              Company
            </h3>

            <div
              className="list-group list-group-flush list-group-transparent"
              css={footerDivStyle}
            >
              <a
                css={footerAStyle}
                className="list-group-item list-group-item-action"
                href="/about"
              >
                About
              </a>
            </div>

            <div
              css={footerDivStyle}
              className="list-group list-group-flush list-group-transparent"
            >
              <a
                css={footerAStyle}
                className="list-group-item list-group-item-action"
                href="/privacy"
              >
                Privacy Policy
              </a>
            </div>

            <div
              css={footerDivStyle}
              className="list-group list-group-flush list-group-transparent"
            >
              <a
                css={footerAStyle}
                className="list-group-item list-group-item-action"
                href="/careers"
              >
                Careers
              </a>
            </div>
          </div>

          <div
            css={divRowStyle}
            className="col-6 col-md-3 col-lg-2 order-lg-4 mb-7 mb-lg-0"
          >
            <h3 css={footerh3Style} className="h6 text-white mb-3">
              Features
            </h3>

            <div className="list-group list-group-flush list-group-transparent">
              <a
                css={footerAStyle}
                className="list-group-item list-group-item-action"
                href="/build-a-web-app"
              >
                Build a web app
              </a>
            </div>
            <div className="list-group list-group-flush list-group-transparent">
              <a
                css={footerAStyle}
                className="list-group-item list-group-item-action"
                href="/host-a-web-app"
              >
                Host a web app
              </a>
            </div>
            <div className="list-group list-group-flush list-group-transparent">
              <a
                css={footerAStyle}
                className="list-group-item list-group-item-action"
                href="/manage-a-web-app"
              >
                Manage a web app
              </a>
            </div>
          </div>

          <div
            css={divRowStyle}
            className="col-6 col-md-3 col-lg-2 order-lg-4 mb-7 mb-lg-0"
          >
            <h3 css={footerh3Style} className="h6 text-white mb-3">
              Information
            </h3>

            <div className="list-group list-group-flush list-group-transparent">
              <a
                css={footerAStyle}
                className="list-group-item list-group-item-action"
                href="/blog"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2 order-lg-6 mb-7 mb-lg-0">
            <h3 css={footerh3Style} className="h6 text-white mb-3">
              Get In Touch
            </h3>

            <div
              css={divRowStyle}
              className="list-group list-group-flush list-group-transparent"
            >
              <a
                css={css`
                  margin-left: 6px;
                  color: rgba(255, 255, 255, 0.7);
                  font-size: 0.875rem;
                  display: block;
                  text-decoration: none;
                  a:-webkit-any-link {
                    cursor: pointer;
                  }
                `}
                className="list-group-item list-group-item-action"
                href="/"
              >
                Contact Us
              </a>

              <img
                src={twitter}
                css={css`
                  height: 17.5px;
                  height: 29px;
                `}
                alt="twitter"
              />
            </div>
          </div>

          <div
            css={css`
              align-items: flex-start !important;
              flex-direction: column !important;
              display: flex !important;
              position: relative;
              width: 100%;
              min-height: 1px;
              padding-right: 15px;
              padding-left: 15px;
              box-sizing: border-box;
            `}
            className="col-lg-4 order-lg-1 d-flex align-items-start flex-column"
          >
            <a
              css={css`
                display: inline-block !important;
                color: #0055ff;
                text-decoration: none;
                background-color: transparent;
                box-sizing: border-box;
                cursor: pointer;
              `}
              className="d-inline-block mb-5"
              href="/"
              aria-label="Space"
            >
              <img
                src={budibaseWhiteEmblem}
                alt="Logo"
                css={css`
                  width: 40px;
                  max-width: 100%;
                  vertical-align: middle;
                  border-style: none;
                  box-sizing: border-box;
                `}
              />
            </a>

            <p
              css={css`
                color: #d8d8d8 !important;
                text-rendering: optimizeLegibility;
                font-size: 0.8rem;
                font-weight: 400;
                margin-top: 0;
                margin-bottom: 1rem;
                box-sizing: border-box;
                display: block;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
              `}
              className="small text-muted"
            >
              All rights reserved. ©Budibase 2019
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
