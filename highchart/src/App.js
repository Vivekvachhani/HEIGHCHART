import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  chart: {
    type: 'column'
  },

  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: 'Number of fruits'
    }
  },
  plotOptions: {
    column: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'John',
    data: [Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 201) - 100,Math.floor(Math.random() * 201) - 100,Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 201) - 100],
    stack: 'male'
  }, {
    name: 'Joe',
    data: [Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 31) + 50],
    stack: 'male'
  }, {
    name: 'Jane',
    data: [Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 201) - 100,Math.floor(Math.random() * 201) - 100,Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 201) - 100],
    stack: 'female'
  }, {
    name: 'Janet',
    data:[Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 10) + 1,Math.floor(Math.random() * 31) + 50],
    stack: 'female'
  }]
}

const App = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>
export default App;