import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let isValid = true;
    let validationErrors = {};
    if (formData.fname === "" || formData.fname === null) {
      isValid = false;
      validationErrors.fname = "First Name Is Required ";
    }
    if (formData.lname === "" || formData.lname === null) {
      isValid = false;
      validationErrors.lname = "Last Name Is Required ";
    }
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "Email Is Required ";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Email Is Not Valid";
    }
    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Password Is Required ";
    } else if (formData.password.length < 8) {
      isValid = false;
      validationErrors.password = "Password Lenght Most be at least 8 Char";
    }
    if (formData.confirmpassword === "" || formData.confirmpassword === null) {
      isValid = false;
      validationErrors.confirmpassword = "Confirm Password ";
    } else if (formData.confirmpassword !== formData.password) {
      isValid = false;
      validationErrors.confirmpassword = "confirm Passeord is not match";
    }
    setErrors(validationErrors);
    setValid(isValid);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8000/users", formData)
        .then((res) => {
          toast.success("Registered successfully ");
          navigate("/login");
        })
        .catch((error) => console.log(error));
    }
  };
  const handelRest = () => setFormData("");

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
                    alt={"Sample photo"}
                    className="img-fluid h-100 object-fit-fill"
                    style={{
                      borderTopLeftRradius: " .25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>

                <form onSubmit={handelSubmit} className="col-xl-6">
                  <div className="card-body text-black">
                    <h3 class="mb-5 text-center"> Create Your Account</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          {valid ? (
                            <></>
                          ) : (
                            <span className="text-danger">{errors.fname}</span>
                          )}
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            class="form-control form-control-lg"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fname: e.target.value,
                              })
                            }
                          />
                          <label className="form-label" htmlFor="fname">
                            First Name*
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          {valid ? (
                            <></>
                          ) : (
                            <span className="text-danger">{errors.lname}</span>
                          )}
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            className="form-control form-control-lg"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lname: e.target.value,
                              })
                            }
                          />
                          <label className="form-label" htmlFor="lname">
                            Last Name*
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div
                        data-mdb-input-init
                        className="form-outline flex-fill mb-0"
                      >
                        {valid ? (
                          <></>
                        ) : (
                          <span className="text-danger">{errors.email}</span>
                        )}
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        <label className="form-label" htmlFor="email">
                          Your Email*
                        </label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div
                        data-mdb-input-init
                        className="form-outline flex-fill mb-0"
                      >
                        {valid ? (
                          <></>
                        ) : (
                          <span className="text-danger">{errors.password}</span>
                        )}
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                        <label className="form-label" htmlFor="password">
                          Password*
                        </label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div
                        data-mdb-input-init
                        className="form-outline flex-fill mb-0"
                      >
                        {valid ? (
                          <></>
                        ) : (
                          <span className="text-danger">
                            {errors.confirmpassword}
                          </span>
                        )}
                        <input
                          type="password"
                          id="confirmpassword"
                          name="confirmpassword"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              confirmpassword: e.target.value,
                            })
                          }
                        />
                        <label className="form-label" htmlFor="confirmpassword">
                          Repeat your password*
                        </label>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="reset"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-light btn-lg"
                        onClick={handelRest}
                      >
                        Reset all
                      </button>
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-warning btn-lg ms-2"
                      >
                        Submit
                      </button>
                    </div>
                    <p className="text-center mt-3 text-secondary">
                      If you have account,Please
                      <Link to={"/login"}> Login Now</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
