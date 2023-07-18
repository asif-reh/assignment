User.aggregate([
  {
    $lookup: {
      from: 'cities',
      localField: 'address.city',
      foreignField: 'name',
      as: 'cityInfo'
    }
  }
]).exec((err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});