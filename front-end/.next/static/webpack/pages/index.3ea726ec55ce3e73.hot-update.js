"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Mission.tsx":
/*!************************************!*\
  !*** ./src/components/Mission.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_index_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.json */ \"./src/config/index.json\");\n/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Divider */ \"./src/components/Divider.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar Mission = function() {\n    var _this1 = _this;\n    var mission = _config_index_json__WEBPACK_IMPORTED_MODULE_2__.mission;\n    var _items = _slicedToArray(mission.items, 2), firstItem = _items[0], secondItem = _items[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"bg-background py-8\",\n        id: \"mission\",\n        __source: {\n            fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n            lineNumber: 10\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container max-w-5xl mx-auto m-8\",\n            __source: {\n                fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                lineNumber: 11\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    className: \"w-full my-2 text-5xl font-bold leading-tight text-center text-primary\",\n                    __source: {\n                        fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                        lineNumber: 12\n                    },\n                    __self: _this,\n                    children: mission.title.split(' ').map(function(word, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                            className: index % 2 ? 'text-primary' : 'text-border',\n                            __source: {\n                                fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                                lineNumber: 14\n                            },\n                            __self: _this1,\n                            children: [\n                                word,\n                                ' '\n                            ]\n                        }, index);\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                        lineNumber: 16\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex flex-wrap\",\n                    __source: {\n                        fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                        lineNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"w-6/6 sm:w-2/2 p-6 mt-20\",\n                            __source: {\n                                fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                                lineNumber: 18\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                                    className: \"text-3xl text-gray-800 font-bold leading-none mb-3\",\n                                    __source: {\n                                        fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                                        lineNumber: 19\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        \" \",\n                                        firstItem === null || firstItem === void 0 ? void 0 : firstItem.title\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    __source: {\n                                        fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                                        lineNumber: 20\n                                    },\n                                    __self: _this,\n                                    children: firstItem === null || firstItem === void 0 ? void 0 : firstItem.description\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"w-full sm:w-1/2 p-6\",\n                            __source: {\n                                fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                                lineNumber: 22\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: \"h-4/6\",\n                                src: firstItem === null || firstItem === void 0 ? void 0 : firstItem.img,\n                                alt: firstItem === null || firstItem === void 0 ? void 0 : firstItem.title,\n                                __source: {\n                                    fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/Mission.tsx\",\n                                    lineNumber: 23\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_c = Mission;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mission);\nvar _c;\n$RefreshReg$(_c, \"Mission\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NaXNzaW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLEdBQUssQ0FBQ0csT0FBTyxHQUFHLFFBQ2hCLEdBRHNCLENBQUM7O0lBQ3JCLEdBQUssQ0FBR0MsT0FBTyxHQUFLSCx1REFBTDtJQUNmLEdBQUssQ0FBMkJHLE1BQWEsa0JBQWJBLE9BQU8sQ0FBQ0MsS0FBSyxNQUF0Q0MsU0FBUyxHQUFnQkYsTUFBYSxLQUEzQkcsVUFBVSxHQUFJSCxNQUFhO0lBRTdDLE1BQU0sc0VBQ0hJLENBQU87UUFBQ0MsU0FBUyxFQUFHLENBQWtCO1FBQUdDLEVBQUUsRUFBQyxDQUFTOzs7Ozs7d0ZBQ25EQyxDQUFHO1lBQUNGLFNBQVMsRUFBRyxDQUErQjs7Ozs7OztxRkFDN0NHLENBQUU7b0JBQUNILFNBQVMsRUFBRyxDQUFxRTs7Ozs7OzhCQUNsRkwsT0FBTyxDQUFDUyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFHLElBQUVDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSztzQ0FDeEMsTUFBTUMsQ0FBQUEsdURBQUFBLENBQUxDLENBQUk7NEJBQWFWLFNBQVMsRUFBRVEsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFjLGdCQUFHLENBQWE7Ozs7Ozs7Z0NBQUdELElBQUk7Z0NBQUUsQ0FBRzs7MkJBQXhFQyxLQUFLOzs7cUZBRW5CZixnREFBTzs7Ozs7OztzRkFDUFMsQ0FBRztvQkFBQ0YsU0FBUyxFQUFHLENBQWM7Ozs7Ozs7OEZBQzVCRSxDQUFHOzRCQUFDRixTQUFTLEVBQUcsQ0FBd0I7Ozs7Ozs7c0dBQ3RDVyxDQUFFO29DQUFDWCxTQUFTLEVBQUcsQ0FBa0Q7Ozs7Ozs7d0NBQUcsQ0FBQzt3Q0FBQ0gsU0FBUyxhQUFUQSxTQUFTLEtBQVRBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLFNBQVMsQ0FBRU8sS0FBSzs7O3FHQUN0RlEsQ0FBQztvQ0FBQ1osU0FBUyxFQUFHLENBQWE7Ozs7Ozs4Q0FBSUgsU0FBUyxhQUFUQSxTQUFTLEtBQVRBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLFNBQVMsQ0FBRWdCLFdBQVc7Ozs7NkZBRXZEWCxDQUFHOzRCQUFDRixTQUFTLEVBQUcsQ0FBbUI7Ozs7OzsyR0FDakNjLENBQUc7Z0NBQ0ZkLFNBQVMsRUFBQyxDQUFPO2dDQUNqQmUsR0FBRyxFQUFFbEIsU0FBUyxhQUFUQSxTQUFTLEtBQVRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsU0FBUyxDQUFFaUIsR0FBRztnQ0FDbkJFLEdBQUcsRUFBRW5CLFNBQVMsYUFBVEEsU0FBUyxLQUFUQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxTQUFTLENBQUVPLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUFNbkMsQ0FBQztLQTNCS1YsT0FBTztBQTZCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01pc3Npb24udHN4P2EzYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4Lmpzb24nO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcblxuY29uc3QgTWlzc2lvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBtaXNzaW9uIH0gPSBjb25maWc7XG4gIGNvbnN0IFtmaXJzdEl0ZW0sIHNlY29uZEl0ZW1dID0gbWlzc2lvbi5pdGVtcztcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGJnLWJhY2tncm91bmQgcHktOGB9IGlkPVwibWlzc2lvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgbWF4LXctNXhsIG14LWF1dG8gbS04YH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2B3LWZ1bGwgbXktMiB0ZXh0LTV4bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnlgfT5cbiAgICAgICAgICB7bWlzc2lvbi50aXRsZS5zcGxpdCgnICcpLm1hcCgod29yZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17aW5kZXggJSAyID8gJ3RleHQtcHJpbWFyeScgOiAndGV4dC1ib3JkZXInfT57d29yZH17JyAnfTwvc3Bhbj4pKX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcGB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy02LzYgc206dy0yLzIgcC02IG10LTIwYH0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgdGV4dC0zeGwgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgbGVhZGluZy1ub25lIG1iLTNgfT4ge2ZpcnN0SXRlbT8udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtZ3JheS02MDBgfT57Zmlyc3RJdGVtPy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgc206dy0xLzIgcC02YH0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNC82XCJcbiAgICAgICAgICAgICAgc3JjPXtmaXJzdEl0ZW0/LmltZ31cbiAgICAgICAgICAgICAgYWx0PXtmaXJzdEl0ZW0/LnRpdGxlfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWlzc2lvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbmZpZyIsIkRpdmlkZXIiLCJNaXNzaW9uIiwibWlzc2lvbiIsIml0ZW1zIiwiZmlyc3RJdGVtIiwic2Vjb25kSXRlbSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImgxIiwidGl0bGUiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmRleCIsImtleSIsInNwYW4iLCJoMyIsInAiLCJkZXNjcmlwdGlvbiIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Mission.tsx\n");

/***/ })

});