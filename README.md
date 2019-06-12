# AnimatedProfileWidget
Animated react social media profile widget with component level styling.
<img src='https://github.com/gokhangerdan/AnimatedProfileWidget/blob/master/Screenshot%20from%202019-06-12%2017-19-28.png'>
## Usage
```js
import React, { Component } from 'react';
import { render } from 'react-dom';

import AnimatedProfileWidget from './components/AnimatedProfileWidget';

class App extends Component {

  render() {
    return (
      <div>
        <AnimatedProfileWidget />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

```
