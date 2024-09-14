import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import Navbar from './components/utils/Navbar';
import { Grid } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';

const {useBreakpoint} = Grid;
const { Content } = Layout;

const App: React.FC = () => {

  const screens = useBreakpoint();

  const isMobile = screens.xs; 

  return (
  
    <ConfigProvider 
      theme={
        {
          token: {
            colorPrimary: 'rgb(0, 40, 104)'
          }
        }
      }
    >
      <Navbar screens={screens}/>
      <Content>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Content>
    </ConfigProvider>
  )
};

export default App;