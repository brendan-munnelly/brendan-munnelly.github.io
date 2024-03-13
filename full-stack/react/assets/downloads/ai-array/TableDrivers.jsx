import F1Drivers from '../data/F1Drivers'; 

function TableDrivers() {
  return (
    <div className="main-content">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Country</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              {/* Add the data from the F1Drivers array in td cells */}  
             <td></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableDrivers;
