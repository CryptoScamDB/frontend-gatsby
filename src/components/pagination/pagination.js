
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageUnit = styled.div`
    padding: 0.5em;
    display: inline-block;

    border-radius: 0.25em;
    border: ${props => props.currentPage ? "1px solid #FFD166" : ""}
    color: ${props => props.currentPage ? "#FFD166" : "#FFF"}

    
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -o-user-select: none;
    -moz-user-select: none;

    &:hover {
        cursor: pointer;
    }
`

class Pagination extends Component
{

    constructor(props)
    {
        super(props)
        this.movePage = this.movePage.bind(this)

        let intTotalPages = this.props.totalPages

        this.state = {
            currentPage: 1,
            totalPages: intTotalPages
        }
    }

    movePage(event)
    {
        let intNewPage = parseInt(event.target.getAttribute("value"));
        if(intNewPage <= 0 || intNewPage > this.state.totalPages) {
            return;
        }

        this.setState({ currentPage: intNewPage})

        this.props.onClick(event);
    }

    render()
    {
        // can probably do this better but it work so ¯\_(ツ)_/¯
        let intTotalPages = this.state.totalPages
        let arrPages = intTotalPages > 1
            ? Array(intTotalPages)
                .fill(1)
                .map((x,y) => x + y)
                .filter(page => page+1 === this.state.currentPage 
                             || page-1 === this.state.currentPage 
                             || page === this.state.currentPage) // previous, current, next pages only
            : [1];

        // buff out the pages if we are on page 1
        if([1,2].indexOf(arrPages.length) > -1 && intTotalPages > 1) {
            // we are missing some pages because we are on the first page
            if(intTotalPages > 3 && this.state.currentPage !== intTotalPages) {
                arrPages.push(3)
            }

            if(this.state.currentPage === intTotalPages && intTotalPages-2 > 0) {
                arrPages.unshift(intTotalPages-2)
            }
        }

        return(
            <div>
                <PageUnit
                    onClick={this.movePage}
                    value={1}
                >&laquo;</PageUnit>
                <PageUnit
                    onClick={this.movePage}
                    value={this.state.currentPage-1}
                >&lt;</PageUnit>
                {
                    arrPages.map(page => <PageUnit 
                                            currentPage={this.state.currentPage === page ? true: false} 
                                            onClick={this.movePage} 
                                            value={page}
                                        >{page}</PageUnit>
                                )
                }
                <PageUnit
                    onClick={this.movePage}
                    value={this.state.currentPage+1}
                >&gt;</PageUnit>
                <PageUnit
                    onClick={this.movePage}
                    value={this.state.totalPages}
                >&raquo;</PageUnit>
            </div>
        )
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number
}

Pagination.defaultProps = {
    currentPage: 1,
    totalPages: 1
}

export default Pagination