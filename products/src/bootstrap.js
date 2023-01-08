import faker from "faker";

const mountProducts = (el) => {
  let products = "";

  for (var i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mountProducts(el);
  }
}

export { mountProducts };
