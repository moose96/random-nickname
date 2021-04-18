# Random Nickname

It is a random nickname generator.

# Getting started

## Installation

```
npm install https://github.com/moose96/random-nickname.git
```
or
```
yarn add https://github.com/moose96/random-nickname.git
```

## Usage

### Simple usage

The simplest way to use this library is to call `randomNickname` function without parameters and use the `nickname` property of result object to read the randomly generated nickname:

```ts
import randomNickname from 'random-nickname';

const { nickname } = randomNickname();

console.log(nickname); //prints: awesome_train321
```

### Result object

You can use more properties of result object if you need:

```ts
const { words, separators, numbers } = randomNickname();

console.log(words); // ['awesome', 'train']
console.log(separators); // ['_']
console.log(numbers); // [123]
```

* words - it handles all words used in nickname
* separators - it handles all separators used in nickname
* numbers - it handles all numbers used in nickname

### Advanced options

It's possible to pass options object to first argument of `randomNickname` function:

```ts
import randomNickname, { Pattern, RandomNicknameOptions } from 'random-nickname';

const options: RandomNicknameOptions = {
  pattern: Pattern.Short,
  separators: ['%', '*'],
  wordsMaxLength: 8,
  minNumber: 111,
  maxNumber: 1111
};

const { nickname } = randomNickname(options);

console.log(nickname); //dog*1010
```

| Property | Type | Description | Default value |
| -------- | ---- | ----------- | ------------- |
| pattern | `Pattern \| string ` | It describes elements of which the nickname consists of | `Pattern.Long` |
| separators | `string[]` | It handles separators which are used to generate nickname if the `(separator)` is present in `pattern` | `['', '_', '-', '.']`
| wordsMaxLength | `number \| undefined` | It limits the set of words to words with them length given in this property | `undefined` |
| minNumber | `number` | Lower draw bound of number | `1` |
| maxNumber | `number` | Higher draw bound of number | `999` |

### Pattern description

`Pattern` enum is described of following fields:
```ts
enum Pattern {
  Short = '(noun)(separator)(number)',
  Long = '(adjective)(separator)(noun)(separator)(number)',
}
```

You can define own patterns and pass them as string into `pattern` property of `randomNickname` options object. You can use these special strings: `(noun)`, `(adjective)`, `(separator)`, `(number)`, and custom string, example:

```ts
for (let i = i < 3; i++) {
  const { nickname } = randomNicknames({ pattern: '_(noun)-(noun)_'});

  console.log(nickname);
}

//prints:
// _dog-carpet_
// _table-lamp_
// _knee-guitar_
```
You can't use *'('* and *')'* in custom strings, because they denote the start and the end of special strings.