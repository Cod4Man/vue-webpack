import $ from 'jquery';
import './css/style.css';

$(function() {
    $('li:odd').css("backgroundColor","pink");
    $('li:even').css("backgroundColor","yellow");
});    