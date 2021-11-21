import '../modules/nav-loading.js';
import * as bootstrap from 'bootstrap';
import '../styles/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    boundary: document.body, // or document.querySelector('#boundary')
    placement: 'left'
  })
})

tooltipList();
