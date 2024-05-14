import logo from './logo.svg';
import './App.css';

function Form() {
  return (
    <div className="App">
      <div className="h3">
        <h3>Register here</h3>
      </div>
      <div className="h1">
        <h1>USER REGISTRATION</h1>
      </div>
      <div className="p">
        <p>Fields marked <span>*</span> are requierd</p>
      </div>
      <form>
        <div className="input">
          <div className="col1">
            <label htmlFor="1">Email <span>*</span></label>
          </div>
          <div className="col2">
            <input id='1' type="email" required />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="2">Password <span>*</span></label>
          </div>
          <div className="col2">
            <input id='2' type="password" required />
          </div>
        </div>
        <div className="input">


          <div className="col1">
            <label htmlFor="3">Retype Password <span>*</span></label>
          </div>
          <div className="col2">
            <input id='3' type="password" required />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="4">First Name <span>*</span></label>
          </div>
          <div className="col2">
            <input id='4' type="text" required />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="5">Last Name <span>*</span></label>
          </div>
          <div className="col2">
            <input id='5' type="text" required />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="6">Phone Number <span>*</span></label>
          </div>
          <div className="col2">
            <input id='6' type="number" required />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="7">Address <span>*</span></label>
          </div>
          <div className="col2">
            <input id='7' type="text" required />
          </div>
        </div>
        <div className="input">
          <div className="col1"></div>
          <div className="col2">
            <input type="text" />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="8">Town</label>
          </div>
          <div className="col2">
            <input id='8' type="text" />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="9">Region  <span>*</span></label>
          </div>
          <div className="col2">
            <input id='9' type="text" required />
          </div>
        </div>
        <div className="input">
          <div className="col1">
            <label htmlFor="10">Postcode  <span>*</span></label>
          </div>
          <div className="col2">
            <input id='10' type="number" required />
          </div>
        </div>

        <div className="input">
          <div className="col1">
            <label htmlFor="12">Country  <span>*</span></label>
          </div>
          <div className="col2">
            <input id='12' type="text" required />
          </div>
        </div>
        <input type="submit" />

      </form>

    </div>
  );
}

export default Form;
