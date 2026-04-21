import { create } from 'zustand';
import { Lang, translations, TranslationKey } from './i18n';

export type PageType = 'home' | 'product' | 'cart' | 'checkout' | 'about' | 'contact' | 'returns' | 'faq' | 'shipping' | 'privacy' | 'success';

export type CartItem = {
  id: string;
  nameEn: string;
  nameAr: string;
  size: 'small' | 'large';
  price: number;
  quantity: number;
  image: string;
};

interface StoreState {
  lang: Lang;
  page: PageType;
  showSplash: boolean;
  cart: CartItem[];
  selectedSize: 'small' | 'large';

  // Actions
  setLang: (lang: Lang) => void;
  setPage: (page: PageType) => void;
  hideSplash: () => void;
  toggleLang: () => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, size: 'small' | 'large', quantity: number) => void;
  removeFromCart: (id: string, size: 'small' | 'large') => void;
  clearCart: () => void;
  setSelectedSize: (size: 'small' | 'large') => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  t: (key: TranslationKey) => string;
}

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('glowwave-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('glowwave-cart', JSON.stringify(cart));
  } catch {
    // ignore
  }
}

export const useStore = create<StoreState>((set, get) => ({
  lang: 'ar',
  page: 'home',
  showSplash: true,
  cart: [],
  selectedSize: 'small',

  setLang: (lang) => set({ lang }),
  setPage: (page) => set({ page }),
  hideSplash: () => set({ showSplash: false }),
  toggleLang: () => set((state) => ({ lang: state.lang === 'en' ? 'ar' : 'en' })),
  setSelectedSize: (size) => set({ selectedSize: size }),

  addToCart: (item) => {
    const cart = loadCart();
    const existing = cart.find((c) => c.id === item.id && c.size === item.size);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    saveCart(cart);
    set({ cart });
  },

  updateQuantity: (id, size, quantity) => {
    const cart = loadCart().map((item) =>
      item.id === id && item.size === size ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter((item) => item.quantity > 0);
    saveCart(cart);
    set({ cart });
  },

  removeFromCart: (id, size) => {
    const cart = loadCart().filter((item) => !(item.id === id && item.size === size));
    saveCart(cart);
    set({ cart });
  },

  clearCart: () => {
    saveCart([]);
    set({ cart: [] });
  },

  getCartTotal: () => {
    return get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getCartCount: () => {
    return get().cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  t: (key) => {
    const lang = get().lang;
    return translations[lang][key] || translations.en[key] || key;
  },
}));
