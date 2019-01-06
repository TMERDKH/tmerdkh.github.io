(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@material/layout-grid/mdc-layout-grid.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./node_modules/@material/layout-grid/mdc-layout-grid.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px; }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px); } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px); } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px); } }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1); }\n    @supports (display: grid) {\n      .mdc-layout-grid__inner {\n        display: grid;\n        margin: 0;\n        grid-gap: 24px;\n        grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n        grid-template-columns: repeat(12, minmax(0, 1fr)); } } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1); }\n    @supports (display: grid) {\n      .mdc-layout-grid__inner {\n        display: grid;\n        margin: 0;\n        grid-gap: 16px;\n        grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n        grid-template-columns: repeat(8, minmax(0, 1fr)); } } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1); }\n    @supports (display: grid) {\n      .mdc-layout-grid__inner {\n        display: grid;\n        margin: 0;\n        grid-gap: 16px;\n        grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n        grid-template-columns: repeat(4, minmax(0, 1fr)); } } }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    width: calc(33.33333333% - 24px);\n    width: calc(33.33333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2); }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        width: auto;\n        grid-column-end: span 4; } }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        margin: 0; } }\n    .mdc-layout-grid__cell--span-1,\n    .mdc-layout-grid__cell--span-1-desktop {\n      width: calc(8.33333333% - 24px);\n      width: calc(8.33333333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1,\n        .mdc-layout-grid__cell--span-1-desktop {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2,\n    .mdc-layout-grid__cell--span-2-desktop {\n      width: calc(16.66666667% - 24px);\n      width: calc(16.66666667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2,\n        .mdc-layout-grid__cell--span-2-desktop {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3,\n    .mdc-layout-grid__cell--span-3-desktop {\n      width: calc(25% - 24px);\n      width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3,\n        .mdc-layout-grid__cell--span-3-desktop {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4,\n    .mdc-layout-grid__cell--span-4-desktop {\n      width: calc(33.33333333% - 24px);\n      width: calc(33.33333333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4,\n        .mdc-layout-grid__cell--span-4-desktop {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5,\n    .mdc-layout-grid__cell--span-5-desktop {\n      width: calc(41.66666667% - 24px);\n      width: calc(41.66666667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5,\n        .mdc-layout-grid__cell--span-5-desktop {\n          width: auto;\n          grid-column-end: span 5; } }\n    .mdc-layout-grid__cell--span-6,\n    .mdc-layout-grid__cell--span-6-desktop {\n      width: calc(50% - 24px);\n      width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6,\n        .mdc-layout-grid__cell--span-6-desktop {\n          width: auto;\n          grid-column-end: span 6; } }\n    .mdc-layout-grid__cell--span-7,\n    .mdc-layout-grid__cell--span-7-desktop {\n      width: calc(58.33333333% - 24px);\n      width: calc(58.33333333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7,\n        .mdc-layout-grid__cell--span-7-desktop {\n          width: auto;\n          grid-column-end: span 7; } }\n    .mdc-layout-grid__cell--span-8,\n    .mdc-layout-grid__cell--span-8-desktop {\n      width: calc(66.66666667% - 24px);\n      width: calc(66.66666667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8,\n        .mdc-layout-grid__cell--span-8-desktop {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-9,\n    .mdc-layout-grid__cell--span-9-desktop {\n      width: calc(75% - 24px);\n      width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9,\n        .mdc-layout-grid__cell--span-9-desktop {\n          width: auto;\n          grid-column-end: span 9; } }\n    .mdc-layout-grid__cell--span-10,\n    .mdc-layout-grid__cell--span-10-desktop {\n      width: calc(83.33333333% - 24px);\n      width: calc(83.33333333% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10,\n        .mdc-layout-grid__cell--span-10-desktop {\n          width: auto;\n          grid-column-end: span 10; } }\n    .mdc-layout-grid__cell--span-11,\n    .mdc-layout-grid__cell--span-11-desktop {\n      width: calc(91.66666667% - 24px);\n      width: calc(91.66666667% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11,\n        .mdc-layout-grid__cell--span-11-desktop {\n          width: auto;\n          grid-column-end: span 11; } }\n    .mdc-layout-grid__cell--span-12,\n    .mdc-layout-grid__cell--span-12-desktop {\n      width: calc(100% - 24px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12,\n        .mdc-layout-grid__cell--span-12-desktop {\n          width: auto;\n          grid-column-end: span 12; } } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2); }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        width: auto;\n        grid-column-end: span 4; } }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        margin: 0; } }\n    .mdc-layout-grid__cell--span-1,\n    .mdc-layout-grid__cell--span-1-tablet {\n      width: calc(12.5% - 16px);\n      width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1,\n        .mdc-layout-grid__cell--span-1-tablet {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2,\n    .mdc-layout-grid__cell--span-2-tablet {\n      width: calc(25% - 16px);\n      width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2,\n        .mdc-layout-grid__cell--span-2-tablet {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3,\n    .mdc-layout-grid__cell--span-3-tablet {\n      width: calc(37.5% - 16px);\n      width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3,\n        .mdc-layout-grid__cell--span-3-tablet {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4,\n    .mdc-layout-grid__cell--span-4-tablet {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4,\n        .mdc-layout-grid__cell--span-4-tablet {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5,\n    .mdc-layout-grid__cell--span-5-tablet {\n      width: calc(62.5% - 16px);\n      width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5,\n        .mdc-layout-grid__cell--span-5-tablet {\n          width: auto;\n          grid-column-end: span 5; } }\n    .mdc-layout-grid__cell--span-6,\n    .mdc-layout-grid__cell--span-6-tablet {\n      width: calc(75% - 16px);\n      width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6,\n        .mdc-layout-grid__cell--span-6-tablet {\n          width: auto;\n          grid-column-end: span 6; } }\n    .mdc-layout-grid__cell--span-7,\n    .mdc-layout-grid__cell--span-7-tablet {\n      width: calc(87.5% - 16px);\n      width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7,\n        .mdc-layout-grid__cell--span-7-tablet {\n          width: auto;\n          grid-column-end: span 7; } }\n    .mdc-layout-grid__cell--span-8,\n    .mdc-layout-grid__cell--span-8-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8,\n        .mdc-layout-grid__cell--span-8-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-9,\n    .mdc-layout-grid__cell--span-9-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9,\n        .mdc-layout-grid__cell--span-9-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-10,\n    .mdc-layout-grid__cell--span-10-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10,\n        .mdc-layout-grid__cell--span-10-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-11,\n    .mdc-layout-grid__cell--span-11-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11,\n        .mdc-layout-grid__cell--span-11-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-12,\n    .mdc-layout-grid__cell--span-12-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12,\n        .mdc-layout-grid__cell--span-12-tablet {\n          width: auto;\n          grid-column-end: span 8; } } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid__cell {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2); }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        width: auto;\n        grid-column-end: span 4; } }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell {\n        margin: 0; } }\n    .mdc-layout-grid__cell--span-1,\n    .mdc-layout-grid__cell--span-1-phone {\n      width: calc(25% - 16px);\n      width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1,\n        .mdc-layout-grid__cell--span-1-phone {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2,\n    .mdc-layout-grid__cell--span-2-phone {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2,\n        .mdc-layout-grid__cell--span-2-phone {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3,\n    .mdc-layout-grid__cell--span-3-phone {\n      width: calc(75% - 16px);\n      width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3,\n        .mdc-layout-grid__cell--span-3-phone {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4,\n    .mdc-layout-grid__cell--span-4-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4,\n        .mdc-layout-grid__cell--span-4-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5,\n    .mdc-layout-grid__cell--span-5-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5,\n        .mdc-layout-grid__cell--span-5-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-6,\n    .mdc-layout-grid__cell--span-6-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6,\n        .mdc-layout-grid__cell--span-6-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-7,\n    .mdc-layout-grid__cell--span-7-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7,\n        .mdc-layout-grid__cell--span-7-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-8,\n    .mdc-layout-grid__cell--span-8-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8,\n        .mdc-layout-grid__cell--span-8-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-9,\n    .mdc-layout-grid__cell--span-9-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9,\n        .mdc-layout-grid__cell--span-9-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-10,\n    .mdc-layout-grid__cell--span-10-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10,\n        .mdc-layout-grid__cell--span-10-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-11,\n    .mdc-layout-grid__cell--span-11-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11,\n        .mdc-layout-grid__cell--span-11-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-12,\n    .mdc-layout-grid__cell--span-12-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12,\n        .mdc-layout-grid__cell--span-12-phone {\n          width: auto;\n          grid-column-end: span 4; } } }\n\n.mdc-layout-grid__cell--order-1 {\n  order: 1; }\n\n.mdc-layout-grid__cell--order-2 {\n  order: 2; }\n\n.mdc-layout-grid__cell--order-3 {\n  order: 3; }\n\n.mdc-layout-grid__cell--order-4 {\n  order: 4; }\n\n.mdc-layout-grid__cell--order-5 {\n  order: 5; }\n\n.mdc-layout-grid__cell--order-6 {\n  order: 6; }\n\n.mdc-layout-grid__cell--order-7 {\n  order: 7; }\n\n.mdc-layout-grid__cell--order-8 {\n  order: 8; }\n\n.mdc-layout-grid__cell--order-9 {\n  order: 9; }\n\n.mdc-layout-grid__cell--order-10 {\n  order: 10; }\n\n.mdc-layout-grid__cell--order-11 {\n  order: 11; }\n\n.mdc-layout-grid__cell--order-12 {\n  order: 12; }\n\n.mdc-layout-grid__cell--align-top {\n  align-self: flex-start; }\n\n@supports (display: grid) {\n    .mdc-layout-grid__cell--align-top {\n      align-self: start; } }\n\n.mdc-layout-grid__cell--align-middle {\n  align-self: center; }\n\n.mdc-layout-grid__cell--align-bottom {\n  align-self: flex-end; }\n\n@supports (display: grid) {\n    .mdc-layout-grid__cell--align-bottom {\n      align-self: end; } }\n\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2); } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2); } }\n\n@media (max-width: 479px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2); } }\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0; }\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW1hci9sZWdlbmRvZnRhbWFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGF5b3V0LWdyaWQvbWRjLWxheW91dC1ncmlkLnNjc3MiLCIvVXNlcnMvdGFtYXIvbGVnZW5kb2Z0YW1hci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xheW91dC1ncmlkL19taXhpbnMuc2NzcyIsIi9Vc2Vycy90YW1hci9sZWdlbmRvZnRhbWFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGF5b3V0LWdyaWQvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtFQUVJLHVDQUEyRDtFQUMzRCx1Q0FBMkQ7RUFDM0QsNkNBQXVFO0VBRnZFLHNDQUEyRDtFQUMzRCxzQ0FBMkQ7RUFDM0QsNENBQXVFO0VBRnZFLHFDQUEyRDtFQUMzRCxxQ0FBMkQ7RUFDM0QsMkNBQXVFLEVBRTFFOztBQ29DRztFRGpDSjtJQ29FRSx1QkFBc0I7SUFDdEIsZUFBYztJQUNkLGNDckVhO0lEc0ViLHFEQUFvRixFRC9EckYsRUFBQTs7QUNvQkc7RUQ1Qko7SUNvRUUsdUJBQXNCO0lBQ3RCLGVBQWM7SUFDZCxjQ3BFWTtJRHFFWixvREFBb0YsRUQvRHJGLEVBQUE7O0FDZUc7RUR2Qko7SUNvRUUsdUJBQXNCO0lBQ3RCLGVBQWM7SUFDZCxjQ25FVztJRG9FWCxtREFBb0YsRUQvRHJGLEVBQUE7O0FDeUJHO0VEdkJKO0lDeUVFLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIscUJBQW9CO0lBQ3BCLGNBQW9CO0lBQ3BCLG1FQUFrRyxFRHBFbkc7SUNzRTBCO01EL0UzQjtRQ2dGSSxjQUFhO1FBQ2IsVUFBUztRQUNULGVDckZXO1FEc0ZYLHNEQUFrRjtRQUNsRixrREFBdUYsRUQzRTFGLEVBQUEsRUFBQTs7QUNTRztFRGxCSjtJQ3lFRSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHFCQUFvQjtJQUNwQixhQUFvQjtJQUNwQixrRUFBa0csRURwRW5HO0lDc0UwQjtNRC9FM0I7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QlosWUFBVztVQUNYLHdCQzdETSxFRndDRCxFQUFBO0lBSE87O01DbUJkLHlCQUFxQztNQUNyQyw4REFBc0csRURqQi9GO01DbUJrQjtRRHRCWDs7VUN1QlosWUFBVztVQUNYLHdCQzdETSxFRndDRCxFQUFBO0lBSE87O01DbUJkLHlCQUFxQztNQUNyQyw4REFBc0csRURqQi9GO01DbUJrQjtRRHRCWDs7VUN1QlosWUFBVztVQUNYLHdCQzdETSxFRndDRCxFQUFBO0lBSE87O01DbUJkLHlCQUFxQztNQUNyQyw4REFBc0csRURqQi9GO01DbUJrQjtRRHRCWDs7VUN1QlosWUFBVztVQUNYLHdCQzdETSxFRndDRCxFQUFBLEVBQUE7O0FBUUw7RUNzRUYsU0R2RWMsRUFHWDs7QUFGRDtFQ3NFRixTRHZFYyxFQUdYOztBQUZEO0VDc0VGLFNEdkVjLEVBR1g7O0FBRkQ7RUNzRUYsU0R2RWMsRUFHWDs7QUFGRDtFQ3NFRixTRHZFYyxFQUdYOztBQUZEO0VDc0VGLFNEdkVjLEVBR1g7O0FBRkQ7RUNzRUYsU0R2RWMsRUFHWDs7QUFGRDtFQ3NFRixTRHZFYyxFQUdYOztBQUZEO0VDc0VGLFNEdkVjLEVBR1g7O0FBRkQ7RUNzRUYsVUR2RWMsRUFHWDs7QUFGRDtFQ3NFRixVRHZFYyxFQUdYOztBQUZEO0VDc0VGLFVEdkVjLEVBR1g7O0FBSUg7RUNxRUUsdUJBQXNCLEVEbkV2Qjs7QUNxRTBCO0lEdkUzQjtNQ3dFSSxrQkFBaUIsRUR0RXBCLEVBQUE7O0FBRUQ7RUN5RUUsbUJBQWtCLEVEdkVuQjs7QUFFRDtFQ3lFRSxxQkFBb0IsRUR2RXJCOztBQ3lFMEI7SUQzRTNCO01DNEVJLGdCQUFlLEVEMUVsQixFQUFBOztBQzVCQztFRCtCSjtJQ3lGRSxjQUF5RjtJQUN6RiwwS0FLRyxFRHJGSixFQUFBOztBQzlDRztFRG9DSjtJQ3lGRSxhQUF5RjtJQUN6RixxS0FLRyxFRHJGSixFQUFBOztBQ25ERztFRHlDSjtJQ3lGRSxhQUF5RjtJQUN6RixrS0FLRyxFRHJGSixFQUFBOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2xCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGF5b3V0LWdyaWQvbWRjLWxheW91dC1ncmlkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vbWl4aW5zXCI7XG5cbjpyb290IHtcbiAgQGVhY2ggJHNpemUgaW4gbWFwLWtleXMoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zKSB7XG4gICAgLS1tZGMtbGF5b3V0LWdyaWQtbWFyZ2luLSN7JHNpemV9OiAje21hcC1nZXQoJG1kYy1sYXlvdXQtZ3JpZC1kZWZhdWx0LW1hcmdpbiwgJHNpemUpfTtcbiAgICAtLW1kYy1sYXlvdXQtZ3JpZC1ndXR0ZXItI3skc2l6ZX06ICN7bWFwLWdldCgkbWRjLWxheW91dC1ncmlkLWRlZmF1bHQtZ3V0dGVyLCAkc2l6ZSl9O1xuICAgIC0tbWRjLWxheW91dC1ncmlkLWNvbHVtbi13aWR0aC0jeyRzaXplfTogI3ttYXAtZ2V0KCRtZGMtbGF5b3V0LWdyaWQtY29sdW1uLXdpZHRoLCAkc2l6ZSl9O1xuICB9XG59XG5cbi8vIHBvc3Rjc3MtYmVtLWxpbnRlcjogZGVmaW5lIGxheW91dC1ncmlkXG4ubWRjLWxheW91dC1ncmlkIHtcbiAgQGVhY2ggJHNpemUgaW4gbWFwLWtleXMoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zKSB7XG4gICAgQGluY2x1ZGUgbWRjLWxheW91dC1ncmlkLW1lZGlhLXF1ZXJ5Xygkc2l6ZSkge1xuICAgICAgJG1hcmdpbjogbWFwLWdldCgkbWRjLWxheW91dC1ncmlkLWRlZmF1bHQtbWFyZ2luLCAkc2l6ZSk7XG5cbiAgICAgIEBpbmNsdWRlIG1kYy1sYXlvdXQtZ3JpZCgkc2l6ZSwgJG1hcmdpbiwgJG1kYy1sYXlvdXQtZ3JpZC1tYXgtd2lkdGgpO1xuICAgIH1cbiAgfVxufVxuXG4ubWRjLWxheW91dC1ncmlkX19pbm5lciB7XG4gIEBlYWNoICRzaXplIGluIG1hcC1rZXlzKCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucykge1xuICAgIEBpbmNsdWRlIG1kYy1sYXlvdXQtZ3JpZC1tZWRpYS1xdWVyeV8oJHNpemUpIHtcbiAgICAgICRtYXJnaW46IG1hcC1nZXQoJG1kYy1sYXlvdXQtZ3JpZC1kZWZhdWx0LW1hcmdpbiwgJHNpemUpO1xuICAgICAgJGd1dHRlcjogbWFwLWdldCgkbWRjLWxheW91dC1ncmlkLWRlZmF1bHQtZ3V0dGVyLCAkc2l6ZSk7XG5cbiAgICAgIEBpbmNsdWRlIG1kYy1sYXlvdXQtZ3JpZC1pbm5lcigkc2l6ZSwgJG1hcmdpbiwgJGd1dHRlcik7XG4gICAgfVxuICB9XG59XG5cbi5tZGMtbGF5b3V0LWdyaWRfX2NlbGwge1xuICAvLyBzZWxlY3QgdGhlIHVwcGVyIGJyZWFrcG9pbnRcbiAgJHVwcGVyLWJyZWFrcG9pbnQ6IG50aChtYXAta2V5cygkbWRjLWxheW91dC1ncmlkLWNvbHVtbnMpLCAxKTtcblxuICBAZWFjaCAkc2l6ZSBpbiBtYXAta2V5cygkbWRjLWxheW91dC1ncmlkLWNvbHVtbnMpIHtcbiAgICBAaW5jbHVkZSBtZGMtbGF5b3V0LWdyaWQtbWVkaWEtcXVlcnlfKCRzaXplKSB7XG4gICAgICAkZ3V0dGVyOiBtYXAtZ2V0KCRtZGMtbGF5b3V0LWdyaWQtZGVmYXVsdC1ndXR0ZXIsICRzaXplKTtcblxuICAgICAgQGluY2x1ZGUgbWRjLWxheW91dC1ncmlkLWNlbGwoJHNpemUsICRtZGMtbGF5b3V0LWdyaWQtZGVmYXVsdC1jb2x1bW4tc3BhbiwgJGd1dHRlcik7XG5cbiAgICAgIEBmb3IgJHNwYW4gZnJvbSAxIHRocm91Z2ggbWFwLWdldCgkbWRjLWxheW91dC1ncmlkLWNvbHVtbnMsICR1cHBlci1icmVha3BvaW50KSB7XG4gICAgICAgIC8vIFNwYW4gY2xhc3Nlcy5cbiAgICAgICAgLy8gc3R5bGVsaW50LWRpc2FibGUgbWF4LW5lc3RpbmctZGVwdGhcbiAgICAgICAgQGF0LXJvb3QgLm1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi0jeyRzcGFufSxcbiAgICAgICAgICAubWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLSN7JHNwYW59LSN7JHNpemV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBtZGMtbGF5b3V0LWdyaWQtY2VsbC1zcGFuXygkc2l6ZSwgJHNwYW4sICRndXR0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0eWxlbGludC1lbmFibGUgbWF4LW5lc3RpbmctZGVwdGhcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPcmRlciBvdmVycmlkZSBjbGFzc2VzLlxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIG1hcC1nZXQoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zLCAkdXBwZXItYnJlYWtwb2ludCkge1xuICAgICYtLW9yZGVyLSN7JGl9IHtcbiAgICAgIEBpbmNsdWRlIG1kYy1sYXlvdXQtZ3JpZC1jZWxsLW9yZGVyKCRpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBbGlnbm1lbnQgY2xhc3Nlcy5cbiAgJi0tYWxpZ24tdG9wIHtcbiAgICBAaW5jbHVkZSBtZGMtbGF5b3V0LWdyaWQtY2VsbC1hbGlnbih0b3ApO1xuICB9XG5cbiAgJi0tYWxpZ24tbWlkZGxlIHtcbiAgICBAaW5jbHVkZSBtZGMtbGF5b3V0LWdyaWQtY2VsbC1hbGlnbihtaWRkbGUpO1xuICB9XG5cbiAgJi0tYWxpZ24tYm90dG9tIHtcbiAgICBAaW5jbHVkZSBtZGMtbGF5b3V0LWdyaWQtY2VsbC1hbGlnbihib3R0b20pO1xuICB9XG59XG5cbi5tZGMtbGF5b3V0LWdyaWQtLWZpeGVkLWNvbHVtbi13aWR0aCB7XG4gIEBlYWNoICRzaXplIGluIG1hcC1rZXlzKCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucykge1xuICAgIEBpbmNsdWRlIG1kYy1sYXlvdXQtZ3JpZC1tZWRpYS1xdWVyeV8oJHNpemUpIHtcbiAgICAgICRtYXJnaW46IG1hcC1nZXQoJG1kYy1sYXlvdXQtZ3JpZC1kZWZhdWx0LW1hcmdpbiwgJHNpemUpO1xuICAgICAgJGd1dHRlcjogbWFwLWdldCgkbWRjLWxheW91dC1ncmlkLWRlZmF1bHQtZ3V0dGVyLCAkc2l6ZSk7XG4gICAgICAkY29sdW1uLXdpZHRoOiBtYXAtZ2V0KCRtZGMtbGF5b3V0LWdyaWQtY29sdW1uLXdpZHRoLCAkc2l6ZSk7XG5cbiAgICAgIEBpbmNsdWRlIG1kYy1sYXlvdXQtZ3JpZC1maXhlZC1jb2x1bW4td2lkdGgoJHNpemUsICRtYXJnaW4sICRndXR0ZXIsICRjb2x1bW4td2lkdGgpO1xuICAgIH1cbiAgfVxufVxuXG4ubWRjLWxheW91dC1ncmlkLS1hbGlnbi1sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm1kYy1sYXlvdXQtZ3JpZC0tYWxpZ24tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLy8gcG9zdGNzcy1iZW0tbGludGVyOiBlbmRcbiIsIi8vIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5cbi8vIHJldHVybnMgdGhlIGxvd2VyIGdyaWQgYm91bmRhcnkgb3IgbnVsbCBpZiB0aGUgc21hbGxlc3QgZ3JpZCBpcyBzZWxlY3RlZFxuQGZ1bmN0aW9uIG1kYy1sYXlvdXQtZ3JpZC1icmVha3BvaW50LW1pbigkc2l6ZSkge1xuICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucywgJHNpemUpIHtcbiAgICBAZXJyb3IgXCJJbnZhbGlkIHN0eWxlIHNwZWNpZmllZCEgQ2hvb3NlIG9uZSBvZiAje21hcC1rZXlzKCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucyl9XCI7XG4gIH1cbiAgJG1pbjogbWFwLWdldCgkbWRjLWxheW91dC1ncmlkLWJyZWFrcG9pbnRzLCAkc2l6ZSk7XG5cbiAgQHJldHVybiBpZigkbWluID4gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIHJldHVybnMgdGhlIHVwcGVyIGdyaWQgYm91bmRhcnkgb3IgbnVsbCBpZiB0aGUgbGFyZ2VzdCBncmlkIGlzIHNlbGVjdGVkXG5AZnVuY3Rpb24gbWRjLWxheW91dC1ncmlkLWJyZWFrcG9pbnQtbWF4KCRzaXplKSB7XG4gIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zLCAkc2l6ZSkge1xuICAgIEBlcnJvciBcIkludmFsaWQgc3R5bGUgc3BlY2lmaWVkISBDaG9vc2Ugb25lIG9mICN7bWFwLWtleXMoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zKX1cIjtcbiAgfVxuICAkbmFtZXM6IG1hcC1rZXlzKCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucyk7XG4gICRuOiBpbmRleCgkbmFtZXMsICRzaXplKTtcbiAgJHByZXY6IGlmKCRuID4gMSwgbnRoKCRuYW1lcywgJG4gLSAxKSwgbnVsbCk7XG5cbiAgQHJldHVybiBpZigkcHJldiwgKG1kYy1sYXlvdXQtZ3JpZC1icmVha3BvaW50LW1pbigkcHJldikgLSAxcHgpLCBudWxsKTtcbn1cblxuLy8gUHJpdmF0ZSBtaXhpbnMsIG1lYW50IGZvciBpbnRlcm5hbCB1c2UuXG5AbWl4aW4gbWRjLWxheW91dC1ncmlkLW1lZGlhLXF1ZXJ5Xygkc2l6ZSkge1xuICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucywgJHNpemUpIHtcbiAgICBAZXJyb3IgXCJJbnZhbGlkIHN0eWxlIHNwZWNpZmllZCEgQ2hvb3NlIG9uZSBvZiAje21hcC1rZXlzKCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucyl9XCI7XG4gIH1cblxuICAkbWluOiBtZGMtbGF5b3V0LWdyaWQtYnJlYWtwb2ludC1taW4oJHNpemUpO1xuICAkbWF4OiBtZGMtbGF5b3V0LWdyaWQtYnJlYWtwb2ludC1tYXgoJHNpemUpO1xuXG4gIEBpZiAkbWluID09IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgLy8gUGhvbmVcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICAvLyBUYWJsZXRcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluICE9IG51bGwgYW5kICRtYXggPT0gbnVsbCB7XG4gICAgLy8gRGVza3RvcFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrIC0gbm8gYnJlYWtwb2ludHMgZGVmaW5lZFxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZGMtbGF5b3V0LWdyaWQtY2VsbC1zcGFuXygkc2l6ZSwgJHNwYW4sICRndXR0ZXIpIHtcbiAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWRjLWxheW91dC1ncmlkLWNvbHVtbnMsICRzaXplKSB7XG4gICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZSBzcGVjaWZpZWQhIENob29zZSBvbmUgb2YgI3ttYXAta2V5cygkbWRjLWxheW91dC1ncmlkLWNvbHVtbnMpfVwiO1xuICB9XG5cbiAgJHBlcmNlbnQ6IHBlcmNlbnRhZ2UoJHNwYW4gLyBtYXAtZ2V0KCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucywgJHNpemUpKTtcblxuICBAaWYgJHBlcmNlbnQgPiAxMDAlIHtcbiAgICAkcGVyY2VudDogMTAwJTtcbiAgfVxuXG4gIHdpZHRoOiBjYWxjKCN7JHBlcmNlbnR9IC0gI3skZ3V0dGVyfSk7XG4gIHdpZHRoOiBjYWxjKCN7JHBlcmNlbnR9IC0gdmFyKC0tbWRjLWxheW91dC1ncmlkLWd1dHRlci0jeyRzaXplfSwgI3skZ3V0dGVyfSkpO1xuXG4gIEBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiBtaW4oJHNwYW4sIG1hcC1nZXQoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zLCAkc2l6ZSkpO1xuICB9XG59XG5cbi8vIFB1YmxpYyBtaXhpbnMsIG1lYW50IGZvciBkZXZlbG9wZXIgdXNhZ2UuXG5AbWl4aW4gbWRjLWxheW91dC1ncmlkKCRzaXplLCAkbWFyZ2luLCAkbWF4LXdpZHRoOiBudWxsKSB7XG4gIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zLCAkc2l6ZSkge1xuICAgIEBlcnJvciBcIkludmFsaWQgc3R5bGUgc3BlY2lmaWVkISBDaG9vc2Ugb25lIG9mICN7bWFwLWtleXMoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zKX1cIjtcbiAgfVxuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAkbWFyZ2luO1xuICBwYWRkaW5nOiB2YXIoLS1tZGMtbGF5b3V0LWdyaWQtbWFyZ2luLSN7JHNpemV9LCAjeyRtYXJnaW59KTtcblxuICBAaWYgJG1heC13aWR0aCB7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICB9XG59XG5cbkBtaXhpbiBtZGMtbGF5b3V0LWdyaWQtaW5uZXIoJHNpemUsICRtYXJnaW4sICRndXR0ZXIpIHtcbiAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWRjLWxheW91dC1ncmlkLWNvbHVtbnMsICRzaXplKSB7XG4gICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZSBzcGVjaWZpZWQhIENob29zZSBvbmUgb2YgI3ttYXAta2V5cygkbWRjLWxheW91dC1ncmlkLWNvbHVtbnMpfVwiO1xuICB9XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG1hcmdpbjogLSRndXR0ZXIgLyAyO1xuICBtYXJnaW46IGNhbGModmFyKC0tbWRjLWxheW91dC1ncmlkLWd1dHRlci0jeyRzaXplfSwgI3skZ3V0dGVyfSkgLyAyICogLTEpO1xuXG4gIEBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGdyaWQtZ2FwOiAkZ3V0dGVyO1xuICAgIGdyaWQtZ2FwOiB2YXIoLS1tZGMtbGF5b3V0LWdyaWQtZ3V0dGVyLSN7JHNpemV9LCAkZ3V0dGVyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChtYXAtZ2V0KCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucywgJHNpemUpLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuQG1peGluIG1kYy1sYXlvdXQtZ3JpZC1jZWxsKCRzaXplLCAkZGVmYXVsdC1zcGFuLCAkZ3V0dGVyKSB7XG4gIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zLCAkc2l6ZSkge1xuICAgIEBlcnJvciBcIkludmFsaWQgc3R5bGUgc3BlY2lmaWVkISBDaG9vc2Ugb25lIG9mICN7bWFwLWtleXMoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zKX1cIjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1kYy1sYXlvdXQtZ3JpZC1jZWxsLXNwYW5fKCRzaXplLCAkZGVmYXVsdC1zcGFuLCAkZ3V0dGVyKTtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46ICRndXR0ZXIgLyAyO1xuICBtYXJnaW46IGNhbGModmFyKC0tbWRjLWxheW91dC1ncmlkLWd1dHRlci0jeyRzaXplfSwgI3skZ3V0dGVyfSkgLyAyKTtcblxuICBAc3VwcG9ydHMgKGRpc3BsYXk6IGdyaWQpIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuQG1peGluIG1kYy1sYXlvdXQtZ3JpZC1jZWxsLW9yZGVyKCRvcmRlcikge1xuICBvcmRlcjogJG9yZGVyO1xufVxuXG5AbWl4aW4gbWRjLWxheW91dC1ncmlkLWNlbGwtYWxpZ24oJHBvc2l0aW9uKSB7XG4gIEBpZiAkcG9zaXRpb24gPT0gXCJ0b3BcIiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcblxuICAgIEBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCkge1xuICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgQGlmICRwb3NpdGlvbiA9PSBcIm1pZGRsZVwiIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICBAaWYgJHBvc2l0aW9uID09IFwiYm90dG9tXCIge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgQHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKSB7XG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgfVxuICB9XG5cbiAgQGlmICRwb3NpdGlvbiA9PSBcInN0cmV0Y2hcIiB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgfVxufVxuXG5AbWl4aW4gbWRjLWxheW91dC1ncmlkLWZpeGVkLWNvbHVtbi13aWR0aCgkc2l6ZSwgJG1hcmdpbiwgJGd1dHRlciwgJGNvbHVtbi13aWR0aCkge1xuICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucywgJHNpemUpIHtcbiAgICBAZXJyb3IgXCJJbnZhbGlkIHN0eWxlIHNwZWNpZmllZCEgQ2hvb3NlIG9uZSBvZiAje21hcC1rZXlzKCRtZGMtbGF5b3V0LWdyaWQtY29sdW1ucyl9XCI7XG4gIH1cblxuICAkY29sdW1uQ291bnQ6IG1hcC1nZXQoJG1kYy1sYXlvdXQtZ3JpZC1jb2x1bW5zLCAkc2l6ZSk7XG4gICRndXR0ZXItbnVtYmVyOiAkY29sdW1uQ291bnQgLSAxO1xuICAkbWFyZ2luLW51bWJlcjogMjtcblxuICB3aWR0aDogJGNvbHVtbi13aWR0aCAqICRjb2x1bW5Db3VudCArICRndXR0ZXIgKiAkZ3V0dGVyLW51bWJlciArICRtYXJnaW4gKiAkbWFyZ2luLW51bWJlcjtcbiAgd2lkdGg6XG4gICAgY2FsYyhcbiAgICAgIHZhcigtLW1kYy1sYXlvdXQtZ3JpZC1jb2x1bW4td2lkdGgtI3skc2l6ZX0sICN7JGNvbHVtbi13aWR0aH0pICogI3skY29sdW1uQ291bnR9ICtcbiAgICAgIHZhcigtLW1kYy1sYXlvdXQtZ3JpZC1ndXR0ZXItI3skc2l6ZX0sICN7JGd1dHRlcn0pICogI3skZ3V0dGVyLW51bWJlcn0gK1xuICAgICAgdmFyKC0tbWRjLWxheW91dC1ncmlkLW1hcmdpbi0jeyRzaXplfSwgI3skbWFyZ2lufSkgKiAjeyRtYXJnaW4tbnVtYmVyfVxuICAgICk7XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbiRtZGMtbGF5b3V0LWdyaWQtYnJlYWtwb2ludHM6IChcbiAgZGVza3RvcDogODQwcHgsXG4gIHRhYmxldDogNDgwcHgsXG4gIHBob25lOiAwcHhcbikgIWRlZmF1bHQ7XG5cbiRtZGMtbGF5b3V0LWdyaWQtY29sdW1uczogKFxuICBkZXNrdG9wOiAxMixcbiAgdGFibGV0OiA4LFxuICBwaG9uZTogNFxuKSAhZGVmYXVsdDtcblxuJG1kYy1sYXlvdXQtZ3JpZC1kZWZhdWx0LW1hcmdpbjogKFxuICBkZXNrdG9wOiAyNHB4LFxuICB0YWJsZXQ6IDE2cHgsXG4gIHBob25lOiAxNnB4XG4pICFkZWZhdWx0O1xuXG4kbWRjLWxheW91dC1ncmlkLWRlZmF1bHQtZ3V0dGVyOiAoXG4gIGRlc2t0b3A6IDI0cHgsXG4gIHRhYmxldDogMTZweCxcbiAgcGhvbmU6IDE2cHhcbikgIWRlZmF1bHQ7XG5cbiRtZGMtbGF5b3V0LWdyaWQtY29sdW1uLXdpZHRoOiAoXG4gIGRlc2t0b3A6IDcycHgsXG4gIHRhYmxldDogNzJweCxcbiAgcGhvbmU6IDcycHhcbikgIWRlZmF1bHQ7XG5cbiRtZGMtbGF5b3V0LWdyaWQtZGVmYXVsdC1jb2x1bW4tc3BhbjogNCAhZGVmYXVsdDtcblxuJG1kYy1sYXlvdXQtZ3JpZC1tYXgtd2lkdGg6IG51bGwgIWRlZmF1bHQ7XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n    font-family: Optima;\n    src: url('Ultima.ttf') format(\"opentype\");\n  }\n\n@font-face {\nfont-family: Snell Roundhand;\nsrc: url('Snell.otf') format(\"opentype\");\n}\n\n* {\n    font-family: Optima;\n    font-size: 20px;\n    line-height: 30px;\n}\n\nbutton {\n    background: none;\n    background-color: none;\n    border: none;\n    font-size: 15px;\n    box-shadow: none;\n}\n\nbutton:hover {\n    opacity: 0.4;\n}\n\nbutton:focus, button:active, button:focus:active {\n    background-image: none;\n    outline: none;\n    box-shadow: none;\n  }\n\n.title p {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 40px;\n    font-weight: bold;\n    letter-spacing: 1vw;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDBDQUFxRDtHQUN0RDs7QUFFSDtBQUNBLDZCQUE2QjtBQUM3Qix5Q0FBb0Q7Q0FDbkQ7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFFZCxpQkFBaUI7R0FDbEI7O0FBRUQ7SUFDRSw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogT3B0aW1hO1xuICAgIHNyYzogdXJsKGFzc2V0cy9mb250cy9VbHRpbWEudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgfVxuXG5AZm9udC1mYWNlIHtcbmZvbnQtZmFtaWx5OiBTbmVsbCBSb3VuZGhhbmQ7XG5zcmM6IHVybChhc3NldHMvZm9udHMvU25lbGwub3RmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6IE9wdGltYTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG5cbmJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSwgYnV0dG9uOmZvY3VzOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLnRpdGxlIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXZ3O1xufVxuXG5cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@material/layout-grid/mdc-layout-grid.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/layout-grid/mdc-layout-grid.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!../../sass-loader/lib/loader.js??ref--14-3!./mdc-layout-grid.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@material/layout-grid/mdc-layout-grid.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!****************************************************************************************!*\
  !*** multi ./node_modules/@material/layout-grid/mdc-layout-grid.scss ./src/styles.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tamar/legendoftamar/node_modules/@material/layout-grid/mdc-layout-grid.scss */"./node_modules/@material/layout-grid/mdc-layout-grid.scss");
module.exports = __webpack_require__(/*! /Users/tamar/legendoftamar/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map