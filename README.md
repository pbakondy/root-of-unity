# Root of unity

**nth root of unity** calculation using De Moivre's formula.

- [https://en.wikipedia.org/wiki/Root_of_unity](https://en.wikipedia.org/wiki/Root_of_unity)
- [https://en.wikipedia.org/wiki/De_Moivre's_formula](https://en.wikipedia.org/wiki/De_Moivre%27s_formula)

## Install

```
$ npm install --save root-of-unity
```


## Usage

The function expects an integer parameter greater than zero.

The result is an Array of [Complex](https://github.com/arian/Complex) objects.

```js
var rootOfUnity = require('root-of-unity');

rootOfUnity(3);
//=> [ { im: 0, real: 1 }, { im: 0.866, real: -0.5 }, { im: -0.8665, real: -0.5 } ]
```


## License

root-of-unity is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
