export const downloadJsonFile = (file: string, filename: string) => {
  const element = document.createElement('a');
  element.href = `data:application/json;charset=utf-8,${encodeURIComponent(file)}`;
  element.download = filename;
  document.body.appendChild(element);
  element.click();
};
