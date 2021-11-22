import '../styles/main.scss';
import '../modules/nav-loading.js';
import * as bootstrap from 'bootstrap';

const model = document.getElementById("mp-model");
const url = "https://my.matterport.com/show/?m=T32nCkyJRpv";
model.src = url;