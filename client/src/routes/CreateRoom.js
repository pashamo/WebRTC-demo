import React from 'react';
//import { v1 as uuid } from 'uuid';

const CreateRoom = props => {
  function create() {
    //const id = uuid();
    const id = Math.floor(Math.random() * "0xF");
    props.history.push(`/room/${id}`);
    console.log(`${id} room created`); //DELETE
  }

  return (
    <button onClick={create}>Create Room</button>
  )
}

export default CreateRoom;