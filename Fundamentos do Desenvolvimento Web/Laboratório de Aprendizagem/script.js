const { cities, states, regions, population } = require('./data');
// 1 - Crie uma função que receba uma string, o nome de uma cidade e retorne as informações referentes a ela em um objeto no seguinte formato:
// {
//   city: 'Manaus',
//   state: 'AM',
//   population: 2.02 milhões
// }

const cityInfo = cityName => {
  const newObject = {
    city: '',
    state: '',
    population: ''
  };
  for (let data of cities) {
    if (data.name === cityName) {
      newObject.city = data.name;
      newObject.state = data.state;
    }
  }
  for (let data of population) {
    if (data.name === cityName) {
      newObject.population = data.quantity;
    }
  } return newObject;
}

console.log(cityInfo('Porto Nacional'));

// 2 - Crie uma função que receba uma string, o nome de uma região, e retorne o total de cidades que existem naquela região no formato:
// 'Esta região tem 3 cidades'
// Se nenhum argumento for passado, retorne a quantidade de cidades de todas as regiões

const getTotalCitiesPer = region => {
  const calcTotalCitiesPer = region => {
    return cities.reduce((accumulator, currValue) => {
      if (currValue.region === region) {
        accumulator += 1;
      }
      return accumulator;
    }, 0);
  }
  const calcCitiesPerEachRegion = () => {
    const regions = {};
    return cities.reduce((accumulator, currValue) => {
      if (!accumulator[currValue.region]) {
        accumulator[currValue.region] = 0;
      }
      accumulator[currValue.region] += 1;
      return accumulator;
    }, regions);
  }
  if (region) {
    const totalCities = calcTotalCitiesPer(region);
    return `Esta região tem ${totalCities} cidade(s).`;
  }
  return calcCitiesPerEachRegion();
}

console.log(getTotalCitiesPer());