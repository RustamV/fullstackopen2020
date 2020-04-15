import React from 'react';
import Course from './components/Course'

const App = (props) => {
  return (
    <div>
      {props.courses.map((item) => 
        <Course course={item} />
      )}
      
    </div>
  )
}

export default App;
