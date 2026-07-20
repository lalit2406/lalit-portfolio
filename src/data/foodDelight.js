export const foodCodeSnippet = `// TypeScript Mongoose Database Schema
import { Schema, model, Document } from 'mongoose';

export interface IOrder extends Document {
  userId: Schema.Types.ObjectId;
  items: Array<{ itemId: string; name: string; quantity: number; price: number }>;
  totalPrice: number;
  deliveryAddress: string;
  status: string;
}

const orderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  items: [{
    itemId: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  status: { type: String, default: 'PENDING' }
}, { timestamps: true });

export const Order = model<IOrder>('Order', orderSchema);`;

export const foodModulesData = {
  Home: {
    desktop: 'food-home-desktop.webp',
    mobile: 'food-home-mobile.webp',
    title: 'Home Page',
    purpose: 'Introduces customers to the restaurant network and prompts location entry.',
    functionality: 'Simple location form search inputs, category grid list redirects, and promo cards.',
    implementation: 'Rendered with semantic HTML layout grids and responsive CSS flex layouts.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    chips: ['Static HTML', 'CSS Grids']
  },
  'Restaurant Search': {
    desktop: 'restaurants-available-desktop.webp',
    mobile: 'restaurants-available-mobile.webp',
    title: 'Restaurant Listings',
    purpose: 'Helps users view open restaurants filtering by pincode values.',
    functionality: 'Active status indicator labels, matching food card lists, and directory maps.',
    implementation: 'Performs query parameter GET requests to Express backend API routers.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    chips: ['Directory UI', 'API Requests']
  },
  'Restaurant Details': {
    desktop: 'food-listing-desktop.webp',
    mobile: 'food-listing-mobile.webp',
    title: 'Restaurant Menu page',
    purpose: 'Displays available food menu item lists and prices details.',
    functionality: 'Dish category sections list, and local cart item selection counters.',
    implementation: 'Maintains active selections locally using browser storage elements.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    chips: ['Menu Lists', 'Cart Sync']
  },
  Authentication: {
    desktop: 'auth-desktop.webp',
    mobile: 'auth-mobile.webp',
    title: 'Secure Logins Page',
    purpose: 'Registers new customer profiles and authenticates session queries.',
    functionality: 'Login form fields, secure password entries, and active JWT storage key saving.',
    implementation: 'Pipes credentials through Express bcrypt validation gates to database layers.',
    techs: ['JavaScript', 'Express.js', 'MongoDB'],
    chips: ['JWT Auth', 'Form Valids']
  },
  'Admin Panel': {
    desktop: 'admin-desktop.webp',
    mobile: 'admin-mobile.webp',
    title: 'Merchant Dashboard',
    purpose: 'Allows staff to manage the active food menu and view received orders.',
    functionality: 'Menu addition inputs, active status toggle keys, and historical order rows lists.',
    implementation: 'Blocks endpoints operations using custom Express token verification middleware.',
    techs: ['JavaScript', 'Node.js', 'Express.js'],
    chips: ['Dashboard UI', 'Access Control']
  },
  Offers: {
    desktop: 'offers-desktop.webp',
    mobile: 'offers-mobile.webp',
    title: 'Coupons Showcase',
    purpose: 'Displays active promo code details and discount conditions.',
    functionality: 'Coupon code tiles copies and discounts percentage summary grids.',
    implementation: 'Renders listing items matching promo collection schemas in MongoDB.',
    techs: ['HTML', 'CSS', 'MongoDB'],
    chips: ['Offers Lists', 'MongoDB Data']
  },
  About: {
    desktop: 'about-desktop.webp',
    mobile: 'about-mobile.webp',
    title: 'Company Hub',
    purpose: 'Outlines the delivery network mission and company timeline milestones.',
    functionality: 'Responsive grid panels, text detail boxes, and team profile items.',
    implementation: 'Built with clean layout containers styled with CSS media queries.',
    techs: ['HTML', 'CSS'],
    chips: ['Responsive Grid', 'About Cards']
  },
  Contact: {
    desktop: 'contact-desktop.webp',
    mobile: 'contact-mobile.webp',
    title: 'Contact Form',
    purpose: 'Allows customers to report service issues or submit enquiries.',
    functionality: 'Contact form fields, customer care coordinates, and message submit handlers.',
    implementation: 'Sends payload requests directly to Express customer feedback tables.',
    techs: ['HTML', 'CSS', 'Node.js'],
    chips: ['Feedback Form', 'REST API Post']
  }
};
