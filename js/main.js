// select dom elemnents cards
const cards = document.querySelectorAll(".modal-trigger");
const thead = document.querySelector("#table-head");
const tbody = document.querySelector("#table-body");

const tMenu = document.querySelector("#table-menu");

// add event listerners to all cards in menu
cards.forEach(card => card.addEventListener("click", displayMenu));
// mainMenu.addEventListener("click", displayMenu);

let outputHead;

// store all menu in aan array
let categoryMain = [
  {
    name: "PULLED BEEF & ONION RILLETTES",
    price: "6.50"
  },
  {
    name: "WILD ATLANTIC SCALLOPS",
    price: "8.95"
  },
  {
    name: "BAKED CHEDDAR MUSHROOMS (V)",
    price: "5.50"
  },
  {
    name: "SALT & PEPPER CALAMARI",
    price: "7.50"
  },
  {
    name: "STICKY CHIPOTLE CHICKEN",
    price: "6.90"
  }

];

let categoryLunch = [
  {
    name: "MULTI-SEEDED CHICKEN SCHNITZE",
    price: "4.50"
  },
  {
    name: "PULLED BEEF BARBECOA FLATBREAD ",
    price: "8.50"
  },
  {
    name: "PRIME STEAK BURGER",
    price: "7.50"
  },
  {
    name: "PICHANA RUMP STEAK 6OZ",
    price: "7.85"
  },
  {
    name: "BUTTERMILK CHICKEN SANDWICH",
    price: "5.90"
  }
];

let categoryGluten = [
  {
    name: "SLOW COOKED BONELESS BEEF RIB",
    price: "16.50"
  },
  {
    name: "BARBECUE GLAZED CHICKEN",
    price: "12.50"
  },
  {
    name: "FULL SMOKY BARBECUE RACK OF RIBS",
    price: "14.00"
  },
  {
    name: "SALMON SUPREME",
    price: "14.95"
  }
];

let categorySunday = [
  {
    name: "GRILLED SEA BASS",
    price: "10.00"
  },
  {
    name: "OVEN ROASTED STUFFED AUBERGINE (VE) ",
    price: "5.50"
  },
  {
    name: "BUTTERED FISH",
    price: "4.50"
  },
  {
    name: "30 DAY AGED SIRLOIN 8OZ",
    price: "9.50"
  },
  {
    name: "30 DAY AGED FILLET 8OZ",
    price: "10.50"
  }
];

let categoryKids = [
    {
      name: "GRILLED SALMON FILLET",
      price: "3.50"
    },
    {
      name: "CRISPY CHICKEN BITES",
      price: "4.50"
    },
    {
      name: "BARBECUE QUORN BITES (V)",
      price: "5.50"
    },
    {
        name: "FISH FINGERS",
        price: "6.50"
      },
      {
        name: "CLASSIC MAC ‘N‘ CHEESE (V)",
        price: "5.50"
      }
  ];

let categoryDessert = [
  {
    name: "STICKY TOFFEE PUDDING (V)",
    price: "5.95"
  },
  {
    name: "BANOFFEE PIE (V)",
    price: "6.25"
  },
  {
    name: "CLASSIC CRÈME BRÛLÉE (V)",
    price: "5.50"
  },
  {
    name: "CARAMEL BISCUIT VANILLA CHEESECAKE (V)",
    price: "6.50"
  },
  {
    name: "CHOCOLATE POT (V)",
    price: "4.90"
  },
  {
    name: "BELGIAN CHOCOLATE BROWNIE (V)",
    price: "5.90"
  }
];

let categoryWine = [
  {
    name: "RIOJA",
    price: "20.50"
  },
  {
    name: "MERLOT",
    price: "25.00"
  },
  {
    name: "MALBEC",
    price: "30.00"
  },
  {
    name: "CHARDONNAY",
    price: "25.50"
  },
  {
    name: "SAUVIGNON BLANC",
    price: "22.50"
  },
  {
    name: "PINOT GRIGIO",
    price: "24.50"
  },
  {
    name: "HOUSE BLEND",
    price: "23.00"
  }
];

