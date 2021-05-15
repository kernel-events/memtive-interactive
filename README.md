# memtive-interactive

> A Component Library for interactive animations created in After Effects, Uses BodyMovin, Lottie and GASP for the rendering engine

[![NPM](https://img.shields.io/npm/v/memtive-interactive.svg)](https://www.npmjs.com/package/memtive-interactive) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

Here's an [example](https://worksheet-ai.github.io/memtive-interactive/) of the library

## Install

```bash
npm install --save memtive-interactive
```

## Usage

#### ScrollAnimation

The `ScrollAnimation` component loads JSON keyframe animations, a scroll event controls the playback of the animation

```jsx
import React, { Component } from 'react'

import { ScrollAnimation } from 'memtive-interactive'
import animation from './animation.json'

class Example extends Component {
  render() {
    return (
      <ScrollAnimation
        data={animation}
        scrollArea={5000} />
    );
  }
}

export default Example;
```
##### Props

| Props | Type | Default Value | Description |
| --- | --- | --- | --- |
| data [required] | `JSON` | `<none>` | Json exported from the BodyMovin plugin from After Effects  |
| scroll [optional] | `Integer` | `1000` |  The scroll distance for the animation playback in pixels |

## License

MIT © [abhishekpratapa](https://github.com/abhishekpratapa)
