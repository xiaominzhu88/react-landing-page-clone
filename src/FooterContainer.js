/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import design1 from './design1.svg';
import design2 from './design2.svg';
import design3 from './design3.svg';
import design4 from './design4.svg';

export default function FooterContainer() {
  const containerStyle = css`
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
  `;

  const divContainerStyle = css`
    @media (min-width: 768px) {
      width: 80% !important;
    }
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
  `;

  const h2Style = css`
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
  `;

  const divOuterStyle = css`
    @media (min-width: 576px) {
      margin-bottom: 0 !important;
    }
    @media (min-width: 576px) {
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

  const divInnerStyle = css`
    box-sizing: border-box;
    display: block;
  `;

  const imgStyle = css`
    max-width: 4rem;
    margin-bottom: 0.5rem !important;
    vertical-align: middle;
    border-style: none;
    box-sizing: border-box;
  `;

  const h4Style = css`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.5;
    color: #000333;
    margin-top: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const p1Style = css`
    color: #000333;
    margin-top: 0;
    margin-bottom: 1rem;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  return (
    <div css={containerStyle} className="container space-2">
      <div
        css={divContainerStyle}
        className="col-12 text-center w-md-80 mx-auto"
      >
        <div
          css={css`
            margin-bottom: 2rem !important;
            box-sizing: border-box;
            display: block;
          `}
          className="mb-5"
        >
          <h2 css={h2Style}>Build without boundaries</h2>
          <p css={pStyle} className="lead mb-0">
            {' '}
            Budibase is an open source low code platform for building, hosting,
            and managing web applications. Experience true flexibility, powerful
            integrations, and build without boundaries.{' '}
          </p>
        </div>
      </div>

      <div
        className="container"
        css={css`
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
          className="row"
          css={css`
            display: flex;
            margin-right: -15px;
            margin-left: -15px;
            box-sizing: border-box;
          `}
        >
          <div className="col-sm-3 mb-7 mb-sm-0">
            <div
              className="pr-lg-3"
              css={css`
                margin-right: 18px;
              `}
            >
              <img
                css={imgStyle}
                className="max-width-9 mb-2"
                src={design1}
                alt="Description"
              />
              <h4 css={h4Style}>Customizable</h4>
              <p css={p1Style}>
                Apply your own UI or use a template. Budibase empowers
                creativity.
              </p>
            </div>
          </div>

          <div className="col-sm-3 mb-7 mb-sm-9">
            <div
              css={css`
                margin-right: 18px;
              `}
              className="pr-lg-3"
            >
              <img
                css={imgStyle}
                className="max-width-9 mb-2"
                src={design2}
                alt="Description"
              />
              <h4 css={h4Style}>Open-source</h4>
              <p css={p1Style}>
                Budibase is open source, bringing you freedom and long-term
                viability.{' '}
              </p>
            </div>
          </div>

          <div className="col-sm-3 mb-7 mb-sm-9">
            <div
              css={css`
                margin-right: 18px;
              `}
              className="pr-lg-3"
            >
              <img
                css={imgStyle}
                className="max-width-9 mb-2"
                src={design3}
                alt="Description"
              />
              <h4 css={h4Style}>Integrations</h4>
              <p css={p1Style}>
                Push or pull data from other sources by plugging into our many
                integration points.{' '}
              </p>
            </div>
          </div>

          <div className="col-sm-3 mb-7 mb-sm-0">
            <div
              css={css`
                margin-right: 18px;
              `}
              className="pr-lg-3"
            >
              <img
                css={imgStyle}
                className="max-width-9 mb-2"
                src={design4}
                alt="Description"
              />
              <h4 css={h4Style}>Security</h4>
              <p css={p1Style}>
                We implement security best practices, so you can focus on
                building your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
