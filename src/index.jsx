import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import Post from '@models/Post';

import './styles/styles.css';
import './styles/body.less';
import './styles/title.scss';

import json from './files/config';
import xml from './files/data.xml';
import csv from './files/cities.csv';
import WebpackLogo from './files/logo.jpg';

const post = new Post('webpack post title', WebpackLogo);

console.log(post)

const title = 'React App';

ReactDom.render(<div>{title}</div>,
    document.querySelector('#app')
);

// $('pre').append(post.toString());
//
// console.log(post.toString());
// console.log('json: ', json);
// console.log('xml: ', xml);
// console.log('csv: ', csv);
//
// async function MakeRequest() {
//     return await Promise.resolve('c');
// }
//
// MakeRequest().then(e => console.log(e))
//
// class Util {
//     static int = 10;
// }
//
// console.log(Util.int);
