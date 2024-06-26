/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const validateLottieJson = (json: any): boolean => {
  return (
    json.hasOwnProperty('v') &&
    json.hasOwnProperty('fr') &&
    json.hasOwnProperty('ip') &&
    json.hasOwnProperty('op') &&
    json.hasOwnProperty('w') &&
    json.hasOwnProperty('h') &&
    json.hasOwnProperty('layers')
  );
};
