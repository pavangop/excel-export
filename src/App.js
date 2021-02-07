import React from 'react';

import Navbar from './UI/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
    <p>This para is available only in the dev branch</p>

{/* Section to add New Items */}

      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 ml-auto ">
              <div className="text-right pt-2 pb-2">
                <div className="btn bg-success text-white" >Add New Requirement</div>
              </div>
              <div className="text-right pt-2 pb-2">
                <div className="btn bg-success text-white" >Add New WLM Criteria</div>
              </div>
            </div>
          </div>
        </div>

      </section>

{/* Section for download and submit options */}
<section className="pt-3">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-12">
        <div className="btn bg-primary text-white">Requirement Name</div>
      </div>
      <div className="col-lg-3 col-md-3 col-12">
        <div className="btn bg-primary text-white">WLM Short Name</div>
      </div>
      <div className="col-lg-3 col-md-3 col-12">
        <div className="btn bg-success  text-white">Submit</div>
      </div>
    </div>
  </div>
</section>

{/* Section to display the list */}
<section className="pt-3">
  <div className="container">
    <div>
      List of All Requirements
    </div>
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>value</td>
          <td>value</td>
          <td>value</td>
          <td>value</td>
        </tr>
        <tr>
          <td>value</td>
          <td>value</td>
          <td>value</td>
          <td>value</td>
          <td>value</td>
        </tr>
        <tr>
          <td>value</td>
          <td>value</td>
          <td>value</td>
          <td>value</td>
          <td>value</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


{/* section for the export */}

<section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 ml-auto ">
              <div className="text-right pt-2 pb-2">
                <div className="btn bg-success  text-white" >Export to Excel</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
