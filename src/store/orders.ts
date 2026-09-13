import { defineStore } from "pinia";

// ================= ORDER ITEM TYPE =================

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image?: string;
  quantity: number;
}

// ================= CUSTOMER TYPE =================

export interface Customer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  note?: string;
  paymentMethod: string;
}

// ================= ORDER TYPE =================

export interface Order {
  id: string;
  date: string;
  status: "Confirmed" | "Processing" | "Shipping" | "Delivered" | "Completed";
  total: number;
  items: OrderItem[];
  customer: Customer;
  userId?: string;
}

// ================= ORDER STORE =================

export const useOrderStore = defineStore("orders", {

  // ================= STATE =================

  state: () => ({
    orders: [] as Order[],
  }),

  // ================= GETTERS =================

  getters: {

    // Get all orders
    allOrders: (state): Order[] => {
      return state.orders;
    },

    // Get orders by user ID
    getUserOrders: (state) => {
      return (userId: string): Order[] => {
        return state.orders.filter(order => order.userId === userId);
      };
    },

    // Get order by ID
    getOrderById: (state) => {
      return (orderId: string): Order | undefined => {
        return state.orders.find(order => order.id === orderId);
      };
    },

    // Get orders count by status
    ordersCountByStatus: (state) => {
      return (status: Order["status"]): number => {
        return state.orders.filter(order => order.status === status).length;
      };
    },
  },

  // ================= ACTIONS =================

  actions: {

    // Initialize store from localStorage
    init() {
      const savedOrders = localStorage.getItem("orders");
      if (savedOrders) {
        this.orders = JSON.parse(savedOrders);
      }
    },

    // Add a new order
    addOrder(order: Omit<Order, "id" | "date">): Order {
      const newOrder: Order = {
        ...order,
        id: "ORD-" + Date.now(),
        date: new Date().toLocaleDateString(),
      };

      this.orders.unshift(newOrder);
      this.saveToLocalStorage();
      return newOrder;
    },

    // Update order status
    updateOrderStatus(orderId: string, status: Order["status"]): boolean {
      const orderIndex = this.orders.findIndex(order => order.id === orderId);
      if (orderIndex !== -1) {
        this.orders[orderIndex].status = status;
        this.saveToLocalStorage();
        return true;
      }
      return false;
    },

    // User confirms receipt - Delivered → Completed
    confirmReceived(orderId: string): boolean {
      const orderIndex = this.orders.findIndex(
        order => order.id === orderId
      );

      if (orderIndex !== -1 && this.orders[orderIndex].status === "Delivered") {
        this.orders[orderIndex].status = "Completed";
        this.saveToLocalStorage();
        return true;
      }

      return false;
    },

    // Delete an order
    deleteOrder(orderId: string): boolean {
      const orderIndex = this.orders.findIndex(order => order.id === orderId);
      if (orderIndex !== -1) {
        this.orders.splice(orderIndex, 1);
        this.saveToLocalStorage();
        return true;
      }
      return false;
    },

    // Save to localStorage
    saveToLocalStorage() {
      localStorage.setItem("orders", JSON.stringify(this.orders));
    },
  },
});
