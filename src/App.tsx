import React from 'react';
import { Button, ConfigProvider } from 'antd';
import Navbar from './components/utils/Navbar';
import { Grid } from 'antd';

const {useBreakpoint} = Grid;

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
    </ConfigProvider>
  )
};

export default App;