export const RadioInput = ({ label, travelOption, setTravelOption }) => {
  const text = label;
  const firstLetter = text.slice(0,1).toUpperCase();
  const restText = text.slice(1);
  const labelText = `${firstLetter}${restText}`;

  return (
    <>
      <input
        type="radio"
        id={ label }
        name="travel-option"
        value={ label }
        checked={ travelOption === label }
        onChange={ (e) => setTravelOption(e.target.value) }
      />
      <label htmlFor={ label }>{ labelText }</label>
    </>
  );
};
