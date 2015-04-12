# md5-transpose-list [![Build Status](https://travis-ci.org/cjsaylor/md5-transpose-list.svg)](https://travis-ci.org/cjsaylor/md5-transpose-list)
Compute md5 hash for a list of file paths with promises.

## Example Usage

```javascript
var md5TransposeList = require('md5-transpose-list')();

var list = ['a.txt', 'b.txt', 'nonexistent.txt'];
md5.transpose(list).then(console.log);
// Example output:
// [
//     {
//         name: 'a.txt',
//         hash: '3359b43e76597706df51b63d4bb73a33'
//     },
//     {
//         name: 'b.txt',
//         hash: '3359b43e76597706df51b63d4bb73a33'
//     },
//     {
//         name: 'nonexistent.txt',
//         hash: null
//     }
// ]

```
