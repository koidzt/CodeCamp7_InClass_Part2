import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TableRow from './componants/TableRow';

class App extends Component {
  state = {
    isShow: true,
    persons: [
      {
        "name": "Colby Gallagher",
        "email": "elit.pellentesque.a@pharetrafeliseget.co.uk",
        "age": 39
      },
      {
        "name": "Norman Britt",
        "email": "fringilla@tempor.ca",
        "age": 68
      },
      {
        "name": "Isaac Jacobs",
        "email": "eros.Proin@ametfaucibus.org",
        "age": 25
      },
    ]
  };
  setName = (name) => {
    this.setState({ announcement: name })
  }

  render() {
    const personList = this.state.persons;
    const isShow = this.state.isShow; //เหมือนกับ const {isShow} = this.state;
    return (
      <div className="App" style={{}}>
        <input
          value={this.state.announcement}
          onChange={(e) => this.setState({ announcement: e.target.value })} />
        <h1>{this.state.announcement}</h1>
        <table style={{ margin: "auto", width: "90%", fontSize: "24px" }}>
          <thead>
            <tr style={{ background: "Orange" }}>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Announcement</th>
            </tr>
          </thead>
          <tbody>
            {isShow && personList
              // .filter(person => person.name[0] === "A")
              .map((person, idx) => (
                <TableRow
                  key={idx}
                  id={idx}
                  name={person.name}
                  email={person.email}
                  age={person.age}
                  bgColor="MistyRose"
                  setName={this.setName}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
