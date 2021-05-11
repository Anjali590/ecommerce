import React ,{useState} from 'react';


const Register = () => {
  
  
  const [email,setEmail] = useState("");

  const handleSubmit =() =>{
    //

  };

  const registerform = () =>( <form on onSubmit={handleSubmit}>
    <input type="email" className="form-control" value={email} on onChange={e=>setEmail(e.target.value)}/>
    <button type="submit" className="btn btn-raised">Register</button>

  </form>
  );
  return (
    <div className="container p-5">
      <div className="row">

        <div className="col-md-6 offset-md-3">
          <h3>Register</h3>
          {registerform()}
        </div>

      </div>
    </div>
  );
};

export default Register;