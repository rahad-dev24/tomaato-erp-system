
import { getSdk } from "../sdk";

import { GraphQLClient } from "graphql-request";

// const server =
//   process.env.NODE_ENV === "production"
//     ? process.env.SERVER_URL
//     : "http://localhost:4000/graphql";

const gqlClint = new GraphQLClient("http://localhost:4000/", {
  credentials: "include",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    /* "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
         */
    /* ,
        crossDomain: true,
        xhrFields: { withCredentials: true }, */
    //authorization: `Bearer MY_TOKEN`,
  },
});

export const {
  getCustomers,
  image_upload,
  signUp,
  getCustomer,
  customer,
  signIn,
  signOut,
  admin_signIn,
  createAdmin,
  getAdmins,
  categories,
  ceo_signIn,
  createCeo,
  createManager,
  getManagers,
  manager_signIn,
  createStaff,
  getStaffs,
  staff_signIn,
  getAllAdmins,
  getCeos,
  createSupplier,
  createBrand,
  createCategory,
  createStore,
  createSubCategory,
  makePurchase,
  makeSale,
  suppliers,
  sales,
  getBrands,
  subcategories,
  createProduct,
  stores,
  products,
  purchases,
} = getSdk(gqlClint);
