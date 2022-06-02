import React, { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('s', () => {
  it('Reners the component', () => {
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
    screen.getByAltText('Adam');
  });
});
