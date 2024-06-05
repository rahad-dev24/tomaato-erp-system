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

export type AllCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCustomerQuery = { __typename?: 'Query', allCustomer: Array<{ __typename?: 'Customer', customer_Id: string }> };

export type Image_UploadMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type Image_UploadMutation = { __typename?: 'Mutation', image_upload?: boolean | null };


export const AllCustomerDocument = gql`
    query AllCustomer {
  allCustomer {
    customer_Id
  }
}
    `;
export const Image_UploadDocument = gql`
    mutation image_upload($file: Upload!) {
  image_upload(file: $file)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllCustomer(variables?: AllCustomerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllCustomerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllCustomerQuery>(AllCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllCustomer', 'query', variables);
    },
    image_upload(variables: Image_UploadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Image_UploadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Image_UploadMutation>(Image_UploadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'image_upload', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;