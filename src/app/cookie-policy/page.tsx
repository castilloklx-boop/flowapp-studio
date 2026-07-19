import { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa estesa sull'uso dei cookie sul sito di Flowapp Studio.",
};

export default function CookiePage() {
  return (
    <section className="pt-[120px] pb-20 md:pt-[160px] md:pb-28">
      <Container>
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] text-foreground mb-2">Cookie Policy</h1>
          <p className="text-sm text-secondary mb-10">Ultimo aggiornamento: Luglio 2026</p>

          <div className="space-y-10 text-sm leading-relaxed text-secondary">

            <Section title="1. Cosa sono i cookie">
              <p>I cookie sono piccoli file di testo che i siti web inviano al dispositivo dell&apos;utente durante la navigazione. Vengono memorizzati dal browser e ritrasmessi al sito a ogni visita successiva. Servono a migliorare l&apos;esperienza di navigazione, ricordare preferenze e raccogliere informazioni sull&apos;uso del sito.</p>
            </Section>

            <Section title="2. Cookie tecnici necessari">
              <p>Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. Vengono utilizzati per:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Garantire la navigazione e l&apos;accesso alle pagine.</li>
                <li>Mantenere attive le sessioni di sicurezza.</li>
                <li>Salvare le preferenze dell&apos;utente relative ai cookie.</li>
                <li>Assicurare il corretto funzionamento tecnico del sito.</li>
              </ul>
              <p className="mt-2">Non richiedono il consenso dell&apos;utente e vengono installati automaticamente.</p>
            </Section>

            <Section title="3. Cookie analitici">
              <p>I cookie analitici aiutano a capire come i visitatori interagiscono con il sito, fornendo informazioni sul numero di visitatori, le pagine più visualizzate e il tempo di permanenza. Questi dati sono raccolti in forma aggregata e anonima. Vengono attivati solo previo consenso esplicito dell&apos;utente, quando richiesto dalla normativa applicabile.</p>
            </Section>

            <Section title="4. Cookie di marketing">
              <p>I cookie di marketing possono essere utilizzati per tracciare i visitatori attraverso i siti web e mostrare contenuti promozionali o misurare l&apos;efficacia di campagne pubblicitarie. Vengono installati solo previo consenso esplicito dell&apos;utente.</p>
            </Section>

            <Section title="5. Gestione del consenso">
              <p>L&apos;utente può gestire le proprie preferenze in qualsiasi momento:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Accettare tutti i cookie</strong>: attiva tutte le categorie.</li>
                <li><strong>Rifiutare i cookie non necessari</strong>: mantiene solo i cookie tecnici.</li>
                <li><strong>Personalizzare</strong>: sceglie quali categorie attivare tramite il pannello delle preferenze.</li>
                <li><strong>Modificare in seguito</strong>: cliccando su &ldquo;Preferenze cookie&rdquo; nel footer del sito.</li>
              </ul>
            </Section>

            <Section title="6. Tabella dei cookie">
              <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
                  <thead className="bg-bg-alt">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Nome</th>
                      <th className="text-left p-3 font-semibold text-foreground">Categoria</th>
                      <th className="text-left p-3 font-semibold text-foreground">Finalità</th>
                      <th className="text-left p-3 font-semibold text-foreground">Durata</th>
                      <th className="text-left p-3 font-semibold text-foreground">Fornitore</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-mono text-[11px]">flowapp_cookie_consent</td>
                      <td className="p-3">Tecnico necessario</td>
                      <td className="p-3">Memorizza le preferenze cookie dell&apos;utente.</td>
                      <td className="p-3">6 mesi</td>
                      <td className="p-3">Flowapp Studio</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-mono text-[11px]">[analytics_cookie]</td>
                      <td className="p-3">Analitico</td>
                      <td className="p-3">Statistiche aggregate sul traffico del sito.</td>
                      <td className="p-3">[da definire]</td>
                      <td className="p-3">[da definire]</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-mono text-[11px]">[marketing_cookie]</td>
                      <td className="p-3">Marketing</td>
                      <td className="p-3">Misurazione campagne o contenuti promozionali.</td>
                      <td className="p-3">[da definire]</td>
                      <td className="p-3">[da definire]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="7. Disattivazione tramite browser">
              <p>L&apos;utente può gestire o eliminare i cookie direttamente dalle impostazioni del proprio browser. Di seguito i link alle guide dei browser più comuni:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
              </ul>
            </Section>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-xs text-secondary/60 italic">
                Questa Cookie Policy deve essere aggiornata in base agli strumenti realmente installati sul sito. I placeholder con parentesi quadre devono essere compilati con i dati effettivi prima della pubblicazione definitiva.
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
