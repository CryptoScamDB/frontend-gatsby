import React from 'react';
import styled from 'styled-components';

interface TableHeadBaseProps {
  n: boolean;
}

interface TableHeaderProps {
  data: string;
  n: boolean;
}

const TableHeadBase = styled.th`
  padding: 1em 0 1em 1em;
  width: ${(props: TableHeadBaseProps) => (props.n ? '5%' : '25%')};
  text-align: left;
  color: #ebc561;
`;

const TableHeader: React.StatelessComponent<TableHeaderProps> = ({ data }: TableHeaderProps) => (
  <TableHeadBase n={data === '#' ? true : false}>{data}</TableHeadBase>
);

export default TableHeader;
