/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import fluidSmallRight from './4.png';

export default function Content2() {
  const contentStyle = css`
    padding-bottom: 8.125rem;
    @media (min-width: 768px) {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: border-box;
  `;

  const divStyle = css`
    @media (min-width: 768px) {
      margin-bottom: 0 !important;
    }
    @media (min-width: 768px) {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
  `;
  const  span= css`
    color: #49c39e;
    background-color: rgba(73, 195, 158, 0.1);
    display: inline-block;
    font-size: 1rem;
    font-weight: 900;
    padding: 0.625rem 1.125rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    margin-bottom: 1rem !important;
    box-sizing: border-box;
  `;

  const h3Style = css`
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.5;
    color: #000333;
    margin-top: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const h5Style = css`
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.5;
    color: #000333;
    margin-top: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const liStyle = css`
    padding-bottom: 0.5rem !important;
    padding-top: 0.5rem !important;
    align-items: center !important;
    display: flex !important;
    box-sizing: border-box;
    text-align: -webkit-match-parent;
  `;

  const spanStyle3 = css`
    font-weight: 900;
    font-family: 'Font Awesome 5 Free';
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    font-size: 0.8125rem;
    color: #49c39e !important;
    margin-right: 1rem !important;
    box-sizing: border-box;
  `;

  return (
    <div
      css={contentStyle}
      className="row justify-content-lg-between align-items-md-center space-3-bottom space-2-bottom--lg col-12"
    >
      <div css={divStyle} className="col-md-6 mb-5 mb-md-0">
        <div
          className="pr-md-4"
          css={css`
            @media (min-width: 768px) {
              padding-right: 1.5rem !important;
            }
            box-sizing: border-box;
            display: block;
          `}
        >
          <span css={span} className="u-label u-label--green mb-3">
            Launch
          </span>
          <h3 css={h3Style}>Host securely, deploy easily</h3>
          <h5 css={h5Style}>Launch in 2020</h5>
          <p>
            We take care of hosting so you can focus on making your web
            application a success. We host your web applications using the
            secure and reliable AWS. If you prefer to manage hosting, that's
            completely fine - the power is in your hands.
          </p>
        </div>

        <li css={liStyle} className="d-flex align-items-center py-2">
          <span css={spanStyle3} className="fa fa-check text-green font-size-13 mr-3"></span>
          Host your web app in just a few clicks
        </li>
        <li css={liStyle} className="d-flex align-items-center py-2">
          <span css={spanStyle3} className="fa fa-check text-green font-size-13 mr-3"></span>
          Add your own custom domain
        </li>
        <li css={liStyle} className="d-flex align-items-center py-2">
          <span css={spanStyle3} className="fa fa-check text-green font-size-13 mr-3"></span>
          Controlled Privacy
        </li>

        <div
          css={css`
            padding-top: 2rem;
            padding-bottom: 2rem;
            @media (min-width: 768px) {
              padding-left: 1.5rem !important;
            }
            box-sizing: border-box;
            display: block;
          `}
          className="pl-md-4 space-1"
        >
          <a
            className="text-green border-bottom"
            href="/host-a-web-app"
            css={css`
              color: #6a78d1 !important;
              border-bottom: 1px solid #e3e6f0 !important;
              text-decoration: none;
              background-color: transparent;
              box-sizing: border-box;
              cursor: pointer;
            `}
          >
            Host your web app &gt;
          </a>
        </div>
      </div>

      <div
        className="col-md-6"
        css={css`
          @media (min-width: 768px) {
            -ms-flex-order: 1;
            order: 1;
          }
          @media (min-width: 768px) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
          }
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
          box-sizing: border-box;
          display: block;
        `}
      >
        <img
          className="img-fluid-right"
          src={fluidSmallRight}
          css={css`
            max-width: 100%;
            height: auto;
            vertical-align: middle;
            border-style: none;
            box-sizing: border-box;
            width: 300px;
            height: 168.75px;
          `}
          alt="App hosting"
        />
      </div>
    </div>
  );
}
