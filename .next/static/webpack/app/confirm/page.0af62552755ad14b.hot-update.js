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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Confirm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Confirm() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const email = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)().get(\"email\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            let form = {\n                email,\n                VerificationCode: code\n            };\n            const res = await fetch(\"https://accountprovider-silicon-et.azurewebsites.net/api/Verify?code=HwoZCaf8Ahm8V2_PmT1a3QYhbjrdgcm3RHxrz3JAR6KEAzFumsH_gA%3D%3D\", {\n                method: \"post\",\n                headers: {\n                    \"content-type\": \"application/json\"\n                },\n                body: JSON.stringify(form)\n            });\n            if (res.status === 200) {\n                router.push(\"/signin\");\n            } else {\n                let result = await res.json();\n                setError(result.error);\n            }\n        } catch (error) {\n            setError(\"Somthing went wrong, please try again later\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"signin\",\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"alert alert-danger\",\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 23\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    noValidate: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Confirm your account\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Don't get verification code? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"resend\",\n                                    children: \"Resend here\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 53\n                                }, this),\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"form-email\",\n                                    className: \"input-group\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Verification code\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            value: code,\n                                            onChange: (e)=>setCode(e.target.value),\n                                            type: \"text\",\n                                            name: \"code\",\n                                            placeholder: \"Enter your verification code\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-theme\",\n                                        children: \"Veryfy code\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Education\\\\JavaScript-Backend-assignment\\\\SiliconNextJSTypeScript\\\\app\\\\confirm\\\\page.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Confirm, \"JBBAqT3rf/wCNh/6NtAW7iO93TA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Confirm;\nvar _c;\n$RefreshReg$(_c, \"Confirm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb25maXJtL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ2dDO0FBQ2pCO0FBRTdCLFNBQVNJOztJQUNwQixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssUUFBUUosZ0VBQWVBLEdBQUdLLEdBQUcsQ0FBQztJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFTO0lBRXpDLE1BQU1TLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNBLElBQUlDLE9BQU87Z0JBQUVUO2dCQUFPVSxrQkFBa0JOO1lBQUs7WUFDM0MsTUFBTU8sTUFBTSxNQUFNQyxNQUFNLHFJQUFxSTtnQkFDekpDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUjtZQUN6QjtZQUVBLElBQUlFLElBQUlPLE1BQU0sS0FBSyxLQUFLO2dCQUNwQm5CLE9BQU9vQixJQUFJLENBQUM7WUFDaEIsT0FBTztnQkFDSCxJQUFJQyxTQUFTLE1BQU1ULElBQUlVLElBQUk7Z0JBQzNCbEIsU0FBU2lCLE9BQU9sQixLQUFLO1lBQ3pCO1FBQ0osRUFDQSxPQUFPQSxPQUFPO1lBQ1ZDLFNBQVM7UUFDYjtJQUVKO0lBRUEscUJBQ0ksOERBQUNtQjtRQUFRQyxJQUFHOztZQUNQckIsdUJBQVMsOERBQUNzQjtnQkFBSUMsV0FBVTswQkFBc0J2Qjs7Ozs7OzBCQUMvQyw4REFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDaEI7b0JBQUtpQixVQUFVcEI7b0JBQWNxQixVQUFVOztzQ0FDcEMsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBRTs4Q0FBNkIsOERBQUNuQyxpREFBSUE7b0NBQUNvQyxNQUFLOzhDQUFTOzs7Ozs7Z0NBQWtCOzs7Ozs7O3NDQUV0RSw4REFBQ047NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBSUQsSUFBRztvQ0FBYUUsV0FBVTs7c0RBQzNCLDhEQUFDTTtzREFBTTs7Ozs7O3NEQUNQLDhEQUFDQzs0Q0FBTUMsT0FBTzdCOzRDQUFNOEIsVUFBVzNCLENBQUFBLElBQUtGLFFBQVFFLEVBQUU0QixNQUFNLENBQUNGLEtBQUs7NENBQUlHLE1BQUs7NENBQU9DLE1BQUs7NENBQU9DLGFBQVk7Ozs7Ozs7Ozs7Ozs4Q0FFdEcsOERBQUNkOzhDQUVHLDRFQUFDZTt3Q0FBT0gsTUFBSzt3Q0FBU1gsV0FBVTtrREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUU7R0F2RHdCM0I7O1FBQ0xILHNEQUFTQTtRQUNWQyw0REFBZUE7OztLQUZURSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29uZmlybS9wYWdlLnRzeD82ZDE1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlybSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZW1haWwgPSB1c2VTZWFyY2hQYXJhbXMoKS5nZXQoJ2VtYWlsJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm0gPSB7IGVtYWlsLCBWZXJpZmljYXRpb25Db2RlOiBjb2RlIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FjY291bnRwcm92aWRlci1zaWxpY29uLWV0LmF6dXJld2Vic2l0ZXMubmV0L2FwaS9WZXJpZnk/Y29kZT1Id29aQ2FmOEFobThWMl9QbVQxYTNRWWhianJkZ2NtM1JIeHJ6M0pBUjZLRUF6RnVtc0hfZ0ElM0QlM0QnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9zaWduaW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdTb210aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2lnbmluXCI+XHJcbiAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Db25maXJtIHlvdXIgYWNjb3VudDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RG9uJ3QgZ2V0IHZlcmlmaWNhdGlvbiBjb2RlPyA8TGluayBocmVmPVwicmVzZW5kXCI+UmVzZW5kIGhlcmU8L0xpbms+LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tZW1haWxcIiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlZlcmlmaWNhdGlvbiBjb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17Y29kZX0gb25DaGFuZ2U9eyhlID0+IHNldENvZGUoZS50YXJnZXQudmFsdWUpKX0gdHlwZT1cInRleHRcIiBuYW1lPVwiY29kZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB2ZXJpZmljYXRpb24gY29kZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXRoZW1lXCI+VmVyeWZ5IGNvZGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVN0YXRlIiwiQ29uZmlybSIsInJvdXRlciIsImVtYWlsIiwiZ2V0IiwiZXJyb3IiLCJzZXRFcnJvciIsImNvZGUiLCJzZXRDb2RlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsIlZlcmlmaWNhdGlvbkNvZGUiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsInB1c2giLCJyZXN1bHQiLCJqc29uIiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwiaDEiLCJwIiwiaHJlZiIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/confirm/page.tsx\n"));

/***/ })

});