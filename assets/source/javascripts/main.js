/*
 * Surf&Turf
 */

import $ from 'jquery'
window.$ = window.jQuery = $;
import utilities from "./components/utilities";
import sliders from "./components/sliders";
import toggler from "./components/toggler";
import header from "./components/header";
// import SmoothScroll from 'smoothscroll-for-websites'

const loadPage = () => {

    utilities.init();
    sliders.init();
    toggler.init();
    header.init();

};

document.addEventListener('DOMContentLoaded', loadPage);
