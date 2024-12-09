let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function create2DimData(csv) {

    let data = [];
    let row = [];
    let dataStr = "";
    let isHeader = true;

    for (let i = 0; i < csv.length; i++) {
        if (csv[i] != "\n" && csv[i] != ",") //If the current character is a new line, then...
            dataStr += csv[i]; //Append the temp string with the current character.

        if (csv[i] == ",") { //If the current character is a comma, then...
            if (isHeader)
                dataStr = dataStr.toLowerCase();
            row.push(dataStr);
            dataStr = ""; //Reset the temp column name to an empty string.
        }

        if (csv[i] == "\n") { //If the current character is a new line, then...
            if (isHeader) {
                dataStr = dataStr.toLowerCase();
                isHeader = false;
            }
            row.push(dataStr);
            dataStr = "";
            data.push(row);
            row = [];
        }
    }

    row.push(dataStr);
    data.push(row);

    return data;
}

function createDataObjects(data2D) {
    let dataObjects = [];


    function createDataObject (metaDataRow, row) {
        let dataObj = {};
        
        for (let i = 0; i < metaDataRow.length; i++) {
            Object.defineProperty(dataObj, `${metaDataRow[i]}`, {enumerable : true, value: row[i]});
        }

        return dataObj;
    }

    for (let i = 1; i < data2D.length; i++) {
        dataObjects.push(createDataObject(data2D[0], data2D[i]));
    }

    return dataObjects;
}

let data2D = create2DimData(csv);
let dataObjects = createDataObjects(data2D);

dataObjects.sort((a, b) => {a.id - b.id});
dataObjects.splice(dataObjects.length - 1, 1);
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

function findAvgAge(dataObjects) {
    let avgAge = 0;

    for (let obj of dataObjects) {
        avgAge += Number(obj.age);
    }

    return avgAge / dataObjects.length;
}

function createCSVString(dataObjects) {
    let csv = "";
    let metaData = (dataObjects.length != 0) ? Object.getOwnPropertyNames(dataObjects[0]) : null;

    function toUpperCaseOnFirstLetter(str) {
        let firstLetter = str.charAt(0);
        firstLetter = firstLetter.toUpperCase();
        remainingStr = str.slice(1);
        
        return firstLetter + remainingStr;
    }

    try {
        for (let entry of metaData) {
            if (metaData.at(0) === entry)
                csv += entry.toUpperCase();
            else
                csv += toUpperCaseOnFirstLetter(entry);
            if (metaData.at(-1) !== entry)
                csv += ',';
        }
    }
    catch(err) {throw "metaData is null!";}

    csv += '\n';

    for (let obj of dataObjects) {
        csv += Object.values(obj).join(',') + '\n';
    }

    csv = csv.substring(0, csv.length - 1);

    return csv;
}

let csvNew = createCSVString(dataObjects);

console.log(csvNew);