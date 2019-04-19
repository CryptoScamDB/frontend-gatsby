import React, { Component } from 'react';
import styled from 'styled-components';
import TableData from './TableData';
import TableHeader from './TableHeader';

interface TableRowBaseProps {
  type?: string;
}

const TableRowBase = styled.tr`
  &:hover {
    background: ${(props: TableRowBaseProps) => (props.type === 'td' ? '#0f3d5b' : '')};
  }

  &:nth-child(even) {
    background: rgb(15, 61, 91);

    &:hover {
      background: rgb(19, 79, 118);
    }
  }
`;

interface TableRowProps {
  data: any[];
  type: string;
  link: string;
}

export default class TableRow extends Component<TableRowProps> {
  static defaultProps = {
    data: [],
    type: 'td',
    link: ''
  };

  render() {
    const { type, data } = this.props;
    switch (type) {
      case 'td':
      default:
        return (
          <TableRowBase type="td">
            {data.map((d, i) => (
              <TableData key={i} data={d} />
            ))}
          </TableRowBase>
        );
      case 'th':
        return (
          <TableRowBase>
            {data.map((d, i) => (
              <TableHeader key={i} data={d} />
            ))}
          </TableRowBase>
        );
    }
  }
}
