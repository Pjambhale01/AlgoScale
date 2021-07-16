
// export default Staticstic
import React, { Component } from "react";
// import Chart from "chart.js";
import {Chart} from 'chart.js';
// import { Chart, registerables } from 'chart.js';
// import Chart from 'chart.js/auto';
// import {Chart} from 'chart.js/auto';
import { Button } from "react-bootstrap";
import axios from "axios";

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startdate: null,
      enddate: null,
      formsid: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickhandle = this.clickhandle.bind(this);
  }
  chartRef = React.createRef();
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    
  }

  
  clickhandle(e) {
    e.preventDefault();
    const Enq = {
        startdate: this.state.startdate,
        enddate: this.state.enddate,
    };
    axios
      .post("http://127.0.0.1:8000/algo/filterd/", Enq)
      .then((res) => {
        console.log(res);
        this.setState({
          ...this.state.formsid,
          formsid: res.data,
        });
        var json_data = this.state.formsid;
        // console.log(json_data,"response");
        var result = [];
        var label_temp = [];
        var count_temp = [];
         
        for (var i in json_data) {
          result.push([i, json_data[i]]);
        }

        for (var a = 0; a < result.length; a++) {
          label_temp[a] = result[a][0];
        }
        for (var j = 0; j < result.length; j++) {
          count_temp[j] = result[j][1];
        }

        console.log(result,"result");
        console.log(label_temp,"label_temp");
        console.log(count_temp,"count_temp");

        const myChartRef = this.chartRef.current.getContext("2d");
      
        new Chart(myChartRef, {
          type: "line",
          data: {
            labels: label_temp,
            datasets: [
              {
                label: "Forms",
                data: count_temp,
                borderColor: "#98B9AB",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: {
                top: 10,
                left: 25,
                right: 25,
                bottom: 25,
              },
            },
          },
        });
      })
      .catch(console.log);
  }
  
  render() {
      
    return (
      <>
      {/* {console.log(this.state.startdate,'shdvj')}
      {console.log(this.state.enddate,'shdvj')}  */}
      {/* {console.log(this.state.formsid,'response')} */}
      
        <div>
          <from>
            <div>
              <label for="min">startdate</label>
              <input
                name="startdate"
                id="min"
                value={this.state.startdate}
                type="date"
                onChange={this.handleChange}
              />
              <label for="max">End Date</label>
              <input
                onChange={this.handleChange}
                value={this.state.enddate}
                name="enddate"
                id="max"
                type="date"
              />
              <Button onClick={this.clickhandle}>Submit</Button>
            </div>
          </from>
          <canvas id="myChart" width="400" height="400" ref={this.chartRef} />
        </div>
      </>
    );
  }
}