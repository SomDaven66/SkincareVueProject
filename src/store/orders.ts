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
        try {
          const parsed = JSON.parse(savedOrders);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.orders = parsed;
            return;
          }
        } catch (e) {
          console.error("Error parsing orders:", e);
        }
      }

      // Default initial orders if empty
      this.orders = [
        {
          id: "ORD-1001",
          date: "2026-09-07",
          status: "Completed",
          total: 25.00,
          items: [
            { id: 1, name: "Gentle Acne Cleanser", price: 25.00, category: "Cleanser", quantity: 1 }
          ],
          customer: {
            fullName: "Sokha Kim",
            email: "sokha@example.com",
            phone: "012345678",
            address: "Street 271",
            city: "Phnom Penh",
            postalCode: "12000",
            paymentMethod: "Credit Card"
          }
        },
        {
          id: "ORD-1002",
          date: "2026-09-07",
          status: "Confirmed",
          total: 35.00,
          items: [
            { id: 2, name: "Hydrating Serum", price: 35.00, category: "Serum", quantity: 1 }
          ],
          customer: {
            fullName: "Dara Chan",
            email: "dara@example.com",
            phone: "098765432",
            address: "Monivong Blvd",
            city: "Phnom Penh",
            postalCode: "12000",
            paymentMethod: "ABA PAY"
          }
        },
        {
          id: "ORD-1003",
          date: "2026-09-06",
          status: "Processing",
          total: 48.00,
          items: [
            { id: 3, name: "Daily Sunscreen SPF50+", price: 18.00, category: "Sunscreen", quantity: 1 },
            { id: 4, name: "Moisturizing Cream", price: 30.00, category: "Cream", quantity: 1 }
          ],
          customer: {
            fullName: "Lina Heng",
            email: "lina@example.com",
            phone: "011223344",
            address: "Toul Kork",
            city: "Phnom Penh",
            postalCode: "12000",
            paymentMethod: "Cash on Delivery"
          }
        }
      ];
      this.saveToLocalStorage();
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
