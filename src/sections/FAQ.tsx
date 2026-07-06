import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqList: FAQItem[] = [
    {
      question: 'Übernimmt meine Krankenkasse die Behandlungskosten?',
      answer: 'Die Kostenübernahme hängt von Ihrer Krankenversicherung und der Art der Behandlung ab. Gesetzliche Krankenkassen übernehmen die Regelversorgung. Für hochwertige, ästhetische Behandlungen oder Implantate fällt in der Regel ein Eigenanteil an. Wir beraten Sie im Vorfeld transparent und erstellen Ihnen gerne einen Heil- und Kostenplan.'
    },
    {
      question: 'Wie kann ich einen Termin vereinbaren?',
      answer: 'Sie können ganz einfach online über unsere Website, telefonisch oder persönlich in unserer Praxis einen Termin vereinbaren.'
    },
    {
      question: 'Was mache ich bei akuten Zahnschmerzen außerhalb der Sprechzeiten?',
      answer: 'Bei akuten Notfällen am Wochenende oder an Feiertagen wenden Sie sich bitte an den zahnärztlichen Notdienst. Die Telefonnummer des aktuellen Notdienstes für Neuenstadt am Kocher erfahren Sie auf unserem Anrufbeantworter oder online im zentralen Notdienstportal.'
    },
    {
      question: 'Gibt es Parkplätze in der Nähe der Praxis?',
      answer: 'Ja, direkt vor und hinter unserer Praxis stehen Ihnen ausreichend kostenlose Patientenparkplätze zur Verfügung.'
    },
    {
      question: 'Ist die Praxis barrierefrei zugänglich?',
      answer: 'Ja, unsere Praxisräume im Erdgeschoss sind vollständig barrierefrei zugänglich, sodass Sie uns auch mit Kinderwagen, Rollator oder Rollstuhl problemlos erreichen können.'
    },
    {
      question: 'Welche Möglichkeiten gibt es für Angstpatienten?',
      answer: 'Wir nehmen Ihre Angst sehr ernst. Wir nehmen uns viel Zeit für Sie, beraten Sie einfühlsam und bieten schmerzfreie Betäubungsmethoden an, um Ihren Besuch so entspannt und stressfrei wie möglich zu gestalten.'
    },
    {
      question: 'Was kostet eine professionelle Zahnreinigung (PZR) in Neuenstadt am Kocher?',
      answer: 'Die Kosten für eine PZR richten sich nach dem individuellen Aufwand und der Anzahl der zu reinigenden Zähne. Viele gesetzliche Krankenkassen bezuschussen die PZR mittlerweile, private Kassen übernehmen sie meist vollständig. Sprechen Sie uns gerne darauf an.'
    },
    {
      question: 'Was ist eine Teleskopprothese und wann wird sie eingesetzt?',
      answer: 'Eine Teleskopprothese ist ein hochwertiger, herausnehmbarer Zahnersatz, der ohne sichtbare Klammern an den restlichen natürlichen Zähnen befestigt wird. Sie bietet extrem hohen Tragekomfort und eine perfekte Ästhetik, wenn bereits mehrere Zähne fehlen.'
    },
    {
      question: 'Wie läuft eine maschinelle Wurzelkanalbehandlung ab?',
      answer: 'Bei einer maschinelle Wurzelkanalbehandlung verwenden wir hochflexible, feine Instrumente und Lupenbrillen, um die entzündeten Kanäle hochpräzise zu reinigen. Dies ist deutlich schneller, gründlicher und schonender als herkömmliche Methoden.'
    },
    {
      question: 'Wann brauche ich eine Knirscherschiene?',
      answer: 'Wenn Sie morgens oft mit Kiefer- oder Nackenschmerzen aufwachen oder Ihre Zähne Abnutzungserscheinungen zeigen, leiden Sie womöglich unter Zähneknirschen (Bruxismus). Eine individuell angepasste, transparente Knirscherschiene schützt Ihre Zähne nachts und entlastet die Muskulatur.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 md:py-48 bg-[#fbfbf9] relative overflow-hidden w-full">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">Häufig gestellte Fragen</p>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-secondary tracking-tight leading-tight max-w-3xl mx-auto">
            Häufige Fragen rund um Behandlungen und Termine bei Ihrem Zahnarzt in Neuenstadt am Kocher.
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-0">
          {faqList.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className="border-b border-slate-200 py-2 text-left"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-4 text-left font-medium text-[15px] md:text-base text-slate-800 hover:text-brand-primary transition-luxury group"
                >
                  <span className="pr-4">{item.question}</span>
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center text-slate-400 group-hover:text-brand-primary transition-luxury">
                    {isOpen ? <Minus strokeWidth={1.5} size={20} /> : <Plus strokeWidth={1.5} size={20} />}
                  </span>
                </button>
                
                {/* Accordion Content with smooth height transition */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-500 text-sm md:text-[15px] font-light leading-relaxed pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
