const Form = (props) => {
  return (
    <form className="app">
      <input value={props.value} onChange={props.change} name="value" />
      <button onClick={props.click}>Pokaż wynik</button>
    </form>
  );
};

export default Form;
