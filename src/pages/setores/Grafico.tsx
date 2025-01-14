import { Box, Tab, Tabs } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import React, { useState } from 'react';




const data2024 = [10, 12, 15, 20, 25, 18, 22, 24, 30, 28, 35, 40];
const data2025 = [15, 18, 12, 25, 30, 20, 28, 26, 35, 32, 40, 45];

const Grafico: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

    return (
        <div>
             <Box sx={{ width: '50%' }}>
            <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="Year Tabs"
        >
          <Tab label="Ano 2024" />
          <Tab label="Ano 2025" />
        </Tabs>
  
        {/* Tab Panels */}
        <Box sx={{ mt: 2 }}>
          {selectedTab === 0 && (
            <BarChart
              xAxis={[{ 
                scaleType: 'band', 
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
              }]}
              series={[{ data: data2024 }]}
              width={500}
              height={300}
              barLabel="value"
              yAxis={[{ label: 'Qtd. profissionais ativos DCM ' }]}
            />
          )}
          {selectedTab === 1 && (
            <BarChart
              xAxis={[{ 
                scaleType: 'band', 
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
              }]}
              series={[{ data: data2025 }]}
              width={500}
              height={300}
              barLabel="value"
              yAxis={[{ label: 'Qtd. profissionais ativos DCM ' }]}
            />
          )}
        </Box>
      </Box>




        </div>

    )}
    export default Grafico;