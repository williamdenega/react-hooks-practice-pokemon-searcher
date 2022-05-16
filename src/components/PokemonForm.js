import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {

  const [form, setForm]= useState({
    name:'',
    hp:0,
    front:'',
    back:''
  })


  const handleChange = (event)=>{
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          fetch('http://localhost:3001/pokemon',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': form.name,
                'hp': parseInt(form.hp),
                'sprites':{
                    'front': form.front,
                    'back': form.back
                }
            })
          })
          .then((r)=> r.json())
          .then((newPokemon)=>handleNewPokemon(newPokemon) )
          setForm({
            name:'',
            hp:0,
            front:'',
            back:''
          })
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name"
           name="name" 
           value={form.name}
           onChange={handleChange}
           />
          <Form.Input 
          type="number"
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          value={form.hp}
          onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={form.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={form.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
