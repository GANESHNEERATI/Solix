import React from "react";
import "./MigrationFilter.css";

function MigrationFilter() {
  return (
    <div className="filter">
      <div className="Filter_header">
        <p>Migration Details</p>
      </div>
      <div className="filter_info">
        <div className="filter_info_item">
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div className="filter_info_item">
          <label>Number of Threads</label>
          <select name="cars" id="cars">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="filter_info_item">
          <label>Run Meta Data check Duplicate*</label>
        </div>
        <div className="filter_info_item">
          <label>File Compresion*</label>
        </div>
        <div className="filter_info_item">
          <label>File Encryption</label>
        </div>
        <div className="filter_info_item">
          <label>Vesrion Enable</label>
        </div>
        <div className="filter_info_item">
          <label>File Validation</label>
        </div>
        <div className="filter_info_item">
          <label>Purge files</label>
        </div>
      </div>
    </div>
  );
}

export default MigrationFilter;
