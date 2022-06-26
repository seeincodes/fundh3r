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

/***/ "./src/components/LazyShow.tsx":
/*!*************************************!*\
  !*** ./src/components/LazyShow.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s2 = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction useOnScreen(ref, param1) {\n    var rootMargin = param1 === void 0 ? '0px' : param1;\n    _s2();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isIntersecting = ref1[0], setIntersecting = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var currentRef = null;\n        var observer = new IntersectionObserver(function(param) {\n            var _param = _slicedToArray(param, 1), entry = _param[0];\n            if (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) setIntersecting(entry === null || entry === void 0 ? void 0 : entry.isIntersecting);\n        }, {\n            rootMargin: rootMargin\n        });\n        if (ref && (ref === null || ref === void 0 ? void 0 : ref.current)) {\n            currentRef = ref.current;\n            observer.observe(currentRef);\n        }\n        return function() {\n            observer.unobserve(currentRef);\n        };\n    }, [\n        ref,\n        rootMargin\n    ]); // Empty array ensures that effect is only run on mount and unmount\n    return isIntersecting;\n}\n_s2(useOnScreen, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\nvar LazyShow = function(param) {\n    var children = param.children;\n    _s1();\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();\n    var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var onScreen = useOnScreen(rootRef);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (onScreen) {\n            controls.start({\n                x: 0,\n                opacity: 1,\n                transition: {\n                    duration: 0.5,\n                    ease: 'easeOut'\n                }\n            });\n        }\n    }, [\n        onScreen,\n        controls\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"lazy-div\",\n        ref: rootRef,\n        initial: {\n            opacity: 0,\n            x: -50\n        },\n        animate: controls,\n        __source: {\n            fileName: \"/Users/day/Desktop/fundh3r/front-end/src/components/LazyShow.tsx\",\n            lineNumber: 49\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s1(LazyShow, \"x6OQA36enRtiYvdNxOEt4MR1qd4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation,\n        useOnScreen\n    ];\n});\n_c = LazyShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LazyShow);\nvar _c;\n$RefreshReg$(_c, \"LazyShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBRVpDLFdBQVc7OztLQUh4QlksUUFBUTtBQTRCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xhenlTaG93LnRzeD83ZGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5mdW5jdGlvbiB1c2VPblNjcmVlbihcbiAgcmVmOiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50IHwgbnVsbD4sXG4gIHJvb3RNYXJnaW4gPSAnMHB4J1xuKSB7XG4gIGNvbnN0IFtpc0ludGVyc2VjdGluZywgc2V0SW50ZXJzZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50UmVmOiBhbnkgPSBudWxsO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgaWYgKGVudHJ5Py5pc0ludGVyc2VjdGluZykgc2V0SW50ZXJzZWN0aW5nKGVudHJ5Py5pc0ludGVyc2VjdGluZyk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb290TWFyZ2luLFxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKHJlZiAmJiByZWY/LmN1cnJlbnQpIHtcbiAgICAgIGN1cnJlbnRSZWYgPSByZWYuY3VycmVudDtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoY3VycmVudFJlZik7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoY3VycmVudFJlZik7XG4gICAgfTtcbiAgfSwgW3JlZiwgcm9vdE1hcmdpbl0pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgcmV0dXJuIGlzSW50ZXJzZWN0aW5nO1xufVxuXG5jb25zdCBMYXp5U2hvdyA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Q2hpbGQgfSkgPT4ge1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuICBjb25zdCByb290UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgb25TY3JlZW4gPSB1c2VPblNjcmVlbihyb290UmVmKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob25TY3JlZW4pIHtcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbb25TY3JlZW4sIGNvbnRyb2xzXSk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImxhenktZGl2XCJcbiAgICAgIHJlZj17cm9vdFJlZn1cbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTUwIH19XG4gICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF6eVNob3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsInVzZU9uU2NyZWVuIiwicmVmIiwicm9vdE1hcmdpbiIsImlzSW50ZXJzZWN0aW5nIiwic2V0SW50ZXJzZWN0aW5nIiwiY3VycmVudFJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImN1cnJlbnQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiTGF6eVNob3ciLCJjaGlsZHJlbiIsImNvbnRyb2xzIiwicm9vdFJlZiIsIm9uU2NyZWVuIiwic3RhcnQiLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LazyShow.tsx\n");

/***/ })

});