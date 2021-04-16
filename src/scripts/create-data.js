const fs = require('fs');
const _ = require('lodash');
const path = require('path');

const NOUNS = path.join(__dirname, `${process.argv[2]}/nouns.txt`);
const ADJECTIVES = path.join(__dirname, `${process.argv[2]}/adjectives.txt`);
const NOUNS_JSON = path.join(__dirname, '../data/nouns.json');
const ADJECTIVES_JSON = path.join(__dirname, '../data/adjectives.json');

const nounsData = fs.readFileSync(NOUNS, { encoding: 'utf8' });
const adjectivesData = fs.readFileSync(ADJECTIVES, { encoding: 'utf8' });

const nouns = _.uniq(nounsData.match(/([a-z])+/g));
const adjectives = _.uniq(adjectivesData.match(/([a-z])+/g));

console.log(nouns, adjectives);

fs.writeFileSync(NOUNS_JSON, JSON.stringify(nouns), err => err && console.log(err));
fs.writeFileSync(ADJECTIVES_JSON, JSON.stringify(adjectives), err => err && console.log(err));
