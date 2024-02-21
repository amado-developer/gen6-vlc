import { useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tbody,
  Tr,
  Table,
  Td,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const MobileTable = ({ headers, body }: Table) => {
  const channelNames = useMemo(
    () => body.map((channel) => channel.title),
    [body]
  );
  return (
    <Box fontSize={["sm"]}>
      <Accordion allowMultiple>
        {channelNames.map((header, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {header}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Table>
                <Tbody>
                  {/* <Tr>
                    {body &&
                      body.map((property) => {
                        {
                          return Object.keys(property)
                            .filter((e) => e !== "id" && e !== "__typename")
                            .map((key) => (
                              <Td key={uuidv4()}>{property[key]}</Td>
                            ));
                        }
                      })}
                  </Tr> */}

                  {Object.keys(body[index])
                    .filter(
                      (e) => e !== "id" && e !== "__typename" && e !== "title"
                    )
                    .map((key, i) => (
                      <Tr key={uuidv4()}>
                        {<Td>{headers[i + 1]}</Td>}
                        <Td>{body[index][key]}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default MobileTable;
