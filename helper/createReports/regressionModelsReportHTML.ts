let bodyHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Reports</title>
    <style>
        table {
            border-collapse: collapse;
            line-height: 1.1;
            margin: 100px auto 100px;
        }

        caption {
            font-family: "Open Sans", cursive;
            font-weight: bold;
            font-size: 2em;
            padding: 10px;
            text-shadow: 1px 1px 0 rgba(0, 0, 0, .3);
        }

        th {
            padding: 10px;
            border: 1px solid grey;
            position: relative;
        }

        td {
            text-align: center;
            border: 1px solid grey;
            padding: 5px 7px;
            border-collapse: collapse;
        }

        .mask {
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .errorColor {color: #FF0000 }  
        .trueColor  {color: #1f5c3f} 
    </style>
</head>
<body>
`;

const createTable = (nameTile: string) => `
<table>
    <caption>
        <p>${nameTile}</p>
    </caption>
    <tr>
        <td>Reference Image</td>
        <td>Different</td>
        <td>New Image</td>
    </tr>
`;

const rowImage = (
  imgName: string,
  referenceMask: string,
  newMask: string,
  diffMask: string
) => `
   <tr>
        <th>
            <img src="./referenceShapes/${imgName}.jpg">
            <img class="mask" src="./referenceShapes/${referenceMask}.png"> 
        </th>
        <th>
            <img src="./referenceShapes/${imgName}.jpg">
            <img class="mask" src="./referenceShapes/${diffMask}.png"> 
        </th>
        <th>
            <img src="./referenceShapes/${imgName}.jpg">
            <img class="mask" src="./referenceShapes/${newMask}.png"> 
        </th>
    </tr>
`;

const eroorCssClass = (data: number, deviation: number = 85) =>
  data * 100 > deviation ? `trueColor` : `errorColor`;
const rowWithMetrics = (text: string, data: number) => `
 <tr>
        <td colspan="3">
            <p class="${eroorCssClass(data)}">
               ${text} IoU=${Math.round(data * 100)}%
             </p>
        </td>
    </tr>`;

export const createReportModelsRegression = (
  imgName: string,
  referenceMask: string,
  currentMask: string,
  diffMask: string,
  IoU: any
) => {
  let rowIoUs: string = "";
  Object.entries(IoU).forEach(
    ([text, value]: any) => (rowIoUs += rowWithMetrics(text, value))
  );
  return (bodyHTML =
    bodyHTML +
    createTable(imgName) +
    rowImage(imgName, referenceMask, currentMask, diffMask) +
    rowIoUs +
    "</table>");
};
