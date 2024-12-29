# Unhandled Exception when processing empty file in Node.js using fs.readFile
This repository demonstrates a common error when working with asynchronous file operations in Node.js using `fs.readFile`.  The bug occurs when attempting to access an element of an array that may be empty.  The solution involves proper error handling and checking for empty arrays before accessing elements.

## Bug
The `bug.js` file contains code that reads a file, splits it into lines, and processes those lines.  However, it lacks error handling for the scenario where the file is empty, resulting in an unhandled exception.

## Solution
The `bugSolution.js` file presents a corrected version with improved error handling. It checks if the `processedLines` array is empty before attempting to access its elements, preventing the exception.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js` with an empty `myFile.txt`. Observe the unhandled exception.
3. Run `node bugSolution.js` (either with an empty or populated `myFile.txt`). Observe the solution's robustness.