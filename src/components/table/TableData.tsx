import React from 'react';
import styled from 'styled-components';

const TableDataBase = styled.td`
  padding: 1em;
`;

interface Props {
  data: string;
}

const TableData: React.StatelessComponent<Props> = ({ data }: Props) => (
  <TableDataBase>
    {data}
  </TableDataBase>
);

export default TableData;