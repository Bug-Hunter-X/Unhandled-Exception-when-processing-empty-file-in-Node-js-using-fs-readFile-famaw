```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read the file:', err);
      return;
    }
    // Process the data here, potential bug below
    const lines = data.split('\n');
    const processedLines = lines.map(line => line.trim());
    //The bug is here, if the file is empty the processedLines will be an empty array and the following code will throw an error
    console.log(processedLines[0]); 
  });
}

processFile('myFile.txt');
```