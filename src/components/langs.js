import React from 'react'

const Langs = ({langs}) => {
  return (
    <div>
      <h1>Language list</h1>
      {langs.map((lang) => (
        <div className="card" key={lang.code}
		style={{backgroundColor: 'GREEN'}}>
          <div className="card-body">
            <h3 className="card-title">{lang.name}</h3>
            <p className="card-text">{lang.code}</p>
          </div>
        </div>
      ))}
    </div>
  )
};
	
export default Langs;