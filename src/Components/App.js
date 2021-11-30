import TicketsList from "./TicketsList/TicketsList";
import SortingComponent from "./SortingComponent/SortingComponent";
import { useState } from "react";
import FilterList from "./FilterList/FilterList";
import { GlobalStyle, Container, Sidebar, Content } from "./App.styled";

function App() {
  const sorts = [
    { type: "cheap", name: "САМЫЙ ДЕШЕВЫЙ" },
    { type: "fast", name: "САМЫЙ БЫСТРЫЙ" },
    { type: "optimal", name: "ОПТИМАЛЬНЫЙ" },
  ];
  const [sorting, setSorting] = useState("");
  const changeSorting = (e) => {
    setSorting(e.target.value);
  };
  const filterList = [
    { name: "Без пересадок", number: 0 },
    { name: "1 пересадка", number: 1 },
    { name: "2 пересадки", number: 2 },
    { name: "3 пересадки", number: 3 },
  ];
  const [filters, setFilters] = useState([0, 1, 2, 3]);
  const changeFilter = (e) => {
    e.target.checked
      ? setFilters((filters) => [...filters, +e.target.name])
      : setFilters((filters) => filters.filter((el) => el !== +e.target.name));
  };
  const changeAllFilters = (e) => {
    e.target.checked ? setFilters([0, 1, 2, 3]) : setFilters([]);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar>
          <FilterList
            filters={filters}
            filterList={filterList}
            handleChange={changeFilter}
            handleAllChange={changeAllFilters}
          />
        </Sidebar>
        <Content>
          <SortingComponent
            sorts={sorts}
            handleChange={changeSorting}
            sorting={sorting}
          />
          <TicketsList sorting={sorting} filters={filters} />
        </Content>
      </Container>
    </>
  );
}

export default App;
