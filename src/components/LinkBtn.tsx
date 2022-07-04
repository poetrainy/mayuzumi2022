import { Flex } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  text: string;
  primaryColor?: boolean;
};

const LinkBtn: VFC<Props> = ({ text, primaryColor }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    w="60vw"
    minW="248px"
    h="64px"
    color="white"
    fontSize="1.6rem"
    fontWeight="bold"
    mx="auto"
    sx={{
      ...(primaryColor
        ? {
            background: 'primary',
          }
        : {
            background: 'secondary',
          }),
    }}
  >
    {text}
  </Flex>
);

export default LinkBtn;
