import React, {useState} from 'react'

const ListComponent = ({list}) => {
  const [limit, setLimit] = useState(15)
  return (
    <div>
      <ul>
        {list?.slice(0, limit).map((data, index) => (
          <li className={`${data.completed ? 'completed' : ''}`} key={index}>{data.title}</li>
        ))}
      </ul>
      
      {limit < list.length && <button onClick={() => setLimit(limit + 15)}>Load Next 15</button>}
    </div>
  )
}

export default ListComponent