import $ from 'jquery';

import Post from '@models/Post';
import './styles/styles.css';
import json from './files/config';
import xml from './files/data.xml';
import csv from './files/cities.csv';
import WebpackLogo from './files/logo.jpg';

const post = new Post('webpack post title', WebpackLogo);

$('pre').append(post.toString());

console.log(post.toString());
console.log('json: ', json);
console.log('xml: ', xml);
console.log('csv: ', csv);
