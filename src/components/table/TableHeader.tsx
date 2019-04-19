import React from 'react';
import styled from 'styled-components';

const TableHeadBase = styled.th`
  padding: 1em 0 1em 1em;
  width: ${(props: Props) => (props.n ? '5%' : '25%')};
  text-align: left;
  color: #ebc561;
`;

interface Props {
  data: string;
  n: boolean;
}

const TableHeader: React.StatelessComponent<Props> = ({ data }: Props) => (
  <TableHeadBase n={data === '#' ? true : false}>{data}</TableHeadBase>
);

export default TableHeader;
