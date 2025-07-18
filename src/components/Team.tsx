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
          <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            {t('team.title')} <span className="text-primary">{t('team.title.highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground font-raleway font-light max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1 font-raleway">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-2 font-raleway text-sm">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm font-raleway font-light leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;