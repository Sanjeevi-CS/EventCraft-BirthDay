import React, { Component } from 'react';
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Navbar from './navbar';
import Footer from './footer';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
               
          series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
          options: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          
          },
          
        };
      
      }
      
      
      render() {
        
        return (
            <div>
      <>
        <Navbar />
        <div className="">
        

        <div className="flex lg:flex-row sm:flex-col flex-col w-full">
          <div className="lg:w-[calc(40%-4px)] sm:w-full h-[506px] bg-gray-200">
            <div className="text-[22px] font-bold mt-[40px] dark:text-white ml-[50px]">
              Community Stats
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px] dark: text-white">
              <span className="text-text_2  text-black  dark:text-white">Events finished:</span> 679
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px]  text-white">
              <span className="text-text_2  text-black  dark:text-white">Upcoming events:</span> 908
            </div>
            <div className="mt-[18px] text-[14px] ml-[50px] mb-[40px]  text-white">
              <span className="text-text_2  text-black dark:text-white">Total addon:</span> 789
            </div>
          </div>
          <div className="lg:w-full sm:w-full sm: h-[506px] h-[506px] bg-gray-200 relative">
            <div className="flex sm:flex-row flex-col ml-[30px]">
              <div className="flex flex-col relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
                <div id="chart">
                  <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height={450}
                    width={450}
                  />
                </div>
              </div>
              <div className="flex flex-col relative mr-[20px] mt-[40px] w-[200px] sm:w-[280px]  sm:ml-0">
                <div className="text-black mt-1 ml-[10.5rem]">
                  <div id="chart">
                    <ReactApexChart
                      options={this.state.options}
                      series={this.state.series}
                      type="line"
                      height={450}
                      width={450}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>

      <></>
      <Footer/>
    </div>
        );
    }
}

export default Dashboard;
