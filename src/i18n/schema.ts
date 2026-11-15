import { LanguageCode, LanguageOption } from '../types';

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'fr', nativeName: 'Français', englishName: 'French', dir: 'ltr' },
  { code: 'en', nativeName: 'English', englishName: 'English', dir: 'ltr' },
  { code: 'ln', nativeName: 'Lingala', englishName: 'Lingala', dir: 'ltr' },
  { code: 'sw', nativeName: 'Kiswahili', englishName: 'Swahili', dir: 'ltr' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', dir: 'ltr' },
  { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', dir: 'ltr' },
  { code: 'de', nativeName: 'Deutsch', englishName: 'German', dir: 'ltr' },
  { code: 'it', nativeName: 'Italiano', englishName: 'Italian', dir: 'ltr' },
  { code: 'nl', nativeName: 'Nederlands', englishName: 'Dutch', dir: 'ltr' },
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', dir: 'rtl' },
  { code: 'zh', nativeName: '中文', englishName: 'Chinese', dir: 'ltr' },
  { code: 'ja', nativeName: '日本語', englishName: 'Japanese', dir: 'ltr' },
  { code: 'ko', nativeName: '한국어', englishName: 'Korean', dir: 'ltr' },
  { code: 'ru', nativeName: 'Русский', englishName: 'Russian', dir: 'ltr' },
  { code: 'tr', nativeName: 'Türkçe', englishName: 'Turkish', dir: 'ltr' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', dir: 'ltr' },
  { code: 'pl', nativeName: 'Polski', englishName: 'Polish', dir: 'ltr' },
  { code: 'vi', nativeName: 'Tiếng Việt', englishName: 'Vietnamese', dir: 'ltr' },
];

export interface TranslationDict {
  // Navigation & Controls
  nav_catalogue: string;
  nav_manufacturers: string;
  nav_about: string;
  nav_founder: string;
  nav_contact: string;
  nav_request_part: string;
  lang_button_label: string;
  lang_search_placeholder: string;
  lang_empty: string;

  // Hero
  hero_activity: string;
  hero_headline: string;
  hero_subheadline: string;
  hero_search_placeholder: string;
  hero_search_btn: string;
  hero_cta_browse: string;
  hero_cta_request: string;
  hero_location_line: string;

  // About & Why Choose
  about_title: string;
  about_lead: string;
  about_p1: string;
  about_p2: string;
  why_title: string;
  why_01_title: string;
  why_01_desc: string;
  why_02_title: string;
  why_02_desc: string;
  why_03_title: string;
  why_03_desc: string;
  why_04_title: string;
  why_04_desc: string;

  // Manufacturers
  brands_title: string;
  brands_subtitle: string;
  brands_all: string;
  brands_other: string;
  brands_active_filter: string;
  brands_clear: string;

  // Catalogue
  cat_section_title: string;
  cat_section_subtitle: string;
  cat_search_placeholder: string;
  cat_results_count: string;
  cat_empty_title: string;
  cat_empty_desc: string;
  cat_reset_filters: string;
  cat_availability_note: string;
  cat_btn_whatsapp: string;
  cat_btn_prefill: string;

  // 12 Categories + All
  cat_all: string;
  cat_engine: string;
  cat_brakes: string;
  cat_suspension: string;
  cat_clutch: string;
  cat_transmission: string;
  cat_fuel: string;
  cat_filters: string;
  cat_electrical: string;
  cat_cooling: string;
  cat_body: string;
  cat_interior: string;
  cat_wheels: string;

  // Products (21 entries)
  prod_cylinder_head_name: string;
  prod_cylinder_head_desc: string;
  prod_piston_timing_name: string;
  prod_piston_timing_desc: string;
  prod_brake_pads_name: string;
  prod_brake_pads_desc: string;
  prod_brake_shoes_name: string;
  prod_brake_shoes_desc: string;
  prod_shock_absorbers_name: string;
  prod_shock_absorbers_desc: string;
  prod_ball_joints_name: string;
  prod_ball_joints_desc: string;
  prod_tie_rods_name: string;
  prod_tie_rods_desc: string;
  prod_clutch_cover_name: string;
  prod_clutch_cover_desc: string;
  prod_clutch_disc_name: string;
  prod_clutch_disc_desc: string;
  prod_drive_shafts_name: string;
  prod_drive_shafts_desc: string;
  prod_fuel_pumps_name: string;
  prod_fuel_pumps_desc: string;
  prod_fuel_filters_name: string;
  prod_fuel_filters_desc: string;
  prod_oil_filters_name: string;
  prod_oil_filters_desc: string;
  prod_air_filters_name: string;
  prod_air_filters_desc: string;
  prod_alternators_name: string;
  prod_alternators_desc: string;
  prod_starter_motors_name: string;
  prod_starter_motors_desc: string;
  prod_radiators_name: string;
  prod_radiators_desc: string;
  prod_water_pumps_name: string;
  prod_water_pumps_desc: string;
  prod_body_exterior_name: string;
  prod_body_exterior_desc: string;
  prod_interior_accessories_name: string;
  prod_interior_accessories_desc: string;
  prod_wheels_tyres_name: string;
  prod_wheels_tyres_desc: string;

  // Meet the Founder
  founder_kicker: string;
  founder_title: string;
  founder_role: string;
  founder_name_label: string;
  founder_intro: string;
  founder_vision_heading: string;
  founder_vision: string;

  // Request a Part Form
  req_title: string;
  req_subtitle: string;
  req_name_label: string;
  req_name_placeholder: string;
  req_make_label: string;
  req_make_placeholder: string;
  req_model_label: string;
  req_model_placeholder: string;
  req_year_label: string;
  req_year_placeholder: string;
  req_part_label: string;
  req_part_placeholder: string;
  req_info_label: string;
  req_info_placeholder: string;
  req_submit_btn: string;
  req_validation_error: string;
  req_ready_title: string;
  req_ready_desc: string;
  req_open_whatsapp: string;
  req_copy_msg: string;
  req_copied: string;
  req_edit_form: string;

  // Contact & Footer
  contact_title: string;
  contact_subtitle: string;
  contact_address_label: string;
  contact_whatsapp_label: string;
  contact_phone_alt_label: string;
  contact_email_label: string;
  contact_open_maps: string;
  contact_call_now: string;
  contact_write_whatsapp: string;
  contact_send_email: string;
  footer_rights: string;
  footer_tagline_note: string;
  floating_whatsapp_label: string;
  back_to_top: string;

  // WhatsApp Message Templates
  wa_greeting_product: string;
  wa_greeting_request: string;
}

export type TranslationRegistry = Record<LanguageCode, TranslationDict>;
