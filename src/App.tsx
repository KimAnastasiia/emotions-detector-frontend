import './App.css';
import { Input, Flex, Button, Typography   } from 'antd';
import React, { useState } from 'react';

function App() {


  const { Title } = Typography;
  const { TextArea } = Input;

  const [text, setText] = useState<string>("");

  const processText = async () => {
    let response = await fetch(`http://127.0.0.1:5000/analyze?text=${text}`)
    if (response.ok) {
      let data = await response.json()
      console.log(data)//return array 
    }
  }

  return (
    <div className="App">
      <Flex justify='center' align='center' style={{minHeight:"100vh", backgroundColor:"#D3EBE5"}}>
        <Flex vertical justify="center" align='center' style={{width:500, height:500, borderRadius:20, backgroundColor:"#E8D2EA",border: "4px solid #652B6B",}}>
          <Flex align='center'>
            <img style={{widows:70, height:70, marginRight:5}} src='clouds.png'></img>
            <Title style={{color:"#905596"}} level={3}>Please enter your text</Title>
          </Flex>
          
          <TextArea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text" style={{width:300, height:"20vh", margin:30}}/>
          <Button onClick={processText} type="primary" style={{backgroundColor:"#905596"}}>send</Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
