# babel-plugin-import-css-to-radium

inline CSS, SASS, and LESS files into Radium style objects,

_**Note:** This Babel plugin works works with Babel 6**._

### Installation

```sh
$ npm install babel-plugin-import-css-to-radium
```

### Usage
This is a plugin that compiles css written in a modular way into Radium css style objects, so you can use them inline in a Component

#### styles.css

```css

.header {
  background-color: green;
  font-size: 14px;
  margin-bottom: 5px;
}

```
#### MyComponent.js
```javascript
import removeCssDots from 'remove-css-dots';

import css from './styles.css';

const styles = removeCssDots(css);

@Radium
class MyComponent extends React.Component {

  render() {
    return (
      <div>
        <h3 style={css['.header']}>Cool Header</h3>
        <h3 style={styles.header}>Cooler Header</h3>
      </div>
    )
  }
}

```

css object compiles to:

```javascript
console.log(css)
/*
'.header': {
  'fontSize': 14,
  'marginBottom': 12,
  'backgroundColor': 'green'
}
*/

// make style object cleaner with remove-css-dots
console.log(styles);
/*
header: {
  'fontSize': 14,
  'marginBottom': 12,
  'backgroundColor': 'green'
}
*/
```

### Use Case
in a project that styling is done with css, sass, or less can be compiled into a inline javascript object so you have the benefits of having modular styles and easier portability, not all css works inline so we use a Radium decorator to serve like a polyfill for css features

### Webpack config
config your styles to be loaded with [radium-loader](https://github.com/dminkovsky/radium-loader)

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [
    ["babel-plugin-import-css-to-radium"],
    ["babel-plugin-transform-decorators-legacy"],

  ]
}
```
