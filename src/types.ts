export interface Hotel {
  id: string;
  name: string;
  country: string;
  state?: string;
  currency: string;
  currencySymbol: string;
  language: string;
  timezone: string;
  address: string;
  taxNumber: string;
  phone: string;
  email: string;
  logo?: string;
  taxRate: number; // default percentage, e.g. 12 for 12%
  taxLabel?: string;
}

export type UserRole =
  | 'Super Admin'
  | 'System Owner'
  | 'Hotel Admin'
  | 'Manager'
  | 'Receptionist'
  | 'Accountant'
  | 'Housekeeping Staff';

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  hotelId: string;
  isApproved?: boolean;
  hotelName?: string;
}

export interface RoomType {
  id: string;
  name: string;
  basePrice: number;
  amenities: string[];
  capacity: number;
  hotelId: string;
}

export type RoomStatus =
  | 'Available'
  | 'Occupied'
  | 'Reserved'
  | 'Cleaning'
  | 'Maintenance'
  | 'Out of Service';

export interface Room {
  id: string;
  roomNumber: string;
  floor: string;
  roomTypeId: string;
  status: RoomStatus;
  hotelId: string;
  assignedStaffId?: string;
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  idType: 'Passport' | 'National ID' | 'Driving License';
  idNumber: string;
  idImage?: string;
  address?: string;
  isLoyal?: boolean;
  isBlacklisted?: boolean;
  hotelId: string;
}

export type BookingStatus = 'Reserved' | 'Checked In' | 'Checked Out' | 'Cancelled';

export interface Booking {
  id: string;
  guestId: string;
  roomTypeId: string;
  roomId: string; // assigned room
  checkInDate: string; // YYYY-MM-DD
  checkOutDate: string; // YYYY-MM-DD
  status: BookingStatus;
  totalAmount: number;
  paidAmount: number;
  hotelId: string;
  notes?: string;
  roomCharges: number;
  foodCharges: number;
  laundryCharges: number;
  minibarCharges: number;
  extraCharges: number;
  discount: number;
  taxAmount: number;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  paymentMethod: 'Cash' | 'Card' | 'Bank Transfer' | 'Online';
  paymentDate: string;
  category: 'Room Charges' | 'Food Charges' | 'Laundry' | 'Mini Bar' | 'Extra Charges';
  hotelId: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  salary: number;
  department: string;
  hotelId: string;
  attendance?: { [date: string]: 'Present' | 'Absent' | 'Leave' };
}

export interface Supplier {
  id: string;
  name: string;
  contactName: string;
  phone: string;
  email: string;
  hotelId: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  minQuantity: number;
  category: string;
  supplierId: string;
  hotelId: string;
}

export interface RestaurantItem {
  id: string;
  name: string;
  price: number;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Beverages' | 'Snacks';
  isAvailable: boolean;
}

export interface RestaurantOrder {
  id: string;
  roomId: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: 'Pending' | 'Completed' | 'Cancelled';
  orderType: 'Table Order' | 'Room Service';
  hotelId: string;
  orderDate: string;
}

export interface FinancialTransaction {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
  type: 'income' | 'expense';
  hotelId: string;
}

export interface SystemNotification {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  type: 'booking' | 'payment' | 'checkout' | 'system' | 'stock';
  hotelId: string;
}
