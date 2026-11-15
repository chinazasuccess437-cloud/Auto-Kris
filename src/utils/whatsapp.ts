import { COMPANY_INFO } from '../data/company';
import { PartRequestPayload } from '../types';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY_INFO.whatsappNumberRaw}?text=${encodeURIComponent(message)}`;
}

export function formatProductEnquiryMessage(
  greeting: string,
  partName: string,
  partRef: string,
  categoryLabel: string,
  brands: string[]
): string {
  return [
    greeting,
    '',
    `• ${partName}`,
    `• Ref: ${partRef}`,
    `• Category: ${categoryLabel}`,
    `• Brands: ${brands.join(', ')}`,
    '',
    `— ${COMPANY_INFO.name} (${COMPANY_INFO.address})`,
  ].join('\n');
}

export function formatPartRequestMessage(
  greeting: string,
  payload: PartRequestPayload,
  labels: {
    name: string;
    make: string;
    model: string;
    year: string;
    part: string;
    info: string;
  }
): string {
  const lines = [
    greeting,
    '',
    `• ${labels.name}: ${payload.customerName.trim()}`,
    `• ${labels.make}: ${payload.manufacturer.trim()}`,
    `• ${labels.model}: ${payload.vehicleModel.trim()}`,
    `• ${labels.year}: ${payload.vehicleYear.trim()}`,
    `• ${labels.part}: ${payload.requiredPart.trim()}`,
  ];

  if (payload.additionalInfo.trim()) {
    lines.push(`• ${labels.info}: ${payload.additionalInfo.trim()}`);
  }

  lines.push('', `— ${COMPANY_INFO.name} (${COMPANY_INFO.address})`);
  return lines.join('\n');
}
