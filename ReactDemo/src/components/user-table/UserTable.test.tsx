import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserTable from './UserTable';

describe('<UserTable />', () => {
  test('it should mount', () => {
    render(<UserTable />);
    
    const userTable = screen.getByTestId('UserTable');

    expect(userTable).toBeInTheDocument();
  });
});