"use client";

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";

export type Lang = "en" | "es";

const DICT = {
  en: {
    // hero
    hero_turn: "Capital for", hero_trading: "futures traders", hero_into: "at the next level",
    hero_sub_a: "Join the FTYTRADE waitlist and get a ", hero_sub_b1: "Reward Key", hero_sub_c: " with an ", hero_sub_b2: "exclusive launch reward", hero_sub_d: ".", hero_p1: "Priority access before the public launch", hero_p2: "Exclusive Reward Key with premium rewards", hero_p3: "Early access to our pre-launch Discord community", hero_badge: "WAITLIST OPEN",
    hero_cta: "Try Your Reward Box Free",
    partners: "POWERED BY OUR PARTNERS",
    // steps
    steps_title: "Three steps to your Reward Box",
    steps_sub: "From waitlist to funded prize in minutes.",
    s1_t: "Fill in the waitlist form",
    s1_d: "Enter your name and email. Your Reward Key is created instantly, reserved to you, and sent straight to your inbox.",
    s2_t: "Check your inbox",
    s2_d: "You'll receive an email with your Reward Key and a private link to create your Ftytrade account on launch day.",
    s3_t: "Get ready for launch day",
    s3_d: "Follow Ftytrade on social media and keep an eye on your inbox. On launch day, create your account, enter your key and claim your reward instantly.",
    // waitlist
    wl_tag: "1,000 Reward Keys · first wave",
    wl_h1: "Be the first when", wl_h2: "the doors", wl_h3: "open",
    wl_p: "Drop your details and we'll reach out the moment we go live — no noise, just the signal.",
    wl_title: "Join the Waitlist",
    wl_sub: "Be first in line — we'll notify you the moment we launch.",
    wl_first: "First name", wl_last: "Last name", wl_email: "Your email address",
    wl_terms_pre: "I agree to the", wl_terms_link: "Waitlist & Reward Box terms",
    wl_btn: "Join the waitlist", wl_loading: "Reserving your spot…",
    wl_nospam: "No spam. Unsubscribe any time.",
    wl_done_t: "You're on the list", wl_done_p: "Check your inbox — your Reward Key is on its way.",
    wl_err_name: "Please enter your first and last name.",
    wl_err_email: "That email doesn't look right.",
    wl_err_terms: "Please accept the terms to continue.",
    wl_done_key: "Your Reward Key", wl_done_copy: "Copy key", wl_done_copied: "Copied",
    wl_done_existing: "This email was already on the list — here is your key again.",
    wl_err_many: "Too many attempts. Please try again in a few minutes.",
    wl_err_nokeys: "All keys of this wave are gone. Follow us for the next one.",
    wl_err_server: "Something went wrong. Please try again.",
    // faq
    faq_t1: "Got questions?", faq_t2: "We've got answers",
    faq_p: "Everything you need to know about the waitlist, your Reward Key and what's inside the box.",
    q1: "What is the Ftytrade waitlist?",
    a1: "A simple form with three fields: first name, last name and email. The moment you register, you receive a Reward Box key. When Ftytrade launches, you open your box and claim your reward.",
    q2: "What is Ftytrade?",
    a2: "Ftytrade is a futures prop firm offering simulated funded accounts through three different programs. On launch day we'll reach out to you. We work with Rithmic as data provider — Tradovate coming soon.",
    q3: "Which platforms can I trade on?",
    a3: "Ftytrade connects your account to Quantower, TradingThings (TradingView charts), Tradesea and MotiveWave. Tradovate, NinjaTrader and TradingView are coming soon.",
    q4: "Can I register with more than one email?",
    a4: "No. Each trader must register with a single email. After you claim your reward, a KYC verification follows — if two accounts belong to the same person, both are blocked. One trader, one account.",
    q5: "What can I win?",
    a5: "Every box has a prize — none is empty. You can win a free 25K or 50K challenge, an instant funded account (Fty Direct), discounts of up to 80% on all plans, or a free reset.",
    q6: "When does Ftytrade launch?",
    a6: "Very soon. We're finalizing the last details of our technology, partnerships and company setup. Join the Ftytrade Discord to get every update first.",
    q7: "Where do I enter my Reward Key and how does it work?",
    a7: "Follow Ftytrade on social media and join our Discord. When we launch, create your free Ftytrade account. In your dashboard overview you'll find the Reward Box: enter your key, hit Claim, and the box opens with an animation revealing your reward. Everything is applied automatically — if you win a 50K account, it's active in seconds, no support ticket needed.",
    // footer
    f_title: "Trade big. Risk nothing of your own.",
    f_p: "Ftytrade Futures gives you access to funded futures accounts up to 100K. Prove your consistency, trade our capital and get paid on your profits. Join the waitlist and reserve your Reward Key before we open.",
    f_join: "Join the waitlist", f_claim: "Claim my key",
    f_programs: "Programs", f_company: "Company", f_resources: "Resources",
    f_about: "About us", f_support: "Support", f_faq: "FAQ",
    f_terms: "Terms of Service", f_privacy: "Privacy Policy",
    f_rights: "All rights reserved.", f_soon: "Soon",
    f_legal: "Ftytrade is an educational platform offering skill-based trading simulations. All trading activity on Ftytrade is simulated. No client funds are held and no investment advice is provided. Trading futures involves substantial risk and is not suitable for every individual. Ftytrade is not a broker, FCM or investment adviser.",
  },
  es: {
    hero_turn: "Capital para", hero_trading: "traders de futuros", hero_into: "del siguiente nivel",
    hero_sub_a: "Unete a la lista de espera y recibe una ", hero_sub_b1: "Reward Key", hero_sub_c: " con una ", hero_sub_b2: "recompensa de lanzamiento", hero_sub_d: ".", hero_p1: "Acceso prioritario antes del lanzamiento público", hero_p2: "Reward Key exclusiva con recompensas premium", hero_p3: "Acceso anticipado a nuestra comunidad de Discord", hero_badge: "LISTA DE ESPERA ABIERTA",
    hero_cta: "Prueba tu Reward Box gratis",
    partners: "CON EL RESPALDO DE NUESTROS PARTNERS",
    steps_title: "Tres pasos hasta tu Reward Box",
    steps_sub: "De la lista de espera al premio en minutos.",
    s1_t: "Rellena el formulario",
    s1_d: "Introduce tu nombre y tu email. Tu Reward Key se crea al instante, queda reservada para ti y te llega directa a tu correo.",
    s2_t: "Revisa tu correo",
    s2_d: "Recibirás un email con tu Reward Key y un enlace privado para crear tu cuenta en Ftytrade el día del lanzamiento.",
    s3_t: "Prepárate para el lanzamiento",
    s3_d: "Sigue a Ftytrade en redes y está atento a tu correo. El día del lanzamiento, crea tu cuenta, introduce tu clave y reclama tu premio al instante.",
    wl_tag: "1.000 Reward Keys · primera oleada",
    wl_h1: "Sé el primero cuando", wl_h2: "se abran las", wl_h3: "puertas",
    wl_p: "Déjanos tus datos y te avisamos en el momento en que salgamos en vivo. Sin ruido, solo la señal.",
    wl_title: "Únete a la lista de espera",
    wl_sub: "Sé el primero de la fila: te avisamos en cuanto lancemos.",
    wl_first: "Nombre", wl_last: "Apellidos", wl_email: "Tu email",
    wl_terms_pre: "Acepto los", wl_terms_link: "términos de la lista de espera y Reward Box",
    wl_btn: "Unirme a la lista", wl_loading: "Reservando tu plaza…",
    wl_nospam: "Sin spam. Date de baja cuando quieras.",
    wl_done_t: "Ya estás en la lista", wl_done_p: "Revisa tu correo: tu Reward Key va de camino.",
    wl_err_name: "Introduce tu nombre y apellidos.",
    wl_err_email: "Ese email no parece correcto.",
    wl_err_terms: "Acepta los términos para continuar.",
    wl_done_key: "Tu Reward Key", wl_done_copy: "Copiar clave", wl_done_copied: "Copiada",
    wl_done_existing: "Este email ya estaba en la lista: aquí tienes tu clave de nuevo.",
    wl_err_many: "Demasiados intentos. Prueba de nuevo en unos minutos.",
    wl_err_nokeys: "Se han agotado las claves de esta oleada. Síguenos para la siguiente.",
    wl_err_server: "Algo ha fallado. Inténtalo de nuevo.",
    faq_t1: "¿Tienes dudas?", faq_t2: "Tenemos respuestas",
    faq_p: "Todo lo que necesitas saber sobre la lista de espera, tu Reward Key y lo que hay dentro de la caja.",
    q1: "¿Qué es la lista de espera de Ftytrade?",
    a1: "Un formulario sencillo con tres campos: nombre, apellidos y email. En cuanto te registras, recibes una clave del Reward Box. Cuando Ftytrade lance, abres tu caja y reclamas tu premio.",
    q2: "¿Qué es Ftytrade?",
    a2: "Ftytrade es una prop firm de futuros que ofrece cuentas fondeadas simuladas a través de tres programas distintos. El día del lanzamiento nos pondremos en contacto contigo. Trabajamos con Rithmic como proveedor de datos; Tradovate, muy pronto.",
    q3: "¿En qué plataformas puedo operar?",
    a3: "Ftytrade conecta tu cuenta con Quantower, TradingThings (gráficos de TradingView), Tradesea y MotiveWave. Tradovate, NinjaTrader y TradingView llegarán pronto.",
    q4: "¿Puedo registrarme con más de un email?",
    a4: "No. Cada trader debe registrarse con un único email. Tras reclamar tu premio hay una verificación KYC: si dos cuentas pertenecen a la misma persona, se bloquean las dos. Un trader, una cuenta.",
    q5: "¿Qué puedo ganar?",
    a5: "Todas las cajas tienen premio, ninguna está vacía. Puedes ganar un challenge gratis de 25K o 50K, una cuenta fondeada instantánea (Fty Direct), descuentos de hasta el 80 % en todos los planes o un reset gratis.",
    q6: "¿Cuándo lanza Ftytrade?",
    a6: "Muy pronto. Estamos cerrando los últimos detalles de tecnología, partnerships y constitución de la empresa. Únete al Discord de Ftytrade para enterarte de todo el primero.",
    q7: "¿Dónde introduzco mi Reward Key y cómo funciona?",
    a7: "Sigue a Ftytrade en redes y únete a nuestro Discord. Cuando lancemos, crea tu cuenta gratuita en Ftytrade. En el resumen de tu dashboard verás el Reward Box: introduce tu clave, pulsa Claim y la caja se abre con una animación que revela tu premio. Todo se aplica automáticamente: si ganas una cuenta de 50K, estará activa en segundos, sin hablar con soporte.",
    f_title: "Opera en grande. Sin arriesgar tu dinero.",
    f_p: "Ftytrade Futures te da acceso a cuentas fondeadas de futuros de hasta 100K. Demuestra tu consistencia, opera con nuestro capital y cobra tus ganancias. Únete a la lista y reserva tu Reward Key antes de que abramos.",
    f_join: "Únete a la lista", f_claim: "Quiero mi clave",
    f_programs: "Programas", f_company: "Empresa", f_resources: "Recursos",
    f_about: "Sobre nosotros", f_support: "Soporte", f_faq: "Preguntas frecuentes",
    f_terms: "Términos del servicio", f_privacy: "Política de privacidad",
    f_rights: "Todos los derechos reservados.", f_soon: "Pronto",
    f_legal: "Ftytrade es una plataforma educativa que ofrece simulaciones de trading basadas en habilidad. Toda la actividad de trading en Ftytrade es simulada. No se custodian fondos de clientes ni se ofrece asesoramiento de inversión. Operar futuros conlleva un riesgo sustancial y no es adecuado para todo el mundo. Ftytrade no es un bróker, FCM ni asesor de inversiones.",
  },
} as const;

export type Key = keyof typeof DICT.en;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en", setLang: () => {}, t: (k) => DICT.en[k],
});

export const langPath = (l: Lang) => (l === "es" ? "/es" : "/");

export function I18nProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const router = useRouter();
  const setLang = (l: Lang) => router.push(langPath(l));
  const t = (k: Key) => DICT[lang][k] ?? DICT.en[k];
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
