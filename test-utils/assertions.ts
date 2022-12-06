// InputWithAlert1
export const getTextById = (id: string) => {
  const alert = document.getElementById(id);
  return alert?.textContent;
};

// InputWithAlert2
export const queryByAlertRole = () => {
  return document.querySelector("[role='alert']");
};

// Input
const queryInput = () => {
  return document.querySelector('input');
};

type Invalid = 'true' | 'false';
export const assertInput = (Invalid: Invalid, input = queryInput()) => {
  if (Invalid === 'false') {
    expect(input).toHaveAttribute('aria-invalid', 'false');
  } else if (Invalid === 'true') {
    expect(input).toHaveAttribute('aria-invalid', 'true');
  } else {
    throw new Error('not exist aria-invalid role');
  }
};
