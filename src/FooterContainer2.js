/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import span from './span.png';
export default function FooterContainer2() {
  const FooterContainer2Style = css`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #f9f9f9 !important;
    box-sizing: border-box;
    display: block;
  `;
  const FooterContainerOuterStyle = css`
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

  const FooterContainerRowStyle = css`
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

  const footerPStyle = css`
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

  const col6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
  `;

  const h5Style = css`
    font-size: 1.1rem;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  `;

  const buttonStyle = css`
    display: flex !important;
    border: 0.1rem solid transparent;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
    padding-left: 0;
    padding-right: 0;
    white-space: inherit;
    justify-content: space-between !important;
    width: 100%;
  `;

  const cardHeaderStyle = css`
    border-radius: 0.25rem 0.25rem 0 0;
    padding: 0;
    background-color: transparent;
    transition: 0.3s ease-in-out;
    margin-bottom: 0;
  `;

  return (
    <div className="footerContainer2" css={FooterContainer2Style}>
      <div className="footerContainer2-1" css={FooterContainerOuterStyle}>
        <div className="footerContainerRow" css={FooterContainerRowStyle}>
          <div
            className="col-lg-8 text-center mx-auto"
            css={css`
              text-align: center !important;
              margin-left: auto !important;
              margin-right: auto !important;
              position: relative;
              width: 100%;
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
              <h2 css={h2Style}>FAQs</h2>
              <p className="lead mb-0" css={footerPStyle}>
                We're at the beginning of an exciting journey and we understand
                there may be lots of questions. We've included some of the most
                popular below. For other questions, send us a message on live
                chat.
              </p>
            </div>
          </div>

          <div className="col-lg-6" css={col6}>
            <div
              className="mb-5"
              css={css`
                margin-bottom: 2rem !important;
                box-sizing: border-box;
                display: block;
              `}
            >
              <div
                className="card card-collapse mb-3 p-3 bg-white"
                css={css`
                  background-color: #fff !important;
                `}
              >
                <div css={cardHeaderStyle} className="card-header">
                  <h5 css={h5Style} className="mb-0">
                    <button css={buttonStyle} className="btn">
                      <h5
                        css={css`
                          font-size: 1.1rem;
                          font-family: 'Roboto', Helvetica, Arial, sans-serif;
                          margin-left: 15px;
                        `}
                      >
                        When is the launch?
                      </h5>

                      <span className="card-collapse__btn-arrow">
                        <img
                          css={css`
                            width: 16px;
                            height: 14.22px;
                            margin-right: 15px;
                            margin-top: 2rem;
                          `}
                          src={span}
                          alt="file"
                          className="fa fa-arrow-down card-collapse__btn-arrow-inner"
                        />
                      </span>
                    </button>
                  </h5>
                </div>
                <div
                  id="basicsCollapseTwo"
                  className="collapse"
                  aria-labelledby="basicsHeadingTwo"
                  data-parent="#basicsAccordion1"
                ></div>
              </div>

              <div
                css={css`
                  background-color: #fff !important;
                `}
                className="card card-collapse p-3 bg-white"
              >
                <div
                  css={cardHeaderStyle}
                  className="card-header card-collapse__header"
                  id="basicsHeadingFour"
                >
                  <h5 css={h5Style} className="mb-0">
                    <button css={buttonStyle} className="btn ">
                      <h5
                        css={css`
                          font-size: 1.1rem;
                          font-family: 'Roboto', Helvetica, Arial, sans-serif;
                          margin-left: 15px;
                        `}
                      >
                        Is Budibase open source?
                      </h5>

                      <span className="card-collapse__btn-arrow">
                        <img
                          css={css`
                            width: 16px;
                            height: 14.22px;
                            margin-right: 15px;
                            margin-top: 2rem;
                          `}
                          src={span}
                          alt="file"
                          className="fa fa-arrow-down card-collapse__btn-arrow-inner"
                        />
                      </span>
                    </button>
                  </h5>
                </div>
                <div
                  id="basicsCollapseFour"
                  className="collapse"
                  aria-labelledby="basicsHeadingFour"
                  data-parent="#basicsAccordion1"
                ></div>
              </div>

              <div
                css={css`
                  background-color: #fff !important;
                `}
                className="card card-collapse mb-3 p-3 bg-white"
              >
                <div
                  css={cardHeaderStyle}
                  className="card-header card-collapse__header"
                  id="basicsHeadingOne"
                >
                  <h5 css={h5Style} className="mb-0">
                    <button css={buttonStyle} className="btn">
                      <h5
                        css={css`
                          font-size: 1.1rem;
                          font-family: 'Roboto', Helvetica, Arial, sans-serif;
                          margin-left: 15px;
                        `}
                      >
                        Do I need to know how to code?
                      </h5>

                      <span className="card-collapse__btn-arrow">
                        <img
                          css={css`
                            width: 16px;
                            height: 14.22px;
                            margin-right: 15px;
                            margin-top: 2rem;
                          `}
                          src={span}
                          alt="file"
                          className="fa fa-arrow-down card-collapse__btn-arrow-inner"
                        />
                      </span>
                    </button>
                  </h5>
                </div>
                <div
                  id="basicsCollapseOne"
                  className="collapse"
                  aria-labelledby="basicsHeadingOne"
                  data-parent="#basicsAccordion2"
                ></div>
              </div>

              <div
                css={css`
                  background-color: #fff !important;
                `}
                className="card card-collapse mb-3 p-3 bg-white"
              >
                <div
                  css={cardHeaderStyle}
                  className="card-header card-collapse__header"
                  id="basicsHeadingThree"
                >
                  <div
                    css={css`
                      background-color: #fff !important;
                    `}
                    className="mb-0"
                  >
                    <h5 css={h5Style} className="mb-0">
                      <button css={buttonStyle} className="btn">
                        <h5
                          css={css`
                            font-size: 1.1rem;
                            font-family: 'Roboto', Helvetica, Arial, sans-serif;
                            margin-left: 15px;
                          `}
                        >
                          Can I build a website?
                        </h5>

                        <span className="card-collapse__btn-arrow">
                          <img
                            src={span}
                            css={css`
                              width: 16px;
                              height: 14.22px;
                              margin-right: 15px;
                              margin-top: 2rem;
                            `}
                            alt="file"
                            className="fa fa-arrow-down card-collapse__btn-arrow-inner"
                          />
                        </span>
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
