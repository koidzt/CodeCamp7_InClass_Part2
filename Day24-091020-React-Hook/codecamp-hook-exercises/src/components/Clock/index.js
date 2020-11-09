import React, { useState, useEffect } from "react";

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//     this.tick = this.tick.bind(this);
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => {
//       this.tick();
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState(() => {
//       return {
//         date: new Date(),
//       };
//     });
//   }

//   render() {
//     return (
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "60px",
//           color: "var(--main-branding-color-500)",
//         }}
//       >
//         {this.state.date.toLocaleTimeString()}
//       </h1>
//     );
//   }
// }

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      tick()
    }, 1000);
    return () => {
      clearInterval(timerId);
    }
  }, [date])


  function tick() {
    setDate(new Date())
  }

  return (
    <h1
      style={{
        textAlign: "center",
        fontSize: "60px",
        color: "var(--main-branding-color-500)",
      }}
    >
      {date.toLocaleTimeString()}
    </h1>
  );
}

export default Clock;
