import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    --posco100: #05507D;
    --posco400: #00529F;

    // primary
    --p50 : #F0F5F9;
    --p100: #E6EEF5;
    --p200: #D9E5F1;
    --p300: #B0C9E1;
    --p400: #00529F;
    --p500: #004A8F;
    --p600: #00427F;
    --p700: #003E77;
    --p800: #00315F;
    --p900: #002548;

    //Gray
    --G000: #ffffff;
    --G100: #F8F8F8;
    --G200: #D6D9E0;
    --G300: #ABB0B9;
    --G400: #70747C;
    --G500: #35383F;

    // Surface
    --Blue-1: #F0F5F9;
    --Blue-1: #D9E5F1;
    --Blue-1: #00529F;
    --Point-Total: #FFFDE7;
    
    //text
    --text-main: #35383F;
    --text-sub: #ABB0B9;
    --text-blue-400: #00529F;
    --text-dark-blue: #00315F;
    --text-red: #FC563B;
    --text-yellow: #FED567;
    --text-blue: #4D6FB9;
    --text-green: #43843E;
    --text-purple: #695DB2;
    --text-orange: #F89D2D; 
    }

    @font-face {
	font-family: 'Pretendard Variable';
	font-style: normal;
	font-display: swap;
	src: url('/common/font/PretendardVariable.woff2') format('woff2-variations');
    }

    *{
    box-sizing: border-box;       
    font-family: 'Pretendard Variable'; 
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    button,
    textarea,
    input {
    margin: 0;
    padding: 0;
    border: none;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }

    body {
    line-height: 1;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    ol,
    ul,
    li {
    list-style: none;
    }

    blockquote,
    q {
    quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }

    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    b {
    font-weight: bold;
    }

`

export default GlobalStyle;