import React, { useEffect, useState } from "react";
import "./index.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      width: window.innerWidth,
    };
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = `${this.state.firstname} ${this.state.lastname}`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  handleFirstnameChange(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  handleLastnameChange(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  resetForm() {
    this.setState((state) => {
      return {
        ...state,
        firstname: "",
        lastname: "",
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state));
    this.resetForm();
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <div className="field-container">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            value={this.state.firstname}
            onChange={this.handleFirstnameChange}
          />
        </div>
        <div className="field-container">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={this.state.lastname}
            onChange={this.handleLastnameChange}
          />
        </div>

        <div className="field-container">
          <span>Window Width: {this.state.width}</span>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

// function SignupForm() {
//   const [firstname, setFisrtname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [width, setWidth] = useState(window.innerWidth);

//   // useEffect(() => {
//   //   document.title = `${firstname} ${lastname}`;
//   //   return () => {
//   //     cleanup
//   //   }
//   // }, [input])

//   // useEffect(() => {
//   //   window.addEventListener("resize", handleResize);
//   //   return () => {
//   //     window.removeEventListener("resize", handleResize);
//   //   }
//   // }, [])

//   // function handleResize() {
//   //   setWidth(width);
//   // }

//   // function resetForm() {
//   //     return {
//   //       setFisrtname("");
//   //       setLastname("");
//   //     };
//   // }

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(JSON.stringify([firstname, lastname, width]));
//     resetForm();
//   }

//   return (
//     <form className="form-container" onSubmit={handleSubmit}>
//       <div className="field-container">
//         <label htmlFor="firstname">First Name</label>
//         <input
//           id="firstname"
//           name="firstname"
//           type="text"
//           value={this.state.firstname}
//           onChange={this.handleFirstnameChange}
//         />
//       </div>
//       <div className="field-container">
//         <label htmlFor="lastname">Last Name</label>
//         <input
//           id="lastname"
//           name="lastname"
//           type="text"
//           value={this.state.lastname}
//           onChange={this.handleLastnameChange}
//         />
//       </div>

//       <div className="field-container">
//         <span>Window Width: {this.state.width}</span>
//       </div>
//       <button className="button" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

export default SignupForm;
