import { Box, Flex, position, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Member } from "../types/schedule";
import OriginalSpacer from "./OriginalSpacer";

type Props = {
  data: Member[];
};

const ScheduleHeadline: FC<Props> = ({ data }) => {
  return (
    <>
      {data.length !== 0 && (
        <Box textStyle="bodyWidth">
          <Text as="span" fontSize="16px" fontFamily="accent">
            Member:
          </Text>
          <OriginalSpacer size="12px" />
          <Flex as="ul" flexDirection="column" gap="14px" transform="translateX(3px)">
            {data.map((item) => (
              <Flex as="li" alignItems="center" gap="12px" key={item.id}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="32px"
                  h="32px"
                  bg={item.color}
                  borderRadius="9999px"
                  pos="relative"
                  sx={{
                    "&::before": {
                      content: "''",
                      display: "block",
                      width: "42px",
                      height: "42px",
                      background: "transparent",
                      border: "#57B993 3px solid",
                      borderRadius: "9999px",
                      position: "absolute",
                    },
                  }}
                ></Flex>
                <Box fontSize="1.2rem">{item.name}</Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default ScheduleHeadline;
