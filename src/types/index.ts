type KycDocuments = {
  idType: string;
  idNumber: string;
  files: string[];
};

type BranchDetails = {
  name: string;
  country: string;
  state: string;
  city: string;
  address: string;
  pincodes: string[];
  email: string;
  mobile: string;
  landline?: string;
};

type BranchAdminDetails = {
  avatar: string;
  email: string;
  name: string;
  mobile: string;
  address: string;
  kycDocuments: KycDocuments[];
};

type BranchAccountType = {
  paymentMode: "PREPAID" | "POSTPAID";
  paymentCycle?: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | "NONE";
};

type BranchAwbLimit = {
  from: string;
  to: string;
};

type Branch = {
  // generated via superadmin
  id: string;
  email: string;
  password: string;
  status: "ACTIVE" | "INACTIVE" | "BLOCKED";
  walletId: string;
  balance: string;
  awblimit: BranchAwbLimit;

  // basic details
  branchDetails?: BranchDetails;

  // hub admin details
  branchAdminDetails?: BranchAdminDetails;

  // branch account type
  branchAccountType: BranchAccountType;

  // branch awb limit
  awbLimits: AwbLimit[];

  // branch balance
  balanceHistory: Balance[];

  // time stapms
  createdAt: Date;
  updatedAt: Date;
};

// Branch Balance
type Balance = {
  id: string;
  walletId: string;
  branchId: string;
  balance: string;
  reason: string;
  type: "CREDIT" | "DEBIT";
  createdAt: Date;
  updatedAt: Date;
};

type AwbLimit = {
  id: string;
  branchId: string;
  from: string;
  to: string;
  createdAt: Date;
  updatedAt: Date;
};

type WarehouseContactDetails = {
  managername?: string;
  mobile?: string;
  alternativeMobile?: string;
  email?: string;
};

type WareHouseAddressDetails = {
  pincode?: string;
  country?: string;
  state?: string;
  city?: string;
  address1?: string;
  address2?: string;
  defaultaddress?: boolean;
};

type WareHouse = {
  id: string;
  branchId: string;
  status: "ACTIVE" | "INACTIVE";
  name: string;
  createdBy: string;
  contactdetails: WarehouseContactDetails;
  addressdetails: WareHouseAddressDetails;

  createdAt: Date;
  updatedAt: Date;
};

type OrderUserContactdetails = {
  mobile1: string;
  mobile2?: string;
  email?: string;
};

type OrderUserAddressDetails = {
  address1: string;
  address2?: string;
  pincode: string;
  country: string;
  state: string;
  city: string;
};

type OrderSender = {
  id?: string;
  name: string;
  gstNo?: string;
  contactdetails: OrderUserContactdetails;
  addressdetails: OrderUserAddressDetails;
};

type OrderReciever = {
  name: string;
  contactdetails: OrderUserContactdetails;
  addressdetails: OrderUserAddressDetails;
};

type OrderItem = {
  name: string;
  hsn?: string;
  quantity: string;
};

type PackageItem = {
  count: string;
  weight: string; // in kg
  length: string; // in cm
  width: string; // in cm
  height: string; // in cm
};

type chargeDataType = {
  chargeHead: string;
  value: string;
  branchValue?: string;
  type: "PERCENTAGE" | "FIXED";
  branchValueChargeHead?: string;
  branchValueChargeType?: "PERCENTAGE" | "FIXED";
};

type PackageDetails = {
  totalWeight: string; // in kg
  volumetricWeight: string; // in kg
  items: PackageItem[];
  doxType: "DOX" | "NON DOX";
  awbCharge?: string;
  orcCharge?: chargeDataType;
  crcCharge?: chargeDataType;
  fovCharge?: chargeDataType;
  handelingCharge?: string;
  odaCharge?: string;
  packingCharge?: string;
  productAmount?: string;
  codCharge?: chargeDataType;
  fscCharge?: chargeDataType;
  insuranceCharge?: string;
  toPayAmount?: string;
  type?: "PREPAID" | "COD" | "TO PAY";
};

