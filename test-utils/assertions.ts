// InputWithAlert1
export const getTextById = (id: string) => {
  const alert = document.getElementById(id);
  return alert?.textContent;
};


// InputWithAlert2
export const queryByAlertRole = () => {
  return document.querySelector("[role='alert']");
};
