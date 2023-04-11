const newHomes = [
  {
    address: "27569 Cedarwood Drive",
    sf: "2,535",
    bedrooms: 3,
    baths: 2.5,
    price: "$496,500"
  },
  {
    address: "316 Annandale Drive",
    sf: "1,326",
    bedrooms: 4,
    baths: 2,
    price: "$275,000"
  },
  {
    address: "251 Grandview Road",
    sf: "3,800",
    bedrooms: 3,
    baths: 2,
    price: "$699,900"
  },
  {
    address: "28571 Manitoba",
    sf: "2,960",
    bedrooms: 4,
    baths: 3.5,
    price: "$775,000"
  },
]

function getRandomInt() {
  return Math.floor(Math.random() * newHomes.length);
}

const randomHome = newHomes[getRandomInt()]

const $newHome = $(`<tr><td>${randomHome.address}</td><td>${randomHome.sf}</td><td>${randomHome.bedrooms}</td><td>${randomHome.baths}</td><td>${randomHome.price}</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>`)


let $tbody = $('tbody:last-child') 


$('#addHome').on('click', function() {
  $tbody.append($newHome)
})