import React from 'react'

import { ScrollAnimation } from 'memtive-interactive'
import animation from './animation.json'

const App = () => {
  return (
    <div style={{'width': '100vw', 'height': '100vh'}}>
      <ScrollAnimation
        data={animation}
        scrollArea={5000} />
    </div>
  );
}

export default App