type OrderPickupAddress = {
  address1: string;
  address2?: string;
  pincode: string;
  country: string;
  state: string;
  city: string;
};

type EWayBillDetails = {
  ewayBillNumber: string;
  document: string;
  billremark?: string;
};

export type Order = {
  // Order Details
  id: string;
  branchId: string;
  warehouseId: string; // warehouse id where order is picked from

  orderAmount: string; // total amount of order which is taken from user
  shippingAmount: string; // shipping amount which is taken from user
  branchProfit: string; // profit amount which is taken from user

  totalCustomerInvoiceAmount: string; // total amount of order which is taken from user
  totalShippingInvoiceAmount: string; // shipping amount which is taken from user
  collectableAmount?: string; // profit amount which is taken from user

  awbNumber: string;
  referenceId?: string;
  orderDate: Date;
  status:
    | "ORDER CONFIRMED"
    | "ORDER FORWARDED"
    | "IN TRANSIT"
    | "OUT FOR DELIVERY"
    | "DELIVERED"
    | "CANCELLED"
    | "RETURNED"
    | "NOT DELIVERED";
  serviceProvider:
    | "MEGHA EXPRESS"
    | "DTDC"
    | "SHREE MARUTI"
    | "SHREE TIRUPATI"
    | "DELHIVERY"
    | "DHL"
    | "EKART"
    | "RIVIGO"
    | "MOVIN"
    | "BLUE DART"
    | "UPS"
    | "FEDEX";
  paymentType: "ACCOUNT" | "CASH";
  deliverVia: "AIR" | "SURFACE";
  speedType: "STANDARD" | "EXPRESS";

  // Items
  items: OrderItem[];

  sender: OrderSender;
  reciever: OrderReciever;

  pickupadress: WareHouse;

  manualpickupaddress?: OrderPickupAddress;

  // package details (weight dimensions)
  packagedetails: PackageDetails;
  ewaybilldetails?: EWayBillDetails;

  // Order Track
  trackingrecords: TrackingRecord[];
  ekartResponse?: EkartResponse;

  // DRS related
  isDelivered: boolean;
  drsId?: string; // drs id if order is delivered by drs
  drsScanCopy?: string; // drs scan copy
  reasonMessage?: string; // reason message if order is cancelled or returned
  returnOrderCharge?: string; // return order charge if order is returned

  createdAt: Date;
  updatedAt: Date;
};

type TrackingRecord = {
  id: string;
  orderId: string;
  branchFrom: Branch; // data auto filled
  branchTo: Branch; // changed by admin
  branchFromId: string; // data auto filled
  branchToId: string; // changed by admin
  fromDeliveryBoyId?: string; // data auto filled
  toDeliveryBoyId?: string; // changed by admin
  inscan?: boolean; //auto updaet on status recieved
  outscan?: boolean; //auto updaet on status picked
  status?: "PICKED" | "RECIEVED"; //  picked update avaliabel on branch from  dashboard
  // recieved update avaliabel on branch to dashboard and admin dashboard
  currentOrderStatus:
    | "ORDER CONFIRMED"
    | "ORDER FORWARDED"
    | "IN TRANSIT"
    | "OUT FOR DELIVERY"
    | "DELIVERED"
    | "CANCELLED"
    | "RETURNED"
    | "NOT DELIVERED"; // auto update on status change
  statusMessage: string; // auto update on status change
  showToUser?: boolean; // show to user or not
  enableDrs?: boolean; // enable drs or not
  createdAt: Date;
  updatedAt: Date;
  isDrsRelated?: boolean; // if drs is related to this tracking record
};

type EkartShipmentTrackingDetail = {
  date: number;
  city: string;
  statusDetails: string;
};

type EkartResponse = {
  expectedDeliveryDate: number;
  faShipment: boolean;
  reachedNearestHub: boolean;
  receiverName: string;
  merchantName: string;
  sourceCity: string;
  destinationCity: string;
  shipmentTrackingDetails: EkartShipmentTrackingDetail[];
};
