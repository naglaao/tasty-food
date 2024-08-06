import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let isValid = true;
    let validationErrors = {};

    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "email Is Required ";
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

  
    axios.get("http://localhost:8000/users")
      .then((res) => {
        res.data.map(user=>{
          if (user.email===formData.email) {
            if (user.password===formData.password) {
              toast.success("Registered successfully ");
              navigate("/");
            }else{
              isValid=false;
              validationErrors.password="Worng Password"
            }
          }else if(formData.email !==""){
            isValid=false;
            validationErrors.email="Worng Email";
          }
      })
      setErrors(validationErrors);
      setValid(isValid);
      })
      .catch((error) => console.log(error));
    
  };

  return (
    <section className="h-100 bgBlack">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRradius: " .25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>

                <form onSubmit={handelSubmit} className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-center"> LogIn</h3>
                   
                    <div className="row">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0">
                           {valid ? (
                            <></>
                          ) : (
                            <span className="text-danger position-relative">
                          {errors.email}
                            </span>
                          )}
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
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
                              <span className="text-danger position-relative">
                                {errors.password}
                              </span>
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
                    </div>

                    <div className="d-flex justify-content-center pt-3">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-warning btn-lg flex-fill  ms-2"
                      >
                        Login
                      </button>
                    </div>
                    <div className=" border-1 border-black ">
                      <p className="text-center mt-3 text-secondary ">
                        Don't have account,Create
                        <Link to={"/signup"}> Signup </Link>
                      </p>
                    </div>
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

export default Login;
