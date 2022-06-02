import React, { useState } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';
describe('Input With Button', () => {
  it('Reners the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
