function groupByOwner(data) {
  return data.reduce((acc, item) => {
    if (!acc[item.owner]) {
      acc[item.owner] = [];
    }
    acc[item.owner].push(item);
    return acc;
  }, {});
}

export {
    groupByOwner
}