import React, { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('s', () => {
  it('prevents adding new user if the consent is not check', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'test' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: 'test' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: 'test' } });
    fireEvent.change(click.getByTestId('Consent'), { target: { value: 'test' } });
    fireEvent.click(screenX.getByText('Add'));
    screen.getByAltText('Lisa');
  });

  it('It adds new user to the list ', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'test' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: 'test' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Lisa');

    expect(newUser).not.toBeInTheDocument();
  });
});
