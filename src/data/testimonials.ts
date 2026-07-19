export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Flowapp ha sostituito tre strumenti sconnessi con un'unica piattaforma. Finalmente il nostro team operativo lavora su una sola fonte di dati. La differenza in termini di efficienza quotidiana è enorme.",
    name: "Marco Rinaldi",
    role: "Responsabile operativo",
    company: "Logistica Italia",
    industry: "Logistica",
  },
  {
    quote:
      "Avevamo bisogno di un portale clienti che fosse moderno e davvero semplice da usare. Flowapp lo ha realizzato esattamente come lo immaginavamo. I nostri clienti lo apprezzano e il team ha recuperato ore di lavoro ogni settimana.",
    name: "Elena Ferraro",
    role: "Fondatrice",
    company: "Northline Services",
    industry: "Servizi B2B",
  },
  {
    quote:
      "Prima di Flowapp il consolidamento finanziario di fine mese richiedeva una settimana. Ora richiede due ore. La dashboard ha dato al nostro CFO visibilità in tempo reale per la prima volta nella storia dell'azienda.",
    name: "Davide Moretti",
    role: "Responsabile finanziario",
    company: "Industrie Meccaniche Riunite",
    industry: "Manifattura",
  },
];
