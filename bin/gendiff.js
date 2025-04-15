#!/usr/bin/env node
import { Command } from "commander";
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
    const diffObj = app(filepath1,filepath2);
    console.log(diffObj);
    let sringObj = '{';
    for(const [key, value] of Object.entries(diffObj)){
      sringObj = `${sringObj}\n ${key}: ${value}`;
    }
    sringObj = `${sringObj}\n}`;
  });


program.parse();


// gendiff file1.json file2.json