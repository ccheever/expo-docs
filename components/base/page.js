import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'
import { FONT_FAMILY_SANS, COLOR_SELECTION } from '~/style/css-config'

class Page extends React.Component {
  getChildContext() {
    return {
      darkBg: this.props.darkBg || false
    }
  }

  render() {
    const { darkBg, children } = this.props
    return (
      <div>
        {children}
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @font-face {
              font-family: 'Neue Haas Unica';
              src: url('/static/fonts/NeueHaasUnica-Pro.eot');
              src: url('/static/fonts/NeueHaasUnica-Pro.woff2') format('woff2'),
                   url('/static/fonts/NeueHaasUnica-Pro.woff') format('woff'),
                   url('/static/fonts/NeueHaasUnica-Pro.ttf') format('truetype');
            }

            @font-face {
              font-family: 'Neue Haas Unica SemiBold';
              src: url('/static/fonts/NeueHaasUnica-SemiBold.eot');
              src: url('/static/fonts/NeueHaasUnica-SemiBold.woff2') format('woff2'),
                   url('/static/fonts/NeueHaasUnica-SemiBold.woff') format('woff'),
                   url('/static/fonts/NeueHaasUnica-SemiBold.ttf') format('truetype');
            }

            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed,
            figure, figcaption, footer, header, hgroup,
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
              font-weight: 400;
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              border: 0;
              vertical-align: baseline;
            }

            article, aside, details, figcaption, figure,
            footer, header, hgroup, menu, nav, section {
              display: block;
            }

            html, body {
              height: 100%;
              background-color: ${darkBg ? '#000' : '#fff'};
              color: ${darkBg ? '#fff' : '#000'};
              width: 100%;
              height: 100%;
              margin: 0px;
              padding: 0px;
              overflow: hidden;
            }

            a {
              -webkit-tap-highlight-color: rgba(0,0,0,0);
            }

            body {
              font-family: ${FONT_FAMILY_SANS};
              text-rendering: optimizeLegibility;
              font-size: 16px;
              padding-bottom: 24px;
            }

            ::selection {
              background-color: ${COLOR_SELECTION};
              color: #000;
            }
          `
            }}
          />
        </Head>
      </div>
    )
  }
}

Page.childContextTypes = {
  darkBg: PropTypes.bool
}

export default Page
