import { transformToOneLevelObject } from "../jsonProcessing";
const { MAIN_URL, DEMO_URL } = process.env;
const URL = process.env.TEST_ENV
  ? `${DEMO_URL}/?showAside=true&shape=`
  : `${MAIN_URL}/?showAside=true&shape=`;

let bodyHTML = `
  <!DOCTYPE html>
    <html lang="en">
        <head><meta charset="UTF-8">
        <title>Reports</title>
        <style>
     table { 
         border-collapse: collapse;  
         line-height: 1.1; 
         margin-bottom: 150px; 
     } 
     caption { 
         font-family: annabelle, cursive; 
         font-weight: bold; 
         font-size: 2em; 
         padding: 10px;  
         text-shadow: 1px 1px 0 rgba(0,0,0,.3); 
     } 
     th { 
         padding: 10px;  
         border: 1px solid  grey 
     } 
     td {border: 1px solid grey; 
         padding: 5px 7px;;  
         border-collapse: collapse;} 
     .errorColor {color: #FF0000 }  
     .trueColor  {color: #00FF00} 
  </style> 
    </head>
    <body> 
    </body> 
  </html>`;

const nameOfTableElement = `
   <tr>
      <th>data</th>
      <th>reference values</th>
      <th>fresh values</th>
      <th>deviation %</th>
    </tr>`;

const createStrLink = (id: number, name: string) => `
        <caption>
            <a href=${URL + id}>${name}</a>
        </caption>`;

const calcDeviation = (referenceData: any, freshData: any) =>
  Math.abs((freshData / referenceData - 1) * 100);

const errorClass = (procentError: number, deviation: number) =>
  procentError < deviation ? `"trueColor"` : `"errorColor"`;

const createTable = (id: number, name: string) =>
  `<table>${createStrLink(id, name)}` + nameOfTableElement;

export const reportHTML = (
  referenceObj: any,
  recivedObj: any,
  deviation: number,
  id: number,
  name: string
) => {
  const objReferenceData = transformToOneLevelObject(referenceObj),
    objReceivedData = transformToOneLevelObject(recivedObj);
  let table = createTable(id, name);

  Object.entries(objReferenceData).forEach(([el, val]: any) => {
    let procentError = calcDeviation(objReceivedData[el], val);
    table += `
        <tr>
            <td>${el}</td>
            <td>${val}</td>
            <td>${objReceivedData[el]}</td>
            <td class=${errorClass(procentError, deviation)}>${
      Math.round(procentError * 100) / 100
    }</td>
        </tr>`;
  });
  return (bodyHTML =
    bodyHTML.substr(0, bodyHTML.indexOf(`</body>`)) +
    table +
    `</table>` +
    bodyHTML.substr(bodyHTML.indexOf(`</body>`)) +
    "\n");
};
