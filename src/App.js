import logo from './logo.svg';
import './App.css';
import { useId } from 'react';
import  React , { useState } from 'react';
//Chat Auth: oauth:m9m8ctey1mnifp5yh5p2ak4wzb9okn
/*
client.on('message', AddMessage);
async function AddMessage(channel, tags, message, self) {
  console.log(tags.username);
}*/
 
  




function App() {
  const tmi = require('tmi.js');
  const [response, setResponse] = useState('');
  //const msgElement = document.querySelector('#test') || {};
  
  const client = new tmi.Client({
    channels: [ 'salle2209' ]
  });
  
  client.connect();
  
  const users= {};
  
  var msgs = {};
  var chatTekst= "";
  client.on('message', (channel, tags, message, self) => {

   
  })

client.on('message', AddMessage);
function AddMessage(channel, tags, message, self) {
  if(self) return true; 

    chatTekst += `${tags['display-name']}: ${message} `
    console.log(chatTekst);
    setResponse("\n"+ chatTekst );
    

}
 

  
   

  const  mes= {};
  const Elements = (<h2>{response}</h2>)
  


 
  return (
    <div className="App">
      <header className="App-header"   >
     <div  className="App-chat">  
      {Elements}
     {response} 
    
     </div>
  
      
      </header>
    </div>
  );
}

export default App;
