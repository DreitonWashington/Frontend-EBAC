import { render, screen } from '@testing-library/react';
import App from './App';

test('teste titulo', () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/painel de controle/i);
});

test('teste de classes', () => {
  render(<App />);
  const testC = document.querySelectorAll('div')[5];
  expect(testC).toHaveClass('MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper');
});