import { PHONE_HREF } from "@/lib/site";
import { PhoneIcon } from "./PhoneIcon";

// Schwebender Anruf-Button — vor allem für Mobile (Touch ≥ 44px).
export function FloatingCall() {
  return (
    <a
      href={PHONE_HREF}
      aria-label="Jetzt anrufen"
      className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_10px_30px_rgba(0,0,0,.5)] transition-transform duration-300 hover:scale-110 lg:hidden"
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
}
