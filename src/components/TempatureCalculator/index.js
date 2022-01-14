import React from "react";
import TempatrueInput from "./TempatrueInput";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

export default class TempatureCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0,
    };
  }

  changeTempature(value, scale = "C") {
    if (scale === "C") {
      this.setState({
        celsius: value,
        fahrenheit: toFahrenheit(value),
      });
    } else {
      this.setState({
        celsius: toCelsius(value),
        fahrenheit: value,
      });
    }
  }
 
  render() {
    return (
      <div>
        <TempatrueInput
          scale="C"
          temperature={this.state.celsius}
          onTemperatureChange={(value) =>
            this.changeTempature(value, "C")
          }
        />
        <TempatrueInput
          scale="F"
          temperature={this.state.fahrenheit}
          onTemperatureChange={(value) =>
            this.changeTempature(value, "F")
          }
        />
        <BoilingVerdict celsius={parseFloat(this.state.celsius)} />
      </div>
    );
  }
}
