// Iterationsmethoden wie forEach, map und filter sind for-schleifen vorzuziehen. Und sind
// besonderst gut für Arrays geeignet auf grund der einfacheren Syntax

var listings = [{
  name: "produktA",
  price: 10
}, {
  name: "produktB",
  price: 20
}, {
  name: "produktC",
  price: 30
}];

var filtered = [],
  min = 8,
  max = 20;

filtered = listings.filter(function(listing) {
  return listing.price >= min && listing.price <= max;
});

console.log(filtered);
