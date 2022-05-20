import React, { useState } from "react";

const LoginForm = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const [allentry , setAllEntry] = useState([])

     const sumbitForm = () => {
         if(email && password) {
            const newEntry = { email , password}
            setAllEntry([...allentry , newEntry])
            setEmail("")
            setPassword("");
         }else {
             alert("Plz Fill the data");
         }
      
     }

  return (
    <>
      <h1> Basic Form </h1>
      <form action=""/>
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" name="email" autoComplete="off" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      <br />
      <label htmlFor="password">Last name:</label>
      <br />
      <input type="password" name="password" autoComplete="off" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      <br />
      <br />
      <input type="submit" value="Login" onClick={sumbitForm} />
      <form />

       <div>
 
           {allentry.map((curele) => {
              return(
                  <>
                  <div>
                   <p>{curele.email}</p>
                   <p>{curele.password}</p>
                   </div>
                  </>
              )
           })}

       </div>


    </>


    
  );
};

export default LoginForm;
