import { useLanguage } from '@/contexts/LanguageContext';
import avatarKarim from '@/assets/avatar-karim.png';

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Alex',
      role: t('team.alex.role'),
      avatar: '/lovable-uploads/2de9c32d-c883-4b16-9c47-d240c3dfb42f.png',
      description: t('team.alex.description')
    },
    {
      name: 'Robert',
      role: t('team.robert.role'),
      avatar: '/lovable-uploads/268cba2a-1016-4101-b25b-0c82bafb3ce1.png',
      description: t('team.robert.description')
    },
    {
      name: 'Chris',
      role: t('team.chris.role'),
      avatar: '/lovable-uploads/98692b47-095f-4ded-b823-892c9b0ff8fb.png',
      description: t('team.chris.description')
    },
    {
      name: 'Sebastian',
      role: t('team.sebastian.role'),
      avatar: '/lovable-uploads/6e48f8e7-ab5d-4dca-bac8-b9f74cf527e4.png',
      description: t('team.sebastian.description')
    },
    {
      name: 'Karim',
      role: t('team.karim.role'),
      avatar: avatarKarim,
      description: t('team.karim.description')
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-raleway">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3 font-raleway">
                {member.role}
              </p>
              <p className="text-muted-foreground font-raleway font-light text-sm">
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