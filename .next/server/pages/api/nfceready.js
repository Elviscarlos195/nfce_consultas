"use strict";
(() => {
var exports = {};
exports.id = "pages/api/nfceready";
exports.ids = ["pages/api/nfceready"];
exports.modules = {

/***/ "./pages/api/nfceready.js":
/*!********************************!*\
  !*** ./pages/api/nfceready.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _extensoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensoes */ "./pages/extensoes.js");


const puppeteer = __webpack_require__(/*! puppeteer */ "puppeteer");

async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.method);
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    let url = req.body.data; //await page.goto(url.data, {waitUntil: 'networkidle2', timeout: 600, defaultViewport: {width: 1920, height: 1080}});
    //await page.goto({url: 'http://app.sefaz.es.gov.br/ConsultaNFCe/qrcode.aspx?p=32210606955576001080651230001274811761890230|2|1|1|BEF56549DC43B8470BC2B2D4D921951CC720755A', options: {waitUntil:'networkidle2', timeout: 0}});

    await page.goto(url.url.toString(), {
      waitUntil: 'networkidle2',
      timeout: 0
    });
    const pageContent = await page.evaluate(() => {
      var prd = [];
      var table = document.querySelector('#tabResult');

      if (table != null && table != undefined) {
        for (let i in table.rows) {
          let row = table.rows[i];

          if (!isNaN(i)) {
            let product = {
              id: parseFloat(i) + 1,
              productCode: row.children[0].children[1].innerHTML.replace('(Código: ', '').replace(')', '').replace('\n', '').replace(' ', '').trim(),
              productName: row.children[0].children[0].innerHTML.replace(/\s\s+/g, ' '),
              quantity: row.children[0].children[3].innerHTML.replace('\n', '').replace('<strong>Qtde.:</strong>', '').replace(' ', '').trim(),
              unitaryValue: row.children[0].children[5].innerHTML.replace('\n', '').replace('<strong>Vl. Unit.:</strong>', '').replace('&nbsp;', '').replace(' ', '').trim(),
              unity: row.children[0].children[4].innerHTML.replace('\n', '').replace('<strong>UN: </strong>', '').replace('&nbsp;', '').replace(' ', '').trim(),
              amount: row.children[1].children[1].innerHTML.replace('\n', '').replace('<strong>UN: </strong>', '').replace('&nbsp;', '').replace(' ', '').trim()
            };
            prd.push(product);
          }
        }
      }

      return {
        title: document.querySelector('.txtTopo').innerHTML,
        chave: document.querySelector('.chave').innerHTML,
        vlrTotal: document.querySelector('.txtMax').innerHTML,
        products: Array.from(prd),
        produtos: [prd]
      };
    });
    browser.close();
    res.status(200).json(pageContent);
  } else {
    res.status(200).json(req.body);
  } //res.status(200).text(url);

}

