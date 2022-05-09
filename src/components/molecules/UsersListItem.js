import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
  }
`;

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p> {name}</p>
      <p>{attendance}</p>
    </div>
  </Wrapper>
);
UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
