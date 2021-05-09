const fetchAll = async (start, end) => {
  if (!start || !end) {
    const URL = "https://api.spacexdata.com/v3/missions";
    let data = await fetch(URL);
    let misiones = data.json();
    return misiones;
  }
  const URL = `https://api.spacexdata.com/v3/history/?start=${start}&end=${end}`;
  let data = await fetch(URL);
  let misiones = data.json();
  console.log(URL);
  return misiones;
};

// const fetchDate = async (start, end) => {};
export { fetchAll };