function remove(name) {
  return name;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "./pages/extensoes.js":
/*!****************************!*\
  !*** ./pages/extensoes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReplaceAll)
/* harmony export */ });
function ReplaceAll(name) {
  return name;
}

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/nfceready.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXNUIsR0FBWCxDQUpQO0FBS0g2QixRQUFBQSxRQUFRLEVBQUUsQ0FBQzdCLEdBQUQ7QUFMUCxPQUFQO0FBT0gsS0E3QnlCLENBQTFCO0FBK0JBZCxJQUFBQSxPQUFPLENBQUM0QyxLQUFSO0FBQ0FoRCxJQUFBQSxHQUFHLENBQUNpRCxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJsQyxXQUFyQjtBQUNILEdBN0NELE1BOENJO0FBQ0FoQixJQUFBQSxHQUFHLENBQUNpRCxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJuRCxHQUFHLENBQUNXLElBQXpCO0FBQ0gsR0FqRDhCLENBb0QvQjs7QUFDRDs7QUFHRCxTQUFTeUMsTUFBVCxDQUFnQkMsSUFBaEIsRUFBcUI7QUFDakIsU0FBT0EsSUFBUDtBQUNIOztBQUVILGlFQUFldEQsT0FBZjs7Ozs7Ozs7Ozs7Ozs7QUNoRWUsU0FBU0gsVUFBVCxDQUFvQnlELElBQXBCLEVBQXlCO0FBRXBDLFNBQU9BLElBQVA7QUFDSDs7Ozs7Ozs7OztBQ0hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV1LWFybWFyaW8vLi9wYWdlcy9hcGkvbmZjZXJlYWR5LmpzIiwid2VicGFjazovL21ldS1hcm1hcmlvLy4vcGFnZXMvZXh0ZW5zb2VzLmpzIiwid2VicGFjazovL21ldS1hcm1hcmlvL2V4dGVybmFsIFwicHVwcGV0ZWVyXCIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZXBsYWNlQWxsIGZyb20gJy4uL2V4dGVuc29lcyc7XHJcbmNvbnN0IHB1cHBldGVlciA9IHJlcXVpcmUoJ3B1cHBldGVlcicpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kID09PSdQT1NUJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxLm1ldGhvZCk7XHJcbiAgICAgICAgY29uc3QgYnJvd3NlciA9IGF3YWl0IHB1cHBldGVlci5sYXVuY2goe2hlYWRsZXNzOiB0cnVlfSk7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpO1xyXG4gICAgICAgIGxldCB1cmwgPSByZXEuYm9keS5kYXRhO1xyXG5cclxuICAgICAgICAvL2F3YWl0IHBhZ2UuZ290byh1cmwuZGF0YSwge3dhaXRVbnRpbDogJ25ldHdvcmtpZGxlMicsIHRpbWVvdXQ6IDYwMCwgZGVmYXVsdFZpZXdwb3J0OiB7d2lkdGg6IDE5MjAsIGhlaWdodDogMTA4MH19KTtcclxuICAgICAgICAvL2F3YWl0IHBhZ2UuZ290byh7dXJsOiAnaHR0cDovL2FwcC5zZWZhei5lcy5nb3YuYnIvQ29uc3VsdGFORkNlL3FyY29kZS5hc3B4P3A9MzIyMTA2MDY5NTU1NzYwMDEwODA2NTEyMzAwMDEyNzQ4MTE3NjE4OTAyMzB8MnwxfDF8QkVGNTY1NDlEQzQzQjg0NzBCQzJCMkQ0RDkyMTk1MUNDNzIwNzU1QScsIG9wdGlvbnM6IHt3YWl0VW50aWw6J25ldHdvcmtpZGxlMicsIHRpbWVvdXQ6IDB9fSk7XHJcbiAgICAgICAgYXdhaXQgcGFnZS5nb3RvKHVybC51cmwudG9TdHJpbmcoKSwge3dhaXRVbnRpbDogJ25ldHdvcmtpZGxlMicsIHRpbWVvdXQ6IDB9KTtcclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwYWdlQ29udGVudCA9IGF3YWl0IHBhZ2UuZXZhbHVhdGUoKCkgPT4geyAgXHJcbiAgICAgICAgICAgICB2YXIgcHJkID0gIFtdOyAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJSZXN1bHQnKTtcclxuICAgICAgICAgICAgaWYodGFibGUgIT0gbnVsbCAmJiB0YWJsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpIGluIHRhYmxlLnJvd3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5yb3dzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFpc05hTihpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcnNlRmxvYXQoaSkgKzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogcm93LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmlubmVySFRNTC5yZXBsYWNlKCcoQ8OzZGlnbzogJywnJykucmVwbGFjZSgnKScsJycpLnJlcGxhY2UoJ1xcbicsJycpLnJlcGxhY2UoJyAnLCcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcm93LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmlubmVySFRNTC5yZXBsYWNlKC9cXHNcXHMrL2csICcgJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogcm93LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzNdLmlubmVySFRNTC5yZXBsYWNlKCdcXG4nLCcnKS5yZXBsYWNlKCc8c3Ryb25nPlF0ZGUuOjwvc3Ryb25nPicsJycpLnJlcGxhY2UoJyAnLCcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0YXJ5VmFsdWU6IHJvdy5jaGlsZHJlblswXS5jaGlsZHJlbls1XS5pbm5lckhUTUwucmVwbGFjZSgnXFxuJywnJykucmVwbGFjZSgnPHN0cm9uZz5WbC4gVW5pdC46PC9zdHJvbmc+JywnJykucmVwbGFjZSgnJm5ic3A7JywnJykucmVwbGFjZSgnICcsJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXR5OiByb3cuY2hpbGRyZW5bMF0uY2hpbGRyZW5bNF0uaW5uZXJIVE1MLnJlcGxhY2UoJ1xcbicsJycpLnJlcGxhY2UoJzxzdHJvbmc+VU46IDwvc3Ryb25nPicsJycpLnJlcGxhY2UoJyZuYnNwOycsJycpLnJlcGxhY2UoJyAnLCcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHJvdy5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5pbm5lckhUTUwucmVwbGFjZSgnXFxuJywnJykucmVwbGFjZSgnPHN0cm9uZz5VTjogPC9zdHJvbmc+JywnJykucmVwbGFjZSgnJm5ic3A7JywnJykucmVwbGFjZSgnICcsJycpLnRyaW0oKSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZC5wdXNoKHByb2R1Y3QpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR4dFRvcG8nKS5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICBjaGF2ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXZlJykuaW5uZXJIVE1MLFxyXG4gICAgICAgICAgICAgICAgdmxyVG90YWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eHRNYXgnKS5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogQXJyYXkuZnJvbShwcmQpLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0b3M6IFtwcmRdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBicm93c2VyLmNsb3NlKCk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocGFnZUNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXEuYm9keSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9yZXMuc3RhdHVzKDIwMCkudGV4dCh1cmwpO1xyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZShuYW1lKXtcclxuICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXBsYWNlQWxsKG5hbWUpe1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmFtZTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1cHBldGVlclwiKTsiXSwibmFtZXMiOlsiUmVwbGFjZUFsbCIsInB1cHBldGVlciIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImJyb3dzZXIiLCJsYXVuY2giLCJoZWFkbGVzcyIsInBhZ2UiLCJuZXdQYWdlIiwidXJsIiwiYm9keSIsImRhdGEiLCJnb3RvIiwidG9TdHJpbmciLCJ3YWl0VW50aWwiLCJ0aW1lb3V0IiwicGFnZUNvbnRlbnQiLCJldmFsdWF0ZSIsInByZCIsInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwiaSIsInJvd3MiLCJyb3ciLCJpc05hTiIsInByb2R1Y3QiLCJpZCIsInBhcnNlRmxvYXQiLCJwcm9kdWN0Q29kZSIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInRyaW0iLCJwcm9kdWN0TmFtZSIsInF1YW50aXR5IiwidW5pdGFyeVZhbHVlIiwidW5pdHkiLCJhbW91bnQiLCJwdXNoIiwidGl0bGUiLCJjaGF2ZSIsInZsclRvdGFsIiwicHJvZHVjdHMiLCJBcnJheSIsImZyb20iLCJwcm9kdXRvcyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsInJlbW92ZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9