import { render } from '@testing-library/react';
import { InputWithAlert } from '.';
import { getTextById } from '../../test-utils/assertions';

describe('InputWithAlert1:idでテストをしている良くない例', () => {
  test('正常系：エラーメッセージが表示されない', () => {
    render(<InputWithAlert inputProps={{ defaultValue: '' }} />);
    const text = getTextById('alert');

    expect(text).toBeUndefined();
  });

  test('エラーメッセージが表示される', async () => {
    render(
      <InputWithAlert
        inputProps={{ defaultValue: '' }}
        errorMessage="それは埼玉県の市町村じゃないよ"
      />,
    );
    const text = getTextById('alert');

    expect(text).toBe('それは埼玉県の市町村じゃないよ');
  });
});
