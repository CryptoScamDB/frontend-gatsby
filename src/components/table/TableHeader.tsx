import React from 'react';
import styled from 'styled-components';

const TableHeadBase = styled.th`
  padding: 1em 0 1em 1em;
  width: 25%;
  text-align: left;
  color: #ebc561;
`;

interface Props {
  data: string;
}

export default ({ data }: Props) => (
  <TableHeadBase>
    {data}
  </TableHeadBase>
) as React.StatelessComponent<Props>;