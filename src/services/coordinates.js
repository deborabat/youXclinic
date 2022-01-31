const coordinatesUf = ({ uf }) => {
  const coordinates = {
    AC: { lat: -8.77, long: -70.55 },
    AL: { lat: -9.71, long: -35.73 },
    AM: { lat: -3.07, long: -61.66 },
    AP: { lat: 1.41, long: -51.77 },
    BA: { lat: -12.96, long: -38.51 },
    CE: { lat: -3.71, long: -38.54 },
    DF: { lat: -15.83, long: -47.86 },
    ES: { lat: -19.19, long: -40.34 },
    GO: { lat: -16.64, long: -49.31 },
    MA: { lat: -2.55, long: -44.3 },
    MT: { lat: -12.64, long: -55.42 },
    MS: { lat: -20.51, long: -54.54 },
    MG: { lat: -18.1, long: -44.38 },
    PA: { lat: -5.53, long: -52.29 },
    PB: { lat: -7.06, long: -35.55 },
    PR: { lat: -24.89, long: -51.55 },
    PE: { lat: -8.28, long: -35.07 },
    PI: { lat: -8.28, long: -43.68 },
    RJ: { lat: -22.84, long: -43.15 },
    RN: { lat: -5.22, long: -36.52 },
    RO: { lat: -11.22, long: -62.8 },
    RS: { lat: -30.01, long: -51.22 },
    RR: { lat: 1.89, long: -61.22 },
    SC: { lat: -27.33, long: -49.44 },
    SE: { lat: -10.9, long: -37.07 },
    SP: { lat: -23.55, long: -46.64 },
    TO: { lat: -10.25, long: -48.25 },
  };
  // todo: validate default return
  return coordinates[uf] || coordinates.DF;
};

export default coordinatesUf;
