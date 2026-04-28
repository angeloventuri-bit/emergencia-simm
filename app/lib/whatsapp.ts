export const WHATSAPP_PHONE = "5511985522341";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
