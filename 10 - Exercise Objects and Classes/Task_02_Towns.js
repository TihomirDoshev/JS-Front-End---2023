function makeTown(array) {
  array.forEach((city) => {
    let [town, latitude, longitude] = city.split(" | ");
    let townInfo = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(townInfo);
  });
}
makeTown(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
