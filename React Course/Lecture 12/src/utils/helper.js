export function filterData(searchInput, allCountries) {
  return allCountries.filter((country) =>
    country?.name?.common?.toLowerCase().includes(searchInput.toLowerCase())
  );
}
