export default function changeFiltrStorage(filtr) {
  console.log(filtr);
  sessionStorage.setItem('routesFilrt', JSON.stringify(filtr));
}

export function getLastFiltr() {
  return JSON.parse(sessionStorage.getItem('routesFilrt'));
}