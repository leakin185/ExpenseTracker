import { Button, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (type: string, amount: string, description: string) => void;
}

const TransactionForm = ({ onSearch }: Props) => {
  const typeRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (typeRef.current && amountRef.current && descriptionRef.current) {
          onSearch(
            typeRef.current.value,
            amountRef.current.value,
            descriptionRef.current.value
          );
        }
      }}
    >
      <InputGroup>
        <FormLabel htmlFor="type">Type</FormLabel>
        <Input ref={typeRef} variant="filled"></Input>
      </InputGroup>
      <InputGroup>
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <Input ref={amountRef} variant="filled"></Input>
      </InputGroup>
      <InputGroup>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Input ref={descriptionRef} variant="filled"></Input>
      </InputGroup>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default TransactionForm;
