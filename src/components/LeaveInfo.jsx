import React from 'react'
import '../styling/leaveInfo.css' 
import { useLocation } from 'react-router-dom';


const LeaveInfo = () => {
    const location = useLocation();
    const leave = location.state;

  return (

   
    <div className="leaveInfo">
            <h2 className="leave-title">Leave Information</h2>
            <div className="leave-container">
                <div className="leaveID">
                    ID: {leave.id}
                </div>
                <div className="type-field">
                    Leave Type: {leave.leaveType}
                </div>
                <div className="date-field">
                    Start Date: {leave.startDate}
                </div>
                <div className="date-field">
                    End Date: {leave.endDate}
                </div>
                <div className="reason-field">
                    Reason: {leave.reason}
                </div>
                <div className="files-field">
                    Supplementary Files: {leave.files}
                </div>
                
                <div className="saving-control">
                    <button>Back</button>
                    <button>Update</button>
                </div>
            </div>
        </div>
  )
}

export default LeaveInfo