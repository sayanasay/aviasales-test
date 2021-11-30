import {
  FilterDiv,
  FilterHeader,
  CheckboxLabel,
  Checkbox,
} from "./FilterList.styled";

const FilterList = ({ filterList, filters, handleChange, handleAllChange }) => {
  return (
    <FilterDiv>
      <FilterHeader>Количество пересадок</FilterHeader>
      <CheckboxLabel checked={filters.length === filterList.length}>
        <Checkbox
          type="checkbox"
          onChange={handleAllChange}
          checked={filters.length === filterList.length}
          name="all"
        />
        Все
      </CheckboxLabel>
      <br />
      {filterList.map((el) => (
        <>
          <CheckboxLabel checked={filters.includes(el.number)}>
            <Checkbox
              type="checkbox"
              key={el.number}
              onChange={handleChange}
              checked={filters.includes(el.number)}
              name={el.number}
            />
            {el.name}
          </CheckboxLabel>
          <br />
        </>
      ))}
    </FilterDiv>
  );
};

export default FilterList;
