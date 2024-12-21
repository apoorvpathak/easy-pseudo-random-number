# Random Number or Boolean Generator
<img src="https://skillicons.dev/icons?i=js,npm" />


## Installation

This package can be installed using 
```bash
npm i ranum
```

## Usage

### Importing
``` javascript
const ranum = require('ranum')
```

### Code

```javascript

// Generate a random integer between 1 and 10 (inclusive)
const randomInteger = ranum.ranumInt(1, 10);
console.log(`Random Integer: ${randomInteger}`); // Example output: 7

// Generate a random decimal between 1 and 10 (exclusive of 10)
const randomDecimal = ranum.ranumDecimal(1, 10);
console.log(`Random Decimal: ${randomDecimal}`); // Example output: 6.23456

// Generate a random boolean value
const randomBoolean = ranum.ranumBool();
console.log(`Random Boolean: ${randomBoolean}`); // Example output: true
```


## Functions

---

### `ranumInt(min, max)`

Generates a random integer between `min` and `max` (inclusive).

#### Parameters

- `min` (Number): The minimum value.
- `max` (Number): The maximum value.

#### Returns

- A random integer between `min` and `max`.

---

### `ranumDecimal(min, max)`

Generates a random decimal between `min` and `max` (exclusive of `max`).

#### Parameters

- `min` (Number): The minimum value.
- `max` (Number): The maximum value.

#### Returns

- A random decimal between `min` and `max`.

---

### `ranumBool()`

Generates a random boolean value (`true` or `false`).

#### Parameters

- None.

#### Returns

- `true` or `false`.
