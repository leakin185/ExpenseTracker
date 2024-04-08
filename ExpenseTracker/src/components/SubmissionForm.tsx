import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

interface Props {
  onSubmission: (expense: number, earning: number, description: string) => void;
}

const SubmissionForm = ({ onSubmission }: Props) => {
  const expenseRef = useRef<HTMLInputElement>(null);
  const earningRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLSelectElement>(null);
  const [formType, setFormType] = useState<"earning" | "expense">("expense");

  const handleFormTypeToggle = () => {
    setFormType((prevFormType) =>
      prevFormType === "expense" ? "earning" : "expense"
    );
  };

  const resetFormFields = () => {
    if (expenseRef.current) expenseRef.current.value = "";
    if (earningRef.current) earningRef.current.value = "";
    if (descriptionRef.current) descriptionRef.current.value = "";
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (descriptionRef.current) {
          const expense = parseFloat(expenseRef.current?.value || "0");
          const earning = parseFloat(earningRef.current?.value || "0");
          const description = descriptionRef.current.value;

          onSubmission(expense, earning, description);
          resetFormFields();
          if (formType === "expense" && earningRef.current)
            earningRef.current.focus();
          if (formType === "earning" && expenseRef.current)
            expenseRef.current.focus();
        }
      }}
    >
      <Button
        onClick={handleFormTypeToggle}
        colorScheme="teal"
        variant="outline"
        mb={4}
      >
        {formType === "expense" ? "Expense Form" : "Earning Form"}
      </Button>
      {formType === "expense" && (
        <FormControl mb={4}>
          <FormLabel htmlFor="expense">Expense</FormLabel>
          <Input ref={expenseRef} variant="filled"></Input>
        </FormControl>
      )}
      {formType === "earning" && (
        <FormControl mb={4}>
          <FormLabel htmlFor="earning">Earning</FormLabel>
          <Input ref={earningRef} variant="filled"></Input>
        </FormControl>
      )}
      <FormControl mb={4}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Select ref={descriptionRef} variant="filled" defaultValue="">
          <option value="">Select</option>
          {formType === "expense" ? (
            <>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
            </>
          ) : (
            <>
              <option value="Salary">Salary</option>
              <option value="Interest">Interest</option>
            </>
          )}
        </Select>
      </FormControl>
      <Button mt={4} colorScheme="pink" loadingText="Submitting" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SubmissionForm;
