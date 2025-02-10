import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // console.log(authData.employees);

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      // console.log("This is admin")
      // setUser("admin");
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      // console.log(user);
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
      // console.log("This is user")
      // console.log(user);
    } else {
      alert("Invalid Credentials");
    }
  };

  // const data = useContext(AuthContext)
  // console.log(data)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard  data={loggedInUserData}/> : null)}
      {/* <Login/> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
