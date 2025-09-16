#!/usr/bin/env node
//TODO: set up CI/CD for deployment to npm w/ github actions
import chalk from 'chalk';
import prompts from 'prompts';
import { getPackageManager } from '../utils/getPackageManager';
import type { CLIConfig } from '../lib/@types';
import packageJson from '../../package.json';
import { Command } from 'commander';

let config: CLIConfig;
let projectDir = '';
const packageManager = '';
const program = new Command(packageJson.name);

program
  .description('Scaffold Node.js backend projects')
  .version(packageJson.version, '-V, --version', 'Output the current ver. of scaffnode')
  .argument('[directory]')
  .usage('[directory] [options]')
  .helpOption('-H, --help', 'Show help message')
  .option('--use-pnpm', 'Explicitly tell scaffnode to bootstrap the app using pnpm.')
  .action(folderName => {
    const name = folderName as string;
    if (name && !name.startsWith('--')) {
      projectDir = name;
    }
    console.log('alright');
  })
  .parse();

console.log(program.opts());
console.log(projectDir);

async function runScript() {
  // if (projectDir.length == 0) {
  //   console.log('ok');
  // }
  (async () => {
    const response = await prompts({
      type: 'text',
      name: 'age',
      message: 'How old are you?',
      validate: value => (value < 18 ? `Nightclub is 18+ only` : true),
    });

    console.log(response); // => { age: 24 }
  })();
}

async function checkUpdate() {}

async function exitScript() {}

// runScript().then(checkUpdate).catch(exitScript)
