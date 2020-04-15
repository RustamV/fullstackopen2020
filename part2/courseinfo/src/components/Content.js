import React from 'react'
import Part from './Part'

const Content = (props) => {
    return (
      <div>
        {props.parts.map((item) => 
            <Part key={item.id} part={item.name} exercises={item.exercises} />
        )}
      </div>
    )
}

export default Content;