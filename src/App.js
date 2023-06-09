import React,{useState} from 'react'
import data from './components/data'
import Input from './components/Input'
import Text from './components/Text'
function App() {
  const [input,setInput]=useState('')
  
  const checkInput=(number)=>{
    if(number<0)
        return number=1
    if(number>8)
        return number=8
    else
        return number
}

  const handleClick=(input)=>{
    let newInput=Number(input)
    setInput(checkInput(newInput))
  }
  return (
    <main>
      <section>
        <header>TIRED OF BORING LOREM IPSUM ?</header>
        <div className='container'>
          <Input handleClick={handleClick}/>
          {data.slice(0,input).map((text,index)=>{
              return (<Text key={index} text={text}/>)
          })}
          </div>
      </section>
    </main>
  );
}

export default App;
