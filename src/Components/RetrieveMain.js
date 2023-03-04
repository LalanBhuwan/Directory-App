import React, { useState } from "react";

const RetrieveMain = () => {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");

  let str = localStorage.getItem("data");
  let data = JSON.parse(str);

  const check = () => {
    data.forEach((e) => {
      if (e.AadharNumber === input) {
        setResult(e);
      }
    });
  };

  //     const data = [{
  //         'Name': "lalan bhuwan",
  //         'DOB': "2000-03-31",
  //         'AadharNo': 12457896311254,
  //         'MobileNumber': 9584214582,
  //         'Age': 22
  //     }
  // ]

  return (
    <div className="main_container">
      <div className="section_container">
        <span className="retrieveTag_span">Retrieve Information</span>
        <div className="search_info">
          <input
            type={"text, number"}
            placeholder="Search here!"
            required
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => check()}>Find</button>
        </div>
        <div className="retrieve_Info_container">
          {result === "" ? (
            <h1>NO DATA</h1>
          ) : (
            <div>
              <h3 className="h3">
                Name: <span>{result.Name} </span>{" "}
              </h3>
              <h3 className="h3">
                DOB: <span>{result.DateOfBirth} </span>{" "}
              </h3>
              <h3 className="h3">
                Aadhar: <span>{result.AadharNumber} </span>{" "}
              </h3>
              <h3 className="h3">
                Mobile No: <span>{result.MobileNumber} </span>{" "}
              </h3>
              <h3 className="h3">
                Age: <span>{result.Age} </span>{" "}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RetrieveMain;
