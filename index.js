import fs from 'node:fs';
import { argv } from 'node:process';
import plist from 'plist';

argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

// Read the iTunes XML file
const xml = fs.readFileSync(argv[2], 'utf8');

// Parse the XML into a JavaScript object
const results = plist.parse(xml)

console.log(results.dict)

