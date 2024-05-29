"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/confirm/page",{

/***/ "(app-pages-browser)/./app/confirm/page.tsx":
/*!******************************!*\
  !*** ./app/confirm/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Confirm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Confirm() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const email = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)().get(\"email\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            let form = {\n                email,\n                code\n            };\n            const res = await fetch(\"https://accountprovider-silicon-et.azurewebsites.net/api/Verify?code=HwoZCaf8Ahm8V2_PmT1a3QYhbjrdgcm3RHxrz3JAR6KEAzFumsH_gA%3D%3D\", {\n                method: \"post\",\n                headers: {\n                    \"content-type\": \"application/json\"\n                },\n                body: JSON.stringify(form)\n            });\n            if (res.status === 200) {\n                router.push(\"/signin\");\n            } else {\n                let result = await res.json();\n                setError(result.error);\n            }\n        } catch (error) {\n            setError(\"Somthing went wrong, please try again later\");\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"signin\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"alert alert-danger\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 27\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        noValidate: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Confirm your account\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Don't get verification code? \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"resend\",\n                                        children: \"Resend here\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 53\n                                    }, this),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"form-email\",\n                                        className: \"input-group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: \"Verification code\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                value: code,\n                                                onChange: (e)=>setCode(e.target.value),\n                                                type: \"text\",\n                                                name: \"code\",\n                                                placeholder: \"Enter your verification code\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"btn btn-theme\",\n                                            children: \"Veryfy code\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this);\n    };\n}\n_s(Confirm, \"JBBAqT3rf/wCNh/6NtAW7iO93TA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Confirm;\nvar _c;\n$RefreshReg$(_c, \"Confirm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb25maXJtL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTZCO0FBQ2dDO0FBQ2pCO0FBRTdCLFNBQVNJOztJQUNwQixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssUUFBUUosZ0VBQWVBLEdBQUdLLEdBQUcsQ0FBQztJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFTO0lBRXpDLE1BQU1TLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNBLElBQUlDLE9BQU87Z0JBQUNUO2dCQUFPSTtZQUFJO1lBQ3ZCLE1BQU1NLE1BQU0sTUFBTUMsTUFBTSxxSUFBcUk7Z0JBQ3pKQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7WUFDekI7WUFFQSxJQUFJQyxJQUFJTyxNQUFNLEtBQUssS0FBSztnQkFDcEJsQixPQUFPbUIsSUFBSSxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0gsSUFBSUMsU0FBUyxNQUFNVCxJQUFJVSxJQUFJO2dCQUMzQmpCLFNBQVNnQixPQUFPakIsS0FBSztZQUN6QjtRQUNKLEVBQ0EsT0FBT0EsT0FBTztZQUNWQyxTQUFTO1FBQ2I7UUFHSixxQkFDSSw4REFBQ2tCO1lBQVFDLElBQUc7c0JBRVIsNEVBQUNDO2dCQUFJQyxXQUFVOztvQkFDVnRCLHVCQUFTLDhEQUFDcUI7d0JBQUlDLFdBQVU7a0NBQXNCdEI7Ozs7OztrQ0FFL0MsOERBQUNPO3dCQUFLZ0IsVUFBVW5CO3dCQUFjb0IsVUFBVTs7MENBQ3BDLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzs7b0NBQUU7a0RBQTZCLDhEQUFDbEMsaURBQUlBO3dDQUFDbUMsTUFBSztrREFBUzs7Ozs7O29DQUFrQjs7Ozs7OzswQ0FFdEUsOERBQUNOO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlELElBQUc7d0NBQWFFLFdBQVU7OzBEQUMzQiw4REFBQ007MERBQU07Ozs7OzswREFDUCw4REFBQ0M7Z0RBQU1DLE9BQU81QjtnREFBTTZCLFVBQVcxQixDQUFBQSxJQUFLRixRQUFRRSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLO2dEQUFJRyxNQUFLO2dEQUFPQyxNQUFLO2dEQUFPQyxhQUFZOzs7Ozs7Ozs7Ozs7a0RBRXRHLDhEQUFDZDtrREFFRyw0RUFBQ2U7NENBQU9ILE1BQUs7NENBQVNYLFdBQVU7c0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUTFFO0FBQ0Y7R0F6RHdCMUI7O1FBQ0xILHNEQUFTQTtRQUNWQyw0REFBZUE7OztLQUZURSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29uZmlybS9wYWdlLnRzeD82ZDE1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm0oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlU2VhcmNoUGFyYW1zKCkuZ2V0KCdlbWFpbCcpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtID0ge2VtYWlsLCBjb2RlfVxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hY2NvdW50cHJvdmlkZXItc2lsaWNvbi1ldC5henVyZXdlYnNpdGVzLm5ldC9hcGkvVmVyaWZ5P2NvZGU9SHdvWkNhZjhBaG04VjJfUG1UMWEzUVloYmpyZGdjbTNSSHhyejNKQVI2S0VBekZ1bXNIX2dBJTNEJTNEJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignU29tdGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2lnbmluXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+Q29uZmlybSB5b3VyIGFjY291bnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRvbid0IGdldCB2ZXJpZmljYXRpb24gY29kZT8gPExpbmsgaHJlZj1cInJlc2VuZFwiPlJlc2VuZCBoZXJlPC9MaW5rPi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVtYWlsXCIgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5WZXJpZmljYXRpb24gY29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2NvZGV9IG9uQ2hhbmdlPXsoZSA9PiBzZXRDb2RlKGUudGFyZ2V0LnZhbHVlKSl9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvZGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdmVyaWZpY2F0aW9uIGNvZGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi10aGVtZVwiPlZlcnlmeSBjb2RlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VTdGF0ZSIsIkNvbmZpcm0iLCJyb3V0ZXIiLCJlbWFpbCIsImdldCIsImVycm9yIiwic2V0RXJyb3IiLCJjb2RlIiwic2V0Q29kZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsInB1c2giLCJyZXN1bHQiLCJqc29uIiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwiaDEiLCJwIiwiaHJlZiIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/confirm/page.tsx\n"));

/***/ })

});