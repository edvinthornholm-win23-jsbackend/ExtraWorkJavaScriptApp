"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n//import { cookies } from \"next/headers\";\nconst { cookies } = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n\nasync function middleware(request) {\n    // const cookie = cookies().get('Authorization');\n    // if (!cookie) {\n    //   console.log(\"Authorization cookie not found. Redirecting to sign in.\");\n    //   return NextResponse.redirect(new URL(\"/signin\", request.url));\n    // }\n    try {\n        console.log(\"Authorization cookie found. Value:\", cookie.value);\n        const res = await fetch(\"https://accountprovider-silicon-et.azurewebsites.net/api/VerifyToken?code=ts9Mdueq3B1n2AHdQhQr7RUufJL9jyGKCHX7MFusLGGqAzFu2UO7KA%3D%3D\", {\n            method: \"post\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": `Bearer ${cookie.value}`\n            }\n        });\n        const responseBody = await res.text();\n        console.log(\"Response status from VerifyToken:\", res.status);\n        console.log(\"Response body from VerifyToken:\", responseBody);\n        if (res.status === 200) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next(); // Proceed with the original request\n        } else {\n            console.log(\"Token verification failed. Redirecting to sign in.\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/signin\", request.url));\n        }\n    } catch (error) {\n        console.error(\"Error during token verification:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/signin\", request.url));\n    }\n}\nconst config = {\n    matcher: \"/account/:path*\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMsTUFBTSxFQUFFQSxPQUFPLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsOEVBQWM7QUFDYztBQUVqRCxlQUFlRSxXQUFXQyxPQUFvQjtJQUNuRCxpREFBaUQ7SUFFakQsaUJBQWlCO0lBQ2pCLDRFQUE0RTtJQUM1RSxtRUFBbUU7SUFDbkUsSUFBSTtJQUVKLElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDLHNDQUFzQ0MsT0FBT0MsS0FBSztRQUU5RCxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sMElBQTBJO1lBQ2hLQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUVMLE9BQU9DLEtBQUssQ0FBQyxDQUFDO1lBQzNDO1FBRUY7UUFFQSxNQUFNSyxlQUFlLE1BQU1KLElBQUlLLElBQUk7UUFDbkNULFFBQVFDLEdBQUcsQ0FBQyxxQ0FBcUNHLElBQUlNLE1BQU07UUFDM0RWLFFBQVFDLEdBQUcsQ0FBQyxtQ0FBbUNPO1FBRS9DLElBQUlKLElBQUlNLE1BQU0sS0FBSyxLQUFLO1lBQ3RCLE9BQU9iLHFEQUFZQSxDQUFDYyxJQUFJLElBQUksb0NBQW9DO1FBQ2xFLE9BQU87WUFDTFgsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT0oscURBQVlBLENBQUNlLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFdBQVdkLFFBQVFlLEdBQUc7UUFDN0Q7SUFFRixFQUFFLE9BQU9DLE9BQU87UUFDZGYsUUFBUWUsS0FBSyxDQUFDLG9DQUFvQ0E7UUFDbEQsT0FBT2xCLHFEQUFZQSxDQUFDZSxRQUFRLENBQUMsSUFBSUMsSUFBSSxXQUFXZCxRQUFRZSxHQUFHO0lBQzdEO0FBQ0Y7QUFFTyxNQUFNRSxTQUFTO0lBQ3BCQyxTQUFTO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5jb25zdCB7IGNvb2tpZXMgfSA9IHJlcXVpcmUoXCJuZXh0L2hlYWRlcnNcIik7XHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgLy8gY29uc3QgY29va2llID0gY29va2llcygpLmdldCgnQXV0aG9yaXphdGlvbicpO1xyXG5cclxuICAvLyBpZiAoIWNvb2tpZSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJBdXRob3JpemF0aW9uIGNvb2tpZSBub3QgZm91bmQuIFJlZGlyZWN0aW5nIHRvIHNpZ24gaW4uXCIpO1xyXG4gIC8vICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3NpZ25pblwiLCByZXF1ZXN0LnVybCkpO1xyXG4gIC8vIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXV0aG9yaXphdGlvbiBjb29raWUgZm91bmQuIFZhbHVlOlwiLCBjb29raWUudmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FjY291bnRwcm92aWRlci1zaWxpY29uLWV0LmF6dXJld2Vic2l0ZXMubmV0L2FwaS9WZXJpZnlUb2tlbj9jb2RlPXRzOU1kdWVxM0IxbjJBSGRRaFFyN1JVdWZKTDlqeUdLQ0hYN01GdXNMR0dxQXpGdTJVTzdLQSUzRCUzRCcsIHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2Nvb2tpZS52YWx1ZX1gXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9rZW46IGNvb2tpZS52YWx1ZSB9KSAvLyBTa2lja2EgdG9rZW4gaSBib2R5LCBkw6UgYmxldiBkZXQgZmVsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBzdGF0dXMgZnJvbSBWZXJpZnlUb2tlbjpcIiwgcmVzLnN0YXR1cyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIGJvZHkgZnJvbSBWZXJpZnlUb2tlbjpcIiwgcmVzcG9uc2VCb2R5KTtcclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpOyAvLyBQcm9jZWVkIHdpdGggdGhlIG9yaWdpbmFsIHJlcXVlc3RcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW4gdmVyaWZpY2F0aW9uIGZhaWxlZC4gUmVkaXJlY3RpbmcgdG8gc2lnbiBpbi5cIik7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9zaWduaW5cIiwgcmVxdWVzdC51cmwpKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHRva2VuIHZlcmlmaWNhdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3NpZ25pblwiLCByZXF1ZXN0LnVybCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBcIi9hY2NvdW50LzpwYXRoKlwiXHJcbn1cclxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJyZXF1aXJlIiwiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwiY29va2llIiwidmFsdWUiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZUJvZHkiLCJ0ZXh0Iiwic3RhdHVzIiwibmV4dCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiZXJyb3IiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});