import "./App.css";
import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: "",
    date: "",
    sunrise: "",
    sunset: "",
    pressure: "",
    wind: "",
    city: "",
    error: true,
  };

  handleClick = (e) => {
    e.preventDefault();

    const APIRequest = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=a6325f070bd36de50b09d85dfd2529b1&units=metric`;
    fetch(APIRequest)
      .then((response) => {
        if (response.ok) return response;
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState((prevState) => ({
          error: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: prevState.value,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          error: true,
          city: this.state.value,
        }));
      });
    console.log(APIRequest);
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    const { date, sunrise, sunset, pressure, wind, city, error, temp } =
      this.state;
    return (
      <>
        <Form
          value={this.state.value}
          click={this.handleClick}
          change={this.handleChange}
        />
        <Result
          date={date}
          sunrise={sunrise}
          sunset={sunset}
          pressure={pressure}
          wind={wind}
          city={city}
          error={error}
          temp={temp}
        />
      </>
    );
  }
}

export default App;
