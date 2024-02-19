import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";

const Channels = () => {
  return (
    <TableContainer>
      <Table variant="striped">
        <TableCaption>Virtual Channels List</TableCaption>
        <Thead>
          <Tr>
            <Th>Channel</Th>
            <Th>Date Created</Th>
            <Th>Created by</Th>
            <Th>Status</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Channels;
