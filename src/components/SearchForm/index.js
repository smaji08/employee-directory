import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Filter by Name.."
          id="search"
        />
        <br />
      </div>
    </form>
  );
}

export default SearchForm;
