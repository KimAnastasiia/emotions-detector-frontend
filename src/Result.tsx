import './App.css';
import { Input, Flex, Button, Typography, Slider } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate   } from "react-router-dom";

function Result() {

  interface Emotions {
    sadness: number;
    joy: number;
    love: number;
    anger: number;
    fear: number;
    surprise: number;
  }
  const navigate  = useNavigate();
  const { Title } = Typography;
  const { TextArea } = Input;

  const [text, setText] = useState<string>("im forever taking some time out to have a lie down because i feel weird");
  const location = useLocation();
  const emotions: Emotions = location.state || {
    sadness: 0,
    joy: 0,
    love: 0,
    anger: 0,
    fear: 0,
    surprise: 0,
  };
  // Convert the emotions object to an array of [key, value] pairs, and sort by value
  const sortedEmotions = Object.entries(emotions)
    .sort(([, valueA], [, valueB]) => valueB - valueA); // Sort in descending order


  return (
      <Flex justify='center' align='center' style={{ minHeight: "100vh", backgroundColor: "#D3EBE5" }}>
        <Flex vertical justify="center" align='center' style={{ width: 500, height: 500, borderRadius: 20, backgroundColor: "#E8D2EA", border: "4px solid #652B6B", }}>
          <Flex align='center'>
            <img style={{ widows: 70, height: 70, marginRight: 5 }} src='clouds.png'></img>
            <Title style={{ color: "#905596" }} level={3}>Your result</Title>
          </Flex>

          <TextArea value={text} placeholder="Your text" style={{ width: 300, height: "20vh", margin: 30 }} />
          
           {sortedEmotions.map(([emotion, value], index) => (
          <Flex key={index} justify='center' style={{ width: "100%" }}>
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={value}
              style={{ width: "50%" }}
            />
            <img style={{ width: 30, height: 30, marginRight: 5 }} src={`${emotion}.png`} alt={emotion} />
          
          </Flex>
        ))}
        <Button onClick={()=>{navigate("/")}} type="primary" style={{ backgroundColor: "#905596", marginBottom:30 }}>Try again</Button>
        </Flex>
      </Flex>
  );
}

export default Result;
