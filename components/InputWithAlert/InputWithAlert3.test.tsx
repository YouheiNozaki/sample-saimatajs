import { render, screen } from '@testing-library/react';
import { InputWithAlert } from '.';

describe('InputWithAlert3:React Testing Libraryでのroleを使用したテスト例', () => {
  test('正常系：エラーメッセージが表示されない', () => {
    render(<InputWithAlert inputProps={{ defaultValue: '' }} />);

    expect(screen.queryByRole('alert')).toBeNull();
  });

  test('エラーメッセージが表示される', async () => {
    render(
      <InputWithAlert
        inputProps={{ defaultValue: '' }}
        errorMessage="それは埼玉県の市町村じゃないよ"
      />,
    );
    const alert = await screen.findByRole('alert');

    expect(alert).toBeInTheDocument();
  });
});
