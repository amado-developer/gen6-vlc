import { ResponsiveValue } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
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

type GenericObject = { [key: string]: any };

type SimpleTableProps = {
  variant: ResponsiveValue<string>;
  caption?: String;
  headers: String[];
  body: GenericObject[];
};

const SimpleTable = ({ variant, caption, headers, body }: SimpleTableProps) => {
  return (
    <TableContainer>
      <Table variant={variant}>
        <TableCaption>{caption}</TableCaption>
        <Thead>
          <Tr>
            {headers.map((header: String, index) => (
              <Th key={uuidv4()}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {body &&
            body.map((property) => (
              <Tr key={property.id}>
                {Object.keys(property)
                  .filter((e) => e !== "id" && e !== "__typename")
                  .map((key) => (
                    <Td key={uuidv4()}>{property[key]}</Td>
                  ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
