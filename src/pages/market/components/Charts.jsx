import { Box, Flex, Text } from '@chakra-ui/react'
import React, { PureComponent } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const barChartdata = [
    {
      name: "jan",
      rc: 4000,
      nc: 40,
    },
    {
      name: "feb",
      rc: 3000,
      nc: 20,
    },
    {
      name: "mar",
      rc: 2000,
      nc: 70,
    },
    {
      name: "apr",
      rc: 2780,
      nc: 65,
    },
    {
      name: "may",
      rc: 1890,
      nc: 120,
    },
    {
      name: "jun",
      rc: 2390,
      nc: 105,
    },
    {
      name: "jul",
      rc: 3490,
      nc: 130,
    },
    {
        name: "aug",
        rc: 3470,
        nc: 150,
      },
      {
        name: "sep",
        rc: 3490,
        nc: 130,
      },
      {
        name: "oct",
        rc: 4490,
        nc: 140,
      },
      {
        name: "nov",
        rc: 3690,
        nc: 220,
      },
      {
        name: "dec",
        rc: 4490,
        nc: 200,
      },
  ];


const Charts = () => {
  return (
    // <Box color={"#fff"}
    
    // <ResponsiveContainer width={"100%"} height={"70%"} style={{background:"#2C2C2C", borderRadius:"20px"}} >
    <Box w={"100%"} h={"100%"} bg={"#2c2c2c"} borderRadius={"20px"}>
        
         <BarChart
                width={900}
                height={500}
                data={barChartdata}
                barSize={20}
                barCategoryGap={20}
                // barGap={40}
                margin={{
                  top: 50,
                  right: 30,
                  left: 10,
                  bottom: 10,
                }}
              >
                {/* <CartesianGrid strokeDasharray="1 2" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                {/* <Bar
                  dataKey="rc"
                  fill="#2196F3"
                  activeBar={<Rectangle fill="#2196F3" stroke="#2196F3" />}
                /> */}
                <Bar
                  dataKey="nc"
                  fill="#00C853"
                  activeBar={<Rectangle fill="#00C853" stroke="#00C853" />}
                />
              </BarChart>
    </Box>
             
            // </ResponsiveContainer>
//    </Box>
  )
}

export default Charts