import { css } from '@emotion/react';

export const baseStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
  }
  ::-webkit-input-placeholder {
    /* Edge */
    color: #c2c2c2;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #c2c2c2;
  }

  ::placeholder {
    color: #c2c2c2;
  }
  html,
  body {
    font-family: 'Roboto';

    font-size: 16px;
    /* scroll-behavior: smooth; */
  }

  a {
    /* transition: color 0.15s; */
    /* color: #663399; */
  }

  body {
    font-family: 'Roboto';
  }
  .visibleMobile {
    display: none;
  }
  .visibleMobileView {
    display: none !important;
  }
  .video-responsive {
    position: relative;
    padding-bottom: 56.2%;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  .displayInline {
    display: inline-block;
  }
  .navBarToggle {
    border: 0px solid #fff;
    border-radius: 4px;
    width: 36px;
    height: 33px;
    position: absolute;
    right: 20px;
    padding: 8px 5px;
    display: none;
  }
  .navBarToggle .iconBar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 4px;
    background-color: #001934;
  }
  .navBarToggle .iconBar:first-of-type {
    margin-top: 0px;
  }
  .video-responsive iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .diffNewLine {
    color: #22863a;
    background-color: #f0fff4;
  }

  .diffRemoveLine {
    color: red;
    background-color: #ffcccc;
  }
  .navBarParent {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
  }
  .divider {
    height: 30px;
    margin: 0 15px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }
  .navBarULRight {
    /* position: absolute;
  right: 30px; */
  }
  .githubIcon {
    width: 15px;
    margin-right: 5px;
  }

  .githubSection {
    display: flex;
    align-items: center;
    color: #000;
    opacity: 0.7;
  }

  .githubSection:hover {
    text-decoration: none;
    opacity: 1;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff !important;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: #001933;
  }

  .headerWrapper {
    border-bottom: 1px solid rgb(212, 218, 223);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    display: flex;
    align-items: center;
  }
  .formElement {
    background-color: transparent;
    padding: 4px;
    border-radius: 5px;
    position: relative;
  }
  .formElement:focus {
    outline: none;
    border: none;
  }
  .formElement svg path {
    fill: #2fd2c5;
  }
  .searchInput {
    width: 100%;
    background-color: rgba(28,211,198,.12) !important;
    border-width: 0 !important;
    color: #C2C2C2;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    opacity: .6;
    padding-left: 38px;
    max-width: 600px;
  }
  .searchInput:focus,
  .searchInput:visited,
  .searchInput:hover,
  .searchInput:focus-within {
    outline: none;
    border: 0;
  }
  .searchWrapper {
    padding-left: 0px;
    padding-right: 20px;
    flex: 1;
    position: relative;
  }
  .searchWrapper a {
    font-weight: 500;
  }
  .hitWrapper {
    background-color: #fff;
    padding: 0.7em 1em 0.4em;
    border-radius: 4px;
    position: absolute;
    width: 80vw;
    max-width: 30em;
    top: 40px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
    height: auto;
    max-height: 80vh;
    overflow: scroll;
    left: 0;
  }
  .hitWrapper ul li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid;
    list-style-type: none;
  }
  .hitWrapper ul li:first-of-type {
    border-top: 0px;
    margin-top: 0px;
    color: black !important;
    padding: 0px;
  }
  .showResults {
    display: block;
  }
  .hideResults {
    display: none;
  }
  .hitWrapper span {
    color: black;
    font-size: 14px;
  }
  .headerTitle {
    height: auto;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: #fff !important;
    /* margin-top: 16px; */
    text-transform: uppercase;
  }
  .headerTitle a {
    color: #fff;
  }

  .headerTitle a:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  .logoWrapper {
    padding: 21px 0;
    padding-left: 20px;
  }

  .logoContent {
    font-family: 'Roboto';
    margin-left: 16px;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 500;
    padding-right: 10px;
  }

  /* Header section starts here */
  .removePadd {
    padding: 0 !important;
  }
  .navBarDefault {
    /* background-color: #001934; */
    background-color: #9982EC;
    border-radius: 0;
    border-top: 0;
    margin-bottom: 0;
    border: 0;
    display: flex;
    align-items: center;
    box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    -moz-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.8);
    -o-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    z-index: 1;
    /* padding: 15px; */
    position: relative;
    /* height: 80px; */
  }
  .navBarHeader {
    min-width: 335px;
    padding-right: 20px;
    display: flex;
    align-items: center;
  }
  .navBarBrand {
    padding: 0px 0px;
    display: flex;
    align-items: center;
  }

  .navBarBrand img {
    width: 40px;
    margin-right: 6px;
    display: inline-block;
  }
  .navBarUL li {
    list-style-type: none;
  }
  .navBarUL {
    -webkit-overflow-scrolling: touch;
  }
  .navBarUL li a {
    font-family: 'Roboto';
    color: #fff !important;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
    opacity: 1;
    padding: 10px 15px;
  }
  .navBarNav {
    display: flex;
    align-items: center;
  }
  .navBarUL li a img,
  .navBarUL li a .shareIcon {
    width: 20px;
  }
  .navBarUL li a:hover {
    opacity: 0.7;
  }
  pre {
    border: 0 !important;
    background-color: rgb(245, 247, 249); /* !important; */
  }
  .password {
    font-family: 'Arial';
    border: 0 !important;
    background-color: rgb(245, 247, 249); /* !important; */
  }

  blockquote {
    color: rgb(116, 129, 141);
    margin: 0px 0px 24px;
    padding: 0px 0px 0px 12px;
    border-left: 4px solid rgb(230, 236, 241);
    border-color: rgb(230, 236, 241);
  }
  .socialWrapper {
    display: flex;
    align-items: center;
  }
  .socialWrapper li {
    display: inline-block;
  }
  .socialWrapper li a {
    display: contents;
  }
  .discordBtn, .twitterBtn {
    border-radius: 4px;
    border: solid 1px #d1d2d3;
    background-color: #f1f5f8;
    width: 20px;
    height: 20px;
    padding-top: 2px;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .8;
    cursor: pointer;
  }
  .twitterBtn img {
    width: 12px !important;
  }
  .discordBtn img {
    width: 10px !important;
  }
  .discordBtn:hover, .twitterBtn:hover {
    opacity: 1;
  }
  .discordBtn {
    img {
      width: 10px;
    }
  }
  /* Header section ends here */
  .sidebarTitle {
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
    background-color: #f8f8f8;
    padding: 18px 16px;
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 600;
    color: #001934;
    display: flex;
    align-items: center;
  }

  .sideBarShow {
    display: none;
  }

  .sidebarTitle a {
    color: #001934;
  }

  .greenCircle {
    width: 8px;
    height: 8px;
    background-color: #1cd3c6;
    border-radius: 50%;
    margin: 0 12px;
  }

  .headerNav {
    font-family: 'Roboto';
    padding: 0px 24px;
    color: #001933;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
  }

  .headerNav a {
    color: #001933;
    text-decoration: none;
  }

  .headerNav a:hover {
    text-decoration: none;
  }

  .logoWrapper img {
    width: 32px;
  }

  .sideBarUL {
    margin-top: 5px;
    margin-bottom: 80px;
  }

  .sideBarUL li {
    list-style-type: none;
    width: auto;
  }

  .sideBarUL li a {
    /* color: #fff; */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    /* padding: 7px 24px 7px 16px; */
    padding-left: 10px;
    /* padding-right: 25px; */
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  .hideFrontLine .collapser {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }

  .hideFrontLine .active > a {
    background-color: #AA94FB;
    color: #fff !important;
  }
  .firstLevel ul li .collapser svg path {
    fill: #fff !important;
  }
  .active .collapser > svg > path {
    fill: #001933 !important;
  }

  .firstLevel ul .item ul .item {
    border-left: 1px solid #e6ecf1;
  }

  .sideBarUL .item {
    list-style: none;
    padding: 0;
  }

  .sideBarUL .item > a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-right: 35px;
    padding-left: 15px;
  }

  .showFrontLine .item > a:hover {
    background-color: #001933;
  }

  .showFrontLine .active > a {
    /* color: #fff; */
    background-color: #001933;
  }

  .sideBarUL .item .item {
    margin-left: 16px;
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  .showFrontLine .item .item {
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
    padding: 0;
    width: calc(100% - 16px) !important;
  }

  .showFrontLine .item .active > a {
    border-color: rgb(230, 236, 241) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: #56a6ff !important;
    color: #fff;
  }

  .titleWrapper {
    display: flex;
    align-items: center;
    /* padding-bottom: 40px; */
    border-bottom: 1px solid rgb(230, 236, 241);
    /* margin-bottom: 32px; */
  }

  .gitBtn {
    height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  .gitBtn img {
    width: 15px;
    display: inline-block;
    margin-right: 5px;
  }

  .addPaddTopBottom {
    padding: 50px 0;
  }

  .preRightWrapper {
    display: block;
    margin: 0px;
    flex: 1 1 0%;
    padding: 16px;
    text-align: right;
  }

  .smallContent {
    display: block;
    margin: 0px;
    padding: 0px;
    color: #6e6e6e;
  }

  .smallContent span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }

  /* **************************** */

  .nextRightWrapper {
    display: block;
    margin: 0px;
    padding: 16px;
    flex: 1 1 0%;
  }

  /* tables.css */
  table {
    padding: 0;
    font-size: 14px;
    border-collapse: collapse;
  }

  table tr {
    border-top: 1px solid #cccccc;
    margin: 0;
    padding: 0;
  }

  table tr:nth-of-type(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #919191;
    text-align: left;
    margin: 0;
    padding: 3px 8px;
    background-color: #e2e2fd;
  }

  table tr td {
    border: 1px solid #919191;
    text-align: left;
    margin: 0;
    padding: 3px 8px;
  }

  table tr th :first-of-type,
  table tr td :first-of-type {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }
  .centeredTable td {
    text-align: center;
  }
  .inGameDescTable th {
    height: 24.5px;
  }
  .statueTable td:not(:first-of-type) {
    text-align: center;
  }
  /* Price Table (Staves, Pots pages)*/
  .priceTable th {
    text-align: center;
    padding: 2px;
  }
  .priceTable td {
    text-align: center;
    padding: 3px;
  }
  /* Price Table Small (Price Chart page)*/
  .priceTableSmall th {
    text-align: center;
    padding: 1px;
  }
  .priceTableSmall td {
    padding: 2px;
  }
  .priceTableSmall th {
    font-size: 12.5px;
  }
  .priceTableSmall td {
    font-size: 12.5px;
  }
  .priceTableMedium th {
    text-align: center;
    padding: 2px;
  }
  .priceTableMedium td {
    text-align: center;
    padding: 2px;
    font-size: 13.5px;
  }
  .priceTablePots th {
    font-size: 13.5px;
  }
  .priceTablePots td {
    font-size: 13.5px;
  }
  .monsterDivider {
    background-color: #f9fbff;
  }
  .tableDivider {
    font-weight: normal;
    background-color: #ececec;
  }
  .grayDivider {
    background-color: #ececec;
    padding-top: 1px !important;
  }
  .purpleDivider {
    background-color: #e3d6ff !important;
    padding-top: 1px !important;
  }
  .tableCategory th {
    font-weight: normal;
    background-color: #f0f0f0;
  }
  /* overviewTable (dungeon pages) */
  .overviewTable th {
    background-color: #ddfff7;
  }
  .monsterTable th {
    font-weight: normal;
    text-align: center;
    padding: 2.5px;
    background-color: #d6d6ff;
  }
  .monsterTable td {
    padding-left: 2px;
    padding-right: 2px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 13px;
  }
  .monsterTable img {
    vertical-align: bottom !important;
    position: relative !important;
    max-height: 16px;
    max-width: 16px;
  }
  #hideMonTblImgBtn {
    padding: 3px;
    border-radius: 3px;
    margin: 0;
  }
  .hidden {
    display: none;
  }
  .tooltip {
    position: relative;
    display: block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: #666;
    color: #fff;
    text-align: center;
    border: 2px solid #b3fff4;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: -50%;
    margin-left: -60px;
  }
  .tooltip .tooltiptextManeater {
    visibility: hidden;
    width: 300px;
    background-color: #666;
    color: #fff;
    text-align: center;
    border: 2px solid #b3fff4;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: -50%;
    margin-left: -135px;
  }
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #666 transparent transparent transparent;
  }
  .tooltip .tooltiptextManeater::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #666 transparent transparent transparent;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  .tooltip:hover .tooltiptextManeater {
    visibility: visible;
  }
  .monsterTableSmall th {
    padding: 2px;
    font-size: 13px;
  }
  .monsterTableSmall td {
    padding: 2px;
    font-size: 13px;
  }
  .dungeonMonsters th {
    background-color: #f3f3f3;
    font-weight: normal;
    text-align: center;
    padding: 2px;
  }
  .dungeonMonsters td {
    font-size: 12px;
    text-align: center;
    padding: 2px;
  }
  .dungeonMonsterList th {
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .dungeonMonsterList td {
    padding: 3px;
  }
  .monsterListDay td:nth-of-type(1) {
    background-color: #f7f7f7;
    text-align: left;
  }
  .monsterListDay td:nth-of-type(2) {
    background-color: #fffff6;
    text-align: left;
  }
  .monsterListDay td {
    text-align: center;
    padding: 4px;
  }
  .monsterPageTable th {
    font-weight: normal;
    text-align: center;
    padding: 1.5px;
  }
  .monsterPageTable td {
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 1.5px;
    padding-right: 1.5px;
    font-size: 13.5px;
  }
  .monsterPageTable td:nth-of-type(1),
  .monsterPageTable td:nth-of-type(2),
  .monsterPageTable td:nth-of-type(4),
  .monsterPageTable td:nth-of-type(5),
  .monsterPageTable td:nth-of-type(6),
  .monsterPageTable td:nth-of-type(7),
  .monsterPageTable td:nth-of-type(8),
  .monsterPageTable td:nth-of-type(9),
  .monsterPageTable td:nth-of-type(10) {
    text-align: center;
  }
  .monsterPageTable td:nth-of-type(2) {
    background-color: #f2f2f2;
  }
  .monsterPageTable img {
    padding: 0px;
    max-height: 20px;
    position: relative !important;
  }
  .monsterImage {
    margin-bottom: 5px !important;
  }
  .monsterImage img {
    max-width: 60px;
    max-height: 60px;
  }
  .bossImage {
    margin-bottom: 5px !important;
  }
  .bossImage img {
    max-width: 100px;
    max-height: 70px;
  }
  #monsterList td {
    text-align: center;
  }
  .dungeonItemTable th {
    font-weight: normal;
    background-color: #ececec;
    text-align: center;
    padding: 3.5px;
  }
  .dungeonItemTable td {
    text-align: center;
    padding: 3.5px;
  }
  .itemTable th {
    text-align: center;
    padding: 3px;
  }
  .itemTable td {
    padding: 3px;
  }
  .trainingTable th {
    font-weight: normal;
    text-align: center;
    font-size: 13.5px;
    padding: 2.5px;
  }
  .trainingTable td {
    text-align: center;
    font-size: 13.5px;
    padding: 2.5px;
  }
  .itemListTable th {
    text-align: center;
    padding: 2px;
  }
  .itemListTable td {
    padding: 2px;
  }
  .itemListCentered th {
    text-align: center;
    padding: 2px;
  }
  .itemListCentered td {
    text-align: center;
    padding: 2px;
  }
  .itemListCenteredSmall th {
    font-size: 13px;
    text-align: center;
    padding: 1.5px;
  }
  .itemListCenteredSmall td {
    font-size: 13px;
    text-align: center;
    padding: 1.5px;
  }
  .itemListCentered3 th {
    text-align: center;
    padding: 3px;
  }
  .itemListCentered3 td {
    text-align: center;
    padding: 3px;
  }
  .summaryTable th {
    text-align: center;
    padding: 1.5px;
  }
  .summaryTable td {
    padding: 1.5px;
  }
  .locationTable th {
    background-color: #f6f4ff;
    font-weight: normal;
    text-align: center;
    padding: 1px;
  }
  .locationTable td {
    text-align: center;
    padding: 1px;
  }
  .itemDetailsTable th {
    background-color: #f6f4ff;
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .itemDetailsTable td {
    padding: 3px;
  }
  .itemDetailsTable img {
    position: relative !important;
  }
  .dungeonOverview {
    margin-bottom: 8px;
  }
  .dungeonOverview th {
    background-color: #dfb9ff;
    font-weight: normal;
  }
  .dungeonOverview td {
  }
  .dungeonTable img {
    width: 32px !important;
    position: relative !important;
  }
  .dungeonTable th {
    font-weight: normal;
  }
  .runeTable th {

  }
  .runeTable td {
    padding: 3px 5px;
  }
  .dungeonItems th {
    font-weight: normal;
    text-align: center;
    padding: 4px;
  }
  .dungeonItems td {
    text-align: center;
    padding: 4px;
  }
  .clearIcon {
    padding: 0px;
  }
  .npcTable th {
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .npcTable td:first-of-type {
    text-align: center;
  }
  .npcTable td {
    padding: 3px;
  }
  .npcTable img {
    width: 48px !important;
    height: auto !important;
    position: relative !important;
  }
  .firstYellowTable th {
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .firstYellowTable td:first-of-type {
    background-color: #ffffe4;
    text-align: center;
  }
  .firstYellowTable td {
    padding: 3px;
  }
  .formationTable td {
    padding: 3px 6px;
    text-align: center;
  }
  .galleryTable td {
    text-align: center;
    padding: 2px;
  }
  .trapTable th {
    font-weight: normal;
    text-align: center;
    padding: 3px;
  }
  .trapTable td {
    padding: 3px;
  }
  .trapTable td:first-of-type {
    text-align: center;
  }
  .trapTable img {
    position: relative !important;
  }
  .statusTable th {
    text-align: center;
    padding: 3px;
  }
  .statusTable td {
    padding: 1px;
  }
  .trophyTable th {
    padding: 3px;
  }
  .trophyTable td {
    padding: 3px;
  }
  .trophyTable img {
    position: relative !important;
  }
  .trophyImageTd {
    padding: 0px !important;
  }
  .centeredTd {
    text-align: center;
  }
  .statusImageTd {
    text-align: center;
    background-color: #4f597a;
    color: lightgray;
  }
  .sealTable td:nth-of-type(2){
    text-align: center;
  }
  .sealTable th {
    padding: 3px;
  }
  .sealTable td {
    padding: 3px;
  }
  .sealTableCentered th {
    padding: 3px;
    text-align: center;
  }
  .sealTableCentered td {
    padding: 3px;
  }
  .tableNotes p {
    font-size: 13px;
  }
  .monsterTableRates th {
    text-align: center;
    padding: 2px;
    font-size: 12.5px;
  }
  .monsterTableRates td {
    text-align: center;
    padding: 2px;
    font-size: 12.5px;
  }
  .monsterTablePostgame th {
    text-align: center;
    padding: 1px;
    font-size: 12px;
  }
  .monsterTablePostgame td {
    text-align: center;
    padding: 0.5px;
    font-size: 12px;
  }
  .goldenMonsters th {
    background-color: gold;
  }
  .monsterDrain {
    background-color: #FFCAE5;
  }
  .monsterGhost {
    background-color: #FFFFD1;
  }
  .monsterDragon {
    background-color: #CCDF8F;
  }
  .monsterItem {
    background-color: #d6fffb;
  }
  .monsterItemChange {
    background-color: #E7D1FD;
  }
  .monsterWater {
    background-color: #B5DAFF;
  }
  .monsterWeapon {
    background-color: #C0CAFF;
  }
  .monsterCyclops {
    background-color: #e3ffe3;
  }
  .monsterBomb {
    background-color: #fc9;
  }
  .monsterBone {
    background-color: #ffff70;
  }
  .monsterNone {
    background-color: #f7f7f7;
  }
  .monsterStrong {
    background-color: #FFCAE5;
  }
  .monsterHighStat1 {
    background-color: #FFFFD1;
  }
  .monsterHighStat2 {
    background-color: #ffdbb8;
  }
  .itemEquipment {
    background-color: #b0d9ff;
  }
  .itemScroll {
    background-color: #ffcfcf;
  }
  .itemEdible {
    background-color: #bfffbf;
  }
  .itemCurse {
    background-color: #7aabdd;
  }
  .sealEquipment {
    text-align: center;
    background-color: #b0d9ff;
  }
  .sealScroll {
    text-align: center;
    background-color: #ffcfcf;
  }
  .sealEdible {
    text-align: center;
    background-color: #bfffbf;
  }
  .sealCurse {
    text-align: center;
    background-color: #7aabdd;
  }
  .highlightGreen {
    background-color: #CCFFCC !important;
  }
  .highlightGray {
    background-color: #f2f2f2 !important;
  }
  .highlightGray2 {
    background-color: #d2d2d2 !important;
  }
  .highlightYellow {
    background-color: #ffffe4 !important;
  }
  .highlightPink {
    background-color: #ffd3d3 !important;
  }
  .highlightBlue {
    background-color: #c4ecff !important;
  }
  .highlightBlack {
    background-color: #333333 !important;
    color: white;
  }
  .highlightPurple {
    background-color: #e6e6fa !important;
  }
  .highlightPurple2 {
    background-color: #7700cc !important;
    color: white;
  }
  .highlightPurple3 {
    background-color: #dfb9ff !important;
  }
  .highlightRed {
    background-color: #ffb3b3 !important;
  }
  .highlightOrange {
    background-color: #fff4e6 !important;
  }
  .highlightOrange2 {
    background-color: #ffe3b9 !important;
  }
  .highlightOrange3 {
    background-color: #ffb23e !important;
  }
  .highlightLightblue {
    background-color: #eef6ff !important;
  }
  .highlightNight {
    background-color: #ebf8ff !important;
  }
  .highlightNight2 {
    background-color: #d3cfff;
  }
  .highlightNight3 {
    background-color: #ecb8ff;
  }
  .highlightPlatinum {
    background-color: #e4f8ff !important;
  }
  .highlightGold {
    background-color: #fff3b4 !important;
  }
  .highlightSilver {
    background-color: #e8e8e8 !important;
  }
  .highlightBronze {
    background-color: #ffd4bf !important;
  }
  .highlightFarming {
    background-color: #c3ecff !important;
  }
  .highlightUseful {
    background-color: #aeffda !important;
  }
  .highlightItem {
    background-color: #ddc4ec !important;
  }
  .highlightOffense {
    background-color: #fff09f !important;
  }
  .highlightDanger {
    background-color: #ffd0f4 !important;
  }
  .highlightExtreme {
    background-color: #ffb1b1 !important;
  }
  .highlightWater {
    background-color: #3366ff;
    color: white;
  }
  .highlightLava {
    background-color: #e33f3f;
    color: white;
  }
  .highlightNoWalls {
    background-color: lightsteelblue;
    color: white;
  }
  .highlightNoWallsLava {
    background-color: #e6e6e6;
    color: #e33f3f;
  }
  .highlightShop {
    background-color: #fffac5 !important;
  }
  .highlightShop2 {
    background-color: #fbe366 !important;
  }
  .highlightMH {
    background-color: #f4dfff !important;
  }
  .highlightFog {
    background-color: #dbdbdb;
  }
  .highlightMonsters {
    background-color: #6aa7f4;
  }
  .highlightItems {
    background-color: #99f2e2;
  }
  .highlightTraps {
    background-color: #bfbfbf;
  }
  .monsterDay {
    background-color: #fffff6;
  }
  .monsterNight {
    background-color: #edf4ff;
  }
  .monsterTableVillage {
    background-color: #baeaff;
  }
  .day {
    background-color: #fffff6;
  }
  .night {
    background-color: #222;
    color: #d2d2d2;
  }
  .night img {
    filter: brightness(1.75);
  }
  .farm {
    color: #0087ff;
  }
  .farmNight {
    color: #2598ff;
  }
  .useful {
    color: #01b04e;
  }
  .usefulNight {
    color: #89ff85;
  }
  .items {
    color: #8e1fff;
  }
  .itemsNight {
    color: #e78eff;
  }
  .strong {
    color: #bf911c;
  }
  .strongNight {
    color: goldenrod;
  }
  .danger {
    color: #ff8300;
  }
  .dangerNight {
    color: #ffc636;
  }
  .extreme {
    color: #ff1e1e;
  }
  .extremeNight {
    color: #ff6060;
  }
  .tipName {
    color: #f3d0ff;
  }
  .tipSpeed {
    color: #b3fff4;
  }
  .tipType {
    color: #eec69c;
  }
  .tipSpecial {
    color: #fdffc5;
  }
  .tipItem {
    color: #ffdec1;
  }
  .tipAbility {
    color: #ccc;
  }
  .monsterTableNdubba {
    color: white;
    background-color: #bb976a;
  }
  .monsterTableNtwyn {
    color: white;
    background-color: #99bfab;
  }
  .monsterTableNmach {
    color: white;
    background-color: #aaaaa0;
  }
  .monsterTableNdup {
    color: white;
    background-color: #cece7e;
  }
  .maneater {
    color: white;
    background-color: #ffccc9;
  }
  .darkManeater {
    color: white;
    background-color: #d9b1b0;
  }
  .villeater {
    color: white;
    background-color: #fff5bb;
  }
  .darkVilleater {
    color: white;
    background-color: #d5c982;
  }
  .mounteater {
    color: white;
    background-color: #90ffb1;
  }
  .darkMounteater {
    color: white;
    background-color: #84d09b;
  }
  .isleater {
    color: white;
    background-color: #b5b0ff;
  }
  .darkIsleater {
    color: white;
    background-color: #8782ce;
  }
  .monsterTableManeater {
    color: white;
    background-color: #b94c45;
  }
  .monsterTableVilleater {
    color: white;
    background-color: #d9c656;
  }
  .monsterTableMounteater {
    color: white;
    background-color: #349c53;
  }
  .monsterTableIsleater {
    color: white;
    background-color: #4d45cb;
  }
  .itemPageImage {
    background-color: #555;
  }
  .tableWithImages img {
    position: relative !important;
  }
  .mapTable td {
    text-align: center;
  }
  .mapTable img {
    width: 200px !important;
    height: auto;
    position: relative !important;
  }
  /* end - tables.css */

  /* List styling */
  .dungeonLinksUL li {
    line-height: 1.3 !important;
  }
  .quickLinksUL li {
    line-height: 1.3 !important;
  }
  .monsterTableNotes {
    margin-top: 3px !important;
  }
  /* end list styling */

  /* Paragraph styling */
  .emphasis {
    font-weight: bold;
  }
  .orangeText {
    color: #f9a100;
  }
  .orangeText2 {
    color: #fd8200;
  }
  .blueText {
    color: #66f;
  }
  .blueText2 {
    color: blue;
  }
  .darkblueText {
    color: #0000cd;
  }
  .lightblueText {
    color: #6495ed;
  }
  .redText {
    color: #f66;
  }
  .redText2 {
    color: red;
  }
  .greenText {
    color: #009e25;
  }
  .purpleText {
    color: #9d338b;
  }
  .purpleText2 {
    color: #a256bd;
  }
  .limitBreak {
    color: #ff46a3;
  }
  .centeredText {
    text-align: center;
  }
  .leftText {
    text-align: left !important;
  }
  .facility {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
  }
  /* Image styling */
  img {
    max-width: 100%;
  }
  .equipmentImage span {
    margin-left: 20px !important;
    background-image: none !important;
    display: block !important;
  }
  .equipmentImage {
    margin-top: 12px;
    margin-bottom: 12px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .equipmentImage img {
    height: auto !important;
    transform: scale(1.4);
    background-color: #555;
    border-radius: 3px;
    padding: 5px;
  }
  .dungeonImage span {
    height: 200px;
    width: 265px;
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .dungeonImage img {
    height: auto !important;
    max-height: 200px;
    width: auto !important;
    padding: 5px;
  }
  .otherImage span {
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .otherImage img {
    height: auto !important;
    max-height: 240px;
    width: auto !important;
    padding: 5px;
  }
  .galleryImage span {
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .galleryImage span img {
    height: auto !important;
    width: 590px;
  }
  .dungeonPageImage2 {
    display: flex;
    width: 680px !important;
    height: auto;
  }
  .dungeonPageImage2 img {
    position: relative !important;
  }
  .allyImage span {
    margin-left: 0px !important;
    background-image: none !important;
    display: block !important;
  }
  .allyImage img {
    height: auto !important;
    width: auto !important;
    padding: 1px;
  }
  .statueImage {
    display: flex;
  }
  .statueImage span {
    margin: 0px !important;
    margin-right: 5px !important;
  }
  .statueImage img {
    height: auto !important;
    width: auto !important;
    padding: 2px;
    background-color: #555;
    border-radius: 3px;
    position: relative !important;
  }
  .gatsby-resp-image-background-image {
    display: none !important;
  }
  .gatsby-resp-image-wrapper {
    display: inline-block !important;
  }
  .itemPageImage img {
    position: relative !important;
    background-color: #555;
  }
  .boxArt img {
    height: 150px !important;
    position: relative !important;
  }
  .relativeImage img {
    position: relative !important;
  }
  .pageTopImage img {
    padding-top: 5px;
    position: relative !important;
  }
  .statusTable img {
    position: relative !important;
  }
  #resonanceImage {
    height: auto;
    width: 280px;
  }
  #synthesisMixer {
    height: 55px;
    width: 60px;
    margin-bottom: 10px;
  }
  #synthesisPot {
    height: 20px;
    width: 20px;
    margin-bottom: 10px;
  }
  #catstone {
    height: 30px;
    width: 27px;
  }
  .ally {
    width: 100px;
    height: auto;
  }
  .screenshot {
    width: 340px;
    height: auto;
  }
  .smallScreenshot {
    width: 240px;
    height: auto;
  }
  .overworldMap {
    width: 340px;
    height: auto;
    margin-top: 6px;
  }
  .flower {
    height: 70px !important;
    width: auto;
  }
  #auraImage img {
    width: 90px !important;
    height: auto;
  }
  #islandImage img {
    width: 150px !important;
    height: auto;
  }
  #mapLine img {
    height: 100px !important;
    width: auto;
  }
  #mapI img {
    width: 150px !important;
    height: auto;
  }
  #pickachoiceImage img {
    width: 160px !important;
    height: auto;
  }
  #hiddenRoom img {
    width: 200px !important;
    height: auto;
  }
  .mapImage img {
    width: 220px !important;
    height: auto;
  }
  /* end image */
  .githubBtn {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 10px 0px;
    padding-left: 15px;
    max-height: 40px;
  }
  .githubBtn span span {
    display: flex;
    align-items: center;
  }

  .communitySection {
    font-size: 24px;
    font-weight: 700;
  }
  .authorSection {
    padding: 20px 0;
  }
  .authorSection,
  .authorName {
    display: flex;
    align-items: center;
  }
  .authorImg img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    min-width: 75px;
    max-width: 75px;
    min-height: 75px;
    max-height: 75px;
  }
  .authorDetails {
    padding-left: 10px;
  }
  .authorDesc {
    padding-top: 5px;
    font-size: 14px;
  }
  .authorName img {
    margin-left: 10px;
    display: inline-block;
    width: 20px;
  }
  .authorName img:hover {
    opacity: 0.7;
  }

  .heading1 {
    font-size: 26px;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
  }

  .heading2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
  }

  .heading3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 16px;
    border-left: 10px solid #e2e2fd;
    border-right: 1px solid #e2e2fd;
    border-bottom: 2px solid #e2e2fd;
    border-top: 1px solid #e2e2fd;
    padding-left: 10px;
  }

  .heading4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
    border-left: 10px solid #e2e2fd;
    padding-left: 6px;
  }

  .heading5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
    border-left: 5px solid #e2e2fd;
    padding-left: 4px;
  }

  .heading6 {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 8px;
    margin-top: 12px;
  }

  .paragraph {
    margin: 12px 0px 12px;
    line-height: 1.625;
  }

  .pre {
    font-size: 14px;
    margin: 0px;
    padding: 16px;
    overflow: auto;
  }

  .poweredBy {
    font-size: 0.6em;
    text-align: end;
    padding: 0;
  }
  .topnav {
    -webkit-transition: top 0.5s, bottom 0.5s;
  }

  @media (max-width: 767px) {
    .formElement svg path {
      fill: #001934;
    }
    .visibleMobileView {
      display: block !important;
    }
    .searchInput {
      color: #001934;
    }
    .socialWrapper {
      position: absolute;
      right: 10px;
      top: 29px;
    }
    .responsive {
      margin-top: 15px;
      position: relative;
      padding-bottom: 20px;
      border-top: 1px solid #fff;
    }
    .headerTitle {
      padding-right: 50px;
      font-size: 16px;
    }
    .navBarBrand {
      min-height: 40px;
    }
    .navBarBrand img {
      margin-right: 8px;
    }
    .topnav.responsive .visibleMobile {
      display: block;
    }
    .topnav .navBarUL {
      display: none;
    }
    .topnav.responsive .navBarUL {
      display: block;
      text-align: left;
    }
    .hiddenMobile {
      display: none !important;
    }
    hr {
      margin-top: 0;
      margin-bottom: 0;
    }
    .navBarParent {
      display: block;
    }
    .separator {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .navBarULRight {
      position: static;
    }
    .navBarUL {
      display: flex;
      align-items: center;
      margin: 7.5px 0px;
    }
    .navBarUL li {
      height: 37px;
    }
    .navBarUL li a {
      font-size: 14px;
      padding: 10px 15px;
    }

    .navBarDefault {
      display: block;
      height: auto;
    }

    .navBarToggle {
      margin-right: 0;
      display: block;
      position: absolute;
      left: 11px;
      top: 15px;
      background: #fff;
    }

    .navBarHeader {
      display: flex;
      min-width: auto;
      padding-right: 0;
      align-items: center;
    }

    .navBarBrand {
      font-size: 20px;
      padding: 0 0;
      padding-left: 0;
      flex: initial;
      padding-right: 15px;
    }

    .titleWrapper {
      padding: 0 15px;
      display: block;
    }

    .gitBtn {
      display: inline-block;
    }

    .mobileView {
      text-align: left !important;
      padding-left: 0 !important;
    }

    .searchWrapper {
      padding: 0px 0;
      padding-top: 0px;
      position: absolute;
      bottom: 0px;
      width: calc(100% - 70px);
      position: absolute;
      left: 40px;
      top: 8px;
    }
    .hitWrapper {
      width: 100%;
      right: 0;
      top: 35px;
      max-height: fit-content;
      position: static;
    }
    .monsterTable th {
      padding: 0.5px;
      font-size: 12px;
    }
    .monsterTable td {
      padding: 0.5px;
      font-size: 12px;
    }
    .monsterTable img {
      display: none;
    }
    .tooltip .tooltiptext {
      width: 150px;
      margin-left: -5px;
      left: -30%;
    }
    .tooltip .tooltiptextManeater {
      width: 150px;
      margin-left: -120px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .navBarDefault {
      padding: 10px;
    }
    .navBarBrand {
      font-size: 22px;
    }
    .navBarHeader {
      min-width: 240px;
      flex: initial;
    }
    .githubBtn {
      padding: 10px 10px;
    }
    .divider {
      margin: 0 5px;
      height: 20px;
    }
    .hitWrapper {
      max-width: 500px;
    }
    .navBarUL li a {
      padding: 10px 5px;
    }
    .searchWrapper {
      padding-left: 0px;
    }
  }
`;
