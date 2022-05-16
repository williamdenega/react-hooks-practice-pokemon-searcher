import React from "react";

function Search({ term,changeTerm }) {



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt" 
        value={term}
        onChange={event=> changeTerm(event.target.value)}
        
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
