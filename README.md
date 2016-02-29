#github-url-converter

A relative paths such as src of script tag or href of link tag in HTML documents convert to URL.

##Example

The resource such as javascript, css or images in HTML documents in Github have a relative path on the basis of local file system.

	<link rel="stylesheet" media="screen" type="text/css" href="./style.css">

A href of link tag has a relative path; `./style.css` So github-url-converter convert `./style.css` to `https://cdn.rawgit.com/drzix/Hongseokzip/master/./style.css` you can access.

##Install

	npm install github-url-converter --save

##Usage

	var githubConverter = require('github-url-converter');

	// HTML code
	var htmlCode = '<link rel="stylesheet" media="screen" type="text/css" href="./style.css">';

	// HTML URL
	var htmlUrl = 'https://github.com/drzix/Hongseokzip/blob/master/index.html';
	var doc = githubConverter(htmlCode, htmlUrl);

##Reference

You can use [github-relative-url](https://github.com/se0kjun/github-relative-url) when you want to convert `./style.css` to `https://github.com/drzix/Hongseokzip/blob/master/./style.css` not cdn. And you can use [rawgit-url-formatter](https://github.com/se0kjun/rawgit-url-formatter) when you want to convert `https://github.com/drzix/Hongseokzip/blob/master/./style.css` to raw content URL.

##LICENSE

MIT © [Seokjun Hong](https://github.com/se0kjun)
