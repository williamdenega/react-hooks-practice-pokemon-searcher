import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const {hp, name , sprites} = pokemon
  const {front, back } = sprites
  const [side, setSide] = useState(true)
  
  const handleClick = ()=>{
    setSide((side)=> !side)
  }







  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick} onMouseOver={()=>setSide(false)} onMouseOut={()=>setSide(true)} >
          <img alt={name}  src={side ? front : back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
