import React from 'react';
import styled from 'styled-components';

const TableDataBase = styled.td`
  padding: 1em;
`;

interface Props {
  data: string;
}

export default ({ data }: Props) => (
  <TableDataBase>
    {data}
  </TableDataBase>
) as React.StatelessComponent<Props>;