/**
 * Hulpfuncties voor de applicatie
 */

export function formatDate(date) {
  return new Date(date).toLocaleDateString('nl-NL');
}

export function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
