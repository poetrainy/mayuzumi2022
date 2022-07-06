import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import { ChevronLeftIcon } from '@chakra-ui/icons';

type Props = {
  week: number;
};

const Pagenation: FC<Props> = ({ week }) => {
  return (
    <>
      {week === 0 ? (
        <Flex bg="#e0e0e0" textStyle="pagenation">
          <ChevronLeftIcon />
        </Flex>
      ) : (
        <NextLink href={`/${week}`} passHref>
          <Flex as="a" target="page" bg="primary" textStyle="pagenation">
            <ChevronLeftIcon />
          </Flex>
        </NextLink>
      )}
    </>
  );
};

export default Pagenation;
