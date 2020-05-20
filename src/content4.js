/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import content4img from './2.png';

export default function Content4() {
  const contentStyle = css`
    @media (min-width: 768px) {
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
      order: 2;
    }
    @media (min-width: 768px) {
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

  const span = css`
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
      className="row justify-content-lg-between align-items-md-center bottom--lg col-12"
    >
      <div css={divStyle} className="col-md-6 order-md-2 mb-5 mb-md-0">
        <div
          css={css`
            @media (min-width: 768px) {
              padding-left: 1.5rem !important;
            }
            box-sizing: border-box;
            display: block;
          `}
          className="pl-md-4"
        >
          <span css={span} className="u-label u-label--yellow mb-3">
            Manage
          </span>
          <h3 css={h3Style}>Manage smarter, grow quickly</h3>
          <h5 css={h5Style}>Launch in 2020</h5>
          <p>
            A single, centralised home for all your web application's activity
            including reporting and invoicing. Budibase's user management
            interface provides everything you need to know to make the right
            decisions for your new web application.
          </p>
        </div>
        <li css={liStyle} className="d-flex align-items-center py-2">
          <span
            css={spanStyle3}
            className="fa fa-check text-yellow  font-size-13 mr-3"
          ></span>
          One platform to manage your app, customers and payments
        </li>
        <li css={liStyle} className="d-flex align-items-center py-2">
          <span
            css={spanStyle3}
            className="fa fa-check text-yellow font-size-13 mr-3"
          ></span>
          A CRM to manage your customers
        </li>
        <li css={liStyle} className="d-flex align-items-center py-2">
          <span
            css={spanStyle3}
            className="fa fa-check text-yellow font-size-13 mr-3"
          ></span>
          Reporting to pinpoint your growth
        </li>

        <div className="pl-md-4 space-1">
          <a
            css={css`
              color: #f5c26b !important;
              border-bottom: 1px solid #e3e6f0 !important;
              text-decoration: none;
              background-color: transparent;
              box-sizing: border-box;
              cursor: pointer;
            `}
            className="text-yellow border-bottom"
            href="/manage-a-web-app"
          >
            Manage your web app &gt;
          </a>
        </div>
      </div>

      <div
        css={css`
          @media (min-width: 768px) {
            order: 1;
          }
          @media (min-width: 768px) {
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
        className="col-md-6 order-md-1 "
      >
        <img
          css={css`
            max-width: 100%;
            height: auto;
            vertical-align: middle;
            border-style: none;
            box-sizing: border-box;
          `}
          className="img-fluid"
          src={content4img}
          alt="Web App manager"
        />
      </div>
    </div>
  );
}
