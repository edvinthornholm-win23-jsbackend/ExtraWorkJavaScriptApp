"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signout/page",{

/***/ "(app-pages-browser)/./app/components/utils/auth.js":
/*!**************************************!*\
  !*** ./app/components/utils/auth.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _authService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authService */ \"(app-pages-browser)/./app/components/utils/authService.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nconst useLogout = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const handleLogout = async ()=>{\n        const result = await (0,_authService__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        if (result.success) {\n            router.push(\"/\");\n        } else {\n            console.error(\"Logout failed:\", result.error);\n        }\n    };\n    return handleLogout;\n};\n_s(useLogout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLogout);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3V0aWxzL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUM0QztBQUNGO0FBRTFDLE1BQU1FLFlBQVk7O0lBQ2hCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNSSxlQUFlO1FBQ25CLE1BQU1DLFNBQVMsTUFBTUosd0RBQWFBO1FBQ2xDLElBQUlJLE9BQU9DLE9BQU8sRUFBRTtZQUNsQkgsT0FBT0ksSUFBSSxDQUFDO1FBRWQsT0FBTztZQUNMQyxRQUFRQyxLQUFLLENBQUMsa0JBQWtCSixPQUFPSSxLQUFLO1FBQzlDO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0dBZE1GOztRQUNXRixzREFBU0E7OztBQWUxQiwrREFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy91dGlscy9hdXRoLmpzPzI4OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgc2lnbk91dEFjdGlvbiBmcm9tICcuL2F1dGhTZXJ2aWNlJztcclxuXHJcbmNvbnN0IHVzZUxvZ291dCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbk91dEFjdGlvbigpO1xyXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dvdXQgZmFpbGVkOicsIHJlc3VsdC5lcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGhhbmRsZUxvZ291dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvZ291dDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInNpZ25PdXRBY3Rpb24iLCJ1c2VMb2dvdXQiLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/utils/auth.js\n"));

/***/ })

});