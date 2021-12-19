import React, { Component } from 'react';
import './emp.css'

class Employee extends Component {
    render() {
        var empDetails = [
            { name:"Charlie", job:"Janitor"},
            { name:"Mac", job:"Bouncer"},
            {name:"Dee", job:"Aspiring actress"},
            { name:"Dennis", job:"Bartender"},
        
          ]
        return (
                <div className="outline">
                    <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Job</th>
                    </tr>
                  </thead>
                  
                  <tbody>
              
                  {
                    empDetails.map(emp=>(
                      <tr>
                        <td>{emp.name}</td>
                        <td>{emp.job}</td>
                     
                      </tr>
                    
                    ))
                  }
                  </tbody>
                </table>
                </div>
              );
        
    }
}

export default Employee;