import "./AddPersonMainAndRetreiveMain.css";
import { useState, useEffect } from "react";
const AddPersonMain = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [singleDetails, setSingleDetails] = useState("");
  const [details, setDetails] = useState([]);
  
  const [hide, setHide] = useState("");

  //singel data enter

  useEffect(() => {
    setSingleDetails({
      Name: `${name}`,
      DateOfBirth: `${dob}`,
      AadharNumber: `${aadharNumber}`,
      MobileNumber: `${mobileNumber}`,
      Age: `${age}`,
    });
  }, [name, dob, aadharNumber, mobileNumber, age]);

  useEffect(() => {
    if (details.length === 0) {
      return;
    } else {
      localStorage.setItem("data", JSON.stringify(details));
    }
  }, [details]);

  useEffect(() => {
    if (dob === "") {
    } else {
      let dod = new Date(dob);
      let month_diff = Date.now() - dod.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let Age = Math.abs(year - 1970);
      setAge(Age);
    }
  }, [dob]);

  const removeAfterSave = (e) => {
    console.log(e);
    let arr = [];
    details.forEach((ele) => {
      if (ele.AadharNumber !== e.AadharNumber) {
        arr.push(ele);
      }
    });
    setDetails(arr);
  };

  // Add butten click then Add new person
  const add = () => {
    if (
      name === "" ||
      dob === "" ||
      aadharNumber === "" ||
      mobileNumber === ""
    ) {
      alert("Please Fill the all Information");
    } else if (aadharNumber.length !== 12) {
      alert("Aadhar number is Incorrect");
    } else if (mobileNumber.length !== 10) {
      alert("Mobile number Incorrect");
    } else {
      console.log(details,singleDetails);
      
      setDetails([...details, singleDetails]);
      setHide("none");
    }
  };

  const remove = () => {
    setName("");
    setDob("");
    setAadharNumber("");
    setMobileNumber("");
    setAge("");
  };

  const display = () => {
    setHide("");
    setName("");
    setDob("");
    setAadharNumber("");
    setMobileNumber("");
    setAge("");
    // console.log("display");
  };

  return (
    <div className="main_container">
      {/* <div> */}
      <div className="section_container">
        <span className="add_new_per_span">Add New Person</span>
        <div className="overflow">
          <div className="table_container">
            <table rules="all">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of birth</th>
                  <th>Aadhar Number</th>
                  <th>Mobile Number</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {details.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>
                        <input
                          defaultValue={item.name}
                          type={"text"}
                          // placeholder={"Full Name"}
                          required
                        />
                      </td>
                      <td>
                        <input
                          defaultvalue={item.dob}
                          type={"date"}
                          // placeholder={"DOB"}
                          required
                        />
                      </td>
                      <td>
                        <input
                          defaultvalue={item.aadharNumber}
                          type={"number"}
                          // placeholder={"Aadhar Number"}
                          required
                        />
                      </td>
                      <td>
                        <input
                          defaultvalue={item.mobileNumber}
                          type={"number"}
                          // placeholder={"Mobile Number"}
                          required
                        />
                      </td>
                      <td>{item.age}</td>
                      <td>
                        <button className="save_btn action">Save</button>
                        <button
                          className="delete_btn action"
                          onClick={() => removeAfterSave(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr style={{ display: hide }}>
                  <td>
                    <input
                      value={name}
                      placeholder={"Full Name"}
                      type={"text"}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={dob}
                      type={"date"}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={aadharNumber}
                      type={"number"}
                      onChange={(e) => setAadharNumber(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={mobileNumber}
                      type={"number"}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </td>
                  <td>{age}</td>
                  <td>
                    <button className="save_btn action" onClick={() => add()}>
                      Save
                    </button>
                    <button
                      className="delete_btn action"
                      onClick={() => remove()}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="add_btn" onClick={() => display()}>
              Add
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default AddPersonMain;
