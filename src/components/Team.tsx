import { useLanguage } from '@/contexts/LanguageContext';
import avatarAlex from '@/assets/avatar-alex.png';
import avatarRobert from '@/assets/avatar-robert.png';
import avatarChris from '@/assets/avatar-chris.png';
import avatarSebastian from '@/assets/avatar-sebastian.png';

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Alex',
      role: t('team.alex.role'),
      avatar: avatarAlex,
      description: t('team.alex.description')
    },
    {
      name: 'Robert',
      role: t('team.robert.role'),
      avatar: avatarRobert,
      description: t('team.robert.description')
    },
    {
      name: 'Chris',
      role: t('team.chris.role'),
      avatar: avatarChris,
      description: t('team.chris.description')
    },
    {
      name: 'Sebastian',
      role: t('team.sebastian.role'),
      avatar: avatarSebastian,
      description: t('team.sebastian.description')
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-raleway">
            ABOUT
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <p className="text-lg text-muted-foreground font-raleway font-light leading-relaxed">
              Wir sind Team botti und haben ein klares Ziel: Effizienz neu denken – durch smarte Automatisierung, die nicht nur beschleunigt, sondern nachhaltig entlastet. Dabei geht es uns nicht um Technik um der Technik willen, sondern um echten Mehrwert, der im Alltag spürbar ist. Unsere Lösungen sind flexibel, innovativ und immer auf Ihr Unternehmen zugeschnitten – mit einer holistischen Sichtweise, die Prozesse, Menschen und Potenziale gleichermaßen berücksichtigt.
            </p>
            <p className="text-lg text-muted-foreground font-raleway font-light leading-relaxed">
              Wir glauben an Transparenz und Zusammenarbeit auf Augenhöhe. Deshalb sprechen wir Klartext, teilen unser Wissen und schaffen Vertrauen – vom ersten Workshop bis zur fertigen Implementierung. Unsere Stärke liegt darin, schnell greifbare Ergebnisse zu liefern und dabei gleichzeitig langfristige Strukturen aufzubauen, die mit Ihrem Unternehmen mitwachsen.
            </p>
            <p className="text-lg text-muted-foreground font-raleway font-light leading-relaxed">
              Mit einem agilen Mindset, smarten Tools und dem Gespür für das Wesentliche gestalten wir digitale Lösungen, die wirklich funktionieren. So bleibt mehr Raum für das, was zählt: kreative Ideen, produktive Teams und eine Arbeitswelt, die wieder Freude macht. Automatisierung mit Verstand, Herz und Weitblick – das ist unser Antrieb.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;