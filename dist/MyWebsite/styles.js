(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\n\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #a67f59;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\npre.line-numbers {\n\tposition: relative;\n\tpadding-left: 0;\n\tcounter-reset: linenumber;\n}\n\npre.line-numbers > code {\n\tposition: relative;\n    white-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n\n/* Variables */\n\n/* Mixins */\n\n@font-face {\n  font-family: \"Fontello\";\n  src: url(\"/assets/fonts/fontello.eot\");\n  src: url(\"/assets/fonts/fontello.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/fontello.woff\") format(\"woff\"), url(\"/assets/fonts/fontello.ttf\") format(\"truetype\"), url(\"/assets/fonts/fontello.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Arial-light\";\n  src: url(\"/assets/fonts/arial-light.eot\");\n  src: url(\"/assets/fonts/arial-light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/arial-light.woff\") format(\"woff\"), url(\"/assets/fonts/arial-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/arial-light.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\nrouter-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\nbody {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\nhtml,\nbody,\ndiv,\nul,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nnav,\nbutton,\na,\ninput,\ntextarea {\n  margin: 0;\n  padding: 0;\n  color: #212c43;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  font-weight: normal;\n  list-style: none;\n  line-height: 30px;\n  text-decoration: none;\n  box-sizing: border-box;\n  font-family: \"Arial\", sans-serif; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan {\n  font-size: inherit;\n  color: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit; }\n\nmain {\n  padding-left: 76px; }\n\n@media screen and (max-width: 767px) {\n    main {\n      padding-left: 0; } }\n\n.navigation {\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  position: fixed;\n  padding-top: 90px;\n  transition: all 0.15s linear; }\n\n.navigation__container {\n    width: 100%;\n    margin: 0 auto;\n    max-width: 1920px;\n    padding-left: 140px; }\n\n.navigation__list {\n    width: 100%;\n    max-width: 655px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.navigation__link {\n    color: #475850;\n    font-size: 18px;\n    line-height: 21px;\n    padding-bottom: 5px;\n    text-transform: uppercase;\n    transition: all 0.35s linear;\n    border-bottom: 2px solid transparent; }\n\n.navigation__link:hover {\n      border-bottom: 2px solid #fca92c; }\n\n.navigation__link--active {\n      border-bottom: 2px solid #fca92c; }\n\n.navigation__link--unique {\n      width: 213px;\n      height: 48px;\n      color: #fff;\n      border-radius: 25px;\n      display: inline-block;\n      background-color: #fca92c;\n      text-align: center;\n      line-height: 48px;\n      border-bottom: none; }\n\n.navigation__link--unique:hover {\n        border-bottom: none; }\n\n.navigation.active {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: rgba(255, 255, 255, 0.9);\n    transition: all 0.15s linear; }\n\n@media screen and (max-width: 1899px) {\n    .navigation__container {\n      padding-right: 15px; } }\n\n@media screen and (max-width: 767px) {\n    .navigation {\n      padding: 15px;\n      display: flex;\n      justify-content: flex-end; }\n      .navigation__container {\n        padding-left: 0;\n        padding-right: 0; }\n      .navigation__list {\n        flex-direction: column; }\n      .navigation__link {\n        margin-top: 15px;\n        margin-bottom: 15px;\n        display: inline-block; } }\n\n.sidebar {\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 76px;\n  height: 100%;\n  position: fixed;\n  background-color: #fffceb;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.sidebar__menu {\n    display: none; }\n\n@media screen and (max-width: 767px) {\n    .sidebar {\n      z-index: 2;\n      width: 230px;\n      left: -230px;\n      padding-top: 50px;\n      padding-bottom: 50px;\n      flex-direction: column;\n      justify-content: space-between;\n      transition: all 0.35s linear; }\n      .sidebar__menu {\n        display: block; }\n      .sidebar.active {\n        left: 0;\n        transition: all 0.35s linear; } }\n\n.socials__link {\n  width: 54px;\n  height: 54px;\n  margin: 20px 0;\n  line-height: 54px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15); }\n\n.socials__link:hover .icon {\n    color: #212c43;\n    transition: all 0.15s linear; }\n\n@media screen and (max-width: 767px) {\n  .socials {\n    width: 80%; }\n    .socials__container {\n      display: flex;\n      justify-content: space-between; } }\n\n@media screen and (max-width: 767px) {\n  .burger {\n    width: 60px;\n    height: 60px;\n    border-radius: 5px;\n    background-color: #fca92c;\n    position: relative;\n    padding: 10px 12px;\n    cursor: pointer; }\n    .burger span {\n      display: block;\n      background: #fff;\n      border-radius: 2px; }\n    .burger * {\n      transition: 0.25s ease-in-out;\n      box-sizing: border-box; }\n    .burger__lines {\n      width: 60%;\n      height: 70%;\n      position: absolute;\n      pointer-events: none; }\n      .burger__lines span {\n        width: 100%;\n        height: 4px;\n        position: relative;\n        margin: 7px 0; }\n        .burger__lines span:nth-child(1) {\n          transition-delay: 0.5s; }\n        .burger__lines span:nth-child(2) {\n          transition-delay: 0.625s; }\n        .burger__lines span:nth-child(3) {\n          transition-delay: 0.75s; }\n    .burger__cross {\n      height: 70%;\n      width: 70%;\n      left: 3px;\n      right: 0;\n      margin: auto;\n      position: absolute;\n      pointer-events: none;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .burger__cross span:nth-child(1) {\n        height: 0%;\n        width: 4px;\n        position: absolute;\n        top: 10%;\n        left: 41%;\n        transition-delay: 0s; }\n      .burger__cross span:nth-child(2) {\n        width: 0%;\n        height: 4px;\n        position: absolute;\n        left: 7%;\n        top: 46%;\n        transition-delay: 0.25s; }\n    .burger.active .burger__lines span {\n      width: 0%; }\n      .burger.active .burger__lines span:nth-child(1) {\n        transition-delay: 0s; }\n      .burger.active .burger__lines span:nth-child(2) {\n        transition-delay: 0.125s; }\n      .burger.active .burger__lines span:nth-child(3) {\n        transition-delay: 0.25s; }\n    .burger.active .burger__cross span:nth-child(1) {\n      height: 80%;\n      transition-delay: 0.625s; }\n    .burger.active .burger__cross span:nth-child(2) {\n      width: 80%;\n      transition-delay: 0.375s; } }\n\n.icon {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  color: #e6e5e5;\n  text-decoration: inherit;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  transition: all 0.15s linear;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.body-portfolio .socials__link {\n  transition: all 0.35s linear; }\n\n.body-portfolio .socials__link:hover {\n    background-color: #fca92c;\n    transition: all 0.35s linear; }\n\n.body-portfolio .socials__link:hover .icon {\n      color: #ffffff; }\n\n@media screen and (max-width: 575px) {\n  .body-portfolio .navigation__link {\n    color: #ffffff; } }\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 14px; }\n\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px; }\n\n::-webkit-scrollbar-corner {\n  background: transparent; }\n\n::-webkit-scrollbar-track {\n  background: #fffceb;\n  border: 0px none #ffffff;\n  border-radius: 50px; }\n\n::-webkit-scrollbar-track:hover {\n  background: #fffceb; }\n\n::-webkit-scrollbar-track:active {\n  background: #fffceb; }\n\n::-webkit-scrollbar-thumb {\n  background: #fe6e49;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n  transition: all 0.15s linear; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n\n::-webkit-scrollbar-thumb:active {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n\n::-webkit-input-placeholder {\n  color: #9fa0bf; }\n\n::-moz-placeholder {\n  color: #9fa0bf; }\n\n:-ms-input-placeholder {\n  color: #9fa0bf; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Mydocuments\Websites\ANGULAR projects\MyWebsite\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map