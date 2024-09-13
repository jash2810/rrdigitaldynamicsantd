import React from 'react';
import { Button, ConfigProvider } from 'antd';

const App: React.FC = () => (
  <ConfigProvider 
    theme={
      {
        token: {
          colorPrimary: 'rgb(0, 40, 104)'
        }
      }
    }
  >
    <Button type="primary">Button</Button>
  </ConfigProvider>
);

export default App;