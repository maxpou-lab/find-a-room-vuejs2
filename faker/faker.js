function generateProperty()
{
  return {
    'id': faker.random.uuid(),
    'name': faker.name.findName(),
    'description': faker.lorem.text(),
    'picture': faker.random.image(),
    'distance': Math.floor10(Math.random() * 3, -1),
    'price': Math.floor10(Math.random() * 100, -2),
    'address': {
      'street': faker.address.streetAddress(),
      'latitude': faker.address.latitude(),
      'longitude': faker.address.longitude()
    },
    'bonus': {
      'hasFreeWifi': faker.random.boolean(),
      'hasFreeBreakfast': faker.random.boolean(),
      'hasTv': faker.random.boolean(),
      'hasBar': faker.random.boolean()
    }
  }
}

var properties = {};
for (var i = 0; i < 30; i++) {
  properties[i] = generateProperty()
}

console.log(properties)
console.log(JSON.stringify(properties))
