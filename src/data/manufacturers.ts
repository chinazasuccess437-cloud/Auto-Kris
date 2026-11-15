import { Manufacturer } from '../types';

export const VEHICLE_MANUFACTURERS: Manufacturer[] = [
  { id: 'Toyota', name: 'Toyota', origin: 'Japan' },
  { id: 'Honda', name: 'Honda', origin: 'Japan' },
  { id: 'Lexus', name: 'Lexus', origin: 'Japan' },
  { id: 'Nissan', name: 'Nissan', origin: 'Japan' },
  { id: 'Mitsubishi', name: 'Mitsubishi', origin: 'Japan' },
  { id: 'Mazda', name: 'Mazda', origin: 'Japan' },
  { id: 'Subaru', name: 'Subaru', origin: 'Japan' },
  { id: 'Suzuki', name: 'Suzuki', origin: 'Japan' },
  { id: 'Isuzu', name: 'Isuzu', origin: 'Japan' },
  { id: 'Mercedes-Benz', name: 'Mercedes-Benz', origin: 'Germany' },
  { id: 'BMW', name: 'BMW', origin: 'Germany' },
  { id: 'Volkswagen', name: 'Volkswagen', origin: 'Germany' },
  { id: 'Audi', name: 'Audi', origin: 'Germany' },
  { id: 'Peugeot', name: 'Peugeot', origin: 'France' },
  { id: 'Renault', name: 'Renault', origin: 'France' },
  { id: 'Hyundai', name: 'Hyundai', origin: 'South Korea' },
  { id: 'Kia', name: 'Kia', origin: 'South Korea' },
  { id: 'Ford', name: 'Ford', origin: 'USA' },
  { id: 'Chevrolet', name: 'Chevrolet', origin: 'USA' },
];

export const ALL_MANUFACTURER_NAMES = [
  ...VEHICLE_MANUFACTURERS.map((m) => m.name),
  'Other',
];
