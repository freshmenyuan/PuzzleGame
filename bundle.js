/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	// const angular = require('angular');
	var slidingpuzzle = __webpack_require__(7);

	slidingpuzzle(angular);

	(function (angular) {
	  'use strict';

	  var app = angular.module('puzzleApp', ['slidingPuzzle']);

	  // puzzle types
	  var types = [{ id: 'sliding-puzzle', title: 'Sliding puzzle' }];

	  /**
	   * Config
	   */
	  app.config(function ($routeProvider) {
	    $routeProvider.when('/:type');
	  });

	  /**
	   * Startup
	   */

	  app.run(function ($rootScope, $route, $filter) {
	    $rootScope.types = types;
	    $rootScope.type = types[0].id;

	    // set type on route change
	    $rootScope.$on('$routeChangeSuccess', function (event, route) {
	      $rootScope.type = $filter('filter')(types, { id: route.params.type }).length ? route.params.type : types[0].id;
	    });
	  });

	  /**
	   * Advanced sliding puzzle controller
	   */
	  app.controller('slidingAdvancedCtrl', function ($scope) {
	    $scope.puzzles = [{ src: './img/misko.jpg', title: 'Miško Hevery', rows: 4, cols: 4 }, { src: './img/igor.jpg', title: 'Igor Minár', rows: 3, cols: 3 }, { src: './img/vojta.jpg', title: 'Vojta Jína', rows: 4, cols: 3 }];
	  });

	  console.log('main');
	})(window.angular);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* General */\nbody {\n\tfont: 12pt 'Arial', 'Helvetica';\n\tbackground-color: #f7f7f7;\n\tmargin-top: 110px;\n\tmargin-left: 20px;\n}\nfieldset {\n\tmargin: 0 0 30px 0;\n\tpadding: 18px;\n\tborder: 2px solid #ddd;\n\tbackground-color: white;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n}\nlegend {\n\tfont-weight: bold;\n\tpadding: 3px 12px;\n\tdisplay: block;\n\tbackground-color: #e4e4e4;\n\tborder-radius: 6px;\n}\nul {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n\n/* Puzzle widgets */\n\n.sliding-puzzle {\n\tborder: 1px solid #ccc;\n\tborder-spacing: 0;\n}\n.sliding-puzzle td {\n\tborder-collapse: collapse;\n\tborder: 2px outset white;\n\tcursor: pointer;\n\tpadding: 0;\n}\n.sliding-puzzle .puzzle-empty {\n\tborder: none;\n\tbackground-color: #ddd !important;\n}\n.sliding-puzzle.puzzle-solved td {\n\tborder: none;\n}\n\n.word-search-puzzle {\n\tborder: 1px solid #999;\n}\n.word-search-puzzle td {\n\tbackground-color: white;\n\t-moz-user-select: -moz-none;\n\t-khtml-user-select: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n}\n.word-search-puzzle.puzzle-solved td {\n\tbackground-color: #eee;\n}\n.word-search-puzzle td span {\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\twidth: 30px;\n\theight: 30px;\n\ttext-align: center;\n\tuser-select: none;\n\tcursor: pointer;\n}\n.word-search-puzzle .puzzle-found {\n\tbackground-color: #eee;\n}\n.word-search-puzzle .puzzle-selected {\n\tbackground-color: #f5f5f5;\n}\n.word-search-puzzle .puzzle-message span {\n\tbackground-color: #ffffcc;\n\tcolor: red;\n\tfont-weight: bold;\n\tborder-radius: 15px;\n\tbox-shadow: 0 0 5px #444;\n}\n\n\n/* Application */\n\n#types {\n\tmargin: 0 0 40px 0px;\n\tpadding: 10px;\n\tlist-style: none;\n\tborder-bottom: 1px solid #ddd;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\tbackground-color: #f3f3f3;\n}\n#types li {\n\tdisplay: inline-block;\n\tpadding: 10px;\n\tmargin-right: 40px;\n}\n#types li a {\n\tfont-size: 22pt;\n\tcolor: #999;\n}\n#types li.selected {\n\tbackground-color: white;\n\tborder-radius: 10px;\n\tbox-shadow: 0 0 5px #999;\n\t-webkit-box-shadow: 0 0 5px #999;\n\t-moz-box-shadow: 0 0 5px #999;\n}\n#types li.selected a {\n\tfont-weight: bold;\n\tcolor: black;\n\ttext-decoration: none;\n}\n\n#fork {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tdisplay: block;\n\twidth: 149px;\n\theight: 149px;\n\tbackground: url('https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png') no-repeat;\n}\n#powered {\n\tposition: fixed;\n\tright: 20px;\n\tbottom: 15px;\n\tdisplay: block;\n}\n#powered img {\n\topacity: 0.4;\n\twidth: 200px;\n}\n\n#sliding-advanced > div {\n\tfloat: left;\n\tmargin: 0 40px 0 0;\n\tmin-width: 300px;\n}\n#sliding-advanced .sliding-puzzle {\n\tclear: both;\n\tmargin-top: 30px;\n}\n#sliding-advanced h2 {\n\tmargin: 0 0 10px 0;\n\tfont-weight: bold;\n}\n#sliding-advanced .status {\n\tfloat: left;\n\twidth: 40%;\n\theight: 50px;\n}\n#sliding-advanced .size {\n\tfloat: right;\n\theight: 50px;\n\ttext-align: right;\n}\n#sliding-advanced .src input {\n\twidth: 98%;\n\tfont-family: \"Courier New\";\n\tmargin-bottom: 4px;\n}\n\n#word-search {\n\tposition: relative;\n}\n#word-search .word-search-puzzle {\n\tfloat: left;\n}\n#word-search .words {\n\tlist-style: none;\n\tfloat: left;\n\tmargin: 4px 20px 0 0;\n}\n#word-search .words li {\n\tfont-size: 12px;\n\tmargin-bottom: 4px;\n\ttext-align: center;\n}\n#word-search .words .found {\n\tcolor: #bbb;\n\ttext-decoration: line-through;\n\tfont-weight: normal\n}\n#word-search .status {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 330px;\n\ttext-align: center;\n\twidth: 80px;\n\tfont-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (angular) {
	  console.log('sliding');
	  'use strict';

	  var module = angular.module('slidingPuzzle', []);

	  /**
	   * Service
	   */
	  module.factory('slidingPuzzle', function () {
	    function shuffle(a) {
	      var q;
	      for (var j, x, i = a.length; i; j = parseInt(Math.random() * i, 10), x = a[--i], a[i] = a[j], a[j] = x) {
	        q = 0;
	      }
	      return a;
	    }

	    function SlidingPuzzle(rows, cols) {
	      /**
	       * Puzzle grid
	       * @type {Array}
	       */
	      this.grid = [];

	      /**
	       * Moves count
	       * @type {Number}
	       */
	      this.moves = 0;

	      /**
	       * Moves tile
	       * @param srow
	       * @param scol
	       */
	      this.move = function (srow, scol) {
	        var dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]],
	            tref,
	            trow,
	            tcol;

	        for (var d = 0; d < dirs.length; d++) {
	          trow = srow + dirs[d][0];
	          tcol = scol + dirs[d][1];
	          if (this.grid[trow] && this.grid[trow][tcol] && this.grid[trow][tcol].empty) {
	            tref = this.grid[srow][scol];
	            this.grid[srow][scol] = this.grid[trow][tcol];
	            this.grid[trow][tcol] = tref;
	            this.moves++;
	          }
	        }
	      };

	      /**
	       * Shuffles grid
	       */
	      this.shuffle = function () {
	        var tiles = [];
	        this.traverse(function (tile) {
	          tiles.push(tile);
	        });
	        shuffle(tiles);
	        this.traverse(function (tile, row, col) {
	          this.grid[row][col] = tiles.shift();
	        });
	        this.moves = 0;
	      };

	      /**
	       * Solves puzzle
	       */
	      this.solve = function () {
	        var tiles = [];
	        this.traverse(function (tile) {
	          tiles.push(tile);
	        });
	        tiles.sort(function (x, y) {
	          return x.id - y.id;
	        });
	        this.traverse(function (tile, row, col) {
	          this.grid[row][col] = tiles.shift();
	        });
	      };

	      /**
	       * Is solved?
	       * @type {Boolean}
	       */
	      this.isSolved = function () {
	        var id = 1;
	        for (var row = 0; row < rows; row++) {
	          for (var col = 0; col < cols; col++) {
	            if (this.grid[row][col].id !== id++) {
	              return false;
	            }
	          }
	        }
	        return true;
	      };

	      /**
	       * Traverses grid and executes fn on every tile
	       * @param fn
	       */
	      this.traverse = function (fn) {
	        for (var row = 0; row < rows; row++) {
	          for (var col = 0; col < cols; col++) {
	            fn.call(this, this.grid && this.grid[row] ? this.grid[row][col] : undefined, row, col);
	          }
	        }
	      };

	      // initialize grid
	      var id = 1;
	      this.traverse(function (tile, row, col) {
	        if (!this.grid[row]) {
	          this.grid[row] = [];
	        }
	        this.grid[row][col] = {
	          id: id++,
	          empty: row === rows - 1 && col === cols - 1
	        };
	        if (this.grid[row][col].empty) {
	          this.empty = this.grid[row][col];
	        }
	      });
	    }

	    return function (rows, cols) {
	      return new SlidingPuzzle(rows, cols);
	    };
	  });

	  /**
	   * Directive
	   */
	  module.directive('slidingPuzzle', function (slidingPuzzle) {
	    return {
	      restrict: 'EA',
	      replace: true,
	      template: '<table class="sliding-puzzle" ng-class="{\'puzzle-solved\': puzzle.isSolved()}">' + '<tr ng-repeat="($row, row) in puzzle.grid">' + '<td ng-repeat="($col, tile) in row" ng-click="puzzle.move($row, $col)" ng-style="tile.style" ng-class="{\'puzzle-empty\': tile.empty}" title="{{tile.id}}"></td>' + '</tr>' + '</table>',
	      scope: {
	        size: '@',
	        src: '@',
	        api: '='
	      },
	      link: function link(scope, element, attrs) {
	        var rows,
	            cols,
	            loading = true,
	            image = new Image();

	        function create() {
	          scope.puzzle = slidingPuzzle(rows, cols);

	          if (attrs.api) {
	            scope.api = scope.puzzle;
	          }

	          tile();
	        }

	        function tile() {
	          if (loading) {
	            return;
	          }

	          var width = image.width / cols,
	              height = image.height / rows;

	          scope.puzzle.traverse(function (tile, row, col) {
	            tile.style = {
	              width: width + 'px',
	              height: height + 'px',
	              background: tile.empty ? 'none' : "url('" + scope.src + "') no-repeat -" + col * width + 'px -' + row * height + 'px'
	            };
	          });

	          scope.puzzle.shuffle();
	        }

	        attrs.$observe('size', function (size) {
	          size = size.split('x');
	          if (size[0] >= 2 && size[1] >= 2) {
	            rows = size[0];
	            cols = size[1];
	            create();
	          }
	        });

	        attrs.$observe('src', function (src) {
	          loading = true;
	          image.src = src;
	          image.onload = function () {
	            loading = false;
	            scope.$apply(function () {
	              tile();
	            });
	          };
	        });
	      }
	    };
	  });
	};

/***/ }
/******/ ]);