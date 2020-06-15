export default function changeFiltrStorage(data) {
  console.log(data);
  const {field, value} = data;
  const change = {...getLastFiltr(), [field]: value}

  sessionStorage.setItem('routesFilrt', JSON.stringify(change));
}

export function getLastFiltr() {
  return JSON.parse(sessionStorage.getItem('routesFilrt'));
}