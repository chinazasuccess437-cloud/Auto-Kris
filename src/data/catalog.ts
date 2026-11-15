import heroShowcaseImg from '../assets/images/hero_auto_kris_showcase_1794752731416.jpg';
import engineImg from '../assets/images/part_engine_cylinder_head_1794752731550.jpg';
import pistonTimingImg from '../assets/images/prod_piston_timing_1794754284976.jpg';
import brakePadsImg from '../assets/images/part_brake_system_kit_1794752733119.jpg';
import brakeShoesImg from '../assets/images/prod_brake_shoes_1794754287185.jpg';
import shockImg from '../assets/images/part_suspension_shock_1794752732233.jpg';
import ballJointsImg from '../assets/images/prod_ball_joints_1794754286297.jpg';
import tieRodsImg from '../assets/images/prod_tie_rods_1794754287279.jpg';
import clutchCoverImg from '../assets/images/part_clutch_drivetrain_1794752733619.jpg';
import clutchDiscImg from '../assets/images/prod_clutch_disc_1794754288113.jpg';
import driveShaftImg from '../assets/images/prod_drive_shaft_1794754288071.jpg';
import fuelPumpImg from '../assets/images/prod_fuel_pump_1794754288453.jpg';
import fuelFilterImg from '../assets/images/prod_fuel_filter_1794754288161.jpg';
import oilFilterImg from '../assets/images/prod_oil_filter_1794754288313.jpg';
import airFilterImg from '../assets/images/prod_air_filter_1794754289601.jpg';
import alternatorImg from '../assets/images/part_electrical_alternator_1794752733757.jpg';
import starterMotorImg from '../assets/images/prod_starter_motor_1794754290678.jpg';
import radiatorImg from '../assets/images/part_cooling_filters_fuel_1794752733162.jpg';
import waterPumpImg from '../assets/images/prod_water_pump_1794754290201.jpg';
import bodyHeadlampImg from '../assets/images/prod_body_headlamp_1794754290524.jpg';
import interiorTrimImg from '../assets/images/prod_interior_trim_1794754290508.jpg';
import wheelTyreImg from '../assets/images/prod_wheel_tyre_1794754292715.jpg';

import { CategoryId, ProductItem } from '../types';

export const HERO_MEDIA = heroShowcaseImg;

export const CATEGORY_LIST: CategoryId[] = [
  'all',
  'engine',
  'brakes',
  'suspension',
  'clutch',
  'transmission',
  'fuel',
  'filters',
  'electrical',
  'cooling',
  'body',
  'interior',
  'wheels',
];

