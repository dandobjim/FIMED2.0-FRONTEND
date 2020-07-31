import React, { useState } from "react";
import { CONSTANTS } from "../../shared/Constants";
import Cookies from "js-cookie";
import cookies from "next-cookies";

const DEFAULT_SELECTION = "String";

const Form = () => {
  const cookie = Cookies.get("fimedtk");

  const [rows, setRows] = useState([]);

  const incrRow = () => {
    setRows([...rows, { name: "", rtype: DEFAULT_SELECTION }]);
  };

  const handleChange = (e) => {
    const _rows = [...rows];
    _rows[e.target.dataset.id][e.target.name] = e.target.value;

    setRows(_rows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${CONSTANTS.API.url}/api/v2/form/create`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify({ rows: rows }),
    }).then((res) => {
      console.log(res);
      alert("form created satisfactory");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {rows.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-6 col-md">
                <label className="control-label">{`Name #${
                  index + 1
                }: `}</label>
                <input
                  className="form-control"
                  data-id={index}
                  name="name"
                  type="text"
                />

                <div className="form-group">
                  <label className="control-label">Type:</label>
                  <select
                    className="form-control"
                    data-id={index}
                    name="rtype"
                    defaultValue="String"
                  >
                    <option value="String">String</option>
                    <option value="Integer">Number</option>
                    <option value="Date">Date</option>
                    <option value="Boolean">Boolean</option>
                    <option value="Textarea">textarea</option>
                  </select>
                  <hr />
                </div>
              </div>
            </div>
          );
        })}
        <input
          type="submit"
          value="Submit"
          className="btn-sm btn-primary button-field"
        />
      </form>

      <button className="btn-sm btn-primary button-field" onClick={incrRow}>
        Add row
      </button>
    </>
  );
};

export default Form;
