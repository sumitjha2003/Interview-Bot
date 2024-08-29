import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="p-10">
    <InterviewList/>
      <h2 className="text-gray-500 text-center">Create and Start Your AI Mockup Interview</h2>
      <div className="flex justify-center my-5 text-center">
          <AddNewInterview />
      </div>
      
    </div>
  );
};

export default Dashboard;
