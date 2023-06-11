import { titleText } from './title.js';
import { helloText } from './hello.js';
import Header from './components/header/header.js';
import './index.css';

Header();

const $title = document.createElement('h1');
$title.innerText = helloText + titleText;

document.getElementById('app').appendChild($title);
