// InputWithAlert1
export const getTextById = (id: string) => {
  const alert = document.getElementById(id)
  return alert?.textContent
}
