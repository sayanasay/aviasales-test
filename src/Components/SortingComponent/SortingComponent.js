import {
  SortingDiv,
  RadioButtonLabel,
  RadioButton,
} from "./SortingComponent.styled";

const SortingComponent = ({ sorts, handleChange, sorting }) => {
  return (
    <SortingDiv>
      {sorts.map((el) => (
        <RadioButtonLabel checked={sorting === el.type}>
          <RadioButton
            type="radio"
            key={el.type}
            value={el.type}
            onChange={handleChange}
            name="sorting"
          />
          {el.name}
        </RadioButtonLabel>
      ))}
    </SortingDiv>
  );
};

export default SortingComponent;
