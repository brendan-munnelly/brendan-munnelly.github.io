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
           {/* Begin .map() loop */}
            <tr key={index}>
              {/* Display the array data below in <td>...</td> cells 
              that match the <th>...</th> cells in the table <thead> */} 
              <td>  </td>
            </tr>
           {/* End .map() loop */}
        </tbody>
      </table>
    </div>
  );
}

export default TableDrivers;



