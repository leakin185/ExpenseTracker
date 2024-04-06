import { Button, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onFilter: (searchType: string) => void;
}

const FilterOption = ({ onFilter }: Props) => {
  const typeRef = useRef<HTMLSelectElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (typeRef.current) {
          const searchType = typeRef.current.value;
          onFilter(searchType);
        }
      }}
    >
      <FormControl mb={4}>
        <FormLabel htmlFor="type">Search Type</FormLabel>
        <Select ref={typeRef} variant="filled" defaultValue="">
          <option value="">Select</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Salary">Salary</option>
          <option value="Interest">Interest</option>
        </Select>
      </FormControl>
      <Button mt={4} colorScheme="orange" variant="outline" type="submit">
        Filter
      </Button>
    </form>
  );
};

export default FilterOption;
