import { titleText } from './title.js';
import { helloText } from './hello.js';

const $title = document.createElement('h1');
$title.innerText = helloText + titleText;

document.getElementById('app').appendChild($title);
