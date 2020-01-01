# nhkz-hello-npm

## Installation
```bash
$ npm install nhkz-hello-npm
```

## Usage
```javascript
const filterModule = require('nhkz-hello-npm').default

const filtered = filterModule(
    'fruits banana apple durian', 
    ['apple', 'durian']
)

console.log(filtered)
```

## Evaluate result
Execute file:
```bash
$ node <file-name>
```

Output:

```bash
$ fruits banana ***************** *****************
```