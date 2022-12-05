import { render } from '@testing-library/react';
import { InputWithAlert } from '.';
import { queryByAlertRole } from '../../test-utils/assertions';

describe('InputWithAlert2:roleを取得する関数を自作', () => {
  test('正常系：エラーメッセージが表示されない', () => {
    render(<InputWithAlert inputProps={{ defaultValue: '' }} />);
    const alert = queryByAlertRole();

    expect(alert).toBeNull();
  });

  test('エラーメッセージが表示される', async () => {
    render(
      <InputWithAlert
        inputProps={{ defaultValue: '' }}
        errorMessage="それは埼玉県の市町村じゃないよ"
      />,
    );
    const alert = queryByAlertRole();

    expect(alert).toBeInTheDocument();
  });
});