let categoryDrinks = [
  {
    name: "RASPBERRY & PEACH GINTONICA",
    price: "10.00"
  },
  {
    name: "STRAWBERRY DAIQUIRI ",
    price: "7.50"
  },
  {
    name: "LONG ISLAND ICED TEA",
    price: "6.50"
  },
  {
    name: "J2O ORANGE & PASSIONFRUIT",
    price: "5.50"
  },
  {
    name: "STRAWBERRY TWIST",
    price: "4.50"
  },
   {
    name: "VIRGIN MOJITO",
    price: "6.50"
  }
];

//   Method to display  menu in modal
function displayMenu(e) {
  console.log(e.currentTarget.id);

  //    then check if clicked card matches id
  if (e.currentTarget.id === "main-menu") {
    //   create table with id table-head
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Main</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">
                       
     `;
    //   Go through array or main
    categoryMain.forEach(
      food =>
        //   put each in t-row
        (outputHead += `<tr>
                        <td>${food.name}</td>
                        <td>${food.price}</td>
                        </tr>   `)
    );

    // close table
    outputHead += "</tbody> </table>";

    tMenu.innerHTML = outputHead;
  } else if (e.currentTarget.id === "lunch-menu") {
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Lunch</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">                       
     `;
    categoryLunch.forEach(
      food =>
        (outputHead += `<tr>
                          <td>${food.name}</td>
                          <td>${food.price}</td>
                          </tr>   `)
    );
    outputHead += "</tbody></table>";
    tMenu.innerHTML = outputHead;
  } else if (e.currentTarget.id === "kids-menu") {
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Kids Menu</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">                       
     `;
    categoryKids.forEach(
      food =>
        (outputHead += `<tr>
                          <td>${food.name}</td>
                          <td>${food.price}</td>
                          </tr>   `)
    );
    outputHead += "</tbody></table>";
    tMenu.innerHTML = outputHead;
  }else if (e.currentTarget.id === "gluten-menu") {
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Gluten-Free</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">                       
     `;
    categoryGluten.forEach(
      food =>
        (outputHead += `<tr>
                          <td>${food.name}</td>
                          <td>${food.price}</td>
                          </tr>   `)
    );
    outputHead += "</tbody></table>";
    tMenu.innerHTML = outputHead;
  } else if (e.currentTarget.id === "sunday-menu") {
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Sunday-Roast</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">                       
     `;
    categorySunday.forEach(
      food =>
        (outputHead += `<tr>
                          <td>${food.name}</td>
                          <td>${food.price}</td>
                          </tr>   `)
    );
    outputHead += "</tbody></table>";
    tMenu.innerHTML = outputHead;
  } else if (e.currentTarget.id === "dessert-menu") {
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Desserts</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">                       
     `;
    categoryDessert.forEach(
      food =>
        (outputHead += `<tr>
                          <td>${food.name}</td>
                          <td>${food.price}</td>
                          </tr>   `)
    );
    outputHead += "</tbody></table>";
    tMenu.innerHTML = outputHead;
  } else if (e.currentTarget.id === "wine-menu") {
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Wine-List</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">                       
     `;
    categoryWine.forEach(
      food =>
        (outputHead += `<tr>
                          <td>${food.name}</td>
                          <td>${food.price}</td>
                          </tr>   `)
    );
    outputHead += "</tbody></table>";
    tMenu.innerHTML = outputHead;
  } else if (e.currentTarget.id === "drinks-menu") {
    outputHead = `
    <table>
              <thead id="table-head" >
                        <tr>
                        <th >Drinks</th>
                        <th>Price</th> 
                        </tr>
                  
              </thead>
              <tbody id="table-body">                       
     `;
    categoryDrinks.forEach(
      food =>
        (outputHead += `<tr>
                          <td>${food.name}</td>
                          <td>${food.price}</td>
                          </tr>   `)
    );
    outputHead += "</tbody></table>";
    tMenu.innerHTML = outputHead;
  }
}
