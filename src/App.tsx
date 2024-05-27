import './App.css';
import { Input, Col, Row, Flex, Button  } from 'antd';

const { TextArea } = Input;
function App() {
  return (
    <div className="App">
      <Flex justify='center' align='center' style={{backgroundColor:"green", minHeight:"100vh"}}>
        <Flex vertical justify="space-around" align='center' style={{width:500, height:500, backgroundColor:"blue" }}>
          <TextArea style={{width:300}}/>
          <Button>Default Button</Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
