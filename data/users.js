const apiData = async function () {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
};

module.exports = apiData;
