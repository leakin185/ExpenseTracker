import React, { useState } from "react";
import SubmissionForm from "./components/SubmissionForm";
import Table from "./components/Table";
import { Box, Heading } from "@chakra-ui/react";
import FilterOption from "./components/Filter";

function App() {
  const [tracker, setTracker] = useState({
    totalExpenses: 0,
    totalEarnings: 0,
    searchType: "",
  });

  const [expenses, setExpenses] = useState([]);
  const [earnings, setEarnings] = useState([]);

  const handleSearch = (expense, earning, description) => {
    setTracker((prevTracker) => ({
      ...prevTracker,
      totalExpenses: prevTracker.totalExpenses + expense,
      totalEarnings: prevTracker.totalEarnings + earning,
    }));

    if (expense) {
      setExpenses((prevData) => {
        const newItem = {
          id: prevData.length + 1,
          description,
          amount: expense ? expense : earning,
        };
        return [...prevData, newItem];
      });
    } else {
      setEarnings((prevData) => {
        const newItem = {
          id: prevData.length + 1,
          description,
          amount: expense ? expense : earning,
        };
        return [...prevData, newItem];
      });
    }
  };

  const handleFilter = (searchType) => {
    setTracker((prevTracker) => ({
      ...prevTracker,
      searchType,
    }));
  };

  let filteredEarnings = earnings;
  let filteredExpenses = expenses;
  let filteredTotalExpenses = tracker.totalExpenses;
  let filteredTotalEarnings = tracker.totalEarnings;

  if (tracker.searchType) {
    filteredExpenses = expenses.filter(
      (item) => item.description === tracker.searchType
    );
    filteredEarnings = earnings.filter(
      (item) => item.description === tracker.searchType
    );
    filteredTotalExpenses = filteredExpenses.reduce(
      (acc, item) => acc + item.amount,
      0
    );
    filteredTotalEarnings = filteredEarnings.reduce(
      (acc, item) => acc + item.amount,
      0
    );
  }

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Expense Tracker
      </Heading>
      <SubmissionForm onSubmission={handleSearch} />
      <Box mt={8}>
        <FilterOption onFilter={handleFilter} />
      </Box>
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={2}>
          Total Expenses: {filteredTotalExpenses}
        </Heading>
        <Heading as="h2" size="lg" mb={4}>
          Total Earnings: {filteredTotalEarnings}
        </Heading>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Expenses
          </Heading>
          <Table data={filteredExpenses ? filteredExpenses : expenses} />
        </Box>
        <Box mt={8}>
          <Heading as="h3" size="md" mb={2}>
            Earnings
          </Heading>
          <Table data={filteredEarnings ? filteredEarnings : earnings} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
