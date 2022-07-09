import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type Props = {
  week: number;
};

const Pagenation: FC<Props> = ({ week }) => {
  return (
    <>
      {week === 5 ? (
        <Flex bg="#e0e0e0" textStyle="pagenation">
          <ChevronRightIcon />
        </Flex>
      ) : (
        <NextLink href={`/${week}`} passHref>
          <Flex as="a" bg="primary" textStyle="pagenation">
            <ChevronRightIcon />
          </Flex>
        </NextLink>
      )}
    </>
  );
};

export default Pagenation;
