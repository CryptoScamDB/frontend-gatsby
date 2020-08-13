import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';

interface PageUnitProps {
  currentPage?: boolean;
  onClick: any;
  value: number;
}

const PageUnit = styled.div`
  padding: 0.5em;
  display: inline-block;

  border-radius: 0.25em;
  border: ${(props: PageUnitProps) => (props.currentPage ? '1px solid #FFD166' : '')};
  color: ${(props: PageUnitProps) => (props.currentPage ? '#FFD166' : '#FFF')};

  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -o-user-select: none;
  -moz-user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onClick: any;
}

interface PaginationState {
  currentPage: number;
}

export default class Pagination extends Component<PaginationProps, PaginationState> {
  static defaultProps = {
    currentPage: 1,
    totalPages: 1
  };

  constructor(props: PaginationProps) {
    super(props);
    this.movePage = this.movePage.bind(this);
    this.state = {
      currentPage: this.props.currentPage
    };
  }

  movePage(event: MouseEvent<HTMLElement>) {
    const { totalPages } = this.props;
    const { target } = event;
    const intNewPage = parseInt((target as HTMLElement).getAttribute('value') || '', 10);
    if (intNewPage <= 0 || intNewPage > totalPages) {
      return;
    }

    this.setState({ currentPage: intNewPage });

    this.props.onClick(event);
  }

  render() {
    const { totalPages } = this.props;
    const { currentPage } = this.state;
    // can probably do this better but it work so ¯\_(ツ)_/¯
    const arrPages =
      totalPages > 1
        ? Array(totalPages)
            .fill(1)
            .map((x, y) => x + y)
            .filter(
              page => page + 1 === currentPage || page - 1 === currentPage || page === currentPage
            ) // previous, current, next pages only
        : [1];

    // buff out the pages if we are on page 1
    if ([1, 2].indexOf(arrPages.length) > -1 && totalPages > 1) {
      // we are missing some pages because we are on the first page
      if (totalPages > 3 && currentPage !== totalPages) {
        arrPages.push(3);
      }

      if (currentPage === totalPages && totalPages - 2 > 0) {
        arrPages.unshift(totalPages - 2);
      }
    }

    return (
      <div>
        <PageUnit onClick={this.movePage} value={1}>
          &laquo;
        </PageUnit>
        <PageUnit onClick={this.movePage} value={currentPage - 1}>
          &lt;
        </PageUnit>
        {arrPages.map((page, i) => (
          <PageUnit
            currentPage={currentPage === page ? true : false}
            onClick={this.movePage}
            value={page}
            key={i}
          >
            {page}
          </PageUnit>
        ))}
        <PageUnit onClick={this.movePage} value={currentPage + 1}>
          &gt;
        </PageUnit>
        <PageUnit onClick={this.movePage} value={totalPages}>
          &raquo;
        </PageUnit>
      </div>
    );
  }
}
