const searchLicenseFiles = async () => {
  const repo1 = "yusril-adr/laparz";
  const repo2 = "AnyKeyGames/alettifaq";

  const searchLicenseRepo1 = await functions.semantic-code-search({
    query: "license file",
    scopingQuery: `repo:${repo1}`
  });

  const searchLicenseRepo2 = await functions.semantic-code-search({
    query: "license file",
    scopingQuery: `repo:${repo2}`
  });

  return { searchLicenseRepo1, searchLicenseRepo2 };
};

searchLicenseFiles().then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});
