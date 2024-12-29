```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read the file:', err);
      return;
    }
    const lines = data.split('\n');
    const processedLines = lines.map(line => line.trim());

    //Check if the array is empty before accessing it
    if (processedLines.length > 0) {
        console.log(processedLines[0]);
    } else {
        console.log('File is empty');
    }
  });
}

processFile('myFile.txt');
```