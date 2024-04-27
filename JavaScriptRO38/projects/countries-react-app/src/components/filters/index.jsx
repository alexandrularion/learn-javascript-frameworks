import Container from "./index.styled";

const Filters = () => {
  const options = [
    {
      value: 0,
      label: "Africa",
    },
    {
      value: 1,
      label: "America",
    },
    {
      value: 2,
      label: "Asia",
    },
    {
      value: 3,
      label: "Europe",
    },
    {
      value: 4,
      label: "Oceania",
    },
  ];

  return (
    <Container>
      <select name="filters">
        <option value={""} disabled={true} selected={true}>
          Filter by Region
        </option>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Filters;
