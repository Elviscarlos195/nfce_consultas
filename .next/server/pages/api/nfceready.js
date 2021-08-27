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
const chromium = __webpack_require__(/*! chrome-aws-lambda */ "chrome-aws-lambda");

const puppeteer = __webpack_require__(/*! puppeteer-core */ "puppeteer-core");

async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.method);
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: '~/chrome/local-chromium/win64-901912/chrome-win/chrome.exe',
      headless: true,
      ignoreHTTPSErrors: true
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
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ "puppeteer-core":
/*!*********************************!*\
  !*** external "puppeteer-core" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("puppeteer-core");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBbUNXLFNBRHZDO0FBRUhVLFFBQUFBLEtBQUssRUFBRXRCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ1csU0FGckM7QUFHSFcsUUFBQUEsUUFBUSxFQUFFdkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDVyxTQUh6QztBQUlIWSxRQUFBQSxRQUFRLEVBQUVDLEtBQUssQ0FBQ0MsSUFBTixDQUFXNUIsR0FBWCxDQUpQO0FBS0g2QixRQUFBQSxRQUFRLEVBQUUsQ0FBQzdCLEdBQUQ7QUFMUCxPQUFQO0FBT0gsS0E3QnlCLENBQTFCO0FBK0JBbEIsSUFBQUEsT0FBTyxDQUFDZ0QsS0FBUjtBQUNBcEQsSUFBQUEsR0FBRyxDQUFDcUQsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCbEMsV0FBckI7QUFDSCxHQWpERCxNQWtESTtBQUNBcEIsSUFBQUEsR0FBRyxDQUFDcUQsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCdkQsR0FBRyxDQUFDZSxJQUF6QjtBQUNIO0FBQ0Y7O0FBS0gsaUVBQWVoQixPQUFmOzs7Ozs7Ozs7O0FDaEVBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXUtYXJtYXJpby8uL3BhZ2VzL2FwaS9uZmNlcmVhZHkuanMiLCJ3ZWJwYWNrOi8vbWV1LWFybWFyaW8vZXh0ZXJuYWwgXCJjaHJvbWUtYXdzLWxhbWJkYVwiIiwid2VicGFjazovL21ldS1hcm1hcmlvL2V4dGVybmFsIFwicHVwcGV0ZWVyLWNvcmVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGNocm9taXVtID0gcmVxdWlyZSgnY2hyb21lLWF3cy1sYW1iZGEnKTtcclxuY29uc3QgcHVwcGV0ZWVyID0gcmVxdWlyZSgncHVwcGV0ZWVyLWNvcmUnKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0nUE9TVCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcS5tZXRob2QpO1xyXG4gICAgICAgIGNvbnN0IGJyb3dzZXIgPSBhd2FpdCBwdXBwZXRlZXIubGF1bmNoKHsgXHJcbiAgICAgICAgICAgICAgIGFyZ3M6IGNocm9taXVtLmFyZ3MsXHJcbiAgICAgICAgZGVmYXVsdFZpZXdwb3J0OiBjaHJvbWl1bS5kZWZhdWx0Vmlld3BvcnQsXHJcbiAgICAgICAgZXhlY3V0YWJsZVBhdGg6ICd+L2Nocm9tZS9sb2NhbC1jaHJvbWl1bS93aW42NC05MDE5MTIvY2hyb21lLXdpbi9jaHJvbWUuZXhlJyxcclxuICAgICAgICBoZWFkbGVzczogdHJ1ZSxcclxuICAgICAgICBpZ25vcmVIVFRQU0Vycm9yczogdHJ1ZSxcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XHJcbiAgICAgICAgbGV0IHVybCA9IHJlcS5ib2R5LmRhdGE7XHJcblxyXG4gICAgICAgIC8vYXdhaXQgcGFnZS5nb3RvKHVybC5kYXRhLCB7d2FpdFVudGlsOiAnbmV0d29ya2lkbGUyJywgdGltZW91dDogNjAwLCBkZWZhdWx0Vmlld3BvcnQ6IHt3aWR0aDogMTkyMCwgaGVpZ2h0OiAxMDgwfX0pO1xyXG4gICAgICAgIC8vYXdhaXQgcGFnZS5nb3RvKHt1cmw6ICdodHRwOi8vYXBwLnNlZmF6LmVzLmdvdi5ici9Db25zdWx0YU5GQ2UvcXJjb2RlLmFzcHg/cD0zMjIxMDYwNjk1NTU3NjAwMTA4MDY1MTIzMDAwMTI3NDgxMTc2MTg5MDIzMHwyfDF8MXxCRUY1NjU0OURDNDNCODQ3MEJDMkIyRDREOTIxOTUxQ0M3MjA3NTVBJywgb3B0aW9uczoge3dhaXRVbnRpbDonbmV0d29ya2lkbGUyJywgdGltZW91dDogMH19KTtcclxuICAgICAgICBhd2FpdCBwYWdlLmdvdG8odXJsLnVybC50b1N0cmluZygpLCB7d2FpdFVudGlsOiAnbmV0d29ya2lkbGUyJywgdGltZW91dDogMH0pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gYXdhaXQgcGFnZS5ldmFsdWF0ZSgoKSA9PiB7ICBcclxuICAgICAgICAgICAgIHZhciBwcmQgPSAgW107ICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYlJlc3VsdCcpO1xyXG4gICAgICAgICAgICBpZih0YWJsZSAhPSBudWxsICYmIHRhYmxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgaW4gdGFibGUucm93cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLnJvd3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzTmFOKGkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFyc2VGbG9hdChpKSArMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiByb3cuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uaW5uZXJIVE1MLnJlcGxhY2UoJyhDw7NkaWdvOiAnLCcnKS5yZXBsYWNlKCcpJywnJykucmVwbGFjZSgnXFxuJywnJykucmVwbGFjZSgnICcsJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lOiByb3cuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiByb3cuY2hpbGRyZW5bMF0uY2hpbGRyZW5bM10uaW5uZXJIVE1MLnJlcGxhY2UoJ1xcbicsJycpLnJlcGxhY2UoJzxzdHJvbmc+UXRkZS46PC9zdHJvbmc+JywnJykucmVwbGFjZSgnICcsJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRhcnlWYWx1ZTogcm93LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzVdLmlubmVySFRNTC5yZXBsYWNlKCdcXG4nLCcnKS5yZXBsYWNlKCc8c3Ryb25nPlZsLiBVbml0Ljo8L3N0cm9uZz4nLCcnKS5yZXBsYWNlKCcmbmJzcDsnLCcnKS5yZXBsYWNlKCcgJywnJykudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdHk6IHJvdy5jaGlsZHJlblswXS5jaGlsZHJlbls0XS5pbm5lckhUTUwucmVwbGFjZSgnXFxuJywnJykucmVwbGFjZSgnPHN0cm9uZz5VTjogPC9zdHJvbmc+JywnJykucmVwbGFjZSgnJm5ic3A7JywnJykucmVwbGFjZSgnICcsJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcm93LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmlubmVySFRNTC5yZXBsYWNlKCdcXG4nLCcnKS5yZXBsYWNlKCc8c3Ryb25nPlVOOiA8L3N0cm9uZz4nLCcnKS5yZXBsYWNlKCcmbmJzcDsnLCcnKS5yZXBsYWNlKCcgJywnJykudHJpbSgpLCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJkLnB1c2gocHJvZHVjdCk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHh0VG9wbycpLmlubmVySFRNTCxcclxuICAgICAgICAgICAgICAgIGNoYXZlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdmUnKS5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICB2bHJUb3RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR4dE1heCcpLmlubmVySFRNTCxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBBcnJheS5mcm9tKHByZCksXHJcbiAgICAgICAgICAgICAgICBwcm9kdXRvczogW3ByZF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGJyb3dzZXIuY2xvc2UoKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwYWdlQ29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlcS5ib2R5KTtcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaHJvbWUtYXdzLWxhbWJkYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXBwZXRlZXItY29yZVwiKTsiXSwibmFtZXMiOlsiY2hyb21pdW0iLCJyZXF1aXJlIiwicHVwcGV0ZWVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJicm93c2VyIiwibGF1bmNoIiwiYXJncyIsImRlZmF1bHRWaWV3cG9ydCIsImV4ZWN1dGFibGVQYXRoIiwiaGVhZGxlc3MiLCJpZ25vcmVIVFRQU0Vycm9ycyIsInBhZ2UiLCJuZXdQYWdlIiwidXJsIiwiYm9keSIsImRhdGEiLCJnb3RvIiwidG9TdHJpbmciLCJ3YWl0VW50aWwiLCJ0aW1lb3V0IiwicGFnZUNvbnRlbnQiLCJldmFsdWF0ZSIsInByZCIsInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwiaSIsInJvd3MiLCJyb3ciLCJpc05hTiIsInByb2R1Y3QiLCJpZCIsInBhcnNlRmxvYXQiLCJwcm9kdWN0Q29kZSIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInRyaW0iLCJwcm9kdWN0TmFtZSIsInF1YW50aXR5IiwidW5pdGFyeVZhbHVlIiwidW5pdHkiLCJhbW91bnQiLCJwdXNoIiwidGl0bGUiLCJjaGF2ZSIsInZsclRvdGFsIiwicHJvZHVjdHMiLCJBcnJheSIsImZyb20iLCJwcm9kdXRvcyIsImNsb3NlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=