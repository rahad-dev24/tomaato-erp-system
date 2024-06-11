import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  admin_Id: Scalars['ID']['output'];
  admin_email: Scalars['String']['output'];
  admin_name: Scalars['String']['output'];
  admin_password: Scalars['String']['output'];
  admin_phone: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Role>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export enum Area {
  Depz = 'DEPZ',
  Savar = 'savar',
  Uttora = 'uttora'
}

export type Brand = {
  __typename?: 'Brand';
  brand_Id: Scalars['ID']['output'];
  brand_name?: Maybe<Scalars['String']['output']>;
  product: Array<Product>;
};

export type Ceo = {
  __typename?: 'Ceo';
  ceo_Id: Scalars['ID']['output'];
  ceo_email: Scalars['String']['output'];
  ceo_name: Scalars['String']['output'];
  ceo_password: Scalars['String']['output'];
  ceo_phone: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Role>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Customer = {
  __typename?: 'Customer';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  customer_DOB?: Maybe<Scalars['DateTime']['output']>;
  customer_Id: Scalars['ID']['output'];
  customer_area?: Maybe<Area>;
  customer_email: Scalars['String']['output'];
  customer_name: Scalars['String']['output'];
  customer_password: Scalars['String']['output'];
  customer_phone: Scalars['String']['output'];
  role?: Maybe<Role>;
  sales: Array<Sales>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Image = {
  __typename?: 'Image';
  image_Id: Scalars['ID']['output'];
  image_description?: Maybe<Scalars['String']['output']>;
  product_Id?: Maybe<Product>;
};

export type Manager = {
  __typename?: 'Manager';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  manager_Id: Scalars['ID']['output'];
  manager_email: Scalars['String']['output'];
  manager_name: Scalars['String']['output'];
  manager_password: Scalars['String']['output'];
  manager_phone: Scalars['String']['output'];
  role?: Maybe<Role>;
  store_code?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']['output']>;
  admin_signIn?: Maybe<Admin>;
  ceo_signIn?: Maybe<Ceo>;
  createAdmin?: Maybe<Admin>;
  createBrand?: Maybe<Brand>;
  createCategory?: Maybe<Product_Category>;
  createCeo?: Maybe<Ceo>;
  createManager?: Maybe<Manager>;
  createProduct?: Maybe<Product>;
  createStaff?: Maybe<Staff>;
  createStore?: Maybe<Store>;
  createSubCategory: Product_Subcategory;
  createSupplier?: Maybe<Supplier>;
  image_upload?: Maybe<Scalars['Boolean']['output']>;
  makePurchase?: Maybe<Purchase>;
  makeSale?: Maybe<Sales>;
  manager_signIn?: Maybe<Manager>;
  signIn?: Maybe<Customer>;
  signOut?: Maybe<Scalars['Boolean']['output']>;
  signUp?: Maybe<Customer>;
  staff_signIn?: Maybe<Staff>;
};


export type MutationAdmin_SignInArgs = {
  admin_password: Scalars['String']['input'];
  admin_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCeo_SignInArgs = {
  ceo_password: Scalars['String']['input'];
  ceo_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateAdminArgs = {
  admin_email?: InputMaybe<Scalars['String']['input']>;
  admin_name: Scalars['String']['input'];
  admin_password: Scalars['String']['input'];
  admin_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateBrandArgs = {
  brand_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCategoryArgs = {
  category_description?: InputMaybe<Scalars['String']['input']>;
  category_name: Scalars['String']['input'];
};


export type MutationCreateCeoArgs = {
  ceo_email?: InputMaybe<Scalars['String']['input']>;
  ceo_name: Scalars['String']['input'];
  ceo_password: Scalars['String']['input'];
  ceo_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateManagerArgs = {
  manager_email?: InputMaybe<Scalars['String']['input']>;
  manager_name: Scalars['String']['input'];
  manager_password: Scalars['String']['input'];
  manager_phone?: InputMaybe<Scalars['String']['input']>;
  store_code?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductArgs = {
  product_brand_Id?: InputMaybe<Scalars['String']['input']>;
  product_category_Id: Scalars['String']['input'];
  product_description?: InputMaybe<Scalars['String']['input']>;
  product_name: Scalars['String']['input'];
  product_subcategory_Id: Scalars['String']['input'];
  product_usages?: InputMaybe<Scalars['String']['input']>;
  product_weight?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateStaffArgs = {
  staff_email?: InputMaybe<Scalars['String']['input']>;
  staff_name: Scalars['String']['input'];
  staff_password: Scalars['String']['input'];
  staff_phone?: InputMaybe<Scalars['String']['input']>;
  store_code?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateStoreArgs = {
  store_area?: InputMaybe<Area>;
  store_code?: InputMaybe<Scalars['String']['input']>;
  store_email?: InputMaybe<Scalars['String']['input']>;
  store_name: Scalars['String']['input'];
};


export type MutationCreateSubCategoryArgs = {
  product_category_Id: Scalars['String']['input'];
  subcategory_description?: InputMaybe<Scalars['String']['input']>;
  subcategory_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateSupplierArgs = {
  supplier_area?: InputMaybe<Area>;
  supplier_email?: InputMaybe<Scalars['String']['input']>;
  supplier_name: Scalars['String']['input'];
  supplier_phone: Scalars['String']['input'];
  supplier_store_name: Scalars['String']['input'];
};


export type MutationImage_UploadArgs = {
  file: Scalars['Upload']['input'];
  image_description?: InputMaybe<Scalars['String']['input']>;
  product_Id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMakePurchaseArgs = {
  buyer_store_Id?: InputMaybe<Scalars['String']['input']>;
  product_expiry_date?: InputMaybe<Scalars['String']['input']>;
  product_in_stock?: InputMaybe<Scalars['String']['input']>;
  product_manufacturing_date?: InputMaybe<Scalars['String']['input']>;
  product_moved_to_shelf?: InputMaybe<Scalars['Boolean']['input']>;
  product_net_purchase_price: Scalars['String']['input'];
  product_net_purchase_quantity: Scalars['String']['input'];
  product_price_per_pcs: Scalars['String']['input'];
  product_purchase_date?: InputMaybe<Scalars['DateTime']['input']>;
  purchased_product_Id?: InputMaybe<Scalars['String']['input']>;
  seller_Id?: InputMaybe<Scalars['String']['input']>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationMakeSaleArgs = {
  canceled_order?: InputMaybe<Scalars['Boolean']['input']>;
  customer_Id: Scalars['String']['input'];
  paid_in_cash: PayMethod;
  product_Id: Scalars['String']['input'];
  product_pcs: Scalars['Int']['input'];
  refunded_order?: InputMaybe<Scalars['Boolean']['input']>;
  sale_net_price: Scalars['Float']['input'];
};


export type MutationManager_SignInArgs = {
  manager_password: Scalars['String']['input'];
  manager_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSignInArgs = {
  customer_email?: InputMaybe<Scalars['String']['input']>;
  customer_password: Scalars['String']['input'];
  customer_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSignUpArgs = {
  customer_DOB?: InputMaybe<Scalars['DateTime']['input']>;
  customer_area?: InputMaybe<Area>;
  customer_email?: InputMaybe<Scalars['String']['input']>;
  customer_name: Scalars['String']['input'];
  customer_password: Scalars['String']['input'];
  customer_phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStaff_SignInArgs = {
  staff_password: Scalars['String']['input'];
  staff_phone?: InputMaybe<Scalars['String']['input']>;
};

export enum PayMethod {
  Bkash = 'Bkash',
  Cash = 'Cash',
  CreditCard = 'CreditCard'
}

export type Product = {
  __typename?: 'Product';
  image: Array<Image>;
  product_Id: Scalars['ID']['output'];
  product_brand_Id?: Maybe<Scalars['String']['output']>;
  product_category_Id: Scalars['String']['output'];
  product_description?: Maybe<Scalars['String']['output']>;
  product_name: Scalars['String']['output'];
  product_subcategory_Id: Scalars['String']['output'];
  product_usages?: Maybe<Scalars['String']['output']>;
  product_weight?: Maybe<Scalars['String']['output']>;
  purchase: Array<Purchase>;
  sales: Array<Sales>;
};

export type Product_Category = {
  __typename?: 'Product_category';
  category_Id: Scalars['ID']['output'];
  category_description?: Maybe<Scalars['String']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  product: Array<Product>;
  subcategory: Array<Product_Subcategory>;
};

export type Product_Subcategory = {
  __typename?: 'Product_subcategory';
  product: Array<Product>;
  product_category_Id: Scalars['String']['output'];
  subcategory_Id: Scalars['ID']['output'];
  subcategory_description?: Maybe<Scalars['String']['output']>;
  subcategory_name?: Maybe<Scalars['String']['output']>;
};

export type Purchase = {
  __typename?: 'Purchase';
  buyer_store_Id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  product_expiry_date?: Maybe<Scalars['DateTime']['output']>;
  product_in_stock?: Maybe<Scalars['String']['output']>;
  product_manufacturing_date?: Maybe<Scalars['DateTime']['output']>;
  product_moved_to_shelf?: Maybe<Scalars['Boolean']['output']>;
  product_net_purchase_price: Scalars['String']['output'];
  product_net_purchase_quantity: Scalars['String']['output'];
  product_price_per_pcs: Scalars['String']['output'];
  product_purchase_Id: Scalars['ID']['output'];
  product_purchase_date?: Maybe<Scalars['DateTime']['output']>;
  purchased_product_Id?: Maybe<Scalars['String']['output']>;
  seller_Id?: Maybe<Scalars['String']['output']>;
  soldOut?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  allCustomer: Array<Customer>;
  categories?: Maybe<Array<Maybe<Product_Category>>>;
  category?: Maybe<Product_Category>;
  customer: Customer;
  getAdmins?: Maybe<Admin>;
  getAllAdmins?: Maybe<Array<Maybe<Admin>>>;
  getBrandById?: Maybe<Brand>;
  getBrandByName: Array<Brand>;
  getBrands: Array<Brand>;
  getCeos: Array<Ceo>;
  getCustomer: Customer;
  getImage?: Maybe<Array<Maybe<Image>>>;
  getManagers: Array<Manager>;
  getProductByCategoryId: Array<Product>;
  getProductById?: Maybe<Product>;
  getProductByName: Array<Product>;
  getProductBySubCategoryId: Array<Product>;
  getStaffs: Array<Staff>;
  products: Array<Product>;
  purchase?: Maybe<Purchase>;
  purchases: Array<Purchase>;
  sale?: Maybe<Sales>;
  sales: Array<Sales>;
  store?: Maybe<Store>;
  stores: Array<Store>;
  subcategories: Array<Product_Subcategory>;
  subcategory?: Maybe<Product_Subcategory>;
  supplier?: Maybe<Supplier>;
  suppliers: Array<Supplier>;
};


export type QueryCategoryArgs = {
  category_Id: Scalars['String']['input'];
};


export type QueryGetBrandByIdArgs = {
  brand_name: Scalars['String']['input'];
};


export type QueryGetBrandByNameArgs = {
  brand_Id: Scalars['String']['input'];
};


export type QueryGetCustomerArgs = {
  customer_Id: Scalars['String']['input'];
};


export type QueryGetImageArgs = {
  product_Id: Scalars['String']['input'];
};


export type QueryGetProductByCategoryIdArgs = {
  product_category_Id: Scalars['String']['input'];
};


export type QueryGetProductByIdArgs = {
  product_Id: Scalars['String']['input'];
};


export type QueryGetProductByNameArgs = {
  product_name: Scalars['String']['input'];
};


export type QueryGetProductBySubCategoryIdArgs = {
  product_subcategory_Id: Scalars['String']['input'];
};


export type QueryPurchaseArgs = {
  product_purchase_Id: Scalars['String']['input'];
};


export type QuerySaleArgs = {
  sale_Id: Scalars['String']['input'];
};


export type QueryStoreArgs = {
  store_Id: Scalars['String']['input'];
};


export type QuerySubcategoryArgs = {
  subcategory_Id: Scalars['String']['input'];
};


export type QuerySupplierArgs = {
  supplier_Id: Scalars['String']['input'];
};

export enum Role {
  Admin = 'admin',
  Ceo = 'ceo',
  Customer = 'customer',
  Manager = 'manager',
  Staff = 'staff'
}

export type Sales = {
  __typename?: 'Sales';
  canceled_order?: Maybe<Scalars['Boolean']['output']>;
  customer_Id: Scalars['String']['output'];
  paid_in_cash: PayMethod;
  product_Id: Scalars['String']['output'];
  product_pcs: Scalars['Int']['output'];
  refunded_order?: Maybe<Scalars['Boolean']['output']>;
  sale_Id: Scalars['ID']['output'];
  sale_date: Scalars['DateTime']['output'];
  sale_net_price: Scalars['Float']['output'];
};

export type Staff = {
  __typename?: 'Staff';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Role>;
  staff_Id: Scalars['ID']['output'];
  staff_email: Scalars['String']['output'];
  staff_name: Scalars['String']['output'];
  staff_password: Scalars['String']['output'];
  staff_phone: Scalars['String']['output'];
  store_code?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Store = {
  __typename?: 'Store';
  Purchase: Array<Purchase>;
  store_Id: Scalars['ID']['output'];
  store_area?: Maybe<Area>;
  store_code?: Maybe<Scalars['String']['output']>;
  store_email?: Maybe<Scalars['String']['output']>;
  store_name: Scalars['String']['output'];
};

export type Supplier = {
  __typename?: 'Supplier';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  purchase: Array<Purchase>;
  supplier_Id: Scalars['ID']['output'];
  supplier_area?: Maybe<Area>;
  supplier_email?: Maybe<Scalars['String']['output']>;
  supplier_name: Scalars['String']['output'];
  supplier_phone: Scalars['String']['output'];
  supplier_store_name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Admin_SignInMutationVariables = Exact<{
  adminPassword: Scalars['String']['input'];
  adminPhone?: InputMaybe<Scalars['String']['input']>;
}>;


export type Admin_SignInMutation = { __typename?: 'Mutation', admin_signIn?: { __typename?: 'Admin', admin_Id: string } | null };

export type CreateAdminMutationVariables = Exact<{
  adminName: Scalars['String']['input'];
  adminPassword: Scalars['String']['input'];
  adminPhone?: InputMaybe<Scalars['String']['input']>;
  adminEmail?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmin?: { __typename?: 'Admin', admin_Id: string } | null };

export type GetAdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminsQuery = { __typename?: 'Query', getAdmins?: { __typename?: 'Admin', admin_Id: string } | null };

export type GetAllAdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdminsQuery = { __typename?: 'Query', getAllAdmins?: Array<{ __typename?: 'Admin', admin_name: string, admin_phone: string, admin_email: string, created_at?: any | null } | null> | null };

export type Ceo_SignInMutationVariables = Exact<{
  ceoPassword: Scalars['String']['input'];
  ceoPhone?: InputMaybe<Scalars['String']['input']>;
}>;


export type Ceo_SignInMutation = { __typename?: 'Mutation', ceo_signIn?: { __typename?: 'Ceo', ceo_Id: string, ceo_phone: string } | null };

export type CreateCeoMutationVariables = Exact<{
  ceoName: Scalars['String']['input'];
  ceoPassword: Scalars['String']['input'];
  ceoPhone?: InputMaybe<Scalars['String']['input']>;
  ceoEmail?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCeoMutation = { __typename?: 'Mutation', createCeo?: { __typename?: 'Ceo', ceo_Id: string } | null };

export type GetCeosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCeosQuery = { __typename?: 'Query', getCeos: Array<{ __typename?: 'Ceo', ceo_Id: string, ceo_name: string, ceo_email: string, ceo_phone: string, created_at?: any | null }> };

export type CustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', customer_Id: string, customer_name: string, role?: Role | null } };

export type GetCustomerQueryVariables = Exact<{
  customerId: Scalars['String']['input'];
}>;


export type GetCustomerQuery = { __typename?: 'Query', getCustomer: { __typename?: 'Customer', customer_Id: string, customer_name: string } };

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', allCustomer: Array<{ __typename?: 'Customer', customer_Id: string, customer_name: string, customer_email: string, customer_phone: string, customer_area?: Area | null, customer_DOB?: any | null }> };

export type SignInMutationVariables = Exact<{
  customerPassword: Scalars['String']['input'];
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'Customer', customer_Id: string, customer_phone: string, customer_email: string } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut?: boolean | null };

export type SignUpMutationVariables = Exact<{
  customerName: Scalars['String']['input'];
  customerPassword: Scalars['String']['input'];
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'Customer', customer_Id: string, customer_name: string } | null };

export type Image_UploadMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
  productId: Scalars['String']['input'];
  imageDescription?: InputMaybe<Scalars['String']['input']>;
}>;


export type Image_UploadMutation = { __typename?: 'Mutation', image_upload?: boolean | null };

export type CreateBrandMutationVariables = Exact<{
  brandName?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateBrandMutation = { __typename?: 'Mutation', createBrand?: { __typename?: 'Brand', brand_Id: string } | null };

export type GetBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandsQuery = { __typename?: 'Query', getBrands: Array<{ __typename?: 'Brand', brand_Id: string, brand_name?: string | null }> };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Product_category', category_Id: string, category_description?: string | null, category_name?: string | null } | null> | null };

export type CreateCategoryMutationVariables = Exact<{
  categoryName: Scalars['String']['input'];
  categoryDescription?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'Product_category', category_Id: string } | null };

export type CreateSubCategoryMutationVariables = Exact<{
  productCategoryId: Scalars['String']['input'];
  subcategoryName?: InputMaybe<Scalars['String']['input']>;
  subcategoryDescription?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateSubCategoryMutation = { __typename?: 'Mutation', createSubCategory: { __typename?: 'Product_subcategory', subcategory_Id: string } };

export type SubcategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type SubcategoriesQuery = { __typename?: 'Query', subcategories: Array<{ __typename?: 'Product_subcategory', subcategory_Id: string, subcategory_description?: string | null, subcategory_name?: string | null }> };

export type CreateProductMutationVariables = Exact<{
  productName: Scalars['String']['input'];
  productCategoryId: Scalars['String']['input'];
  productSubcategoryId: Scalars['String']['input'];
  productDescription?: InputMaybe<Scalars['String']['input']>;
  productWeight?: InputMaybe<Scalars['String']['input']>;
  productUsages?: InputMaybe<Scalars['String']['input']>;
  productBrandId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', product_Id: string } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', product_Id: string, product_brand_Id?: string | null, product_category_Id: string, product_description?: string | null, product_name: string, product_subcategory_Id: string, product_usages?: string | null, product_weight?: string | null }> };

export type CreateManagerMutationVariables = Exact<{
  managerName: Scalars['String']['input'];
  managerPassword: Scalars['String']['input'];
  managerPhone?: InputMaybe<Scalars['String']['input']>;
  managerEmail?: InputMaybe<Scalars['String']['input']>;
  storeCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateManagerMutation = { __typename?: 'Mutation', createManager?: { __typename?: 'Manager', manager_Id: string } | null };

export type GetManagersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetManagersQuery = { __typename?: 'Query', getManagers: Array<{ __typename?: 'Manager', manager_Id: string, manager_name: string, manager_phone: string, manager_email: string, store_code?: string | null, created_at?: any | null }> };

export type Manager_SignInMutationVariables = Exact<{
  managerPassword: Scalars['String']['input'];
  managerPhone?: InputMaybe<Scalars['String']['input']>;
}>;


export type Manager_SignInMutation = { __typename?: 'Mutation', manager_signIn?: { __typename?: 'Manager', manager_Id: string } | null };

export type MakePurchaseMutationVariables = Exact<{
  productPricePerPcs: Scalars['String']['input'];
  productNetPurchaseQuantity: Scalars['String']['input'];
  productNetPurchasePrice: Scalars['String']['input'];
  purchasedProductId?: InputMaybe<Scalars['String']['input']>;
  productPurchaseDate?: InputMaybe<Scalars['DateTime']['input']>;
  productInStock?: InputMaybe<Scalars['String']['input']>;
  productManufacturingDate?: InputMaybe<Scalars['String']['input']>;
  productExpiryDate?: InputMaybe<Scalars['String']['input']>;
  productMovedToShelf?: InputMaybe<Scalars['Boolean']['input']>;
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
  sellerId?: InputMaybe<Scalars['String']['input']>;
  buyerStoreId?: InputMaybe<Scalars['String']['input']>;
}>;


export type MakePurchaseMutation = { __typename?: 'Mutation', makePurchase?: { __typename?: 'Purchase', product_purchase_Id: string } | null };

export type PurchasesQueryVariables = Exact<{ [key: string]: never; }>;


export type PurchasesQuery = { __typename?: 'Query', purchases: Array<{ __typename?: 'Purchase', buyer_store_Id?: string | null, createdAt?: any | null, product_expiry_date?: any | null, product_in_stock?: string | null, product_manufacturing_date?: any | null, product_moved_to_shelf?: boolean | null, product_net_purchase_price: string, product_net_purchase_quantity: string, product_price_per_pcs: string, product_purchase_Id: string, product_purchase_date?: any | null, purchased_product_Id?: string | null, seller_Id?: string | null, soldOut?: boolean | null, updatedAt?: any | null }> };

export type MakeSaleMutationVariables = Exact<{
  customerId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  productPcs: Scalars['Int']['input'];
  saleNetPrice: Scalars['Float']['input'];
  paidInCash: PayMethod;
  canceledOrder?: InputMaybe<Scalars['Boolean']['input']>;
  refundedOrder?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type MakeSaleMutation = { __typename?: 'Mutation', makeSale?: { __typename?: 'Sales', sale_Id: string } | null };

export type SalesQueryVariables = Exact<{ [key: string]: never; }>;


export type SalesQuery = { __typename?: 'Query', sales: Array<{ __typename?: 'Sales', sale_Id: string, refunded_order?: boolean | null, sale_date: any, sale_net_price: number, product_pcs: number, product_Id: string, paid_in_cash: PayMethod, customer_Id: string, canceled_order?: boolean | null }> };

export type CreateStaffMutationVariables = Exact<{
  staffName: Scalars['String']['input'];
  staffPassword: Scalars['String']['input'];
  staffPhone?: InputMaybe<Scalars['String']['input']>;
  staffEmail?: InputMaybe<Scalars['String']['input']>;
  storeCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateStaffMutation = { __typename?: 'Mutation', createStaff?: { __typename?: 'Staff', staff_Id: string } | null };

export type GetStaffsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStaffsQuery = { __typename?: 'Query', getStaffs: Array<{ __typename?: 'Staff', staff_Id: string, staff_name: string, staff_phone: string, staff_email: string, store_code?: string | null, created_at?: any | null }> };

export type Staff_SignInMutationVariables = Exact<{
  staffPassword: Scalars['String']['input'];
  staffPhone?: InputMaybe<Scalars['String']['input']>;
}>;


export type Staff_SignInMutation = { __typename?: 'Mutation', staff_signIn?: { __typename?: 'Staff', staff_Id: string } | null };

export type CreateStoreMutationVariables = Exact<{
  storeName: Scalars['String']['input'];
  storeEmail?: InputMaybe<Scalars['String']['input']>;
  storeArea?: InputMaybe<Area>;
  storeCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateStoreMutation = { __typename?: 'Mutation', createStore?: { __typename?: 'Store', store_Id: string } | null };

export type StoresQueryVariables = Exact<{ [key: string]: never; }>;


export type StoresQuery = { __typename?: 'Query', stores: Array<{ __typename?: 'Store', store_Id: string, store_area?: Area | null, store_code?: string | null, store_email?: string | null, store_name: string }> };

export type CreateSupplierMutationVariables = Exact<{
  supplierName: Scalars['String']['input'];
  supplierPhone: Scalars['String']['input'];
  supplierStoreName: Scalars['String']['input'];
  supplierEmail?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateSupplierMutation = { __typename?: 'Mutation', createSupplier?: { __typename?: 'Supplier', supplier_Id: string } | null };

export type SuppliersQueryVariables = Exact<{ [key: string]: never; }>;


export type SuppliersQuery = { __typename?: 'Query', suppliers: Array<{ __typename?: 'Supplier', supplier_Id: string, supplier_name: string, supplier_email?: string | null, supplier_phone: string, supplier_store_name: string, supplier_area?: Area | null, createdAt?: any | null }> };


export const Admin_SignInDocument = gql`
    mutation admin_signIn($adminPassword: String!, $adminPhone: String) {
  admin_signIn(admin_password: $adminPassword, admin_phone: $adminPhone) {
    admin_Id
  }
}
    `;
export const CreateAdminDocument = gql`
    mutation createAdmin($adminName: String!, $adminPassword: String!, $adminPhone: String, $adminEmail: String) {
  createAdmin(
    admin_name: $adminName
    admin_password: $adminPassword
    admin_phone: $adminPhone
    admin_email: $adminEmail
  ) {
    admin_Id
  }
}
    `;
export const GetAdminsDocument = gql`
    query getAdmins {
  getAdmins {
    admin_Id
  }
}
    `;
export const GetAllAdminsDocument = gql`
    query getAllAdmins {
  getAllAdmins {
    admin_name
    admin_phone
    admin_email
    created_at
  }
}
    `;
export const Ceo_SignInDocument = gql`
    mutation ceo_signIn($ceoPassword: String!, $ceoPhone: String) {
  ceo_signIn(ceo_password: $ceoPassword, ceo_phone: $ceoPhone) {
    ceo_Id
    ceo_phone
  }
}
    `;
export const CreateCeoDocument = gql`
    mutation createCeo($ceoName: String!, $ceoPassword: String!, $ceoPhone: String, $ceoEmail: String) {
  createCeo(
    ceo_name: $ceoName
    ceo_password: $ceoPassword
    ceo_phone: $ceoPhone
    ceo_email: $ceoEmail
  ) {
    ceo_Id
  }
}
    `;
export const GetCeosDocument = gql`
    query getCeos {
  getCeos {
    ceo_Id
    ceo_name
    ceo_email
    ceo_phone
    created_at
  }
}
    `;
export const CustomerDocument = gql`
    query customer {
  customer {
    customer_Id
    customer_name
    role
  }
}
    `;
export const GetCustomerDocument = gql`
    query getCustomer($customerId: String!) {
  getCustomer(customer_Id: $customerId) {
    customer_Id
    customer_name
  }
}
    `;
export const GetCustomersDocument = gql`
    query getCustomers {
  allCustomer {
    customer_Id
    customer_name
    customer_email
    customer_phone
    customer_area
    customer_DOB
  }
}
    `;
export const SignInDocument = gql`
    mutation signIn($customerPassword: String!, $customerPhone: String, $customerEmail: String) {
  signIn(
    customer_password: $customerPassword
    customer_phone: $customerPhone
    customer_email: $customerEmail
  ) {
    customer_Id
    customer_phone
    customer_email
  }
}
    `;
export const SignOutDocument = gql`
    mutation signOut {
  signOut
}
    `;
export const SignUpDocument = gql`
    mutation signUp($customerName: String!, $customerPassword: String!, $customerPhone: String, $customerEmail: String) {
  signUp(
    customer_name: $customerName
    customer_password: $customerPassword
    customer_phone: $customerPhone
    customer_email: $customerEmail
  ) {
    customer_Id
    customer_name
  }
}
    `;
export const Image_UploadDocument = gql`
    mutation image_upload($file: Upload!, $productId: String!, $imageDescription: String) {
  image_upload(
    file: $file
    product_Id: $productId
    image_description: $imageDescription
  )
}
    `;
export const CreateBrandDocument = gql`
    mutation createBrand($brandName: String) {
  createBrand(brand_name: $brandName) {
    brand_Id
  }
}
    `;
export const GetBrandsDocument = gql`
    query getBrands {
  getBrands {
    brand_Id
    brand_name
  }
}
    `;
export const CategoriesDocument = gql`
    query categories {
  categories {
    category_Id
    category_description
    category_name
  }
}
    `;
export const CreateCategoryDocument = gql`
    mutation createCategory($categoryName: String!, $categoryDescription: String) {
  createCategory(
    category_name: $categoryName
    category_description: $categoryDescription
  ) {
    category_Id
  }
}
    `;
export const CreateSubCategoryDocument = gql`
    mutation createSubCategory($productCategoryId: String!, $subcategoryName: String, $subcategoryDescription: String) {
  createSubCategory(
    product_category_Id: $productCategoryId
    subcategory_name: $subcategoryName
    subcategory_description: $subcategoryDescription
  ) {
    subcategory_Id
  }
}
    `;
export const SubcategoriesDocument = gql`
    query subcategories {
  subcategories {
    subcategory_Id
    subcategory_description
    subcategory_name
  }
}
    `;
export const CreateProductDocument = gql`
    mutation createProduct($productName: String!, $productCategoryId: String!, $productSubcategoryId: String!, $productDescription: String, $productWeight: String, $productUsages: String, $productBrandId: String) {
  createProduct(
    product_name: $productName
    product_category_Id: $productCategoryId
    product_subcategory_Id: $productSubcategoryId
    product_description: $productDescription
    product_weight: $productWeight
    product_usages: $productUsages
    product_brand_Id: $productBrandId
  ) {
    product_Id
  }
}
    `;
export const ProductsDocument = gql`
    query products {
  products {
    product_Id
    product_brand_Id
    product_category_Id
    product_description
    product_name
    product_subcategory_Id
    product_usages
    product_weight
  }
}
    `;
export const CreateManagerDocument = gql`
    mutation createManager($managerName: String!, $managerPassword: String!, $managerPhone: String, $managerEmail: String, $storeCode: String) {
  createManager(
    manager_name: $managerName
    manager_password: $managerPassword
    manager_phone: $managerPhone
    manager_email: $managerEmail
    store_code: $storeCode
  ) {
    manager_Id
  }
}
    `;
export const GetManagersDocument = gql`
    query getManagers {
  getManagers {
    manager_Id
    manager_name
    manager_phone
    manager_email
    store_code
    created_at
  }
}
    `;
export const Manager_SignInDocument = gql`
    mutation manager_signIn($managerPassword: String!, $managerPhone: String) {
  manager_signIn(manager_password: $managerPassword, manager_phone: $managerPhone) {
    manager_Id
  }
}
    `;
export const MakePurchaseDocument = gql`
    mutation makePurchase($productPricePerPcs: String!, $productNetPurchaseQuantity: String!, $productNetPurchasePrice: String!, $purchasedProductId: String, $productPurchaseDate: DateTime, $productInStock: String, $productManufacturingDate: String, $productExpiryDate: String, $productMovedToShelf: Boolean, $soldOut: Boolean, $sellerId: String, $buyerStoreId: String) {
  makePurchase(
    product_price_per_pcs: $productPricePerPcs
    product_net_purchase_quantity: $productNetPurchaseQuantity
    product_net_purchase_price: $productNetPurchasePrice
    purchased_product_Id: $purchasedProductId
    product_purchase_date: $productPurchaseDate
    product_in_stock: $productInStock
    product_manufacturing_date: $productManufacturingDate
    product_expiry_date: $productExpiryDate
    product_moved_to_shelf: $productMovedToShelf
    soldOut: $soldOut
    seller_Id: $sellerId
    buyer_store_Id: $buyerStoreId
  ) {
    product_purchase_Id
  }
}
    `;
export const PurchasesDocument = gql`
    query purchases {
  purchases {
    buyer_store_Id
    createdAt
    product_expiry_date
    product_in_stock
    product_manufacturing_date
    product_moved_to_shelf
    product_net_purchase_price
    product_net_purchase_quantity
    product_price_per_pcs
    product_purchase_Id
    product_purchase_date
    purchased_product_Id
    seller_Id
    soldOut
    updatedAt
  }
}
    `;
export const MakeSaleDocument = gql`
    mutation makeSale($customerId: String!, $productId: String!, $productPcs: Int!, $saleNetPrice: Float!, $paidInCash: PayMethod!, $canceledOrder: Boolean, $refundedOrder: Boolean) {
  makeSale(
    customer_Id: $customerId
    product_Id: $productId
    product_pcs: $productPcs
    sale_net_price: $saleNetPrice
    paid_in_cash: $paidInCash
    canceled_order: $canceledOrder
    refunded_order: $refundedOrder
  ) {
    sale_Id
  }
}
    `;
export const SalesDocument = gql`
    query sales {
  sales {
    sale_Id
    refunded_order
    sale_date
    sale_net_price
    product_pcs
    product_Id
    paid_in_cash
    customer_Id
    canceled_order
  }
}
    `;
export const CreateStaffDocument = gql`
    mutation createStaff($staffName: String!, $staffPassword: String!, $staffPhone: String, $staffEmail: String, $storeCode: String) {
  createStaff(
    staff_name: $staffName
    staff_password: $staffPassword
    staff_phone: $staffPhone
    staff_email: $staffEmail
    store_code: $storeCode
  ) {
    staff_Id
  }
}
    `;
export const GetStaffsDocument = gql`
    query getStaffs {
  getStaffs {
    staff_Id
    staff_name
    staff_phone
    staff_email
    store_code
    created_at
  }
}
    `;
export const Staff_SignInDocument = gql`
    mutation staff_signIn($staffPassword: String!, $staffPhone: String) {
  staff_signIn(staff_password: $staffPassword, staff_phone: $staffPhone) {
    staff_Id
  }
}
    `;
export const CreateStoreDocument = gql`
    mutation createStore($storeName: String!, $storeEmail: String, $storeArea: Area, $storeCode: String) {
  createStore(
    store_name: $storeName
    store_email: $storeEmail
    store_area: $storeArea
    store_code: $storeCode
  ) {
    store_Id
  }
}
    `;
export const StoresDocument = gql`
    query stores {
  stores {
    store_Id
    store_area
    store_code
    store_email
    store_name
  }
}
    `;
export const CreateSupplierDocument = gql`
    mutation createSupplier($supplierName: String!, $supplierPhone: String!, $supplierStoreName: String!, $supplierEmail: String) {
  createSupplier(
    supplier_name: $supplierName
    supplier_phone: $supplierPhone
    supplier_store_name: $supplierStoreName
    supplier_email: $supplierEmail
  ) {
    supplier_Id
  }
}
    `;
export const SuppliersDocument = gql`
    query suppliers {
  suppliers {
    supplier_Id
    supplier_name
    supplier_email
    supplier_phone
    supplier_store_name
    supplier_area
    createdAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    admin_signIn(variables: Admin_SignInMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Admin_SignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Admin_SignInMutation>(Admin_SignInDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'admin_signIn', 'mutation', variables);
    },
    createAdmin(variables: CreateAdminMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAdminMutation>(CreateAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAdmin', 'mutation', variables);
    },
    getAdmins(variables?: GetAdminsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAdminsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminsQuery>(GetAdminsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAdmins', 'query', variables);
    },
    getAllAdmins(variables?: GetAllAdminsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllAdminsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllAdminsQuery>(GetAllAdminsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllAdmins', 'query', variables);
    },
    ceo_signIn(variables: Ceo_SignInMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Ceo_SignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Ceo_SignInMutation>(Ceo_SignInDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ceo_signIn', 'mutation', variables);
    },
    createCeo(variables: CreateCeoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCeoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCeoMutation>(CreateCeoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCeo', 'mutation', variables);
    },
    getCeos(variables?: GetCeosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCeosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCeosQuery>(GetCeosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCeos', 'query', variables);
    },
    customer(variables?: CustomerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CustomerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CustomerQuery>(CustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'customer', 'query', variables);
    },
    getCustomer(variables: GetCustomerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCustomerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCustomerQuery>(GetCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCustomer', 'query', variables);
    },
    getCustomers(variables?: GetCustomersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCustomersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCustomersQuery>(GetCustomersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCustomers', 'query', variables);
    },
    signIn(variables: SignInMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignInMutation>(SignInDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signIn', 'mutation', variables);
    },
    signOut(variables?: SignOutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignOutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignOutMutation>(SignOutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signOut', 'mutation', variables);
    },
    signUp(variables: SignUpMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignUpMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignUpMutation>(SignUpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signUp', 'mutation', variables);
    },
    image_upload(variables: Image_UploadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Image_UploadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Image_UploadMutation>(Image_UploadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'image_upload', 'mutation', variables);
    },
    createBrand(variables?: CreateBrandMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateBrandMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateBrandMutation>(CreateBrandDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createBrand', 'mutation', variables);
    },
    getBrands(variables?: GetBrandsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBrandsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBrandsQuery>(GetBrandsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBrands', 'query', variables);
    },
    categories(variables?: CategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoriesQuery>(CategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'categories', 'query', variables);
    },
    createCategory(variables: CreateCategoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCategoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCategoryMutation>(CreateCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCategory', 'mutation', variables);
    },
    createSubCategory(variables: CreateSubCategoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateSubCategoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateSubCategoryMutation>(CreateSubCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createSubCategory', 'mutation', variables);
    },
    subcategories(variables?: SubcategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SubcategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubcategoriesQuery>(SubcategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'subcategories', 'query', variables);
    },
    createProduct(variables: CreateProductMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProductMutation>(CreateProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createProduct', 'mutation', variables);
    },
    products(variables?: ProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductsQuery>(ProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'products', 'query', variables);
    },
    createManager(variables: CreateManagerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManagerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManagerMutation>(CreateManagerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManager', 'mutation', variables);
    },
    getManagers(variables?: GetManagersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetManagersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetManagersQuery>(GetManagersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getManagers', 'query', variables);
    },
    manager_signIn(variables: Manager_SignInMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Manager_SignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Manager_SignInMutation>(Manager_SignInDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'manager_signIn', 'mutation', variables);
    },
    makePurchase(variables: MakePurchaseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MakePurchaseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakePurchaseMutation>(MakePurchaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'makePurchase', 'mutation', variables);
    },
    purchases(variables?: PurchasesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PurchasesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PurchasesQuery>(PurchasesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'purchases', 'query', variables);
    },
    makeSale(variables: MakeSaleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MakeSaleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakeSaleMutation>(MakeSaleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'makeSale', 'mutation', variables);
    },
    sales(variables?: SalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SalesQuery>(SalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sales', 'query', variables);
    },
    createStaff(variables: CreateStaffMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateStaffMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStaffMutation>(CreateStaffDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createStaff', 'mutation', variables);
    },
    getStaffs(variables?: GetStaffsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStaffsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStaffsQuery>(GetStaffsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStaffs', 'query', variables);
    },
    staff_signIn(variables: Staff_SignInMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Staff_SignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Staff_SignInMutation>(Staff_SignInDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'staff_signIn', 'mutation', variables);
    },
    createStore(variables: CreateStoreMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateStoreMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStoreMutation>(CreateStoreDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createStore', 'mutation', variables);
    },
    stores(variables?: StoresQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StoresQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoresQuery>(StoresDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stores', 'query', variables);
    },
    createSupplier(variables: CreateSupplierMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateSupplierMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateSupplierMutation>(CreateSupplierDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createSupplier', 'mutation', variables);
    },
    suppliers(variables?: SuppliersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SuppliersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuppliersQuery>(SuppliersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suppliers', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;