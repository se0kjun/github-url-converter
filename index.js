'use strict';
var githubRel = require('github-relative-url');
var rawgitUrl = require('rawgit-url-formatter');
var DOMParser = require('xmldom').DOMParser;

var SOURCE_TAG = {
	link: 'href',
	script: 'src',
	img: 'src',
	a: 'href'
};

var STYLE_TAG = [
	'url'
];

module.exports = function(htmlStr, htmlUrl) {
	var parser = new DOMParser();
	var parseTags = parser.parseFromString(htmlStr, "text/html");
	var tagNames = Object.keys(SOURCE_TAG);
	var forEach = Array.prototype.forEach;

	tagNames.forEach(function(tagName) {
		var tagList = parseTags.getElementsByTagName(tagName);
		forEach.call(tagList, function(tagElement) {
			var attr;
			if (attr = tagElement.attributes.getNamedItem(SOURCE_TAG[tagName])) {
				var result = githubRel(attr.value, htmlUrl);
				attr.value = rawgitUrl(result).cdn;
			}
		});
	});

	return parseTags;
};
