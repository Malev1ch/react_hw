import './App.css';
import {useState} from 'react'

  const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    setIsRegistered(true);
  };

  return (
    <div className="register__form">
      <div className="modal_form_register">
        <h1>Registration</h1>
        <div className='registere_success'>
          {isRegistered && <p className='registered'>Success! Thank you for registering.</p>}
        </div>
        <form onSubmit={submitForm}>
          <div className='inpute_forms'>
            <input type="text" id="firstName" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className='inpute_forms'>
            <input type="text" id="lastName" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className='inpute_forms'>
            <input type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;