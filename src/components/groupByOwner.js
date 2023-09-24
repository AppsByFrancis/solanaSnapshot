function groupByOwner(data) {

  return data.reduce((acc, item) => {
    if (item && item.owner) {  // Ensure that the item and its owner property are not undefined
      if (!acc[item.owner]) {
        acc[item.owner] = [];
      }
      acc[item.owner].push(item);
    }
    return acc;  // Return the accumulator for the next iteration
  }, {});

}

export default groupByOwner;