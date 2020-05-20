/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function Signup() {
  const signOuterContainerStyle = css`
    padding-bottom: 4.0625rem;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 768px) {
      max-width: 720px;
    }
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    display: block;
  `;

  const signInnerContainerStyle = css`
    @media (min-width: 768px) {
      align-items: center !important;
    }
    @media (min-width: 768px) {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: border-box;
  `;

  const textOuterContainerStyle = css`
    @media (min-width: 768px) {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
  `;

  const textContainerStyle = css`
    margin-bottom: 2rem !important;
    box-sizing: border-box;
    display: block;
    text-align: center !important;
  `;

  const h2Style = css`
    color: #fff !important;
    margin-bottom: 0.25rem !important;
    font-size: calc(1.375rem + (1vw - 3.75px) * 1.1268);
    line-height: calc(1.875rem + 6 * ((100vw - 21rem) / 680));
    font-weight: 700;
    margin: 80px 0px 20px 0px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const pStyle = css`
    color: #f9fbfd !important;
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.8;
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
    <div
      id="signup"
      className="bg-primary bg-img-hero"
      css={css`
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        background-color: #0055ff !important;
        box-sizing: border-box;
        display: block;
      `}
    >
      <div
        css={signOuterContainerStyle}
        className="container space-2-bottom space-3-top--lg space-3-bottom--lg col-12"
      >
        <div
          css={signInnerContainerStyle}
          className="row justify-content-md-center align-items-md-center"
        >
          <div css={textOuterContainerStyle} className="col-md-8 col-lg-6">
            <div css={textContainerStyle} className="mb-5 text-center">
              <h2 css={h2Style} className="text-white mb-1">
                Request Access
              </h2>
              <p css={pStyle} className="lead text-light">
                We will notify you when Budibase is ready to speed up your
                development.
              </p>
            </div>

            <div
              css={css`
                box-sizing: border-box;
                display: block;
                margin-top: 0em;
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
              `}
              className="row mx-gutters-2"
            >
              <div
                css={css`
                  padding-right: 8px;
                  padding-left: 8px;
                  @media (min-width: 768px) {
                    width: 60% !important;
                  }
                  margin-left: auto !important;
                  margin-right: auto !important;
                  margin-bottom: 1rem !important;
                  @media (min-width: 576px) {
                    flex: 0 0 58.33333%;
                    max-width: 58.33333%;
                  }
                  position: relative;
                  display: block;
                  box-sizing: border-box;
                `}
                className="col-sm-7 w-md-60 mx-auto mb-3"
              >
                <div
                  css={css`
                    box-sizing: border-box;
                    display: block;
                    height:66px;
                  `}
                  className="js-form-message"
                >
                  <div className="js-focus-state input-group form">
                    <input
                      css={css`
                        .input-group > .form-control:not(:first-of-type),
                        .input-group > .custom-select:not(:first-of-type) {
                          border-top-left-radius: 0;
                          border-bottom-left-radius: 0;
                        }
                        .input-group > .form-control,
                        .input-group > .custom-select,
                        .input-group > .custom-file {
                          position: relative;
                          -ms-flex: 1 1 auto;
                          flex: 1 1 auto;
                          width: 1%;
                          margin-bottom: 0;
                        }
                        z-index: 2;
                        display: block;
                        padding: 0.75rem 1rem;
                        font-size: 1rem;
                        line-height: 1.7;
                        color: #000333;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #d4d7dd;
                        border-radius: 0.25rem;
                        transition: all 0.2s ease-in-out;
                        margin: 0;
                        font-family: inherit;
                        text-transform: none;
                        text-align: start;
                        cursor: text;
                      `}
                      type="email"
                      className="form-control form__input"
                      placeholder="Submit Email Address"
                    />
                  </div>
                </div>
              </div>

              <div
                css={css`
                  .mx-gutters-2 > .col,
                  .mx-gutters-2 > [class*='col-'] {
                    padding-right: 8px;
                    padding-left: 8px;
                  }
                  margin-bottom: 1rem !important;
                  @media (min-width: 576px) {
                    -ms-flex: 0 0 41.66667%;
                    flex: 0 0 41.66667%;
                    max-width: 41.66667%;
                  }
                  position: relative;
                  width: 100%;
                  min-height: 1px;
                  display: block;
                  box-sizing: border-box;
                `}
                className="col-sm-5 mb-3"
              >
                <button
                  css={css`
                    cursor: pointer;
                    display: block;
                    width: 100%;
                    color: #fff;
                    background-color: #000333;
                    border-color: #000333;
                    font-weight: 900;
                    font-family: 'Roboto', Helvetica, Arial, sans-serif;
                    text-align: center;
                    white-space: nowrap;
                    border: 0.1rem solid transparent;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    line-height: 1.7;
                    border-radius: 0.25rem;
                    transition: all 0.2s ease-in-out;
                    text-transform: none;
                    overflow: visible;
                    align-items: flex-start;
                    height:66px;
                  `}
                  type="submit"
                  className="btn btn-block btn-secondary"
                >
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
