
import React from "react";
import GitHubCalendar from 'react-github-calendar';
const Statistics = () => {


  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div
      style={{ height: "auto" }}
      name="statistics"
      className=" bg-sky-900 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            style={{ textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}

            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Statistics
          </p>
          <p className="py-6">These are some of statistics graphs to determine my contribution and knowledge in this digital world.</p>
        </div>
        {/* git Calender */}
        <div className="flex justify-center">
          <GitHubCalendar 
            username="satyam0337"
            transformData={selectLastHalfYear}
           
          />
        </div>
        <div style={{marginTop:"60px"}}>
          <img  alt="satyam's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=satyam0337&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
        </div>

      </div>
    </div>
  );
};

export default Statistics;