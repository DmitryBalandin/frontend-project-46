#!/usr/bin/env node
import { Command } from 'commander';
import app from '../src/index.js';
const program = new Command();
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) =>{
    console.log(app(filepath1,filepath2, options.format));
  });


program.parse();


// gendiff file1.json file2.json
// gendiff fileDeep1.json fileDeep2.json
// gendiff fileDeep1.yaml fileDeep2.yaml --format stylish
// gendiff fileDeep1.yaml fileDeep2.yaml --format plain
// gendiff fileDeep1.yaml fileDeep2.yaml --format json