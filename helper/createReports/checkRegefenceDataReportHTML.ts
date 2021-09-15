import { transformToOneLevelObject } from "../jsonProcessing";
const { MAIN_URL, DEMO_URL } = process.env;
const URL = process.env.TEST_ENV
  ? `${DEMO_URL}/?showAside=true&shape=`
  : `${MAIN_URL}/?showAside=true&shape=`;

let bodyHTML =
  "<!DOCTYPE html>\n" +
  '<html lang="en">\n' +
  '<head><meta charset="UTF-8">\n' +
  "<title>Reports</title>\n" +
  "<style>\n" +
  "   table {\n" +
  "       border-collapse: collapse; \n" +
  "       line-height: 1.1;\n" +
  "       margin-bottom: 150px;\n" +
  "   }\n" +
  "   caption {\n" +
  "       font-family: annabelle, cursive;\n" +
  "       font-weight: bold;\n" +
  "       font-size: 2em;\n" +
  "       padding: 10px; \n" +
  "       text-shadow: 1px 1px 0 rgba(0,0,0,.3);\n" +
  "   }\n" +
  "   th {\n" +
  "       padding: 10px; \n" +
  "       border: 1px solid  grey" +
  "   }\n" +
  "   td {border: 1px solid grey;" +
  "       padding: 5px 7px;; \n" +
  "       border-collapse: collapse;}\n" +
  "   .errorColor {color: #FF0000 } \n" +
  "   .trueColor  {color: #00FF00}\n" +
  "</style>\n" +
  "</head><body>\n" +
  "</body>\n" +
  "</html>";

const createStrLink = (response: any) =>
  `<caption><a href=${URL + response.data.shape.id}>${
    response.data.shape.name
  }</a></caption>`;
const calcDeviation = (freshData: number, referenceData: number) =>
  Math.abs((freshData / referenceData - 1) * 100);

export const reportHTML = (
  referenceObj: any,
  recivedObj: any,
  deviation: number
) => {
  const summary = recivedObj.data.shape.summary,
    objReferenceData = transformToOneLevelObject(referenceObj),
    objReceivedData = transformToOneLevelObject(summary);
  let str = `<table>${createStrLink(
    recivedObj
  )}<tr><th>data</th><th>reference values</th><th>fresh values</th><th>deviation %</th></tr>`;
  Object.entries(referenceObj).forEach(([el, val]: any) => {
    let procentError = calcDeviation(val, objReceivedData[el]);
    let tdDeviation =
      procentError < deviation
        ? `<td class="trueColor">${Math.round(procentError * 10) / 10}</td>`
        : `<td class="errorColor">${Math.round(procentError * 10) / 10}</td>`;

    str += `<tr><td>${el}</td><td>${val}</td><td>${objReceivedData[el]}</td>${tdDeviation}</tr>`;
  });
  return (bodyHTML =
    bodyHTML.substr(0, bodyHTML.indexOf("</body>")) +
    str +
    `</table>` +
    bodyHTML.substr(bodyHTML.indexOf("</body>")) +
    "\n");
};
