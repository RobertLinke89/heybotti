
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type TranslationKey = 
  // Navigation
  | 'nav.home'
  | 'nav.services' 
  | 'nav.about'
  | 'nav.team'
  | 'nav.contact'
  | 'nav.process'
  | 'header.cta'
  // Hero
  | 'hero.title'
  | 'hero.title.highlight'
  | 'hero.subtitle'
  | 'hero.cta'
  // Services
  | 'services.title'
  | 'services.title.highlight'
  | 'services.subtitle'
  | 'services.consultation.button'
  | 'services.consultation.subtitle'
  | 'services.more.info'
  | 'services.sales.title'
  | 'services.sales.subtitle'
  | 'services.sales.description'
  | 'services.finance.title'
  | 'services.finance.subtitle'
  | 'services.finance.description'
  | 'services.hr.title'
  | 'services.hr.subtitle'
  | 'services.hr.description'
  | 'services.ecommerce.title'
  | 'services.ecommerce.subtitle'
  | 'services.ecommerce.description'
  | 'services.bi.title'
  | 'services.bi.subtitle'
  | 'services.bi.description'
  | 'services.workflows.title'
  | 'services.workflows.subtitle'
  | 'services.workflows.description'
  // Service features
  | 'services.sales.feature1'
  | 'services.sales.feature2'
  | 'services.sales.feature3'
  | 'services.sales.feature4'
  | 'services.sales.feature5'
  | 'services.finance.feature1'
  | 'services.finance.feature2'
  | 'services.finance.feature3'
  | 'services.finance.feature4'
  | 'services.hr.feature1'
  | 'services.hr.feature2'
  | 'services.hr.feature3'
  | 'services.hr.feature4'
  | 'services.ecommerce.feature1'
  | 'services.ecommerce.feature2'
  | 'services.ecommerce.feature3'
  | 'services.ecommerce.feature4'
  | 'services.bi.feature1'
  | 'services.bi.feature2'
  | 'services.bi.feature3'
  | 'services.workflows.feature1'
  | 'services.workflows.feature2'
  | 'services.workflows.feature3'
  | 'services.workflows.feature4'
  | 'services.workflows.feature5'
  | 'services.workflows.feature6'
  // About
  | 'about.title'
  | 'about.title.highlight'
  | 'about.subtitle'
  | 'about.step1.title'
  | 'about.step1.description'
  | 'about.step2.title'
  | 'about.step2.description'
  | 'about.step3.title'
  | 'about.step3.description'
  | 'about.step4.title'
  | 'about.step4.description'
  // Team
  | 'team.title'
  | 'team.title.highlight'
  | 'team.subtitle'
  | 'team.alex.role'
  | 'team.alex.description'
  | 'team.robert.role'
  | 'team.robert.description'
  | 'team.chris.role'
  | 'team.chris.description'
  | 'team.sebastian.role'
  | 'team.sebastian.description'
  | 'team.karim.role'
  | 'team.karim.description'
  // CTA
  | 'cta.title'
  | 'cta.title.highlight'
  | 'cta.subtitle'
  | 'cta.button'
  | 'cta.note'
  // Footer
  | 'footer.description'
  | 'footer.copyright'
  // Jobs CTA
  | 'jobs.cta.title'
  | 'jobs.cta.title.highlight'
  | 'jobs.cta.subtitle'
  | 'jobs.cta.button'
  // AutomationComparison
  | 'comparison.title'
  | 'comparison.subtitle'
  | 'comparison.off.title'
  | 'comparison.on.title'
  | 'comparison.without.title'
  | 'comparison.without.subtitle'
  | 'comparison.with.title'
  | 'comparison.with.subtitle'
  | 'comparison.without.feature1'
  | 'comparison.without.feature2'
  | 'comparison.without.feature3'
  | 'comparison.without.feature4'
  | 'comparison.with.feature1'
  | 'comparison.with.feature2'
  | 'comparison.with.feature3'
  | 'comparison.with.feature4'
  | 'comparison.with.feature5'
  | 'comparison.with.feature6'
  | 'comparison.with.feature7'
  | 'comparison.with.feature8'
  | 'comparison.with.feature9'
  | 'comparison.with.feature10'
  | 'comparison.testimonial.title'
  | 'comparison.testimonial.subtitle'
  | 'comparison.testimonial.quote'
  | 'comparison.testimonial.name'
  | 'comparison.testimonial.company'
  // About Page
  | 'about.page.title'
  | 'about.page.back'
  | 'about.page.content1'
  | 'about.page.content2'
  | 'about.page.content3'
  | 'about.page.cta.title'
  | 'about.page.cta.subtitle'
  | 'about.page.cta.button'
  // Jobs Page
  | 'jobs.page.title'
  | 'jobs.page.back'
  | 'jobs.page.subtitle'
  | 'jobs.mission.title'
  | 'jobs.requirements.title'
  | 'jobs.benefits.title'
  | 'jobs.apply.button'
  | 'jobs.no.position.title'
  | 'jobs.no.position.subtitle'
  | 'jobs.unsolicited.button'
  // Cookie Banner
  | 'cookies.message'
  | 'cookies.accept'
  | 'cookies.decline'
  // Project Form
  | 'form.title'
  | 'form.title.highlight'
  | 'form.subtitle'
  | 'form.name'
  | 'form.name.required'
  | 'form.name.placeholder'
  | 'form.email'
  | 'form.email.required'
  | 'form.email.invalid'
  | 'form.email.placeholder'
  | 'form.company'
  | 'form.company.placeholder'
  | 'form.phone'
  | 'form.phone.placeholder'
  | 'form.revenue'
  | 'form.revenue.note'
  | 'form.budget'
  | 'form.details'
  | 'form.details.required'
  | 'form.details.placeholder'
  | 'form.submit'
  | 'form.success.title'
  | 'form.success.description'
  // Chatbot
  | 'chatbot.welcome'
  | 'chatbot.subtitle'
  | 'chatbot.placeholder'
  | 'chatbot.automation'
  | 'chatbot.cost'
  | 'chatbot.sales'
  | 'chatbot.finance'
  | 'chatbot.hr'
  | 'chatbot.ecommerce'
  | 'chatbot.reporting'
  | 'chatbot.workflow'
  | 'chatbot.greeting'
  | 'chatbot.thanks'
  | 'chatbot.default'
  // Callback form
  | 'callback.title'
  | 'callback.name'
  | 'callback.name.required'
  | 'callback.name.placeholder'
  | 'callback.email'
  | 'callback.email.required'
  | 'callback.email.invalid'
  | 'callback.email.placeholder'
  | 'callback.phone'
  | 'callback.phone.required'
  | 'callback.phone.placeholder'
  | 'callback.date'
  | 'callback.date.placeholder'
  | 'callback.time'
  | 'callback.time.placeholder'
  | 'callback.cancel'
  | 'callback.schedule'
  | 'callback.error.title'
  | 'callback.error.description'
  | 'callback.success.title'
  | 'callback.success.description'
  // Job postings
  | 'jobs.nocode.title'
  | 'jobs.nocode.type'
  | 'jobs.nocode.location'
  | 'jobs.nocode.start'
  | 'jobs.nocode.mission'
  | 'jobs.nocode.req1'
  | 'jobs.nocode.req2'
  | 'jobs.nocode.req3'
  | 'jobs.nocode.req4'
  | 'jobs.nocode.benefit1'
  | 'jobs.nocode.benefit2'
  | 'jobs.nocode.benefit3'
  | 'jobs.consultant.title'
  | 'jobs.consultant.type'
  | 'jobs.consultant.location'
  | 'jobs.consultant.start'
  | 'jobs.consultant.mission'
  | 'jobs.consultant.req1'
  | 'jobs.consultant.req2'
  | 'jobs.consultant.req3'
  | 'jobs.consultant.req4'
  | 'jobs.consultant.benefit1'
  | 'jobs.consultant.benefit2'
  | 'jobs.consultant.benefit3'
  | 'jobs.architect.title'
  | 'jobs.architect.type'
  | 'jobs.architect.location'
  | 'jobs.architect.start'
  | 'jobs.architect.mission'
  | 'jobs.architect.req1'
  | 'jobs.architect.req2'
  | 'jobs.architect.req3'
  | 'jobs.architect.req4'
  | 'jobs.architect.benefit1'
  | 'jobs.architect.benefit2'
  | 'jobs.architect.benefit3';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.process': 'Process',
    'header.cta': 'Consultation',
    
    // Hero
    'hero.title': 'With us, everything runs',
    'hero.title.highlight': 'automatically',
    'hero.subtitle': 'We automate the processes in your company so you can focus on what really matters. No more manual work – more time for real value creation.',
    'hero.cta': 'Request Project',
    
    // Services
    'services.title': 'Top areas for maximum',
    'services.title.highlight': 'leverage',
    'services.subtitle': 'Automation is no longer a luxury – it\'s the key to growth, efficiency and clarity in a complex working world.',
    'services.consultation.button': 'Request Free Consultation',
    'services.consultation.subtitle': 'Which area offers the greatest potential in your company?',
    'services.more.info': 'More Info',
    'services.sales.title': 'Sales & Marketing Automation',
    'services.sales.subtitle': 'More leads. Less effort. Full scaling.',
    'services.sales.description': 'Automate funnels, follow-ups and campaigns to systematically turn prospects into customers – 24/7, data-driven and personal.',
    'services.finance.title': 'Finance & Accounting',
    'services.finance.subtitle': 'Fewer errors. More overview. Automatically compliant.',
    'services.finance.description': 'Documents, payments, invoices and reports flow automatically through your systems – for a tidy back office without headaches.',
    'services.hr.title': 'HR & Recruiting',
    'services.hr.subtitle': 'The best talents. The best processes.',
    'services.hr.description': 'From application to onboarding: Automation brings speed, structure and appreciation to your HR processes.',
    'services.ecommerce.title': 'E-Commerce & Fulfillment',
    'services.ecommerce.subtitle': 'Your silent e-commerce back office. Around the clock.',
    'services.ecommerce.description': 'Sales run, inventory is correct, returns are under control – every movement in the shop automatically triggers actions that delight your customers and relieve your warehouse.',
    'services.bi.title': 'Business Intelligence & Reporting',
    'services.bi.subtitle': 'All numbers. All answers. In real time.',
    'services.bi.description': 'Your most important KPIs at a glance – prepared, visualized and equipped with warning systems before risks become problems.',
    'services.workflows.title': 'Workflows',
    'services.workflows.subtitle': 'Efficiency starts internally.',
    'services.workflows.description': 'Standardized processes like approvals, document management or handovers run in the background – clean, traceable, scalable.',
    
    // Service features
    'services.sales.feature1': 'Email automation',
    'services.sales.feature2': 'Lead nurturing funnels',
    'services.sales.feature3': 'CRM automation',
    'services.sales.feature4': 'Chatbots / WhatsApp automation',
    'services.sales.feature5': 'Retargeting campaigns',
    'services.finance.feature1': 'Document recognition & booking',
    'services.finance.feature2': 'Invoicing & dunning',
    'services.finance.feature3': 'Automated bank reconciliation',
    'services.finance.feature4': 'Tax preparation through report automation',
    'services.hr.feature1': 'Automated candidate pre-selection',
    'services.hr.feature2': 'Interview scheduling',
    'services.hr.feature3': 'Onboarding automation',
    'services.hr.feature4': 'Employee communication',
    'services.ecommerce.feature1': 'Inventory synchronization & warehouse management',
    'services.ecommerce.feature2': 'Shipping processing / label creation',
    'services.ecommerce.feature3': 'Payment reconciliation & return handling',
    'services.ecommerce.feature4': 'Product feed automation for marketplaces & ads',
    'services.bi.feature1': 'Dashboards & KPI automation',
    'services.bi.feature2': 'Automated data aggregation from multiple tools',
    'services.bi.feature3': 'Early warning systems via triggers and alerts',
    'services.workflows.feature1': 'Approval processes',
    'services.workflows.feature2': 'Ticketing and support workflows',
    'services.workflows.feature3': 'Customer onboarding',
    'services.workflows.feature4': 'Contract management',
    'services.workflows.feature5': 'Document management',
    'services.workflows.feature6': 'Internal communication',
    
    // About
    'about.title': 'How we',
    'about.title.highlight': 'approach',
    'about.subtitle': 'Our structured approach for sustainable automation solutions',
    'about.step1.title': 'Analysis & Goal Definition',
    'about.step1.description': 'Thorough analysis of existing processes and definition of clear goals. We identify time-consuming, error-prone tasks and determine whether time should be saved, errors reduced, or scalability increased.',
    'about.step2.title': 'Tool Selection & Technology',
    'about.step2.description': 'Selection of suitable tools and technologies for existing systems. Whether RPA, low-code platforms or API integrations – we focus on user-friendly, secure and scalable solutions.',
    'about.step3.title': 'Implementation & Testing Phase',
    'about.step3.description': 'Technical implementation with small pilot process. Automation, testing with real data and valuable employee feedback for early optimization.',
    'about.step4.title': 'Rollout & Optimization',
    'about.step4.description': 'Go-live with team training and transparent communication. Continuous reviews and extensions ensure long-term success.',
    
    // Team
    'team.title': 'Our',
    'team.title.highlight': 'Team',
    'team.subtitle': 'Meet the experts who automate and digitize your business.',
    'team.alex.role': 'Solution Architect',
    'team.alex.description': 'Designs comprehensive automation solutions that integrate seamlessly with existing business processes and drive digital transformation.',
    'team.robert.role': 'Automation Consultant',
    'team.robert.description': 'Provides strategic guidance on automation opportunities and helps organizations optimize their operational efficiency through intelligent process design.',
    'team.chris.role': 'Automation Engineer',
    'team.chris.description': 'Implements and maintains automated systems, ensuring robust performance and seamless integration across all technical platforms.',
    'team.sebastian.role': 'Business Analyst',
    'team.sebastian.description': 'Analyzes business workflows to identify automation opportunities and translates complex requirements into actionable technical specifications.',
    'team.karim.role': 'Developer',
    'team.karim.description': 'Builds and codes custom automation solutions, developing the technical infrastructure that powers our innovative business process improvements.',
    
    // CTA
    'cta.title': 'Ready for more',
    'cta.title.highlight': 'Efficiency',
    'cta.subtitle': 'Let us find out in a non-binding conversation how botti can relieve your company.',
    'cta.button': 'Request Project',
    'cta.note': 'No sales pitch – just genuine interest in your situation.',

    // Footer
    'footer.description': 'Smart automation with a human perspective for small and medium-sized businesses.',
    'footer.copyright': '© 2024 HeyBotti, a brand of oryve LLC, registered in the state of Miami, USA. All rights reserved.',

    // Jobs CTA
    'jobs.cta.title': 'Become part of our',
    'jobs.cta.title.highlight': 'Team',
    'jobs.cta.subtitle': 'You think automation differently and want to create real impact? Then you\'re in the right place. Discover our open positions.',
    'jobs.cta.button': 'View Open Positions',

    // AutomationComparison
    'comparison.title': 'The difference is clear',
    'comparison.subtitle': 'See for yourself how automation transforms your processes',
    'comparison.off.title': 'botti OFF',
    'comparison.on.title': 'botti ON',
    'comparison.without.title': 'Without Automation',
    'comparison.without.subtitle': 'Chaos and inefficiency',
    'comparison.with.title': 'With botti Automation',
    'comparison.with.subtitle': 'Clarity and efficiency',
    'comparison.without.feature1': 'Confusing communication channels',
    'comparison.without.feature2': 'Time loss through manual processes',
    'comparison.without.feature3': 'Error-prone workflows',
    'comparison.without.feature4': 'Unstructured collaboration',
    'comparison.with.feature1': 'Clear, structured processes',
    'comparison.with.feature2': 'Automated workflows',
    'comparison.with.feature3': 'Seamless team communication',
    'comparison.with.feature4': 'More time for what matters',
    'comparison.with.feature5': 'Reduced error rate',
    'comparison.with.feature6': 'Cost savings',
    'comparison.with.feature7': 'Better scalability',
    'comparison.with.feature8': 'Increased productivity',
    'comparison.with.feature9': '24/7 availability',
    'comparison.with.feature10': 'Improved data quality',
    'comparison.testimonial.title': 'Success Story',
    'comparison.testimonial.subtitle': 'Real Customer Experience',
    'comparison.testimonial.quote': 'I wonder today how we ever managed before. Since we automated our processes, many things just run in the background, without any follow-up or control chaos. The best part: My team is much more relaxed and finally has a clear head for the really important topics. I can only recommend it to anyone who wants less stress and more clarity in everyday life.',
    'comparison.testimonial.name': 'Vera',
    'comparison.testimonial.company': 'BLACK FLASH ARCHERY GmbH',
    
    // About Page
    'about.page.title': 'About Us',
    'about.page.back': 'Back to Homepage',
    'about.page.content1': 'We are Team botti – and we rethink efficiency. With smart automation solutions, we provide sustainable relief instead of just accelerating. Our focus: real added value in everyday life, individually adapted and holistically conceived – with a view to processes, people and potential.',
    'about.page.content2': 'We rely on transparency, plain language and partnership-based cooperation. From the first workshop to implementation, we deliver quickly tangible results and build future-proof structures that grow with you.',
    'about.page.content3': 'With an agile mindset, smart tools and a focus on what matters, we create digital solutions that work – for more creative freedom, productive teams and real joy at work.',
    'about.page.cta.title': 'Ready to Transform Your Business?',
    'about.page.cta.subtitle': 'Let\'s discuss how we can automate your processes and boost your efficiency.',
    'about.page.cta.button': 'Get Started',
    
    // Jobs Page
    'jobs.page.title': 'Open Positions',
    'jobs.page.back': 'Back to Homepage',
    'jobs.page.subtitle': 'Become part of our team and shape the future of automation. We are looking for talented people who bring passion for innovation and efficiency.',
    'jobs.mission.title': 'Your Mission',
    'jobs.requirements.title': 'What you bring',
    'jobs.benefits.title': 'What awaits you',
    'jobs.apply.button': 'Apply Now',
    'jobs.no.position.title': 'Didn\'t find the right position?',
    'jobs.no.position.subtitle': 'We are always looking for talented people. Send us an unsolicited application!',
    'jobs.unsolicited.button': 'Send Unsolicited Application',

    // Cookie Banner
    'cookies.message': 'We use cookies to improve your experience on our website. By using our website, you agree to the use of cookies.',
    'cookies.accept': 'Accept',
    'cookies.decline': 'Decline',

    // Project Form
    'form.title': 'Request',
    'form.title.highlight': 'Project',
    'form.subtitle': 'Tell us about your project and we\'ll find the right solution together.',
    'form.name': 'Name',
    'form.name.required': 'Name is required',
    'form.name.placeholder': 'Your name',
    'form.email': 'Email',
    'form.email.required': 'Email is required',
    'form.email.invalid': 'Invalid email address',
    'form.email.placeholder': 'your@email.com',
    'form.company': 'Company',
    'form.company.placeholder': 'Your company',
    'form.phone': 'Phone',
    'form.phone.placeholder': '+1 123 456789',
    'form.revenue': 'How much more revenue per year?',
    'form.revenue.note': 'We\'ll show you how to achieve these goals through automation',
    'form.budget': 'Budget',
    'form.details': 'Project Details',
    'form.details.required': 'Please describe your project',
    'form.details.placeholder': 'Describe your project, goals and challenges...',
    'form.submit': 'Send Request',
    'form.success.title': 'Request sent!',
    'form.success.description': 'We will get back to you within 24 hours.',

    // Chatbot
    'chatbot.welcome': 'Hello! I am your intelligent automation agent from botti.co. How can I help you today with optimizing your business processes?',
    'chatbot.subtitle': 'Your smart automation agent',
    'chatbot.placeholder': 'Write your message...',
    'chatbot.automation': 'Automation is our specialty! We can help you in various areas: Sales & Marketing, Finance & Accounting, HR & Recruiting, E-Commerce and Business Intelligence. In which area do you see the greatest potential?',
    'chatbot.cost': 'The costs for automation solutions vary depending on complexity and scope. We would be happy to create an individual offer for you. Can you tell me more about your company and your specific requirements?',
    'chatbot.sales': 'Perfect! Our sales & marketing automation includes email automation, lead nurturing funnels, CRM automation and chatbots. This allows you to systematically turn prospects into customers - 24/7 and data-driven. Which aspect interests you most?',
    'chatbot.finance': 'Our finance & accounting automation ensures fewer errors and more overview. We automate document recognition, invoicing, bank reconciliation and tax preparation. Would you like to learn more about a specific area?',
    'chatbot.hr': 'HR automation brings speed and structure to your personnel processes. From automated candidate pre-selection to appointment scheduling to onboarding - we digitize your entire HR process. Where do you see the greatest need for action?',
    'chatbot.ecommerce': 'E-commerce automation is our silent back office for you! Inventory synchronization, shipping processing, payment reconciliation and product feed automation run around the clock. Which part of your e-commerce process would you like to optimize?',
    'chatbot.reporting': 'With Business Intelligence & Reporting you have all important KPIs at a glance. We create automated dashboards, aggregate data from multiple tools and set up early warning systems. Which metrics are particularly important to you?',
    'chatbot.workflow': 'Workflow automation makes your internal processes more efficient. Approval processes, ticketing, document management and internal communication run standardized and traceable. Which processes are currently giving you headaches?',
    'chatbot.greeting': 'Hello! Nice to have you here. I would be happy to help you find the right automation solutions for your company. What is currently occupying you most in your business processes?',
    'chatbot.thanks': 'You are very welcome! If you have any further questions or would like a non-binding consultation, I am here for you at any time. Together we will find the perfect automation solution for your company.',
    'chatbot.default': 'That is an interesting question! Automation can help in many areas - from sales to finance to HR processes. Can you give me more details about your specific concern? This way I can help you more specifically.',
    
    // Callback form
    'callback.title': 'Schedule Callback',
    'callback.name': 'Name',
    'callback.name.required': 'Name is required',
    'callback.name.placeholder': 'Your Name',
    'callback.email': 'Email',
    'callback.email.required': 'Email is required',
    'callback.email.invalid': 'Invalid email address',
    'callback.email.placeholder': 'your@email.com',
    'callback.phone': 'Phone',
    'callback.phone.required': 'Phone number is required',
    'callback.phone.placeholder': '+1 123 456789',
    'callback.date': 'Date',
    'callback.date.placeholder': 'Select date',
    'callback.time': 'Time',
    'callback.time.placeholder': 'Select time',
    'callback.cancel': 'Cancel',
    'callback.schedule': 'Schedule Callback',
    'callback.error.title': 'Error',
    'callback.error.description': 'Please select date and time.',
    'callback.success.title': 'Callback scheduled!',
    'callback.success.description': 'We will call you back on {date} at {time}.',
    
    // Job postings
    'jobs.nocode.title': 'No-Code/Low-Code Developer',
    'jobs.nocode.type': 'Freelance',
    'jobs.nocode.location': 'Remote',
    'jobs.nocode.start': 'Immediately',
    'jobs.nocode.mission': 'At botti, you develop customized automation solutions using tools like Make, n8n, Airtable or Zapier – from idea to implementation. You think in workflows, love simple solutions for complex processes and translate technical requirements into functioning systems.',
    'jobs.nocode.req1': 'Experience with no-code or low-code platforms',
    'jobs.nocode.req2': 'Familiar handling of APIs, webhooks & data models',
    'jobs.nocode.req3': 'Structured work approach, technical understanding and solution-oriented mindset',
    'jobs.nocode.req4': 'Enthusiasm for efficient implementation and clean process design',
    'jobs.nocode.benefit1': 'Diverse customer projects with real impact',
    'jobs.nocode.benefit2': 'Full flexibility: work when and where you want',
    'jobs.nocode.benefit3': 'An appreciative, agile team that speaks plainly and gives ideas space',
    'jobs.consultant.title': 'Automation Consultant',
    'jobs.consultant.type': 'Freelance',
    'jobs.consultant.location': 'Remote',
    'jobs.consultant.start': 'Immediately',
    'jobs.consultant.mission': 'You analyze business processes, identify automation potential and accompany companies in their digital transformation. As a sparring partner at eye level, you think holistically and develop solutions together with our team that really relieve people and processes.',
    'jobs.consultant.req1': 'Experience in consulting around digitization and process optimization',
    'jobs.consultant.req2': 'Clear view for workflows, user-friendliness and efficiency',
    'jobs.consultant.req3': 'Basic technical understanding (e.g. API logic, automation tools)',
    'jobs.consultant.req4': 'Communication skills, empathy and enthusiasm for transformation',
    'jobs.consultant.benefit1': 'Customers who are ready to think differently',
    'jobs.consultant.benefit2': 'Freedom and responsibility in implementation',
    'jobs.consultant.benefit3': 'Collaboration in a team that shows attitude – with mind, heart and foresight',
    'jobs.architect.title': 'AI Workflow Architect',
    'jobs.architect.type': 'Freelance',
    'jobs.architect.location': 'Remote',
    'jobs.architect.start': 'Immediately',
    'jobs.architect.mission': 'You design intelligent workflows with GPT, LangChain, Zapier & Co. and bring real AI power into the daily work of our customers. You combine technical sophistication with strategic thinking – and create solutions that work intuitively and have a lasting impact.',
    'jobs.architect.req1': 'Experience working with AI models (LLMs), prompt engineering and tools like LangChain',
    'jobs.architect.req2': 'Sense for meaningful automation and data flows',
    'jobs.architect.req3': 'Independent, structured work approach and enthusiasm for innovation',
    'jobs.architect.req4': 'Interest in making things really better – not just smarter',
    'jobs.architect.benefit1': 'Projects at the cutting edge – with real creative freedom',
    'jobs.architect.benefit2': 'Exchange with a team that thinks technology humanly',
    'jobs.architect.benefit3': 'Maximum flexibility, open communication, fair cooperation',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.team': 'Team',
    'nav.contact': 'Kontakt',
    'nav.process': 'Prozess',
    'header.cta': 'Beratung',
    
    // Hero
    'hero.title': 'Mit uns läuft\'s',
    'hero.title.highlight': 'automatisch',
    'hero.subtitle': 'Wir automatisieren die Prozesse in Ihrem Unternehmen, damit Sie sich auf das konzentrieren können, was wirklich wichtig ist. Keine manuelle Arbeit mehr – mehr Zeit für echte Wertschöpfung.',
    'hero.cta': 'Projekt anfragen',
    
    // Services
    'services.title': 'Top-Bereiche für maximalen',
    'services.title.highlight': 'Hebel',
    'services.subtitle': 'Automatisierung ist kein Luxus mehr – sie ist der Schlüssel zu Wachstum, Effizienz und Klarheit in einer komplexen Arbeitswelt.',
    'services.consultation.button': 'Kostenlose Beratung anfragen',
    'services.consultation.subtitle': 'Welcher Bereich bietet in Ihrem Unternehmen das größte Potenzial?',
    'services.more.info': 'Mehr Infos',
    'services.sales.title': 'Sales & Marketing Automatisierung',
    'services.sales.subtitle': 'Mehr Leads. Weniger Aufwand. Volle Skalierung.',
    'services.sales.description': 'Automatisieren Sie Funnels, Follow-ups und Kampagnen, um systematisch Interessenten zu Kunden zu machen – 24/7, datengetrieben und persönlich.',
    'services.finance.title': 'Finance & Buchhaltung',
    'services.finance.subtitle': 'Weniger Fehler. Mehr Überblick. Automatisch compliant.',
    'services.finance.description': 'Belege, Zahlungen, Rechnungen und Berichte fließen automatisch durch Ihre Systeme – für ein aufgeräumtes Back-Office ohne Kopfschmerzen.',
    'services.hr.title': 'HR & Recruiting',
    'services.hr.subtitle': 'Die besten Talente. Die besten Prozesse.',
    'services.hr.description': 'Von der Bewerbung bis zum Onboarding: Automatisierung bringt Geschwindigkeit, Struktur und Wertschätzung in Ihre HR-Prozesse.',
    'services.ecommerce.title': 'E-Commerce & Fulfillment',
    'services.ecommerce.subtitle': 'Ihr lautloses E-Commerce Back-Office. Rund um die Uhr.',
    'services.ecommerce.description': 'Verkäufe laufen, Lager stimmt, Retouren sind im Griff – jede Bewegung im Shop löst automatisch Aktionen aus, die Ihre Kunden begeistern und Ihr Lager entlasten.',
    'services.bi.title': 'Business Intelligence & Reporting',
    'services.bi.subtitle': 'Alle Zahlen. Alle Antworten. In Echtzeit.',
    'services.bi.description': 'Ihre wichtigsten KPIs auf einen Blick – aufbereitet, visualisiert und mit Warnsystemen ausgestattet, bevor Risiken zu Problemen werden.',
    'services.workflows.title': 'Workflows',
    'services.workflows.subtitle': 'Effizienz fängt intern an.',
    'services.workflows.description': 'Standardisierte Prozesse wie Freigaben, Dokumentenverwaltung oder Übergaben laufen im Hintergrund ab – sauber, nachvollziehbar, skalierbar.',
    
    // Service features
    'services.sales.feature1': 'E-Mail-Automatisierung',
    'services.sales.feature2': 'Lead-Nurturing-Funnels',
    'services.sales.feature3': 'CRM-Automatisierung',
    'services.sales.feature4': 'Chatbots / WhatsApp-Automatisierung',
    'services.sales.feature5': 'Retargeting-Kampagnen',
    'services.finance.feature1': 'Belegerfassung & Buchung',
    'services.finance.feature2': 'Rechnungsstellung & Mahnung',
    'services.finance.feature3': 'Automatisierter Bankabgleich',
    'services.finance.feature4': 'Steuervorbereitung durch Report-Automatisierung',
    'services.hr.feature1': 'Automatisierte Kandidatenvorauswahl',
    'services.hr.feature2': 'Interview-Terminplanung',
    'services.hr.feature3': 'Onboarding-Automatisierung',
    'services.hr.feature4': 'Mitarbeiterkommunikation',
    'services.ecommerce.feature1': 'Lagerabgleich & Lagerverwaltung',
    'services.ecommerce.feature2': 'Versandabwicklung / Etikettenerstellung',
    'services.ecommerce.feature3': 'Zahlungsabgleich & Retouren-Handling',
    'services.ecommerce.feature4': 'Produktfeed-Automatisierung für Marktplätze & Ads',
    'services.bi.feature1': 'Dashboards & KPI-Automatisierung',
    'services.bi.feature2': 'Automatisierte Datenaggregation aus mehreren Tools',
    'services.bi.feature3': 'Frühwarnsysteme über Trigger und Alerts',
    'services.workflows.feature1': 'Freigabeprozesse',
    'services.workflows.feature2': 'Ticketing und Support-Workflows',
    'services.workflows.feature3': 'Kunden-Onboarding',
    'services.workflows.feature4': 'Vertragsmanagement',
    'services.workflows.feature5': 'Dokumentenverwaltung',
    'services.workflows.feature6': 'Interne Kommunikation',
    
    // About
    'about.title': 'Wie wir es',
    'about.title.highlight': 'angehen',
    'about.subtitle': 'Unser strukturierter Ansatz für nachhaltige Automatisierungslösungen',
    'about.step1.title': 'Analyse & Zieldefinition',
    'about.step1.description': 'Gründliche Analyse bestehender Prozesse und Definition klarer Ziele. Wir identifizieren zeitaufwändige, fehleranfällige Aufgaben und bestimmen, ob Zeit gespart, Fehler reduziert oder Skalierbarkeit erhöht werden soll.',
    'about.step2.title': 'Tool-Auswahl & Technologie',
    'about.step2.description': 'Auswahl geeigneter Tools und Technologien für bestehende Systeme. Ob RPA, Low-Code-Plattformen oder API-Integrationen – wir setzen auf benutzerfreundliche, sichere und skalierbare Lösungen.',
    'about.step3.title': 'Prozess & Testphase',
    'about.step3.description': 'Technische Umsetzung mit kleinem Pilotprozess. Automatisierung, Test mit echten Daten und wertvolles Mitarbeiterfeedback für frühzeitige Optimierung.',
    'about.step4.title': 'Rollout & Optimierung',
    'about.step4.description': 'Go-live mit Team-Schulung und transparenter Kommunikation. Kontinuierliche Reviews und Erweiterungen sorgen für langfristigen Erfolg.',
    
    // Team
    'team.title': 'Unser',
    'team.title.highlight': 'Team',
    'team.subtitle': 'Lernen Sie die Experten kennen, die Ihr Unternehmen automatisieren und digitalisieren.',
    'team.alex.role': 'Lösungsarchitekt',
    'team.alex.description': 'Entwirft umfassende Automatisierungslösungen, die sich nahtlos in bestehende Geschäftsprozesse integrieren und die digitale Transformation vorantreiben.',
    'team.robert.role': 'Automatisierungsberater',
    'team.robert.description': 'Bietet strategische Beratung zu Automatisierungsmöglichkeiten und hilft Organisationen dabei, ihre operative Effizienz durch intelligentes Prozessdesign zu optimieren.',
    'team.chris.role': 'Automatisierungsingenieur',
    'team.chris.description': 'Implementiert und wartet automatisierte Systeme und gewährleistet robuste Leistung und nahtlose Integration auf allen technischen Plattformen.',
    'team.sebastian.role': 'Business Analyst',
    'team.sebastian.description': 'Analysiert Geschäftsabläufe zur Identifizierung von Automatisierungsmöglichkeiten und übersetzt komplexe Anforderungen in umsetzbare technische Spezifikationen.',
    'team.karim.role': 'Entwickler',
    'team.karim.description': 'Erstellt und programmiert maßgeschneiderte Automatisierungslösungen und entwickelt die technische Infrastruktur für innovative Geschäftsprozessverbesserungen.',
    
    // CTA
    'cta.title': 'Bereit für mehr',
    'cta.title.highlight': 'Effizienz',
    'cta.subtitle': 'Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie botti Ihr Unternehmen entlasten kann.',
    'cta.button': 'Projekt anfragen',
    'cta.note': 'Kein Verkaufsgespräch – nur echtes Interesse an Ihrer Situation.',

    // Footer
    'footer.description': 'Intelligente Automatisierung mit menschlicher Perspektive für kleine und mittlere Unternehmen.',
    'footer.copyright': '© 2024 HeyBotti, eine Marke der oryve LLC, registriert im Bundesstaat Miami, USA. Alle Rechte vorbehalten.',

    // Jobs CTA
    'jobs.cta.title': 'Komm ins',
    'jobs.cta.title.highlight': 'Team',
    'jobs.cta.subtitle': 'Sie denken Automatisierung anders und wollen echten Impact schaffen? Dann sind Sie hier richtig. Entdecken Sie unsere offenen Stellen.',
    'jobs.cta.button': 'Offene Stellen ansehen',

    // AutomationComparison
    'comparison.title': 'Der Unterschied ist klar',
    'comparison.subtitle': 'Sehen Sie selbst, wie Automatisierung Ihre Prozesse transformiert',
    'comparison.off.title': 'botti AUS',
    'comparison.on.title': 'botti AN',
    'comparison.without.title': 'Ohne Automatisierung',
    'comparison.without.subtitle': 'Chaos und Ineffizienz',
    'comparison.with.title': 'Mit botti Automatisierung',
    'comparison.with.subtitle': 'Klarheit und Effizienz',
    'comparison.without.feature1': 'Verwirrende Kommunikationskanäle',
    'comparison.without.feature2': 'Zeitverlust durch manuelle Prozesse',
    'comparison.without.feature3': 'Fehleranfällige Arbeitsabläufe',
    'comparison.without.feature4': 'Unstrukturierte Zusammenarbeit',
    'comparison.with.feature1': 'Klare, strukturierte Prozesse',
    'comparison.with.feature2': 'Automatisierte Arbeitsabläufe',
    'comparison.with.feature3': 'Nahtlose Teamkommunikation',
    'comparison.with.feature4': 'Mehr Zeit für das Wesentliche',
    'comparison.with.feature5': 'Reduzierte Fehlerrate',
    'comparison.with.feature6': 'Kosteneinsparungen',
    'comparison.with.feature7': 'Bessere Skalierbarkeit',
    'comparison.with.feature8': 'Erhöhte Produktivität',
    'comparison.with.feature9': '24/7 Verfügbarkeit',
    'comparison.with.feature10': 'Verbesserte Datenqualität',
    'comparison.testimonial.title': 'Erfolgsgeschichte',
    'comparison.testimonial.subtitle': 'Echte Kundenerfahrung',
    'comparison.testimonial.quote': 'Ich frage mich heute, wie wir das früher je geschafft haben. Seit wir unsere Prozesse automatisiert haben, läuft vieles einfach im Hintergrund ab, ohne Nachfass- oder Kontrollchaos. Das Beste: Mein Team ist viel entspannter und hat endlich den Kopf frei für die wirklich wichtigen Themen. Kann ich nur jedem empfehlen, der weniger Stress und mehr Klarheit im Alltag haben möchte.',
    'comparison.testimonial.name': 'Vera',
    'comparison.testimonial.company': 'BLACK FLASH ARCHERY GmbH',
    
    // About Page
    'about.page.title': 'Über uns',
    'about.page.back': 'Zurück zur Startseite',
    'about.page.content1': 'Wir sind Team botti – und denken Effizienz neu. Mit intelligenten Automatisierungslösungen sorgen wir für nachhaltige Entlastung statt nur Beschleunigung. Unser Fokus: echter Mehrwert im Alltag, individuell angepasst und ganzheitlich gedacht – mit Blick auf Prozesse, Menschen und Potentiale.',
    'about.page.content2': 'Wir setzen auf Transparenz, klare Sprache und partnerschaftliche Zusammenarbeit. Vom ersten Workshop bis zur Umsetzung liefern wir schnell greifbare Ergebnisse und bauen zukunftssichere Strukturen, die mit Ihnen wachsen.',
    'about.page.content3': 'Mit agilem Mindset, smarten Tools und dem Fokus auf das Wesentliche schaffen wir digitale Lösungen, die funktionieren – für mehr Gestaltungsfreiheit, produktive Teams und echte Freude an der Arbeit.',
    'about.page.cta.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'about.page.cta.subtitle': 'Lassen Sie uns besprechen, wie wir Ihre Prozesse automatisieren und Ihre Effizienz steigern können.',
    'about.page.cta.button': 'Jetzt starten',
    
    // Jobs Page
    'jobs.page.title': 'Offene Stellen',
    'jobs.page.back': 'Zurück zur Startseite',
    'jobs.page.subtitle': 'Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Automatisierung mit. Wir suchen talentierte Menschen, die Leidenschaft für Innovation und Effizienz mitbringen.',
    'jobs.mission.title': 'Ihre Mission',
    'jobs.requirements.title': 'Was Sie mitbringen',
    'jobs.benefits.title': 'Was Sie erwartet',
    'jobs.apply.button': 'Jetzt bewerben',
    'jobs.no.position.title': 'Nicht die richtige Position gefunden?',
    'jobs.no.position.subtitle': 'Wir sind immer auf der Suche nach talentierten Menschen. Senden Sie uns eine Initiativbewerbung!',
    'jobs.unsolicited.button': 'Initiativbewerbung senden',

    // Cookie Banner
    'cookies.message': 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.',
    'cookies.accept': 'Akzeptieren',
    'cookies.decline': 'Ablehnen',

    // Project Form
    'form.title': 'Projekt',
    'form.title.highlight': 'anfragen',
    'form.subtitle': 'Erzählen Sie uns von Ihrem Projekt und wir finden gemeinsam die richtige Lösung.',
    'form.name': 'Name',
    'form.name.required': 'Name ist erforderlich',
    'form.name.placeholder': 'Ihr Name',
    'form.email': 'E-Mail',
    'form.email.required': 'E-Mail ist erforderlich',
    'form.email.invalid': 'Ungültige E-Mail-Adresse',
    'form.email.placeholder': 'ihre@email.de',
    'form.company': 'Unternehmen',
    'form.company.placeholder': 'Ihr Unternehmen',
    'form.phone': 'Telefon',
    'form.phone.placeholder': '+49 123 456789',
    'form.revenue': 'Wie viel mehr Umsatz pro Jahr?',
    'form.revenue.note': 'Wir zeigen Ihnen, wie Sie diese Ziele durch Automatisierung erreichen',
    'form.budget': 'Budget',
    'form.details': 'Projektdetails',
    'form.details.required': 'Bitte beschreiben Sie Ihr Projekt',
    'form.details.placeholder': 'Beschreiben Sie Ihr Projekt, Ziele und Herausforderungen...',
    'form.submit': 'Anfrage senden',
    'form.success.title': 'Anfrage gesendet!',
    'form.success.description': 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',

    // Chatbot
    'chatbot.welcome': 'Hallo! Ich bin Ihr intelligenter Automatisierungs-Agent von botti.co. Wie kann ich Ihnen heute bei der Optimierung Ihrer Geschäftsprozesse helfen?',
    'chatbot.subtitle': 'Ihr intelligenter Automatisierungs-Agent',
    'chatbot.placeholder': 'Schreiben Sie Ihre Nachricht...',
    'chatbot.automation': 'Automatisierung ist unsere Spezialität! Wir können Ihnen in verschiedenen Bereichen helfen: Sales & Marketing, Finance & Buchhaltung, HR & Recruiting, E-Commerce und Business Intelligence. In welchem Bereich sehen Sie das größte Potenzial?',
    'chatbot.cost': 'Die Kosten für Automatisierungslösungen variieren je nach Komplexität und Umfang. Gerne erstellen wir Ihnen ein individuelles Angebot. Können Sie mir mehr über Ihr Unternehmen und Ihre spezifischen Anforderungen erzählen?',
    'chatbot.sales': 'Perfekt! Unsere Sales & Marketing Automatisierung umfasst E-Mail-Automatisierung, Lead-Nurturing-Funnels, CRM-Automatisierung und Chatbots. So können Sie systematisch Interessenten zu Kunden machen - 24/7 und datengetrieben. Welcher Aspekt interessiert Sie am meisten?',
    'chatbot.finance': 'Unsere Finance & Buchhaltungs-Automatisierung sorgt für weniger Fehler und mehr Überblick. Wir automatisieren Belegerfassung, Rechnungsstellung, Bankabgleich und Steuervorbereitung. Möchten Sie mehr über einen bestimmten Bereich erfahren?',
    'chatbot.hr': 'HR-Automatisierung bringt Geschwindigkeit und Struktur in Ihre Personalprozesse. Von der automatisierten Kandidatenvorauswahl über Terminvereinbarungen bis zum Onboarding - wir digitalisieren Ihren gesamten HR-Prozess. Wo sehen Sie den größten Handlungsbedarf?',
    'chatbot.ecommerce': 'E-Commerce-Automatisierung ist unser lautloses Back-Office für Sie! Lagerabgleich, Versandabwicklung, Zahlungsabgleich und Produktfeed-Automatisierung laufen rund um die Uhr. Welchen Teil Ihres E-Commerce-Prozesses möchten Sie optimieren?',
    'chatbot.reporting': 'Mit Business Intelligence & Reporting haben Sie alle wichtigen KPIs auf einen Blick. Wir erstellen automatisierte Dashboards, aggregieren Daten aus mehreren Tools und richten Frühwarnsysteme ein. Welche Kennzahlen sind für Sie besonders wichtig?',
    'chatbot.workflow': 'Workflow-Automatisierung macht Ihre internen Prozesse effizienter. Freigabeprozesse, Ticketing, Dokumentenverwaltung und interne Kommunikation laufen standardisiert und nachvollziehbar ab. Welche Prozesse bereiten Ihnen derzeit Kopfschmerzen?',
    'chatbot.greeting': 'Hallo! Schön, dass Sie da sind. Gerne helfe ich Ihnen dabei, die richtigen Automatisierungslösungen für Ihr Unternehmen zu finden. Was beschäftigt Sie derzeit am meisten in Ihren Geschäftsprozessen?',
    'chatbot.thanks': 'Sehr gerne! Falls Sie weitere Fragen haben oder eine unverbindliche Beratung wünschen, bin ich jederzeit für Sie da. Gemeinsam finden wir die perfekte Automatisierungslösung für Ihr Unternehmen.',
    'chatbot.default': 'Das ist eine interessante Frage! Automatisierung kann in vielen Bereichen helfen - vom Vertrieb über Finanzen bis hin zu HR-Prozessen. Können Sie mir mehr Details zu Ihrem spezifischen Anliegen geben? So kann ich Ihnen gezielter helfen.',
    
    // Callback form
    'callback.title': 'Rückruf vereinbaren',
    'callback.name': 'Name',
    'callback.name.required': 'Name ist erforderlich',
    'callback.name.placeholder': 'Ihr Name',
    'callback.email': 'E-Mail',
    'callback.email.required': 'E-Mail ist erforderlich',
    'callback.email.invalid': 'Ungültige E-Mail-Adresse',
    'callback.email.placeholder': 'ihre@email.de',
    'callback.phone': 'Telefon',
    'callback.phone.required': 'Telefonnummer ist erforderlich',
    'callback.phone.placeholder': '+49 123 456789',
    'callback.date': 'Datum',
    'callback.date.placeholder': 'Datum auswählen',
    'callback.time': 'Uhrzeit',
    'callback.time.placeholder': 'Uhrzeit auswählen',
    'callback.cancel': 'Abbrechen',
    'callback.schedule': 'Rückruf vereinbaren',
    'callback.error.title': 'Fehler',
    'callback.error.description': 'Bitte Datum und Uhrzeit auswählen.',
    'callback.success.title': 'Rückruf vereinbart!',
    'callback.success.description': 'Wir rufen Sie am {date} um {time} zurück.',
    
    // Job postings
    'jobs.nocode.title': 'No-Code/Low-Code Entwickler',
    'jobs.nocode.type': 'Freiberuflich',
    'jobs.nocode.location': 'Remote',
    'jobs.nocode.start': 'Sofort',
    'jobs.nocode.mission': 'Bei botti entwickeln Sie maßgeschneiderte Automatisierungslösungen mit Tools wie Make, n8n, Airtable oder Zapier – von der Idee bis zur Umsetzung. Sie denken in Workflows, lieben einfache Lösungen für komplexe Prozesse und übersetzen technische Anforderungen in funktionierende Systeme.',
    'jobs.nocode.req1': 'Erfahrung mit No-Code oder Low-Code-Plattformen',
    'jobs.nocode.req2': 'Sicherer Umgang mit APIs, Webhooks & Datenmodellen',
    'jobs.nocode.req3': 'Strukturierte Arbeitsweise, technisches Verständnis und lösungsorientierte Denkweise',
    'jobs.nocode.req4': 'Begeisterung für effiziente Umsetzung und sauberes Prozessdesign',
    'jobs.nocode.benefit1': 'Vielfältige Kundenprojekte mit echtem Impact',
    'jobs.nocode.benefit2': 'Volle Flexibilität: arbeiten Sie wann und wo Sie wollen',
    'jobs.nocode.benefit3': 'Ein wertschätzendes, agiles Team, das Klartext spricht und Ideen Raum gibt',
    'jobs.consultant.title': 'Automatisierungsberater',
    'jobs.consultant.type': 'Freiberuflich',
    'jobs.consultant.location': 'Remote',
    'jobs.consultant.start': 'Sofort',
    'jobs.consultant.mission': 'Sie analysieren Geschäftsprozesse, identifizieren Automatisierungspotentiale und begleiten Unternehmen in ihrer digitalen Transformation. Als Sparringspartner auf Augenhöhe denken Sie ganzheitlich und entwickeln gemeinsam mit unserem Team Lösungen, die Menschen und Prozesse wirklich entlasten.',
    'jobs.consultant.req1': 'Erfahrung in der Beratung rund um Digitalisierung und Prozessoptimierung',
    'jobs.consultant.req2': 'Klarer Blick für Workflows, Benutzerfreundlichkeit und Effizienz',
    'jobs.consultant.req3': 'Grundlegendes technisches Verständnis (z.B. API-Logik, Automatisierungstools)',
    'jobs.consultant.req4': 'Kommunikationsstärke, Empathie und Begeisterung für Transformation',
    'jobs.consultant.benefit1': 'Kunden, die bereit sind, anders zu denken',
    'jobs.consultant.benefit2': 'Freiheit und Verantwortung in der Umsetzung',
    'jobs.consultant.benefit3': 'Zusammenarbeit in einem Team, das Haltung zeigt – mit Verstand, Herz und Weitblick',
    'jobs.architect.title': 'KI-Workflow Architekt',
    'jobs.architect.type': 'Freiberuflich',
    'jobs.architect.location': 'Remote',
    'jobs.architect.start': 'Sofort',
    'jobs.architect.mission': 'Sie entwerfen intelligente Workflows mit GPT, LangChain, Zapier & Co. und bringen echte KI-Power in den Arbeitsalltag unserer Kunden. Sie verbinden technische Raffinesse mit strategischem Denken – und schaffen Lösungen, die intuitiv funktionieren und nachhaltig wirken.',
    'jobs.architect.req1': 'Erfahrung im Umgang mit KI-Modellen (LLMs), Prompt Engineering und Tools wie LangChain',
    'jobs.architect.req2': 'Gespür für sinnvolle Automatisierung und Datenflüsse',
    'jobs.architect.req3': 'Selbstständige, strukturierte Arbeitsweise und Begeisterung für Innovation',
    'jobs.architect.req4': 'Interesse daran, Dinge wirklich besser zu machen – nicht nur smarter',
    'jobs.architect.benefit1': 'Projekte am Puls der Zeit – mit echter Gestaltungsfreiheit',
    'jobs.architect.benefit2': 'Austausch mit einem Team, das Technologie menschlich denkt',
    'jobs.architect.benefit3': 'Maximale Flexibilität, offene Kommunikation, faire Zusammenarbeit',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as TranslationKey] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