export const CATALOG_PRODUCTS: ProductItem[] = [
  {
    id: 'cylinder-head',
    category: 'engine',
    nameKey: 'prod_cylinder_head_name',
    descriptionKey: 'prod_cylinder_head_desc',
    image: engineImg,
    compatibleBrands: ['Toyota', 'Nissan', 'Mitsubishi', 'Mercedes-Benz', 'Hyundai', 'Isuzu'],
    partRefPrefix: 'AK-ENG-01',
  },
  {
    id: 'engine-piston-timing',
    category: 'engine',
    nameKey: 'prod_piston_timing_name',
    descriptionKey: 'prod_piston_timing_desc',
    image: pistonTimingImg,
    compatibleBrands: ['Toyota', 'Honda', 'Lexus', 'Volkswagen', 'BMW', 'Kia'],
    partRefPrefix: 'AK-ENG-02',
  },
  {
    id: 'brake-pads',
    category: 'brakes',
    nameKey: 'prod_brake_pads_name',
    descriptionKey: 'prod_brake_pads_desc',
    image: brakePadsImg,
    compatibleBrands: ['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Hyundai', 'Peugeot'],
    partRefPrefix: 'AK-BRK-01',
  },
  {
    id: 'brake-shoes',
    category: 'brakes',
    nameKey: 'prod_brake_shoes_name',
    descriptionKey: 'prod_brake_shoes_desc',
    image: brakeShoesImg,
    compatibleBrands: ['Toyota', 'Nissan', 'Mitsubishi', 'Isuzu', 'Suzuki', 'Renault', 'Ford'],
    partRefPrefix: 'AK-BRK-02',
  },
  {
    id: 'shock-absorbers',
    category: 'suspension',
    nameKey: 'prod_shock_absorbers_name',
    descriptionKey: 'prod_shock_absorbers_desc',
    image: shockImg,
    compatibleBrands: ['Toyota', 'Mitsubishi', 'Nissan', 'Ford', 'Mercedes-Benz', 'Hyundai', 'Kia'],
    partRefPrefix: 'AK-SUS-01',
  },
  {
    id: 'ball-joints',
    category: 'suspension',
    nameKey: 'prod_ball_joints_name',
    descriptionKey: 'prod_ball_joints_desc',
    image: ballJointsImg,
    compatibleBrands: ['Toyota', 'Honda', 'Mazda', 'Subaru', 'Volkswagen', 'Chevrolet', 'Isuzu'],
    partRefPrefix: 'AK-SUS-02',
  },
  {
    id: 'tie-rods',
    category: 'suspension',
    nameKey: 'prod_tie_rods_name',
    descriptionKey: 'prod_tie_rods_desc',
    image: tieRodsImg,
    compatibleBrands: ['Toyota', 'Nissan', 'Honda', 'Peugeot', 'Renault', 'Kia', 'Ford'],
    partRefPrefix: 'AK-SUS-03',
  },
  {
    id: 'clutch-cover',
    category: 'clutch',
    nameKey: 'prod_clutch_cover_name',
    descriptionKey: 'prod_clutch_cover_desc',
    image: clutchCoverImg,
    compatibleBrands: ['Toyota', 'Mitsubishi', 'Isuzu', 'Peugeot', 'Renault', 'Hyundai', 'Suzuki'],
    partRefPrefix: 'AK-CLT-01',
  },
  {
    id: 'clutch-disc',
    category: 'clutch',
    nameKey: 'prod_clutch_disc_name',
    descriptionKey: 'prod_clutch_disc_desc',
    image: clutchDiscImg,
    compatibleBrands: ['Toyota', 'Nissan', 'Mazda', 'Volkswagen', 'Ford', 'Kia', 'Subaru'],
    partRefPrefix: 'AK-CLT-02',
  },
  {
    id: 'drive-shafts',
    category: 'transmission',
    nameKey: 'prod_drive_shafts_name',
    descriptionKey: 'prod_drive_shafts_desc',
    image: driveShaftImg,
    compatibleBrands: ['Toyota', 'Honda', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Chevrolet'],
    partRefPrefix: 'AK-TRN-01',
  },
  {
    id: 'fuel-pumps',
    category: 'fuel',
    nameKey: 'prod_fuel_pumps_name',
    descriptionKey: 'prod_fuel_pumps_desc',
    image: fuelPumpImg,
    compatibleBrands: ['Toyota', 'Mercedes-Benz', 'BMW', 'Volkswagen', 'Nissan', 'Hyundai', 'Ford'],
    partRefPrefix: 'AK-FUL-01',
  },
  {
    id: 'fuel-filters',
    category: 'filters',
    nameKey: 'prod_fuel_filters_name',
    descriptionKey: 'prod_fuel_filters_desc',
    image: fuelFilterImg,
    compatibleBrands: ['Toyota', 'Mitsubishi', 'Isuzu', 'Mercedes-Benz', 'Peugeot', 'Renault', 'Kia'],
    partRefPrefix: 'AK-FLT-01',
  },
  {
    id: 'oil-filters',
    category: 'filters',
    nameKey: 'prod_oil_filters_name',
    descriptionKey: 'prod_oil_filters_desc',
    image: oilFilterImg,
    compatibleBrands: ['Toyota', 'Honda', 'Lexus', 'Nissan', 'BMW', 'Audi', 'Hyundai', 'Suzuki'],
    partRefPrefix: 'AK-FLT-02',
  },
  {
    id: 'air-filters',
    category: 'filters',
    nameKey: 'prod_air_filters_name',
    descriptionKey: 'prod_air_filters_desc',
    image: airFilterImg,
    compatibleBrands: ['Toyota', 'Mazda', 'Subaru', 'Volkswagen', 'Ford', 'Chevrolet', 'Renault'],
    partRefPrefix: 'AK-FLT-03',
  },
  {
    id: 'alternators',
    category: 'electrical',
    nameKey: 'prod_alternators_name',
    descriptionKey: 'prod_alternators_desc',
    image: alternatorImg,
    compatibleBrands: ['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Honda', 'Hyundai', 'Ford'],
    partRefPrefix: 'AK-ELC-01',
  },
  {
    id: 'starter-motors',
    category: 'electrical',
    nameKey: 'prod_starter_motors_name',
    descriptionKey: 'prod_starter_motors_desc',
    image: starterMotorImg,
    compatibleBrands: ['Toyota', 'Nissan', 'Mitsubishi', 'Isuzu', 'Volkswagen', 'Peugeot', 'Kia'],
    partRefPrefix: 'AK-ELC-02',
  },
  {
    id: 'radiators',
    category: 'cooling',
    nameKey: 'prod_radiators_name',
    descriptionKey: 'prod_radiators_desc',
    image: radiatorImg,
    compatibleBrands: ['Toyota', 'Honda', 'Nissan', 'Mercedes-Benz', 'BMW', 'Hyundai', 'Chevrolet'],
    partRefPrefix: 'AK-CLG-01',
  },
  {
    id: 'water-pumps',
    category: 'cooling',
    nameKey: 'prod_water_pumps_name',
    descriptionKey: 'prod_water_pumps_desc',
    image: waterPumpImg,
    compatibleBrands: ['Toyota', 'Mitsubishi', 'Mazda', 'Audi', 'Volkswagen', 'Renault', 'Suzuki'],
    partRefPrefix: 'AK-CLG-02',
  },
  {
    id: 'exterior-lighting-mirrors',
    category: 'body',
    nameKey: 'prod_body_exterior_name',
    descriptionKey: 'prod_body_exterior_desc',
    image: bodyHeadlampImg,
    illustrationType: 'body',
    compatibleBrands: ['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Hyundai', 'Kia', 'Peugeot'],
    partRefPrefix: 'AK-BDY-01',
  },
  {
    id: 'interior-accessories',
    category: 'interior',
    nameKey: 'prod_interior_accessories_name',
    descriptionKey: 'prod_interior_accessories_desc',
    image: interiorTrimImg,
    illustrationType: 'interior',
    compatibleBrands: ['Toyota', 'Honda', 'Mercedes-Benz', 'Volkswagen', 'Ford', 'Nissan', 'Audi'],
    partRefPrefix: 'AK-INT-01',
  },
  {
    id: 'wheels-tyres',
    category: 'wheels',
    nameKey: 'prod_wheels_tyres_name',
    descriptionKey: 'prod_wheels_tyres_desc',
    image: wheelTyreImg,
    illustrationType: 'wheels',
    compatibleBrands: ['Toyota', 'Lexus', 'Mitsubishi', 'Mercedes-Benz', 'BMW', 'Ford', 'Chevrolet', 'Isuzu'],
    partRefPrefix: 'AK-WHL-01',
  },
];
