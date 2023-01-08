import { mountProducts } from "products/ProductsIndex";

import { mountCart } from "cart/CartIndex";

mountProducts(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
