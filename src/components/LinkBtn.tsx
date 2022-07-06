import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

type Props = {
  text: string;
  link: string;
  primaryColor?: boolean;
};

const LinkBtn: FC<Props> = ({ text, link, primaryColor }) => (
  <NextLink href={link}>
    <Flex
      as="a"
      target="page"
      justifyContent="center"
      alignItems="center"
      w="60vw"
      minW="248px"
      h="56px"
      color="white"
      fontSize="1.5rem"
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
  </NextLink>
);

export default LinkBtn;
