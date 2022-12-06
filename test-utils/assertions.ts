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

export const Invalid = {
  Error: 'true',
  Default: 'false',
} as const;
type invalid = typeof Invalid[keyof typeof Invalid];

export const assertInput = (Invalid: invalid, input = queryInput()) => {
  if (Invalid === 'false') {
    expect(input).toHaveAttribute('aria-invalid', 'false');
  } else if (Invalid === 'true') {
    expect(input).toHaveAttribute('aria-invalid', 'true');
  } else {
    throw new Error('not exist aria-invalid role');
  }
};
