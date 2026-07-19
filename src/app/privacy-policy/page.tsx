import { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali di Flowapp Studio.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-[120px] pb-20 md:pt-[160px] md:pb-28">
      <Container>
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-secondary mb-10">Ultimo aggiornamento: Luglio 2026</p>

          <div className="space-y-10 text-sm leading-relaxed text-secondary">

            <Section title="1. Titolare del trattamento">
              <p>Flowapp Studio</p>
              <p className="mt-2">Email: <a href="mailto:privacy@flowapp.studio" className="text-accent hover:underline">privacy@flowapp.studio</a></p>
              <p>Sede legale: [inserire sede legale]</p>
              <p>P. IVA: [inserire P. IVA]</p>
            </Section>

            <Section title="2. Dati personali trattati">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Dati inseriti nei form di contatto: nome, cognome, email, azienda e ruolo.</li>
                <li>Informazioni sul progetto inviate tramite il questionario di stima.</li>
                <li>Budget indicativo e tempistiche comunicate dall&apos;utente.</li>
                <li>Dati tecnici di navigazione (indirizzo IP, tipo di browser, sistema operativo, pagine visitate).</li>
                <li>Preferenze relative ai cookie salvate tramite il banner presente sul sito.</li>
                <li>Eventuali dati raccolti da strumenti analitici solo previa autorizzazione dell&apos;utente.</li>
              </ul>
            </Section>

            <Section title="3. Finalità del trattamento">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Rispondere alle richieste inviate tramite i form del sito.</li>
                <li>Valutare esigenze, budget, fattibilità e tempi del progetto proposto.</li>
                <li>Inviare una prima valutazione o proposta progettuale.</li>
                <li>Organizzare call o consulenze di approfondimento.</li>
                <li>Garantire la sicurezza e il corretto funzionamento tecnico del sito.</li>
                <li>Misurare le performance del sito, solo previo consenso esplicito dell&apos;utente.</li>
              </ul>
            </Section>

            <Section title="4. Base giuridica">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Esecuzione di misure precontrattuali richieste dall&apos;utente (Art. 6, par. 1, lett. b GDPR).</li>
                <li>Legittimo interesse del titolare per garantire la sicurezza e il funzionamento tecnico del sito (Art. 6, par. 1, lett. f GDPR).</li>
                <li>Consenso dell&apos;utente per cookie analitici o di marketing non necessari (Art. 6, par. 1, lett. a GDPR).</li>
                <li>Adempimento di obblighi di legge, se applicabili (Art. 6, par. 1, lett. c GDPR).</li>
              </ul>
            </Section>

            <Section title="5. Modalità del trattamento">
              <p>I dati personali sono trattati con strumenti informatici e cartacei, adottando misure di sicurezza tecniche e organizzative adeguate a ridurre i rischi di distruzione, perdita, accesso non autorizzato o trattamento non consentito. L&apos;accesso ai dati è limitato ai soli soggetti autorizzati al trattamento.</p>
            </Section>

            <Section title="6. Conservazione dei dati">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Richieste di contatto e preventivo: fino a 12 mesi dall&apos;ultima comunicazione.</li>
                <li>Dati relativi a trattative e proposte progettuali: fino a 24 mesi.</li>
                <li>Dati tecnici di navigazione: per il tempo strettamente necessario alla sicurezza e manutenzione del sito.</li>
                <li>Preferenze cookie: fino a 6 mesi dall&apos;ultima modifica.</li>
                <li>I tempi di conservazione possono essere adattati in base all&apos;organizzazione reale del titolare.</li>
              </ul>
            </Section>

            <Section title="7. Destinatari dei dati">
              <p>I dati personali possono essere comunicati, nei limiti strettamente necessari, alle seguenti categorie di destinatari:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Hosting provider e servizi cloud per l&apos;infrastruttura del sito.</li>
                <li>Servizi email per la gestione delle comunicazioni.</li>
                <li>Strumenti CRM per la gestione delle richieste.</li>
                <li>Fornitori di servizi tecnici e manutenzione.</li>
                <li>Consulenti amministrativi, fiscali o legali del titolare.</li>
                <li>Strumenti di analytics, solo se attivati previo consenso dell&apos;utente.</li>
              </ul>
            </Section>

            <Section title="8. Trasferimenti extra UE">
              <p>Alcuni fornitori di servizi potrebbero trattare i dati al di fuori dello Spazio Economico Europeo. In tali casi, il titolare si impegna ad adottare le garanzie adeguate previste dal GDPR, come le clausole contrattuali standard approvate dalla Commissione Europea, per assicurare un livello di protezione equivalente.</p>
            </Section>

            <Section title="9. Diritti dell&apos;interessato">
              <p>L&apos;utente può esercitare in qualsiasi momento i seguenti diritti:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Accesso</strong>: ottenere conferma sull&apos;esistenza di dati personali e accedervi.</li>
                <li><strong>Rettifica</strong>: correggere dati inesatti o incompleti.</li>
                <li><strong>Cancellazione</strong>: richiedere la cancellazione dei propri dati.</li>
                <li><strong>Limitazione</strong>: limitare il trattamento in determinate circostanze.</li>
                <li><strong>Opposizione</strong>: opporsi al trattamento basato sul legittimo interesse.</li>
                <li><strong>Portabilità</strong>: ricevere i propri dati in formato strutturato.</li>
                <li><strong>Revoca del consenso</strong>: revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente.</li>
                <li><strong>Reclamo</strong>: presentare un reclamo al Garante per la Protezione dei Dati Personali.</li>
              </ul>
              <p className="mt-2">Per esercitare i diritti, scrivere a <a href="mailto:privacy@flowapp.studio" className="text-accent hover:underline">privacy@flowapp.studio</a>.</p>
            </Section>

            <Section title="10. Natura del conferimento">
              <p>Il conferimento dei dati nei form di contatto è necessario per rispondere alla richiesta dell&apos;utente. Il mancato conferimento comporta l&apos;impossibilità di ricontattare l&apos;utente e di fornire una valutazione del progetto.</p>
            </Section>

            <Section title="11. Profilazione e decisioni automatizzate">
              <p>Non sono previsti processi decisionali automatizzati, né attività di profilazione dell&apos;utente tramite i form di contatto presenti sul sito.</p>
            </Section>

            <Section title="12. Modifiche alla policy">
              <p>La presente informativa può essere aggiornata nel tempo, anche in relazione a modifiche normative o all&apos;introduzione di nuovi servizi. Si invita l&apos;utente a consultare periodicamente questa pagina.</p>
            </Section>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-xs text-secondary/60 italic">
                Questa informativa è un modello operativo e deve essere verificata e adattata prima della pubblicazione definitiva in base ai servizi realmente utilizzati dal sito.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-bold text-foreground mb-3">{title}</h2>
      <div className="text-sm leading-relaxed text-secondary space-y-2">{children}</div>
    </div>
  );
}
