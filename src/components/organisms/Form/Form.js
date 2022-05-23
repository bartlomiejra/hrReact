import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { getDefaultNormalizer } from '@testing-library/react';
// import { Button } from '../../atoms/Button/Button';
const Form = (handleAddUser, formValues, handleInputChange) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new user</StyledTitle>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleInputChange} />
        <FormField value={formValues.attendance} label="Attendance" name="attendance" id="Attendance" onChange={handleInputChange} />
        <FormField value={formValues.average} label="Average" name="average" id="averaga" onChange={handleInputChange} />
        <button type="submit">Add</button>
      </Wrapper>
    </>
  );
};
