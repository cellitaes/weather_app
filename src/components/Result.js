const Result = (props) => {
  let content = null;

  if (!props.error && props.city) {
    const sunriseTime = new Date(props.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(props.sunset * 1000).toLocaleTimeString();

    content = (
      <div className="result">
        <h3>Wyniki wyszukiwania dla: {props.city}</h3>
        <h4>Dana dla dnia i godziny: {props.date}</h4>
        <h4>Aktualna temperatura: {props.temp} &#176;C</h4>
        <h4>Wschód słońca dzisiaj: {sunriseTime}</h4>
        <h4>Zachód słońca dzisiaj: {sunsetTime}</h4>
        <h4>Aktualna siła wiatru: {props.wind} m/s</h4>
        <h4>Aktualne ciśnienie: {props.pressure} hPa</h4>
      </div>
    );
  }

  return props.error ? null : content;
};

export default Result;
