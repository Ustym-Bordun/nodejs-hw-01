import path from 'node:path';
import { fileURLToPath } from 'node:url';

// const currentWorkingDirect = process.cwd();
const fileName = fileURLToPath(import.meta.url); // const fileName = import.meta.filename;
const dirName = path.parse(fileName).dir; // const dirName = import.meta.dirname;
const dirNameOfDirName = path.parse(dirName).dir;

export const PATH_DB = path.join(dirNameOfDirName, 'db/db.json');

// console.log('currentWorkingDirect :', currentWorkingDirect);
// console.log('fileName :', fileName);
// console.log('dirName :', dirName);
// console.log('dirNameOfDirName :', dirNameOfDirName);

// console.log('PATH_DB :', PATH_DB);
