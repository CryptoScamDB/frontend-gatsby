import React, { Component } from 'react';
import styled from 'styled-components';
import TableData from './TableData';
import TableHeader from './TableHeader';

const TableRowBase = styled.tr`
    &:hover {
        background: ${props => props.type === "td" ? "#0f3d5b" : ""}
    }
`;

interface Props {
    data: any[];
    type: string;
    link: string;
}

export default class TableRow extends Component<Props> {
    render() {
        const { type, data } = this.props;
        switch(type) {
            case 'td':
            default:
                return(
                    <TableRowBase type="td">
                        {data.map(d => <TableData data={d} />)}
                    </TableRowBase>
                )
            case 'th':
            return(
                <TableRowBase>
                    {data.map(d => <TableHeader data={d} />)}
                </TableRowBase>
            )
        }
    }

    static defaultProps = {
        data: [],
        type: "td",
        link: ""
    }
}