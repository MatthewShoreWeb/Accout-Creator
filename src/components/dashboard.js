import React, { Component } from 'react';
import DashboardNumberWidget from './dashboardComponents/dashboardNumberWidget';
import JobWidget from './dashboardComponents/jobWidget'
import { Chart } from 'react-charts'

const chartStyle = {
    width: '30%',
    height: '80%',
    margin: 'auto',
    backgroundColor: 'white',
    borderRadius: '5px'
  };

const data = [
    {
      label: 'Series 1',
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: 'Series 2',
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
  ];

const axes = [
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ];
  

class Dashboard extends Component {
    
    render () {
        return (
            <div id='dashboard'>

                <JobWidget />

                <div id='dashboardNumberContainer'>
                    <DashboardNumberWidget />
                    <DashboardNumberWidget />
                    <DashboardNumberWidget />
                    <DashboardNumberWidget />
                </div>

                <div id='chartContainer'>
                    <div style={chartStyle}>
                        <Chart class='chart' data={data} axes={axes} />
                    </div>
                    <div style={chartStyle}>
                        <Chart class='chart' data={data} axes={axes} series={{
                        type: 'area',
                        showPoints: false
                    }}/>
                    </div>
                    <div style={chartStyle}>
                        <Chart class='chart' data={data} axes={axes} series={{
                        type: 'bar',
                        showPoints: false
                    }}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Dashboard;