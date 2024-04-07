import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Table = ({ data }) => {
  return (
    <ChakraTable variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Description</Th>
          <Th>Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.description}</Td>
            <Td>{item.amount}</Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default Table;
