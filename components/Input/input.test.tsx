import { render } from '@testing-library/react';
import { Input } from '.';
import { assertInput, Invalid } from '../../test-utils/assertions';

describe('Input', () => {
  test('正常系：エラーメッセージが表示されない', () => {
    render(<Input />);

    // assertInput(Invalid.Default);
  });

  test('エラーメッセージが表示される', async () => {
    render(<Input error="それは埼玉県の市町村じゃないよ" />);

    // assertInput(Invalid.Error);
  });
});
