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
  | 'nav.blog'
  | 'nav.process'
  | 'nav.pricing'
  | 'nav.book.call'
  | 'nav.request.project'
  | 'header.cta'
  // Hero
  | 'hero.title'
  | 'hero.title.highlight'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.cta.secondary'
  | 'hero.cta.mobile'
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
  | 'team.sascha.role'
  | 'team.sascha.description'
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
  | 'jobs.cta.button.secondary'
  // Booking Section
  | 'booking.title'
  | 'booking.subtitle'
  | 'booking.date.title'
  | 'booking.time.title'
  | 'booking.contact.title'
  | 'booking.name.label'
  | 'booking.name.placeholder'
  | 'booking.email.label'
  | 'booking.email.placeholder'
  | 'booking.phone.label'
  | 'booking.phone.placeholder'
  | 'booking.message.label'
  | 'booking.message.placeholder'
  | 'booking.button.submit'
  | 'booking.button.submitting'
  | 'booking.error.datetime'
  | 'booking.error.title'
  | 'booking.error.submit'
  | 'booking.validation.error'
  // AutomationComparison
  | 'comparison.title'
  | 'comparison.title.highlight'
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
  | 'comparison.without.feature5'
  | 'comparison.without.feature6'
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
  | 'comparison.testimonial.metric1'
  | 'comparison.testimonial.metric2'
  | 'comparison.testimonial.metric3'
  | 'comparison.cta.title'
  | 'comparison.cta.description'
  | 'comparison.cta.button'
  | 'comparison.process.title'
  | 'comparison.process.subtitle'
  // About Page
  | 'about.page.title'
  | 'about.page.badge'
  | 'about.page.back'
  | 'about.page.intro1'
  | 'about.page.intro2'
  | 'about.page.intro3'
  | 'about.page.challenges.title'
  | 'about.page.challenge1'
  | 'about.page.challenge2'
  | 'about.page.challenge3'
  | 'about.page.challenge4'
  | 'about.page.challenge5'
  | 'about.page.belief'
  | 'about.page.vision1'
  | 'about.page.vision2'
  | 'about.page.freedom1'
  | 'about.page.freedom2'
  | 'about.page.freedom3'
  | 'about.page.closing'
  | 'about.page.mission'
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
  // Service Details
  | 'service.back'
  | 'service.not.found'
  | 'service.benefits.title'
  | 'service.process.title'
  | 'service.implementation.process'
  | 'service.core.competencies'
  | 'service.what.you.get'
  | 'service.cta.sales'
  | 'service.cta.finance'
  | 'service.cta.hr'
  | 'service.cta.ecommerce'
  | 'service.cta.bi'
  | 'service.cta.workflows'
  | 'service.example.title'
  | 'service.example.scenario'
  | 'service.example.solution'
  | 'service.example.results'
  // Sales Service
  | 'service.sales.title'
  | 'service.sales.subtitle'
  | 'service.sales.hero'
  | 'service.sales.impact'
  | 'service.sales.description'
  | 'service.sales.what1.title'
  | 'service.sales.what1.desc'
  | 'service.sales.what2.title'
  | 'service.sales.what2.desc'
  | 'service.sales.what3.title'
  | 'service.sales.what3.desc'
  | 'service.sales.what4.title'
  | 'service.sales.what4.desc'
  | 'service.sales.benefit1.title'
  | 'service.sales.benefit1.desc'
  | 'service.sales.benefit2.title'
  | 'service.sales.benefit2.desc'
  | 'service.sales.benefit3.title'
  | 'service.sales.benefit3.desc'
  | 'service.sales.process1.title'
  | 'service.sales.process1.desc'
  | 'service.sales.process2.title'
  | 'service.sales.process2.desc'
  | 'service.sales.process3.title'
  | 'service.sales.process3.desc'
  | 'service.sales.process4.title'
  | 'service.sales.process4.desc'
  | 'service.sales.example.title'
  | 'service.sales.example.scenario'
  | 'service.sales.example.solution'
  | 'service.sales.example.result1'
  | 'service.sales.example.result2'
  | 'service.sales.example.result3'
  // Finance Service
  | 'service.finance.title'
  | 'service.finance.subtitle'
  | 'service.finance.hero'
  | 'service.finance.impact'
  | 'service.finance.description'
  | 'service.finance.what1.title'
  | 'service.finance.what1.desc'
  | 'service.finance.what2.title'
  | 'service.finance.what2.desc'
  | 'service.finance.what3.title'
  | 'service.finance.what3.desc'
  | 'service.finance.what4.title'
  | 'service.finance.what4.desc'
  | 'service.finance.benefit1.title'
  | 'service.finance.benefit1.desc'
  | 'service.finance.benefit2.title'
  | 'service.finance.benefit2.desc'
  | 'service.finance.benefit3.title'
  | 'service.finance.benefit3.desc'
  | 'service.finance.process1.title'
  | 'service.finance.process1.desc'
  | 'service.finance.process2.title'
  | 'service.finance.process2.desc'
  | 'service.finance.process3.title'
  | 'service.finance.process3.desc'
  | 'service.finance.process4.title'
  | 'service.finance.process4.desc'
  | 'service.finance.example.title'
  | 'service.finance.example.scenario'
  | 'service.finance.example.solution'
  | 'service.finance.example.result1'
  | 'service.finance.example.result2'
  | 'service.finance.example.result3'
  // HR Service
  | 'service.hr.title'
  | 'service.hr.subtitle'
  | 'service.hr.hero'
  | 'service.hr.impact'
  | 'service.hr.description'
  | 'service.hr.what1.title'
  | 'service.hr.what1.desc'
  | 'service.hr.what2.title'
  | 'service.hr.what2.desc'
  | 'service.hr.what3.title'
  | 'service.hr.what3.desc'
  | 'service.hr.what4.title'
  | 'service.hr.what4.desc'
  | 'service.hr.benefit1.title'
  | 'service.hr.benefit1.desc'
  | 'service.hr.benefit2.title'
  | 'service.hr.benefit2.desc'
  | 'service.hr.benefit3.title'
  | 'service.hr.benefit3.desc'
  | 'service.hr.process1.title'
  | 'service.hr.process1.desc'
  | 'service.hr.process2.title'
  | 'service.hr.process2.desc'
  | 'service.hr.process3.title'
  | 'service.hr.process3.desc'
  | 'service.hr.process4.title'
  | 'service.hr.process4.desc'
  | 'service.hr.example.title'
  | 'service.hr.example.scenario'
  | 'service.hr.example.solution'
  | 'service.hr.example.result1'
  | 'service.hr.example.result2'
  | 'service.hr.example.result3'
  // E-commerce Service
  | 'service.ecommerce.title'
  | 'service.ecommerce.subtitle'
  | 'service.ecommerce.hero'
  | 'service.ecommerce.impact'
  | 'service.ecommerce.description'
  | 'service.ecommerce.what1.title'
  | 'service.ecommerce.what1.desc'
  | 'service.ecommerce.what2.title'
  | 'service.ecommerce.what2.desc'
  | 'service.ecommerce.what3.title'
  | 'service.ecommerce.what3.desc'
  | 'service.ecommerce.what4.title'
  | 'service.ecommerce.what4.desc'
  | 'service.ecommerce.benefit1.title'
  | 'service.ecommerce.benefit1.desc'
  | 'service.ecommerce.benefit2.title'
  | 'service.ecommerce.benefit2.desc'
  | 'service.ecommerce.benefit3.title'
  | 'service.ecommerce.benefit3.desc'
  | 'service.ecommerce.process1.title'
  | 'service.ecommerce.process1.desc'
  | 'service.ecommerce.process2.title'
  | 'service.ecommerce.process2.desc'
  | 'service.ecommerce.process3.title'
  | 'service.ecommerce.process3.desc'
  | 'service.ecommerce.process4.title'
  | 'service.ecommerce.process4.desc'
  | 'service.ecommerce.example.title'
  | 'service.ecommerce.example.scenario'
  | 'service.ecommerce.example.solution'
  | 'service.ecommerce.example.result1'
  | 'service.ecommerce.example.result2'
  | 'service.ecommerce.example.result3'
  // BI Service
  | 'service.bi.title'
  | 'service.bi.subtitle'
  | 'service.bi.hero'
  | 'service.bi.impact'
  | 'service.bi.description'
  | 'service.bi.what1.title'
  | 'service.bi.what1.desc'
  | 'service.bi.what2.title'
  | 'service.bi.what2.desc'
  | 'service.bi.what3.title'
  | 'service.bi.what3.desc'
  | 'service.bi.what4.title'
  | 'service.bi.what4.desc'
  | 'service.bi.benefit1.title'
  | 'service.bi.benefit1.desc'
  | 'service.bi.benefit2.title'
  | 'service.bi.benefit2.desc'
  | 'service.bi.benefit3.title'
  | 'service.bi.benefit3.desc'
  | 'service.bi.process1.title'
  | 'service.bi.process1.desc'
  | 'service.bi.process2.title'
  | 'service.bi.process2.desc'
  | 'service.bi.process3.title'
  | 'service.bi.process3.desc'
  | 'service.bi.process4.title'
  | 'service.bi.process4.desc'
  | 'service.bi.example.title'
  | 'service.bi.example.scenario'
  | 'service.bi.example.solution'
  | 'service.bi.example.result1'
  | 'service.bi.example.result2'
  | 'service.bi.example.result3'
  // Workflows Service
  | 'service.workflows.title'
  | 'service.workflows.subtitle'
  | 'service.workflows.hero'
  | 'service.workflows.impact'
  | 'service.workflows.description'
  | 'service.workflows.what1.title'
  | 'service.workflows.what1.desc'
  | 'service.workflows.what2.title'
  | 'service.workflows.what2.desc'
  | 'service.workflows.what3.title'
  | 'service.workflows.what3.desc'
  | 'service.workflows.what4.title'
  | 'service.workflows.what4.desc'
  | 'service.workflows.benefit1.title'
  | 'service.workflows.benefit1.desc'
  | 'service.workflows.benefit2.title'
  | 'service.workflows.benefit2.desc'
  | 'service.workflows.benefit3.title'
  | 'service.workflows.benefit3.desc'
  | 'service.workflows.process1.title'
  | 'service.workflows.process1.desc'
  | 'service.workflows.process2.title'
  | 'service.workflows.process2.desc'
  | 'service.workflows.process3.title'
  | 'service.workflows.process3.desc'
  | 'service.workflows.process4.title'
  | 'service.workflows.process4.desc'
  | 'service.workflows.example.title'
  | 'service.workflows.example.scenario'
  | 'service.workflows.example.solution'
  | 'service.workflows.example.result1'
  | 'service.workflows.example.result2'
  | 'service.workflows.example.result3'
  // Process Page
  | 'process.hero.title'
  | 'process.hero.highlight'
  | 'process.hero.subtitle'
  | 'process.hero.timeline'
  | 'process.hero.teamSize'
  | 'process.step1.title'
  | 'process.step1.subtitle'
  | 'process.step1.detailedDescription'
  | 'process.step1.duration'
  | 'process.step1.deliverable1'
  | 'process.step1.deliverable2'
  | 'process.step1.deliverable3'
  | 'process.step2.title'
  | 'process.step2.subtitle'
  | 'process.step2.detailedDescription'
  | 'process.step2.duration'
  | 'process.step2.deliverable1'
  | 'process.step2.deliverable2'
  | 'process.step2.deliverable3'
  | 'process.step3.title'
  | 'process.step3.subtitle'
  | 'process.step3.detailedDescription'
  | 'process.step3.duration'
  | 'process.step3.deliverable1'
  | 'process.step3.deliverable2'
  | 'process.step3.deliverable3'
  | 'process.step4.title'
  | 'process.step4.subtitle'
  | 'process.step4.detailedDescription'
  | 'process.step4.duration'
  | 'process.step4.deliverable1'
  | 'process.step4.deliverable2'
  | 'process.step4.deliverable3'
  | 'process.deliverables.title'
  | 'process.benefits.title'
  | 'process.benefits.subtitle'
  | 'process.benefit1.title'
  | 'process.benefit1.description'
  | 'process.benefit2.title'
  | 'process.benefit2.description'
  | 'process.benefit3.title'
  | 'process.benefit3.description'
  | 'process.cta.title'
  | 'process.cta.description'
  | 'process.cta.button'
  | 'process.cta.joinTeam.button'
  | 'process.cta.joinTeam.emailPrompt'
  | 'process.cta.joinTeam.success'
  | 'process.cta.joinTeam.checkEmail'
  | 'process.cta.joinTeam.error'
  | 'process.cta.joinTeam.invalidEmail'
  | 'process.cta.joinTeam.tryAgain'
  | 'process.cta.joinTeam.sending'
  // Automation Benefits
  | 'benefits.title'
  | 'benefits.title.highlight'
  | 'benefits.subtitle'
  | 'benefits.time.title'
  | 'benefits.time.description'
  | 'benefits.efficiency.title'
  | 'benefits.efficiency.description'
  | 'benefits.accuracy.title'
  | 'benefits.accuracy.description'
  | 'benefits.speed.title'
  | 'benefits.speed.description'
  | 'benefits.security.title'
  | 'benefits.security.description'
  | 'benefits.satisfaction.title'
  | 'benefits.satisfaction.description'
  | 'benefits.insights.title'
  | 'benefits.insights.description'
  | 'benefits.innovation.title'
  | 'benefits.innovation.description'
  | 'benefits.quality.title'
  | 'benefits.quality.description'
  // Pricing
  | 'pricing.title'
  | 'pricing.title.highlight'
  | 'pricing.subtitle'
  | 'pricing.button'
  | 'pricing.tool.title'
  | 'pricing.tool.description'
  | 'pricing.tool.selectLabel'
  | 'pricing.tool.tools'
  | 'pricing.tool.discount'
  | 'pricing.tool.perTool'
  | 'pricing.tool.included'
  | 'pricing.tool.note'
  | 'pricing.tool.feature1'
  | 'pricing.tool.feature2'
  | 'pricing.tool.feature3'
  | 'pricing.tool.feature4'
  | 'pricing.tool.feature5'
  | 'pricing.tool.feature6'
  | 'pricing.tool.feature7'
  // Blog
  | 'blog.title'
  | 'blog.subtitle'
  | 'blog.back'
  | 'blog.read.more'
  | 'blog.article.back'
  | 'blog.article.published'
  | 'blog.article.reading.time'
  | 'blog.article.min.read'
  // Blog Articles
  | 'blog.article1.title'
  | 'blog.article1.excerpt'
  | 'blog.article1.content'
  | 'blog.article2.title'
  | 'blog.article2.excerpt'
  | 'blog.article2.content'
  | 'blog.article3.title'
  | 'blog.article3.excerpt'
  | 'blog.article3.content'
  | 'blog.article4.title'
  | 'blog.article4.excerpt'
  | 'blog.article4.content'
  | 'blog.article5.title'
  | 'blog.article5.excerpt'
  | 'blog.article5.content'
  | 'blog.article6.title'
  | 'blog.article6.excerpt'
  | 'blog.article6.content';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.process': 'Process',
    'nav.pricing': 'Pricing',
    'nav.book.call': 'Book a Call',
    'nav.request.project': 'Request Project',
    'header.cta': 'Call',

    // Hero
    'hero.title': 'More time for ideas, less for',
    'hero.title.highlight': 'paperwork',
    'hero.subtitle': 'We automate the processes that slow teams down — so you can operate with clarity, speed, and a calm, predictable workflow.',
    'hero.cta': 'Book a Call',
    'hero.cta.secondary': 'See How It Works',
    'hero.cta.mobile': 'Book a Call',

    // Services
    'services.title': 'Top areas for maximum',
    'services.title.highlight': 'leverage',
    'services.subtitle': "Automation is no longer a luxury – it's the key to growth, efficiency and clarity in a complex working world.",
    'services.consultation.button': 'Request Free Consultation',
    'services.consultation.subtitle': 'Which area offers the greatest potential in your company?',
    'services.more.info': 'More Info',
    'services.sales.title': 'Sales & Marketing Automation',
    'services.sales.subtitle': 'Turn cold leads into a predictable, automated pipeline.',
    'services.sales.description': 'Automate funnels, follow-ups and campaigns to systematically turn prospects into customers – 24/7, data-driven and personal.',
    'services.finance.title': 'Finance & Accounting Automation',
    'services.finance.subtitle': 'Automate invoices, reconciliation, and reporting.',
    'services.finance.description': 'Documents, payments, invoices and reports flow automatically through your systems – for a tidy back office without headaches.',
    'services.hr.title': 'HR & Recruiting Automation',
    'services.hr.subtitle': 'Faster hiring, clearer onboarding, automated communication.',
    'services.hr.description': 'From application to onboarding: Automation brings speed, structure and appreciation to your HR processes.',
    'services.ecommerce.title': 'E-Commerce & Fulfillment Automation',
    'services.ecommerce.subtitle': 'Stock syncing, order routing, returns automation.',
    'services.ecommerce.description': 'Sales run, inventory is correct, returns are under control – every movement in the shop automatically triggers actions that delight your customers and relieve your warehouse.',
    'services.bi.title': 'Business Intelligence',
    'services.bi.subtitle': 'Real-time dashboards and clean, automated reporting.',
    'services.bi.description': 'Your most important KPIs at a glance – prepared, visualized and equipped with warning systems before risks become problems.',
    'services.workflows.title': 'Workflow & Internal Automation',
    'services.workflows.subtitle': 'Connect tools, reduce manual tasks, streamline operations.',
    'services.workflows.description': 'Standardized processes like approvals, document management or handovers run in the background – clean, traceable, scalable.',

    // Service features
    'services.sales.feature1': 'Lead routing & segmentation',
    'services.sales.feature2': 'CRM automations (HubSpot, Pipedrive, Odoo)',
    'services.sales.feature3': 'Email sequences & triggers',
    'services.sales.feature4': 'AI lead scoring',
    'services.sales.feature5': 'Multi-channel automation',
    'services.finance.feature1': 'OCR & data extraction',
    'services.finance.feature2': 'Booking automation',
    'services.finance.feature3': 'Reconciliation workflows',
    'services.finance.feature4': 'Automated reporting dashboards',
    'services.hr.feature1': 'ATS workflows',
    'services.hr.feature2': 'Calendar & email automation',
    'services.hr.feature3': 'Hiring pipelines',
    'services.hr.feature4': 'Onboarding journeys',
    'services.ecommerce.feature1': 'Shopify, WooCommerce, Odoo',
    'services.ecommerce.feature2': 'Warehouse integrations',
    'services.ecommerce.feature3': 'Return workflows',
    'services.ecommerce.feature4': 'Product data pipelines',
    'services.bi.feature1': 'KPI dashboards',
    'services.bi.feature2': 'Multi-source syncing',
    'services.bi.feature3': 'AI anomaly detection',
    'services.workflows.feature1': 'Tool integrations',
    'services.workflows.feature2': 'Task automation',
    'services.workflows.feature3': 'Internal communication',
    'services.workflows.feature4': 'Data syncing',
    'services.workflows.feature5': 'Multi-step workflows',
    'services.workflows.feature6': 'Better collaboration',

    // About
    'about.title': 'How we',
    'about.title.highlight': 'approach',
    'about.subtitle': 'Our structured approach for sustainable automation solutions',
    'about.step1.title': 'Analysis & Strategy',
    'about.step1.description': 'We map your workflows, tools, and bottlenecks to identify the highest-impact automation opportunities.',
    'about.step2.title': 'Solution Design',
    'about.step2.description': 'We design clear automation blueprints tailored to your business and systems.',
    'about.step3.title': 'Implementation',
    'about.step3.description': 'We build, connect, and test your automated workflows — fast and reliably.',
    'about.step4.title': 'Optimization & Support',
    'about.step4.description': 'We fine-tune and expand your automation setup as your team grows.',

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
    'team.karim.role': 'Automation Engineer',
    'team.karim.description': 'Builds and codes custom automation solutions, developing the technical infrastructure that powers our innovative business process improvements.',
    'team.sascha.role': 'Automation Architect',
    'team.sascha.description': 'Designs and architects scalable automation frameworks that transform business operations and create intelligent, future-proof solutions.',

    // CTA
    'cta.title': 'Ready for more',
    'cta.title.highlight': 'Efficiency',
    'cta.subtitle': 'Let us find out in a non-binding conversation how botti can relieve your company.',
    'cta.button': 'Call',
    'cta.note': 'No sales pitch – just genuine interest in your situation.',

    // Footer
    'footer.description': 'Runs automatically',
    'footer.copyright': '© 2024 HeyBotti. All rights reserved.',

    // Jobs CTA
    'jobs.cta.title': 'Become part of our',
    'jobs.cta.title.highlight': 'Team',
    'jobs.cta.subtitle': "We're looking for engineers, automation specialists, and designers who care about clarity, efficiency, and meaningful work.",
    'jobs.cta.button': 'View Open Positions',
    'jobs.cta.button.secondary': 'Book a Meeting',

    // Booking Section
    'booking.title': 'Your Automation Check',
    'booking.subtitle': 'Discuss your project with us in a 30-minute meeting.',
    'booking.date.title': 'Select Date',
    'booking.time.title': 'Select Time',
    'booking.contact.title': 'Your Contact Details',
    'booking.name.label': 'Name *',
    'booking.name.placeholder': 'Your name',
    'booking.email.label': 'Email *',
    'booking.email.placeholder': 'your@email.com',
    'booking.phone.label': 'Phone *',
    'booking.phone.placeholder': '+49 123 456789',
    'booking.message.label': 'Message (optional)',
    'booking.message.placeholder': 'Do you have any special requests or questions?',
    'booking.button.submit': 'Book Appointment',
    'booking.button.submitting': 'Booking...',
    'booking.error.datetime': 'Please select date and time.',
    'booking.error.title': 'Error',
    'booking.error.submit': 'Booking could not be completed. Please try again.',
    'booking.validation.error': 'Validation Error',

    // AutomationComparison
    'comparison.title': 'From Manual Chaos to',
    'comparison.title.highlight': 'Effortless Flow.',
    'comparison.subtitle': 'See for yourself how automation transforms your processes',
    'comparison.off.title': 'botti OFF',
    'comparison.on.title': 'botti ON',
    'comparison.without.title': 'Without Automation',
    'comparison.without.subtitle': 'Chaos',
    'comparison.with.title': 'With Automation',
    'comparison.with.subtitle': 'Automated',
    'comparison.without.feature1': 'Lost tasks and missed handovers',
    'comparison.without.feature2': 'Slow response times',
    'comparison.without.feature3': 'Fragmented communication',
    'comparison.without.feature4': 'Repetitive manual steps',
    'comparison.without.feature5': 'Data stored in multiple places',
    'comparison.without.feature6': 'Constant fire-fighting',
    'comparison.with.feature1': 'Structured, reliable processes',
    'comparison.with.feature2': 'Tasks flow automatically',
    'comparison.with.feature3': 'Clear responsibilities',
    'comparison.with.feature4': 'No missed follow-ups',
    'comparison.with.feature5': 'One source of truth',
    'comparison.with.feature6': 'Teams working calmly and effectively',
    'comparison.with.feature7': '',
    'comparison.with.feature8': '',
    'comparison.with.feature9': '',
    'comparison.with.feature10': '',
    'comparison.testimonial.title': 'Success Story',
    'comparison.testimonial.subtitle': 'Real Customer Experience',
    'comparison.testimonial.quote': 'I wonder today how we ever managed before. Since we automated our processes, many things just run in the background, without any follow-up or control chaos. The best part: My team is much more relaxed and finally has a clear head for the really important topics. I can only recommend it to anyone who wants less stress and more clarity in everyday life.',
    'comparison.testimonial.name': 'Vera',
    'comparison.testimonial.company': 'BLACK FLASH ARCHERY GmbH',
    'comparison.testimonial.metric1': '70% fewer manual tasks',
    'comparison.testimonial.metric2': '40% faster response times',
    'comparison.testimonial.metric3': '90% reduction in repetitive work',
    'comparison.cta.title': 'Want to understand how automation works?',
    'comparison.cta.description': 'Discover in detail how we transform your business through customized automation.',
    'comparison.cta.button': 'Discover our process',
    'comparison.process.title': 'How We Approach It',
    'comparison.process.subtitle': 'Our structured approach for sustainable automation solutions',

    // About Page
    'about.page.title': 'Why Automation Is Critical Now',
    'about.page.badge': 'Our Vision',
    'about.page.back': 'Back to Homepage',
    'about.page.intro1': 'In an era where innovation cycles are getting shorter and business complexity is constantly rising, many German companies face the same challenge: too much manual work, too little time for what truly matters. Skills shortages, inefficient processes, rising cost pressures, and noticeable overwhelm from administrative tasks hold back small and medium-sized businesses especially – the very companies that form the backbone of our economy.',
    'about.page.intro2': 'But at HeyBotti, we believe that every business – regardless of size or industry – deserves the opportunity to focus on what really counts: people, ideas, and value creation.',
    'about.page.intro3': 'Automation is not a cold technology promise. It is a tool of liberation. It gives teams their energy back, reduces errors, creates transparency, and opens up new creative spaces. When routine processes no longer drain energy, space emerges for innovation, quality, and growth.',
    'about.page.challenges.title': 'Many companies still struggle with:',
    'about.page.challenge1': 'Overworked employees spending too much time on repetitive tasks',
    'about.page.challenge2': 'Fragmented systems and lack of overview',
    'about.page.challenge3': 'Rising personnel costs amid skilled labor shortages',
    'about.page.challenge4': 'Slow, paper-heavy processes',
    'about.page.challenge5': 'The fear that digitalization is expensive, complicated, or "not for us"',
    'about.page.belief': 'But this is exactly where our idealism begins.',
    'about.page.vision1': 'We believe in an economy where technology is human, intuitive, accessible – and helps every business get the best out of itself. An economy where people are not bound by processes, but empowered by automation. An economy where time becomes valuable again.',
    'about.page.vision2': 'HeyBotti stands for a future where automation creates not just efficiency, but freedom.',
    'about.page.freedom1': 'Freedom to focus on visions.',
    'about.page.freedom2': 'Freedom to relieve employees and unlock potential.',
    'about.page.freedom3': 'Freedom to stay one step ahead as a company.',
    'about.page.closing': 'We see automation not as a trend, but as a breakthrough – toward a new form of working that is more human, sustainable, and future-proof.',
    'about.page.mission': 'And that is exactly what we work for every day.',
    'about.page.cta.title': 'Ready for the Breakthrough?',
    'about.page.cta.subtitle': "Let's create space together for what truly matters.",
    'about.page.cta.button': 'Schedule a Conversation',

    // Jobs Page
    'jobs.page.title': 'Open Positions',
    'jobs.page.back': 'Back to Homepage',
    'jobs.page.subtitle': 'Become part of our team and shape the future of automation. We are looking for talented people who bring passion for innovation and efficiency.',
    'jobs.mission.title': 'Your Mission',
    'jobs.requirements.title': 'What you bring',
    'jobs.benefits.title': 'What awaits you',
    'jobs.apply.button': 'Apply Now',
    'jobs.no.position.title': "Didn't find the right position?",
    'jobs.no.position.subtitle': 'We are always looking for talented people. Send us an unsolicited application!',
    'jobs.unsolicited.button': 'Send Unsolicited Application',

    // Cookie Banner
    'cookies.message': 'We use cookies to improve your experience on our website. By using our website, you agree to the use of cookies.',
    'cookies.accept': 'Accept',
    'cookies.decline': 'Decline',

    // Project Form
    'form.title': 'Request',
    'form.title.highlight': 'Project',
    'form.subtitle': "Tell us about your project and we'll find the right solution together.",
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
    'form.revenue.note': "We'll show you how to achieve these goals through automation",
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
    'callback.phone.required': 'Phone is required',
    'callback.phone.placeholder': '+1 123 456789',
    'callback.date': 'Preferred Date',
    'callback.date.placeholder': 'Select date',
    'callback.time': 'Preferred Time',
    'callback.time.placeholder': 'Select time',
    'callback.cancel': 'Cancel',
    'callback.schedule': 'Schedule Callback',
    'callback.error.title': 'Error',
    'callback.error.description': 'Please select a date and time.',
    'callback.success.title': 'Callback Scheduled',
    'callback.success.description': 'We will call you on {date} at {time}.',

    // Service Details
    'service.back': 'Back to Homepage',
    'service.not.found': 'Service not found',
    'service.benefits.title': 'Key Benefits',
    'service.process.title': 'Implementation Process',
    'service.implementation.process': 'Implementation Process',
    'service.core.competencies': 'Core Competencies',
    'service.what.you.get': 'What You Get',
    'service.cta.sales': "Let's Automate Your Sales",
    'service.cta.finance': "Let's Automate Your Finance",
    'service.cta.hr': "Let's Automate Your HR",
    'service.cta.ecommerce': "Let's Automate Your E-Commerce",
    'service.cta.bi': "Let's Automate Your BI",
    'service.cta.workflows': "Let's Automate Your Workflows",
    'service.example.title': 'Example Case Study',
    'service.example.scenario': 'Scenario',
    'service.example.solution': 'Solution',
    'service.example.results': 'Results',

    // Sales & Marketing Automation
    'service.sales.title': 'Sales & Marketing Automation',
    'service.sales.subtitle': 'Create predictable growth with automated lead nurturing, funnels, and CRM processes.',
    'service.sales.hero': 'Sales & Marketing Automation',
    'service.sales.impact': 'More leads. Less manual work. Predictable revenue.',
    'service.sales.description': 'Create predictable growth with automated lead nurturing, funnels, and CRM processes.',
    'service.sales.what1.title': 'Automated Lead Nurturing',
    'service.sales.what1.desc': 'Every lead gets the right message at the right time — without manual follow-ups.',
    'service.sales.what2.title': 'CRM That Updates Itself',
    'service.sales.what2.desc': 'Deals move automatically, tasks are created instantly, and data stays clean.',
    'service.sales.what3.title': 'Cross-Channel Automation',
    'service.sales.what3.desc': 'Email, ads, website forms, chat — all connected and automated.',
    'service.sales.what4.title': 'Real-Time Pipeline Insights',
    'service.sales.what4.desc': 'Know exactly where each lead stands and what needs attention.',
    'service.sales.benefit1.title': 'Lead routing & segmentation',
    'service.sales.benefit1.desc': 'Automatically segment and route leads to the right team members',
    'service.sales.benefit2.title': 'CRM automations',
    'service.sales.benefit2.desc': 'HubSpot, Pipedrive, Odoo integrations with automated workflows',
    'service.sales.benefit3.title': 'Email sequences & triggers',
    'service.sales.benefit3.desc': 'Automated email campaigns based on user behavior',
    'service.sales.process1.title': 'Workflow analysis',
    'service.sales.process1.desc': 'Map current sales processes and identify automation opportunities',
    'service.sales.process2.title': 'Automation design',
    'service.sales.process2.desc': 'Design automated workflows tailored to your sales cycle',
    'service.sales.process3.title': 'System implementation',
    'service.sales.process3.desc': 'Build and integrate automated sales workflows',
    'service.sales.process4.title': 'Optimization & scaling',
    'service.sales.process4.desc': 'Continuously optimize and expand your automation',
    'service.sales.example.title': 'B2B Software Company',
    'service.sales.example.scenario': 'A B2B software company was losing 60% of leads due to slow follow-up times.',
    'service.sales.example.solution': 'Implemented automated lead scoring, instant follow-ups, and personalized nurturing sequences.',
    'service.sales.example.result1': 'Lead response time dropped from 24 hours to 2 minutes',
    'service.sales.example.result2': 'Lead conversion rate increased by 45%',
    'service.sales.example.result3': 'Sales team saved 20 hours per week',

    // Finance & Accounting Automation
    'service.finance.title': 'Finance & Accounting Automation',
    'service.finance.subtitle': 'Fast, accurate, automated financial processes — without manual entry.',
    'service.finance.hero': 'Finance & Accounting Automation',
    'service.finance.impact': 'Real-time accuracy. Zero manual paperwork.',
    'service.finance.description': 'Fast, accurate, automated financial processes — without manual entry.',
    'service.finance.what1.title': 'Automated Invoice Processing',
    'service.finance.what1.desc': 'OCR technology extracts data from invoices automatically',
    'service.finance.what2.title': 'Error-Free Data Extraction',
    'service.finance.what2.desc': 'AI-powered validation ensures 99.9% accuracy',
    'service.finance.what3.title': 'Automated Reconciliation',
    'service.finance.what3.desc': 'Bank statements match with invoices automatically',
    'service.finance.what4.title': 'Instant Financial Insights',
    'service.finance.what4.desc': 'Real-time dashboards show your financial health',
    'service.finance.benefit1.title': 'OCR & data extraction',
    'service.finance.benefit1.desc': 'Automatic data extraction from invoices and receipts',
    'service.finance.benefit2.title': 'Booking automation',
    'service.finance.benefit2.desc': 'Automated accounting entries and bookkeeping',
    'service.finance.benefit3.title': 'Reconciliation workflows',
    'service.finance.benefit3.desc': 'Automated bank reconciliation and matching',
    'service.finance.process1.title': 'Workflow analysis',
    'service.finance.process1.desc': 'Analyze current finance processes and pain points',
    'service.finance.process2.title': 'Automation design',
    'service.finance.process2.desc': 'Design automated financial workflows',
    'service.finance.process3.title': 'System implementation',
    'service.finance.process3.desc': 'Implement and integrate automation solutions',
    'service.finance.process4.title': 'Optimization & scaling',
    'service.finance.process4.desc': 'Monitor and optimize financial automation',
    'service.finance.example.title': 'Mid-Size Distributor',
    'service.finance.example.scenario': 'A distributor processed 500+ invoices monthly with 3 full-time staff.',
    'service.finance.example.solution': 'Implemented OCR invoice processing, automated approval workflows, and reconciliation.',
    'service.finance.example.result1': 'Invoice processing time reduced by 85%',
    'service.finance.example.result2': 'Error rate dropped from 8% to 0.5%',
    'service.finance.example.result3': 'Reassigned 2 FTEs to strategic work',

    // HR & Recruiting Automation
    'service.hr.title': 'HR & Recruiting Automation',
    'service.hr.subtitle': 'Attract talent faster with automated applicant workflows, communication and onboarding.',
    'service.hr.hero': 'HR & Recruiting Automation',
    'service.hr.impact': 'Faster hiring. Cleaner communication. Better onboarding.',
    'service.hr.description': 'Attract talent faster with automated applicant workflows, communication and onboarding.',
    'service.hr.what1.title': 'Applicant Pipelines',
    'service.hr.what1.desc': 'Track candidates automatically from application to hire',
    'service.hr.what2.title': 'Automated Communication',
    'service.hr.what2.desc': 'Email sequences keep candidates informed at every stage',
    'service.hr.what3.title': 'Smart Scheduling',
    'service.hr.what3.desc': 'Calendar automation for interviews and assessments',
    'service.hr.what4.title': 'Structured Onboarding',
    'service.hr.what4.desc': 'Automated onboarding checklists and workflows',
    'service.hr.benefit1.title': 'ATS workflows',
    'service.hr.benefit1.desc': 'Automated applicant tracking system workflows',
    'service.hr.benefit2.title': 'Calendar & email automation',
    'service.hr.benefit2.desc': 'Automated interview scheduling and communication',
    'service.hr.benefit3.title': 'Onboarding journeys',
    'service.hr.benefit3.desc': 'Structured automated onboarding processes',
    'service.hr.process1.title': 'Workflow analysis',
    'service.hr.process1.desc': 'Map current HR and recruiting workflows',
    'service.hr.process2.title': 'Automation design',
    'service.hr.process2.desc': 'Design automated HR processes',
    'service.hr.process3.title': 'System implementation',
    'service.hr.process3.desc': 'Build and implement HR automation',
    'service.hr.process4.title': 'Optimization & scaling',
    'service.hr.process4.desc': 'Optimize and expand HR automation',
    'service.hr.example.title': 'Fast-Growing Startup',
    'service.hr.example.scenario': 'A startup hiring 10 people per month was drowning in manual scheduling and follow-ups.',
    'service.hr.example.solution': 'Implemented ATS automation, automated scheduling, and onboarding workflows.',
    'service.hr.example.result1': 'Time-to-hire reduced from 45 to 21 days',
    'service.hr.example.result2': 'Candidate satisfaction score increased 35%',
    'service.hr.example.result3': 'HR team saved 25 hours weekly',

    // E-Commerce & Fulfillment Automation
    'service.ecommerce.title': 'E-Commerce & Fulfillment Automation',
    'service.ecommerce.subtitle': 'Automate order flows, stock syncing, logistics and returns.',
    'service.ecommerce.hero': 'E-Commerce & Fulfillment Automation',
    'service.ecommerce.impact': 'End-to-end automation for your entire shop system.',
    'service.ecommerce.description': 'Automate order flows, stock syncing, logistics and returns.',
    'service.ecommerce.what1.title': 'Stock Syncing',
    'service.ecommerce.what1.desc': 'Real-time inventory sync across all channels',
    'service.ecommerce.what2.title': 'Order Routing',
    'service.ecommerce.what2.desc': 'Automatic order fulfillment and shipping',
    'service.ecommerce.what3.title': 'Returns Management',
    'service.ecommerce.what3.desc': 'Automated return processing and refunds',
    'service.ecommerce.what4.title': 'Product Data Automation',
    'service.ecommerce.what4.desc': 'Automated product feed management',
    'service.ecommerce.benefit1.title': 'Platform integrations',
    'service.ecommerce.benefit1.desc': 'Shopify, WooCommerce, Odoo integrations',
    'service.ecommerce.benefit2.title': 'Warehouse automation',
    'service.ecommerce.benefit2.desc': 'Automated warehouse management',
    'service.ecommerce.benefit3.title': 'Return workflows',
    'service.ecommerce.benefit3.desc': 'Streamlined return processing',
    'service.ecommerce.process1.title': 'Workflow analysis',
    'service.ecommerce.process1.desc': 'Analyze e-commerce and fulfillment workflows',
    'service.ecommerce.process2.title': 'Automation design',
    'service.ecommerce.process2.desc': 'Design automated e-commerce processes',
    'service.ecommerce.process3.title': 'System implementation',
    'service.ecommerce.process3.desc': 'Implement e-commerce automation',
    'service.ecommerce.process4.title': 'Optimization & scaling',
    'service.ecommerce.process4.desc': 'Optimize and scale e-commerce automation',
    'service.ecommerce.example.title': 'Multi-Channel Retailer',
    'service.ecommerce.example.scenario': 'A retailer selling on 4 platforms was manually syncing inventory causing stockouts.',
    'service.ecommerce.example.solution': 'Implemented real-time inventory sync, automated order routing, and return workflows.',
    'service.ecommerce.example.result1': 'Stockouts reduced from 15% to 2%',
    'service.ecommerce.example.result2': 'Order processing time cut by 70%',
    'service.ecommerce.example.result3': 'Customer satisfaction increased 42%',

    // Business Intelligence
    'service.bi.title': 'Business Intelligence & Reporting',
    'service.bi.subtitle': 'Real-time dashboards, anomaly alerts, and clean data — fully automated.',
    'service.bi.hero': 'Business Intelligence & Reporting',
    'service.bi.impact': "Know exactly what's happening in your business — in real time.",
    'service.bi.description': 'Real-time dashboards, anomaly alerts, and clean data — fully automated.',
    'service.bi.what1.title': 'Live Dashboards',
    'service.bi.what1.desc': 'Real-time KPI tracking and visualization',
    'service.bi.what2.title': 'Clean Data Pipelines',
    'service.bi.what2.desc': 'Automated data collection and cleaning',
    'service.bi.what3.title': 'Anomaly Alerts',
    'service.bi.what3.desc': 'AI-powered alerts for unusual patterns',
    'service.bi.what4.title': 'Automated Reports',
    'service.bi.what4.desc': 'Scheduled reports delivered automatically',
    'service.bi.benefit1.title': 'KPI dashboards',
    'service.bi.benefit1.desc': 'Customized real-time dashboards',
    'service.bi.benefit2.title': 'Multi-source syncing',
    'service.bi.benefit2.desc': 'Data aggregation from multiple systems',
    'service.bi.benefit3.title': 'AI anomaly detection',
    'service.bi.benefit3.desc': 'Automatic detection of unusual patterns',
    'service.bi.process1.title': 'Workflow analysis',
    'service.bi.process1.desc': 'Identify data sources and reporting needs',
    'service.bi.process2.title': 'Automation design',
    'service.bi.process2.desc': 'Design automated BI and reporting workflows',
    'service.bi.process3.title': 'System implementation',
    'service.bi.process3.desc': 'Build dashboards and data pipelines',
    'service.bi.process4.title': 'Optimization & scaling',
    'service.bi.process4.desc': 'Optimize and expand BI automation',
    'service.bi.example.title': 'SaaS Company',
    'service.bi.example.scenario': 'A SaaS company had data spread across 8 tools with 2 days weekly spent on manual reports.',
    'service.bi.example.solution': 'Built centralized BI dashboard with real-time data integration and automated alerts.',
    'service.bi.example.result1': 'Reporting time reduced from 2 days to 10 minutes',
    'service.bi.example.result2': 'Churn rate decreased 35% through early intervention',
    'service.bi.example.result3': 'Data-driven decisions increased 400%',

    // Workflow & Internal Automation
    'service.workflows.title': 'Workflow & Internal Automation',
    'service.workflows.subtitle': 'Connect your tools and eliminate manual tasks across your company.',
    'service.workflows.hero': 'Workflow & Internal Automation',
    'service.workflows.impact': 'Every team works faster when the software works together.',
    'service.workflows.description': 'Connect your tools and eliminate manual tasks across your company.',
    'service.workflows.what1.title': 'Tasks That Assign Themselves',
    'service.workflows.what1.desc': 'Automated task creation and assignment',
    'service.workflows.what2.title': 'Tools That Sync Automatically',
    'service.workflows.what2.desc': 'Seamless integration between all your tools',
    'service.workflows.what3.title': 'Internal Workflows That Flow',
    'service.workflows.what3.desc': 'Approval processes and handoffs automated',
    'service.workflows.what4.title': 'Better Collaboration',
    'service.workflows.what4.desc': 'Teams stay in sync automatically',
    'service.workflows.benefit1.title': 'Tool integrations',
    'service.workflows.benefit1.desc': 'Connect all your business tools',
    'service.workflows.benefit2.title': 'Task automation',
    'service.workflows.benefit2.desc': 'Automated task creation and management',
    'service.workflows.benefit3.title': 'Multi-step workflows',
    'service.workflows.benefit3.desc': 'Complex multi-step automated processes',
    'service.workflows.process1.title': 'Workflow analysis',
    'service.workflows.process1.desc': 'Map internal workflows and tool landscape',
    'service.workflows.process2.title': 'Automation design',
    'service.workflows.process2.desc': 'Design automated internal workflows',
    'service.workflows.process3.title': 'System implementation',
    'service.workflows.process3.desc': 'Build and integrate workflow automation',
    'service.workflows.process4.title': 'Optimization & scaling',
    'service.workflows.process4.desc': 'Continuously optimize workflows',
    'service.workflows.example.title': 'Consulting Firm',
    'service.workflows.example.scenario': 'A consulting firm lost 3 hours daily per employee to inefficient approval processes.',
    'service.workflows.example.solution': 'Built digital workflow hub with automated approvals and real-time status tracking.',
    'service.workflows.example.result1': 'Approval times reduced from 5 days to 4 hours',
    'service.workflows.example.result2': 'Employee satisfaction increased 40%',
    'service.workflows.example.result3': 'Productivity improved 25%',

    // Process Page
    'process.hero.title': 'Our proven process for your',
    'process.hero.highlight': 'automation success',
    'process.hero.subtitle': 'From initial analysis to implementation - this is how we systematically transform your business processes into efficient, automated workflows.',
    'process.hero.timeline': '4-8 weeks typical duration',
    'process.hero.teamSize': 'Dedicated expert team',
    'process.step1.title': 'Analysis & Strategy',
    'process.step1.subtitle': 'We map your workflows, tools, and bottlenecks to identify the highest-impact automation opportunities.',
    'process.step1.detailedDescription': 'We map your workflows, tools, and bottlenecks to identify the highest-impact automation opportunities.',
    'process.step1.duration': '1-2 weeks',
    'process.step1.deliverable1': 'Process overview with system landscape',
    'process.step1.deliverable2': 'Automation impact assessment',
    'process.step1.deliverable3': 'Prioritized opportunity roadmap',
    'process.step2.title': 'Solution Design',
    'process.step2.subtitle': 'We design clear automation blueprints tailored to your business and systems.',
    'process.step2.detailedDescription': 'We design clear automation blueprints tailored to your business and systems.',
    'process.step2.duration': '1-2 weeks',
    'process.step2.deliverable1': 'Technical architecture blueprint',
    'process.step2.deliverable2': 'System integration plan',
    'process.step2.deliverable3': 'User interface mockups',
    'process.step3.title': 'Implementation',
    'process.step3.subtitle': 'We build, connect, and test your automated workflows — fast and reliably.',
    'process.step3.detailedDescription': 'We build, connect, and test your automated workflows — fast and reliably.',
    'process.step3.duration': '2-4 weeks',
    'process.step3.deliverable1': 'Fully functional automation system',
    'process.step3.deliverable2': 'Comprehensive team training',
    'process.step3.deliverable3': 'Documentation and user guides',
    'process.step4.title': 'Optimization & Support',
    'process.step4.subtitle': 'We fine-tune and expand your automation setup as your team grows.',
    'process.step4.detailedDescription': 'We fine-tune and expand your automation setup as your team grows.',
    'process.step4.duration': 'Ongoing',
    'process.step4.deliverable1': 'Performance monitoring dashboard',
    'process.step4.deliverable2': 'Regular optimization reports',
    'process.step4.deliverable3': '24/7 technical support',
    'process.deliverables.title': 'Key Deliverables',
    'process.benefits.title': 'Why Our Process Works',
    'process.benefits.subtitle': 'Proven methodology that delivers results for businesses like yours',
    'process.benefit1.title': 'Minimal Disruption',
    'process.benefit1.description': 'Our phased approach ensures your business operations continue smoothly during implementation',
    'process.benefit2.title': 'Measurable Results',
    'process.benefit2.description': 'Clear KPIs and regular reporting keep you informed of the automation impact on your business',
    'process.benefit3.title': 'Future-Ready',
    'process.benefit3.description': 'Scalable solutions that grow with your business and adapt to changing requirements',
    'process.cta.title': 'Ready to Transform Your Business?',
    'process.cta.description': "Let's discuss how our proven process can streamline your operations and boost your productivity.",
    'process.cta.button': 'Start Your Project',
    'process.cta.joinTeam.button': 'Join Team',
    'process.cta.joinTeam.emailPrompt': 'Please enter your email address to receive the team invitation:',
    'process.cta.joinTeam.success': 'Invitation sent!',
    'process.cta.joinTeam.checkEmail': 'Please check your email for the Matrix invitation link.',
    'process.cta.joinTeam.error': 'Error',
    'process.cta.joinTeam.invalidEmail': 'Please enter a valid email address.',
    'process.cta.joinTeam.tryAgain': 'Failed to send invitation. Please try again.',
    'process.cta.joinTeam.sending': 'Sending...',

    // Automation Benefits
    'benefits.title': 'Smarter Systems.',
    'benefits.title.highlight': 'Better workdays.',
    'benefits.subtitle': 'Discover how automation transforms your business operations and drives sustainable growth',
    'benefits.time.title': 'Automated workflows',
    'benefits.time.description': 'Free up valuable hours by automating repetitive tasks, allowing your team to focus on strategic initiatives',
    'benefits.efficiency.title': 'Clear team communication',
    'benefits.efficiency.description': 'Streamline workflows and eliminate bottlenecks to boost overall productivity across all departments',
    'benefits.accuracy.title': 'Reduced manual effort',
    'benefits.accuracy.description': 'Reduce human errors and ensure consistent quality with automated processes and validation',
    'benefits.speed.title': 'Faster execution',
    'benefits.speed.description': 'Accelerate business processes and deliver results faster with automated workflows',
    'benefits.security.title': 'Fewer errors',
    'benefits.security.description': 'Implement standardized security protocols and reduce vulnerabilities through automated compliance',
    'benefits.satisfaction.title': 'Real-time insights',
    'benefits.satisfaction.description': 'Improve employee morale by eliminating tedious tasks and enabling meaningful work',
    'benefits.insights.title': 'Increased productivity',
    'benefits.insights.description': 'Gain real-time visibility and actionable insights through automated reporting and analytics',
    'benefits.innovation.title': 'Scalable operations',
    'benefits.innovation.description': 'Create capacity for innovation and growth by automating routine operations',
    'benefits.quality.title': 'More predictable outcomes',
    'benefits.quality.description': 'Deliver reliable results every time with standardized automated processes',

    // Pricing
    'pricing.title': 'Transparent',
    'pricing.title.highlight': 'Pricing',
    'pricing.subtitle': 'Select the number of tools to automate – the more, the better the discount',
    'pricing.button': 'Book Consultation',
    'pricing.tool.title': 'Tool-Based Automation',
    'pricing.tool.description': 'Professional process automation for your business',
    'pricing.tool.selectLabel': 'Number of tools to automate',
    'pricing.tool.tools': 'Tools',
    'pricing.tool.discount': 'Discount',
    'pricing.tool.perTool': 'per tool',
    'pricing.tool.included': 'Included in price',
    'pricing.tool.note': 'Prices exclude VAT. Custom solutions available upon request.',
    'pricing.tool.feature1': 'Comprehensive process analysis and requirements assessment',
    'pricing.tool.feature2': 'Customized automation solutions for your tools',
    'pricing.tool.feature3': 'Professional integration into existing systems',
    'pricing.tool.feature4': 'Complete handover of developed infrastructure',
    'pricing.tool.feature5': 'AI-powered workflows and intelligent optimization',
    'pricing.tool.feature6': '12 weeks premium support and maintenance',
    'pricing.tool.feature7': 'Team training and complete documentation',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights and expertise on automation for small and medium-sized businesses',
    'blog.back': 'Back to Blog',
    'blog.read.more': 'Read More',
    'blog.article.back': 'Back to Blog',
    'blog.article.published': 'Published',
    'blog.article.reading.time': 'Reading time',
    'blog.article.min.read': 'min read',

    // Blog Articles
    'blog.article1.title': 'The ROI of Automation: Real Numbers for Small Businesses',
    'blog.article1.excerpt': 'Discover how small businesses achieve measurable returns through strategic automation investments, with real case studies and financial projections.',
    'blog.article1.content': 'Automation is not just for enterprise companies with unlimited budgets. Small businesses are seeing remarkable returns on automation investments—often within the first few months. Learn about real case studies showing 300-800% annual ROI, and discover which processes deliver the quickest wins for small businesses.',

    'blog.article2.title': 'Five Processes Every Small Business Should Automate First',
    'blog.article2.excerpt': 'Start your automation journey right. Learn which five processes deliver the quickest wins and highest impact for small business operations.',
    'blog.article2.content': 'Not all automation projects are created equal. Some deliver quick wins, while others require significant investment for modest returns. This guide reveals the five critical processes every small business should automate first: lead management, invoice processing, customer onboarding, data entry, and reporting. Each delivers immediate ROI and builds momentum for further automation.',

    'blog.article3.title': 'Breaking the "Too Small to Automate" Myth',
    'blog.article3.excerpt': 'Think your business is too small for automation? Think again. Learn why small businesses actually benefit more from automation than large enterprises.',
    'blog.article3.content': 'The belief that "we are too small for automation" is one of the most damaging misconceptions in business today. The reality? Small businesses benefit MORE from automation than large enterprises. Learn why modern no-code tools, faster implementation times, and higher per-person impact make automation perfect for small businesses.',

    'blog.article4.title': 'The Hidden Costs of Manual Processes in Small Businesses',
    'blog.article4.excerpt': 'Manual processes cost more than just time. Discover the hidden financial impacts draining your profits and how to stop the bleeding.',
    'blog.article4.content': 'Manual processes cost far more than you think. Beyond direct labor costs, there are hidden expenses: error correction (€8,000-€25,000 annually), opportunity cost (€30,000-€100,000+ in lost revenue), employee turnover (€15,000-€50,000 per person), and customer experience degradation. For a typical 10-person business, manual processes cost over €215,000 annually in direct and hidden costs.',

    'blog.article5.title': 'How to Start Automating Without Overwhelming Your Team',
    'blog.article5.excerpt': 'Automation does not have to be disruptive. Learn our proven step-by-step approach to introduce automation smoothly while keeping your team engaged.',
    'blog.article5.content': 'Successful automation is not about technology—it is about people. Learn our proven 5-phase approach: Listen First (understand team pain points), Quick Win (start small for immediate impact), Involve the Team (implement WITH them, not TO them), Train Thoroughly (ensure confidence), and Iterate & Expand (continuously improve). When done right, your team becomes your biggest automation advocates.',

    'blog.article6.title': 'Future-Proofing Your Business: 2025 Automation Trends',
    'blog.article6.excerpt': 'Stay ahead of the curve. Explore the emerging automation technologies and strategies that will define successful businesses in 2025 and beyond.',
    'blog.article6.content': 'The automation landscape is evolving rapidly. Six key trends are defining 2025: AI-enhanced automation (intelligent workflows), hyper-integration (everything connects), no-code as standard (business users build automations), autonomous agents (self-managing systems), vertical-specific packages (industry-ready solutions), and proactive automation (anticipates needs). Small businesses that embrace automation now will operate with the efficiency of companies 10x their size.',
  },
  de: {
    // German translations (full set)
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.team': 'Team',
    'nav.contact': 'Kontakt',
    'nav.blog': 'Blog',
    'nav.process': 'Prozess',
    'nav.pricing': 'Preise',
    'nav.book.call': 'Termin buchen',
    'nav.request.project': 'Projekt anfragen',
    'header.cta': 'Anrufen',

    'hero.title': 'Mehr Zeit für Ideen,',
    'hero.title.highlight': 'weniger für Papierkram.',
    'hero.subtitle': 'Wir automatisieren die Prozesse, die Teams verlangsamen – damit du mit Klarheit, Geschwindigkeit und einem ruhigen, vorhersehbaren Workflow arbeiten kannst.',
    'hero.cta': 'Projekt anfragen',
    'hero.cta.secondary': 'So funktioniert es',
    'hero.cta.mobile': 'Anrufen',

    'services.title': 'Top-Bereiche für maximale',
    'services.title.highlight': 'Hebelwirkung',
    'services.subtitle': 'Automatisierung ist kein Luxus mehr – sie ist der Schlüssel zu Wachstum, Effizienz und Klarheit in einer komplexen Arbeitswelt.',
    'services.consultation.button': 'Kostenlose Beratung anfragen',
    'services.consultation.subtitle': 'Welcher Bereich bietet das größte Potenzial in deinem Unternehmen?',
    'services.more.info': 'Mehr Infos',
    'services.sales.title': 'Vertriebs- & Marketingautomatisierung',
    'services.sales.subtitle': 'Verwandle kalte Leads in eine vorhersehbare, automatisierte Pipeline.',
    'services.sales.description': 'Automatisiere Funnels, Follow-ups und Kampagnen, um systematisch Interessenten in Kunden zu verwandeln – 24/7, datengetrieben und persönlich.',
    'services.finance.title': 'Finanz- & Buchhaltungsautomatisierung',
    'services.finance.subtitle': 'Automatisiere Rechnungen, Abstimmungen und Berichte.',
    'services.finance.description': 'Dokumente, Zahlungen, Rechnungen und Berichte fließen automatisch durch deine Systeme – für ein ordentliches Backoffice ohne Kopfschmerzen.',
    'services.hr.title': 'HR- & Recruiting-Automatisierung',
    'services.hr.subtitle': 'Schneller einstellen, klarer onboarden, automatisierte Kommunikation.',
    'services.hr.description': 'Von der Bewerbung bis zum Onboarding: Automatisierung bringt Geschwindigkeit, Struktur und Wertschätzung in deine HR-Prozesse.',
    'services.ecommerce.title': 'E-Commerce- & Fulfillment-Automatisierung',
    'services.ecommerce.subtitle': 'Bestandsabgleich, Auftragsweiterleitung, Retourenautomatisierung.',
    'services.ecommerce.description': 'Der Verkauf läuft, der Bestand stimmt, Retouren sind im Griff – jede Bewegung im Shop löst automatisch Aktionen aus, die deine Kunden begeistern und dein Lager entlasten.',
    'services.bi.title': 'Business Intelligence',
    'services.bi.subtitle': 'Echtzeit-Dashboards und saubere, automatisierte Berichte.',
    'services.bi.description': 'Deine wichtigsten KPIs auf einen Blick – aufbereitet, visualisiert und mit Warnsystemen ausgestattet, bevor Risiken zu Problemen werden.',
    'services.workflows.title': 'Workflow- & interne Automatisierung',
    'services.workflows.subtitle': 'Tools verbinden, manuelle Aufgaben reduzieren, Abläufe optimieren.',
    'services.workflows.description': 'Standardisierte Prozesse wie Freigaben, Dokumentenmanagement oder Übergaben laufen im Hintergrund – sauber, nachvollziehbar, skalierbar.',

    'services.sales.feature1': 'Lead-Routing & Segmentierung',
    'services.sales.feature2': 'CRM-Automatisierungen (HubSpot, Pipedrive, Odoo)',
    'services.sales.feature3': 'E-Mail-Sequenzen & Trigger',
    'services.sales.feature4': 'KI-Lead-Scoring',
    'services.sales.feature5': 'Multi-Channel-Automatisierung',
    'services.finance.feature1': 'OCR & Datenerfassung',
    'services.finance.feature2': 'Buchungsautomatisierung',
    'services.finance.feature3': 'Abstimmungs-Workflows',
    'services.finance.feature4': 'Automatisierte Reporting-Dashboards',
    'services.hr.feature1': 'ATS-Workflows',
    'services.hr.feature2': 'Kalender- & E-Mail-Automatisierung',
    'services.hr.feature3': 'Einstellungspipelines',
    'services.hr.feature4': 'Onboarding-Journeys',
    'services.ecommerce.feature1': 'Shopify, WooCommerce, Odoo',
    'services.ecommerce.feature2': 'Lager-Integrationen',
    'services.ecommerce.feature3': 'Retouren-Workflows',
    'services.ecommerce.feature4': 'Produktdaten-Pipelines',
    'services.bi.feature1': 'KPI-Dashboards',
    'services.bi.feature2': 'Multi-Source-Sync',
    'services.bi.feature3': 'KI-Anomalieerkennung',
    'services.workflows.feature1': 'Tool-Integrationen',
    'services.workflows.feature2': 'Aufgabenautomatisierung',
    'services.workflows.feature3': 'Interne Kommunikation',
    'services.workflows.feature4': 'Datensynchronisation',
    'services.workflows.feature5': 'Mehrstufige Workflows',
    'services.workflows.feature6': 'Bessere Zusammenarbeit',

    'about.title': 'Wie wir',
    'about.title.highlight': 'vorgehen',
    'about.subtitle': 'Unser strukturierter Ansatz für nachhaltige Automatisierungslösungen',
    'about.step1.title': 'Analyse & Strategie',
    'about.step1.description': 'Wir erfassen deine Workflows, Tools und Engpässe, um die Automatisierungsmöglichkeiten mit höchster Wirkung zu identifizieren.',
    'about.step2.title': 'Lösungsdesign',
    'about.step2.description': 'Wir entwerfen klare Automatisierungspläne, die auf dein Unternehmen und deine Systeme zugeschnitten sind.',
    'about.step3.title': 'Implementierung',
    'about.step3.description': 'Wir bauen, verbinden und testen deine automatisierten Workflows – schnell und zuverlässig.',
    'about.step4.title': 'Optimierung & Support',
    'about.step4.description': 'Wir verfeinern und erweitern deine Automatisierung, während dein Team wächst.',

    'team.title': 'Unser',
    'team.title.highlight': 'Team',
    'team.subtitle': 'Lerne die Experten kennen, die dein Unternehmen automatisieren und digitalisieren.',
    'team.alex.role': 'Solution Architect',
    'team.alex.description': 'Entwirft umfassende Automatisierungslösungen, die sich nahtlos in bestehende Geschäftsprozesse integrieren und die digitale Transformation vorantreiben.',
    'team.robert.role': 'Automation Consultant',
    'team.robert.description': 'Bietet strategische Beratung zu Automatisierungsmöglichkeiten und hilft Organisationen, ihre operative Effizienz durch intelligentes Prozessdesign zu optimieren.',
    'team.chris.role': 'Automation Engineer',
    'team.chris.description': 'Implementiert und wartet automatisierte Systeme und sorgt für robuste Leistung und nahtlose Integration über alle technischen Plattformen hinweg.',
    'team.sebastian.role': 'Business Analyst',
    'team.sebastian.description': 'Analysiert Geschäftsabläufe, um Automatisierungsmöglichkeiten zu identifizieren und komplexe Anforderungen in umsetzbare technische Spezifikationen zu übersetzen.',
    'team.karim.role': 'Automation Engineer',
    'team.karim.description': 'Entwickelt und programmiert kundenspezifische Automatisierungslösungen und schafft die technische Infrastruktur für innovative Geschäftsprozessverbesserungen.',
    'team.sascha.role': 'Automation Architect',
    'team.sascha.description': 'Entwirft skalierbare Automatisierungsframeworks, die Geschäftsabläufe transformieren und intelligente, zukunftssichere Lösungen schaffen.',

    'cta.title': 'Bereit für mehr',
    'cta.title.highlight': 'Effizienz',
    'cta.subtitle': 'Lass uns in einem unverbindlichen Gespräch herausfinden, wie botti dein Unternehmen entlasten kann.',
    'cta.button': 'Anrufen',
    'cta.note': 'Kein Verkaufsgespräch – nur echtes Interesse an deiner Situation.',

    'footer.description': 'Mit uns läufts automatisch.',
    'footer.copyright': '© 2024 HeyBotti. Alle Rechte vorbehalten.',

    'jobs.cta.title': 'Werde Teil unseres',
    'jobs.cta.title.highlight': 'Teams',
    'jobs.cta.subtitle': 'Wir suchen Ingenieure, Automatisierungsspezialisten und Designer, die Wert auf Klarheit, Effizienz und sinnvolle Arbeit legen.',
    'jobs.cta.button': 'Offene Stellen ansehen',
    'jobs.cta.button.secondary': 'Projekt anfragen',

    // Booking Section (DE)
    'booking.title': 'Dein Automation Check',
    'booking.subtitle': 'Sprich mit uns über dein Vorhaben in einem 30 Min Meeting.',
    'booking.date.title': 'Datum wählen',
    'booking.time.title': 'Uhrzeit wählen',
    'booking.contact.title': 'Deine Kontaktdaten',
    'booking.name.label': 'Name *',
    'booking.name.placeholder': 'Dein Name',
    'booking.email.label': 'E-Mail *',
    'booking.email.placeholder': 'deine@email.de',
    'booking.phone.label': 'Telefon *',
    'booking.phone.placeholder': '+49 123 456789',
    'booking.message.label': 'Nachricht (optional)',
    'booking.message.placeholder': 'Hast du besondere Wünsche oder Fragen?',
    'booking.button.submit': 'Termin buchen',
    'booking.button.submitting': 'Wird gebucht...',
    'booking.error.datetime': 'Bitte wähle Datum und Uhrzeit aus.',
    'booking.error.title': 'Fehler',
    'booking.error.submit': 'Die Buchung konnte nicht abgeschlossen werden. Bitte versuche es erneut.',
    'booking.validation.error': 'Validierungsfehler',

    'comparison.title': 'Vom Manuellen Chaos zum',
    'comparison.title.highlight': 'Mühelosen Flow.',
    'comparison.subtitle': 'Sieh selbst, wie Automatisierung deine Prozesse transformiert',
    'comparison.off.title': 'botti AUS',
    'comparison.on.title': 'botti AN',
    'comparison.without.title': 'Ohne Automatisierung',
    'comparison.without.subtitle': 'Chaos',
    'comparison.with.title': 'Mit Automatisierung',
    'comparison.with.subtitle': 'Automatisiert',
    'comparison.without.feature1': 'Verlorene Aufgaben und verpasste Übergaben',
    'comparison.without.feature2': 'Langsame Reaktionszeiten',
    'comparison.without.feature3': 'Fragmentierte Kommunikation',
    'comparison.without.feature4': 'Wiederholte manuelle Schritte',
    'comparison.without.feature5': 'Daten an mehreren Orten gespeichert',
    'comparison.without.feature6': 'Ständiges Feuerlöschen',
    'comparison.with.feature1': 'Strukturierte, zuverlässige Prozesse',
    'comparison.with.feature2': 'Aufgaben fließen automatisch',
    'comparison.with.feature3': 'Klare Verantwortlichkeiten',
    'comparison.with.feature4': 'Keine verpassten Nachverfolgungen',
    'comparison.with.feature5': 'Eine einzige Quelle der Wahrheit',
    'comparison.with.feature6': 'Teams arbeiten ruhig und effektiv',
    'comparison.with.feature7': '',
    'comparison.with.feature8': '',
    'comparison.with.feature9': '',
    'comparison.with.feature10': '',
    'comparison.testimonial.title': 'Erfolgsgeschichte',
    'comparison.testimonial.subtitle': 'Echte Kundenerfahrung',
    'comparison.testimonial.quote': 'Ich frage mich heute, wie wir früher überhaupt zurechtkamen. Seit wir unsere Prozesse automatisiert haben, läuft vieles einfach im Hintergrund, ohne Nachverfolgung oder Kontrollchaos. Das Beste: Mein Team ist viel entspannter und hat endlich den Kopf frei für die wirklich wichtigen Themen. Ich kann es jedem empfehlen, der weniger Stress und mehr Klarheit im Alltag möchte.',
    'comparison.testimonial.name': 'Vera',
    'comparison.testimonial.company': 'BLACK FLASH ARCHERY GmbH',
    'comparison.testimonial.metric1': '70 % weniger manuelle Aufgaben',
    'comparison.testimonial.metric2': '40 % schnellere Reaktionszeiten',
    'comparison.testimonial.metric3': '90 % Reduktion repetitiver Arbeit',
    'comparison.cta.title': 'Möchtest du verstehen, wie Automatisierung funktioniert?',
    'comparison.cta.description': 'Entdecke im Detail, wie wir dein Unternehmen durch maßgeschneiderte Automatisierung transformieren.',
    'comparison.cta.button': 'Entdecke unseren Prozess',
    'comparison.process.title': 'Wie wir vorgehen',
    'comparison.process.subtitle': 'Unser strukturierter Ansatz für nachhaltige Automatisierungslösungen',

    'about.page.title': 'Warum Automatisierung jetzt entscheidend ist',
    'about.page.badge': 'Unsere Vision',
    'about.page.back': 'Zurück zur Startseite',
    'about.page.intro1': 'In einer Zeit, in der Innovationszyklen immer kürzer werden und die Komplexität im Geschäftsalltag stetig steigt, stehen viele deutsche Unternehmen vor derselben Herausforderung: zu viel manuelle Arbeit, zu wenig Zeit für das Wesentliche. Fachkräftemangel, ineffiziente Prozesse, steigender Kostendruck und eine spürbare Überforderung durch administrative Aufgaben bremsen insbesondere kleine und mittelständische Unternehmen aus – genau jene Betriebe, die das Rückgrat unserer Wirtschaft bilden.',
    'about.page.intro2': 'Doch wir bei HeyBotti glauben daran, dass jeder Betrieb – unabhängig von Größe oder Branche – die Chance verdient, sich auf das zu konzentrieren, was wirklich zählt: Menschen, Ideen und Wertschöpfung.',
    'about.page.intro3': 'Automatisierung ist dabei kein kaltes Technologieversprechen. Sie ist ein Werkzeug der Befreiung. Sie gibt Teams ihre Energie zurück, reduziert Fehler, schafft Transparenz und eröffnet neue kreative Räume. Wenn Routineprozesse nicht mehr Kraft kosten, entsteht Platz für Innovation, Qualität und Wachstum.',
    'about.page.challenges.title': 'Viele Unternehmen kämpfen noch immer mit:',
    'about.page.challenge1': 'Überlasteten Mitarbeitenden, die zu viel Zeit mit repetitiven Aufgaben verbringen',
    'about.page.challenge2': 'Fragmentierten Systemen und fehlender Übersicht',
    'about.page.challenge3': 'Steigenden Personalkosten bei gleichzeitigem Fachkräftemangel',
    'about.page.challenge4': 'Langsamen, papierlastigen Abläufen',
    'about.page.challenge5': 'Der Angst, dass Digitalisierung teuer, kompliziert oder „nichts für uns" sei',
    'about.page.belief': 'Doch genau hier beginnt unser Idealismus.',
    'about.page.vision1': 'Wir glauben an eine Wirtschaft, in der Technologie menschlich ist, intuitiv, zugänglich – und jedem Unternehmen hilft, das Beste aus sich herauszuholen. Eine Wirtschaft, in der Menschen nicht durch Prozesse gebunden sind, sondern durch Automatisierung gestärkt werden. Eine Wirtschaft, in der Zeit wieder wertvoll wird.',
    'about.page.vision2': 'HeyBotti steht für eine Zukunft, in der Automatisierung nicht nur Effizienz schafft, sondern Freiheit.',
    'about.page.freedom1': 'Freiheit, sich auf Visionen und Wertschöpfung zu konzentrieren.',
    'about.page.freedom2': 'Freiheit, Mitarbeiter zu entlasten und Potenziale zu entfalten.',
    'about.page.freedom3': 'Freiheit, als Unternehmen wieder einen Schritt voraus zu sein.',
    'about.page.closing': 'Wir sehen Automation nicht als Trend, sondern als Aufbruch – hin zu einer neuen Form des Arbeitens, die menschlicher, nachhaltiger und zukunftsfähiger ist.',
    'about.page.mission': 'Und genau dafür gehen wir jeden Tag los.',
    'about.page.cta.title': 'Bereit für den Aufbruch?',
    'about.page.cta.subtitle': 'Lass uns gemeinsam Freiräume für das Wesentliche schaffen.',
    'about.page.cta.button': 'Projekt anfragen',

    'jobs.page.title': 'Offene Stellen',
    'jobs.page.back': 'Zurück zur Startseite',
    'jobs.page.subtitle': 'Werde Teil unseres Teams und gestalte die Zukunft der Automatisierung mit. Wir suchen Talente mit Leidenschaft für Innovation und Effizienz.',
    'jobs.mission.title': 'Deine Mission',
    'jobs.requirements.title': 'Was du mitbringst',
    'jobs.benefits.title': 'Was dich erwartet',
    'jobs.apply.button': 'Jetzt bewerben',
    'jobs.no.position.title': 'Nicht die passende Stelle gefunden?',
    'jobs.no.position.subtitle': 'Wir sind immer auf der Suche nach Talenten. Sende uns eine Initiativbewerbung!',
    'jobs.unsolicited.button': 'Initiativbewerbung senden',

    'cookies.message': 'Wir verwenden Cookies, um deine Erfahrung auf unserer Website zu verbessern. Durch die Nutzung unserer Website stimmst du der Verwendung von Cookies zu.',
    'cookies.accept': 'Akzeptieren',
    'cookies.decline': 'Ablehnen',

    'form.title': 'Anfrage',
    'form.title.highlight': 'Projekt',
    'form.subtitle': 'Erzähle uns von deinem Projekt und wir finden gemeinsam die richtige Lösung.',
    'form.name': 'Name',
    'form.name.required': 'Name ist erforderlich',
    'form.name.placeholder': 'Dein Name',
    'form.email': 'E-Mail',
    'form.email.required': 'E-Mail ist erforderlich',
    'form.email.invalid': 'Ungültige E-Mail-Adresse',
    'form.email.placeholder': 'deine@email.de',
    'form.company': 'Firma',
    'form.company.placeholder': 'Deine Firma',
    'form.phone': 'Telefon',
    'form.phone.placeholder': '+49 123 456789',
    'form.revenue': 'Wie viel mehr Umsatz pro Jahr?',
    'form.revenue.note': 'Wir zeigen dir, wie du diese Ziele durch Automatisierung erreichst',
    'form.budget': 'Budget',
    'form.details': 'Projektdetails',
    'form.details.required': 'Bitte beschreibe dein Projekt',
    'form.details.placeholder': 'Beschreibe dein Projekt, Ziele und Herausforderungen...',
    'form.submit': 'Anfrage senden',
    'form.success.title': 'Anfrage gesendet!',
    'form.success.description': 'Wir melden uns innerhalb von 24 Stunden bei dir.',

    'chatbot.welcome': 'Hallo! Ich bin dein intelligenter Automatisierungsagent von botti.co. Wie kann ich dir heute bei der Optimierung deiner Geschäftsprozesse helfen?',
    'chatbot.subtitle': 'Dein smarter Automatisierungsagent',
    'chatbot.placeholder': 'Schreibe deine Nachricht...',
    'chatbot.automation': 'Automatisierung ist unsere Spezialität! Wir können dir in verschiedenen Bereichen helfen: Vertrieb & Marketing, Finanzen & Buchhaltung, HR & Recruiting, E-Commerce und Business Intelligence. In welchem Bereich siehst du das größte Potenzial?',
    'chatbot.cost': 'Die Kosten für Automatisierungslösungen variieren je nach Komplexität und Umfang. Wir erstellen dir gerne ein individuelles Angebot. Kannst du mir mehr über dein Unternehmen und deine Anforderungen erzählen?',
    'chatbot.sales': 'Perfekt! Unsere Vertriebs- & Marketingautomatisierung umfasst E-Mail-Automatisierung, Lead-Nurturing-Funnels, CRM-Automatisierung und Chatbots. So verwandelst du systematisch Interessenten in Kunden – 24/7 und datengetrieben. Welcher Aspekt interessiert dich am meisten?',
    'chatbot.finance': 'Unsere Finanz- & Buchhaltungsautomatisierung sorgt für weniger Fehler und mehr Überblick. Wir automatisieren Dokumentenerkennung, Rechnungsstellung, Bankabstimmung und Steuererklärung. Möchtest du mehr über einen bestimmten Bereich erfahren?',
    'chatbot.hr': 'HR-Automatisierung bringt Tempo und Struktur in deine Personalprozesse. Von automatisierter Kandidatenauswahl über Terminplanung bis zum Onboarding – wir digitalisieren deinen gesamten HR-Prozess. Wo siehst du den größten Handlungsbedarf?',
    'chatbot.ecommerce': 'E-Commerce-Automatisierung ist unser stiller Backoffice-Partner für dich! Bestandsabgleich, Versandabwicklung, Zahlungsabstimmung und Produktfeed-Automatisierung laufen rund um die Uhr. Welchen Teil deines E-Commerce-Prozesses möchtest du optimieren?',
    'chatbot.reporting': 'Mit Business Intelligence & Reporting hast du alle wichtigen KPIs im Blick. Wir erstellen automatisierte Dashboards, aggregieren Daten aus mehreren Tools und richten Frühwarnsysteme ein. Welche Kennzahlen sind für dich besonders wichtig?',
    'chatbot.workflow': 'Workflow-Automatisierung macht deine internen Prozesse effizienter. Freigabeprozesse, Ticketing, Dokumentenmanagement und interne Kommunikation laufen standardisiert und nachvollziehbar. Welche Prozesse bereiten dir aktuell Kopfschmerzen?',
    'chatbot.greeting': 'Hallo! Schön, dass du da bist. Ich helfe dir gerne, die richtigen Automatisierungslösungen für dein Unternehmen zu finden. Was beschäftigt dich gerade am meisten in deinen Geschäftsprozessen?',
    'chatbot.thanks': 'Sehr gern! Wenn du weitere Fragen hast oder eine unverbindliche Beratung wünschst, stehe ich dir jederzeit zur Verfügung. Gemeinsam finden wir die perfekte Automatisierungslösung für dein Unternehmen.',
    'chatbot.default': 'Das ist eine interessante Frage! Automatisierung kann in vielen Bereichen helfen – vom Vertrieb über Finanzen bis hin zu HR-Prozessen. Kannst du mir mehr Details zu deinem konkreten Anliegen geben? So kann ich dir gezielter helfen.',

    'callback.title': 'Rückruf vereinbaren',
    'callback.name': 'Name',
    'callback.name.required': 'Name ist erforderlich',
    'callback.name.placeholder': 'Dein Name',
    'callback.email': 'E-Mail',
    'callback.email.required': 'E-Mail ist erforderlich',
    'callback.email.invalid': 'Ungültige E-Mail-Adresse',
    'callback.email.placeholder': 'deine@email.de',
    'callback.phone': 'Telefon',
    'callback.phone.required': 'Telefon ist erforderlich',
    'callback.phone.placeholder': '+49 123 456789',
    'callback.date': 'Bevorzugtes Datum',
    'callback.date.placeholder': 'Datum auswählen',
    'callback.time': 'Bevorzugte Uhrzeit',
    'callback.time.placeholder': 'Uhrzeit auswählen',
    'callback.cancel': 'Abbrechen',
    'callback.schedule': 'Rückruf planen',
    'callback.error.title': 'Fehler',
    'callback.error.description': 'Bitte wähle ein Datum und eine Uhrzeit aus.',
    'callback.success.title': 'Rückruf geplant',
    'callback.success.description': 'Wir rufen dich am {date} um {time} an.',

    'service.back': 'Zurück zur Startseite',
    'service.not.found': 'Dienstleistung nicht gefunden',
    'service.benefits.title': 'Hauptvorteile',
    'service.process.title': 'Implementierungsprozess',
    'service.implementation.process': 'Implementierungsprozess',
    'service.core.competencies': 'Kernkompetenzen',
    'service.what.you.get': 'Das bekommst du',
    'service.cta.sales': 'Lass uns deinen Vertrieb automatisieren',
    'service.cta.finance': 'Lass uns deine Finanzen automatisieren',
    'service.cta.hr': 'Lass uns dein HR automatisieren',
    'service.cta.ecommerce': 'Lass uns deinen E-Commerce automatisieren',
    'service.cta.bi': 'Lass uns deine BI automatisieren',
    'service.cta.workflows': 'Lass uns deine Workflows automatisieren',
    'service.example.title': 'Beispiel-Case Study',
    'service.example.scenario': 'Szenario',
    'service.example.solution': 'Lösung',
    'service.example.results': 'Ergebnisse',
    
    // Sales & Marketing Automation (DE placeholders - using EN for now)
    'service.sales.title': 'Vertriebs- & Marketingautomatisierung',
    'service.sales.subtitle': 'Vorhersehbares Wachstum durch automatisierte Lead-Pflege, Funnels und CRM-Prozesse.',
    'service.sales.hero': 'Vertriebs- & Marketingautomatisierung',
    'service.sales.impact': 'Mehr Leads. Weniger manuelle Arbeit. Vorhersehbarer Umsatz.',
    'service.sales.description': 'Vorhersehbares Wachstum durch automatisierte Lead-Pflege, Funnels und CRM-Prozesse.',
    'service.sales.what1.title': 'Automatisierte Lead-Pflege',
    'service.sales.what1.desc': 'Jeder Lead erhält die richtige Nachricht zur richtigen Zeit — ohne manuelle Follow-ups.',
    'service.sales.what2.title': 'CRM, das sich selbst aktualisiert',
    'service.sales.what2.desc': 'Deals bewegen sich automatisch, Aufgaben werden sofort erstellt und Daten bleiben sauber.',
    'service.sales.what3.title': 'Cross-Channel-Automatisierung',
    'service.sales.what3.desc': 'E-Mail, Anzeigen, Website-Formulare, Chat — alles verbunden und automatisiert.',
    'service.sales.what4.title': 'Echtzeit-Pipeline-Einblicke',
    'service.sales.what4.desc': 'Wissen Sie genau, wo jeder Lead steht und was Aufmerksamkeit erfordert.',
    'service.sales.benefit1.title': 'Lead-Routing & Segmentierung',
    'service.sales.benefit1.desc': 'Automatische Segmentierung und Weiterleitung von Leads an die richtigen Teammitglieder',
    'service.sales.benefit2.title': 'CRM-Automatisierungen',
    'service.sales.benefit2.desc': 'HubSpot-, Pipedrive-, Odoo-Integrationen mit automatisierten Workflows',
    'service.sales.benefit3.title': 'E-Mail-Sequenzen & Trigger',
    'service.sales.benefit3.desc': 'Automatisierte E-Mail-Kampagnen basierend auf Nutzerverhalten',
    'service.sales.process1.title': 'Workflow-Analyse',
    'service.sales.process1.desc': 'Aktuelle Vertriebsprozesse erfassen und Automatisierungsmöglichkeiten identifizieren',
    'service.sales.process2.title': 'Automatisierungsdesign',
    'service.sales.process2.desc': 'Automatisierte Workflows auf deinen Verkaufszyklus zugeschnitten',
    'service.sales.process3.title': 'Systemimplementierung',
    'service.sales.process3.desc': 'Automatisierte Vertriebsworkflows erstellen und integrieren',
    'service.sales.process4.title': 'Optimierung & Skalierung',
    'service.sales.process4.desc': 'Kontinuierliche Optimierung und Erweiterung deiner Automatisierung',
    'service.sales.example.title': 'B2B-Software-Unternehmen',
    'service.sales.example.scenario': 'Ein B2B-Softwareunternehmen verlor 60% der Leads aufgrund langsamer Follow-up-Zeiten.',
    'service.sales.example.solution': 'Implementierung von automatisiertem Lead-Scoring, sofortigen Follow-ups und personalisierten Pflegesequenzen.',
    'service.sales.example.result1': 'Lead-Reaktionszeit sank von 24 Stunden auf 2 Minuten',
    'service.sales.example.result2': 'Lead-Conversion-Rate stieg um 45%',
    'service.sales.example.result3': 'Vertriebsteam sparte 20 Stunden pro Woche',

    // Finance & Accounting Automation (DE placeholders)
    'service.finance.title': 'Finanz- & Buchhaltungsautomatisierung',
    'service.finance.subtitle': 'Schnelle, genaue, automatisierte Finanzprozesse — ohne manuelle Eingabe.',
    'service.finance.hero': 'Finanz- & Buchhaltungsautomatisierung',
    'service.finance.impact': 'Echtzeit-Genauigkeit. Null manueller Papierkram.',
    'service.finance.description': 'Schnelle, genaue, automatisierte Finanzprozesse — ohne manuelle Eingabe.',
    'service.finance.what1.title': 'Automatisierte Rechnungsverarbeitung',
    'service.finance.what1.desc': 'OCR-Technologie extrahiert Daten automatisch aus Rechnungen',
    'service.finance.what2.title': 'Fehlerfreie Datenextraktion',
    'service.finance.what2.desc': 'KI-gestützte Validierung gewährleistet 99,9% Genauigkeit',
    'service.finance.what3.title': 'Automatisierter Abgleich',
    'service.finance.what3.desc': 'Kontoauszüge stimmen automatisch mit Rechnungen überein',
    'service.finance.what4.title': 'Sofortige Finanzeinblicke',
    'service.finance.what4.desc': 'Echtzeit-Dashboards zeigen deine finanzielle Gesundheit',
    'service.finance.benefit1.title': 'OCR & Datenextraktion',
    'service.finance.benefit1.desc': 'Automatische Datenextraktion aus Rechnungen und Belegen',
    'service.finance.benefit2.title': 'Buchungsautomatisierung',
    'service.finance.benefit2.desc': 'Automatisierte Buchhaltungseinträge und Buchführung',
    'service.finance.benefit3.title': 'Abstimmungs-Workflows',
    'service.finance.benefit3.desc': 'Automatisierter Bankabgleich und Matching',
    'service.finance.process1.title': 'Workflow-Analyse',
    'service.finance.process1.desc': 'Aktuelle Finanzprozesse und Schmerzpunkte analysieren',
    'service.finance.process2.title': 'Automatisierungsdesign',
    'service.finance.process2.desc': 'Automatisierte Finanzworkflows gestalten',
    'service.finance.process3.title': 'Systemimplementierung',
    'service.finance.process3.desc': 'Automatisierungslösungen implementieren und integrieren',
    'service.finance.process4.title': 'Optimierung & Skalierung',
    'service.finance.process4.desc': 'Finanzautomatisierung überwachen und optimieren',
    'service.finance.example.title': 'Mittelständischer Händler',
    'service.finance.example.scenario': 'Ein Händler verarbeitete monatlich über 500 Rechnungen mit 3 Vollzeitmitarbeitern.',
    'service.finance.example.solution': 'Implementierung von OCR-Rechnungsverarbeitung, automatisierten Genehmigungsworkflows und Abstimmung.',
    'service.finance.example.result1': 'Rechnungsverarbeitungszeit um 85% reduziert',
    'service.finance.example.result2': 'Fehlerrate sank von 8% auf 0,5%',
    'service.finance.example.result3': '2 Vollzeitmitarbeiter für strategische Arbeit neu zugewiesen',

    // HR & Recruiting Automation (DE placeholders)
    'service.hr.title': 'HR- & Recruiting-Automatisierung',
    'service.hr.subtitle': 'Talente schneller anziehen mit automatisierten Bewerber-Workflows, Kommunikation und Onboarding.',
    'service.hr.hero': 'HR- & Recruiting-Automatisierung',
    'service.hr.impact': 'Schnelleres Einstellen. Klarere Kommunikation. Besseres Onboarding.',
    'service.hr.description': 'Talente schneller anziehen mit automatisierten Bewerber-Workflows, Kommunikation und Onboarding.',
    'service.hr.what1.title': 'Bewerber-Pipelines',
    'service.hr.what1.desc': 'Kandidaten automatisch von der Bewerbung bis zur Einstellung verfolgen',
    'service.hr.what2.title': 'Automatisierte Kommunikation',
    'service.hr.what2.desc': 'E-Mail-Sequenzen halten Kandidaten in jeder Phase informiert',
    'service.hr.what3.title': 'Intelligente Terminplanung',
    'service.hr.what3.desc': 'Kalenderautomatisierung für Interviews und Assessments',
    'service.hr.what4.title': 'Strukturiertes Onboarding',
    'service.hr.what4.desc': 'Automatisierte Onboarding-Checklisten und Workflows',
    'service.hr.benefit1.title': 'ATS-Workflows',
    'service.hr.benefit1.desc': 'Automatisierte Bewerber-Tracking-System-Workflows',
    'service.hr.benefit2.title': 'Kalender- & E-Mail-Automatisierung',
    'service.hr.benefit2.desc': 'Automatisierte Interview-Planung und Kommunikation',
    'service.hr.benefit3.title': 'Onboarding-Journeys',
    'service.hr.benefit3.desc': 'Strukturierte automatisierte Onboarding-Prozesse',
    'service.hr.process1.title': 'Workflow-Analyse',
    'service.hr.process1.desc': 'Aktuelle HR- und Recruiting-Workflows erfassen',
    'service.hr.process2.title': 'Automatisierungsdesign',
    'service.hr.process2.desc': 'Automatisierte HR-Prozesse gestalten',
    'service.hr.process3.title': 'Systemimplementierung',
    'service.hr.process3.desc': 'HR-Automatisierung erstellen und implementieren',
    'service.hr.process4.title': 'Optimierung & Skalierung',
    'service.hr.process4.desc': 'HR-Automatisierung optimieren und erweitern',
    'service.hr.example.title': 'Schnell wachsendes Startup',
    'service.hr.example.scenario': 'Ein Startup, das 10 Personen pro Monat einstellte, ertrank in manueller Terminplanung und Follow-ups.',
    'service.hr.example.solution': 'Implementierung von ATS-Automatisierung, automatisierter Terminplanung und Onboarding-Workflows.',
    'service.hr.example.result1': 'Time-to-hire von 45 auf 21 Tage reduziert',
    'service.hr.example.result2': 'Kandidaten-Zufriedenheitswert um 35% gestiegen',
    'service.hr.example.result3': 'HR-Team sparte 25 Stunden pro Woche',

    // E-Commerce & Fulfillment Automation (DE placeholders)
    'service.ecommerce.title': 'E-Commerce- & Fulfillment-Automatisierung',
    'service.ecommerce.subtitle': 'Auftragsabläufe, Bestandsabgleich, Logistik und Retouren automatisieren.',
    'service.ecommerce.hero': 'E-Commerce- & Fulfillment-Automatisierung',
    'service.ecommerce.impact': 'End-to-End-Automatisierung für Ihr gesamtes Shop-System.',
    'service.ecommerce.description': 'Auftragsabläufe, Bestandsabgleich, Logistik und Retouren automatisieren.',
    'service.ecommerce.what1.title': 'Bestandsabgleich',
    'service.ecommerce.what1.desc': 'Echtzeit-Bestandssynchronisation über alle Kanäle',
    'service.ecommerce.what2.title': 'Auftragsweiterleitung',
    'service.ecommerce.what2.desc': 'Automatische Auftragsabwicklung und Versand',
    'service.ecommerce.what3.title': 'Retourenmanagement',
    'service.ecommerce.what3.desc': 'Automatisierte Retourenverarbeitung und Rückerstattungen',
    'service.ecommerce.what4.title': 'Produktdaten-Automatisierung',
    'service.ecommerce.what4.desc': 'Automatisiertes Produktfeed-Management',
    'service.ecommerce.benefit1.title': 'Plattform-Integrationen',
    'service.ecommerce.benefit1.desc': 'Shopify-, WooCommerce-, Odoo-Integrationen',
    'service.ecommerce.benefit2.title': 'Lager-Automatisierung',
    'service.ecommerce.benefit2.desc': 'Automatisiertes Lagerverwaltungssystem',
    'service.ecommerce.benefit3.title': 'Retouren-Workflows',
    'service.ecommerce.benefit3.desc': 'Optimierte Retourenverarbeitung',
    'service.ecommerce.process1.title': 'Workflow-Analyse',
    'service.ecommerce.process1.desc': 'E-Commerce- und Fulfillment-Workflows analysieren',
    'service.ecommerce.process2.title': 'Automatisierungsdesign',
    'service.ecommerce.process2.desc': 'Automatisierte E-Commerce-Prozesse gestalten',
    'service.ecommerce.process3.title': 'Systemimplementierung',
    'service.ecommerce.process3.desc': 'E-Commerce-Automatisierung implementieren',
    'service.ecommerce.process4.title': 'Optimierung & Skalierung',
    'service.ecommerce.process4.desc': 'E-Commerce-Automatisierung optimieren und skalieren',
    'service.ecommerce.example.title': 'Multi-Channel-Händler',
    'service.ecommerce.example.scenario': 'Ein Händler, der auf 4 Plattformen verkaufte, synchronisierte den Bestand manuell, was zu Lagerengpässen führte.',
    'service.ecommerce.example.solution': 'Implementierung von Echtzeit-Bestandssynchronisation, automatisierter Auftragsweiterleitung und Retouren-Workflows.',
    'service.ecommerce.example.result1': 'Lagerengpässe von 15% auf 2% reduziert',
    'service.ecommerce.example.result2': 'Auftragsverarbeitungszeit um 70% verkürzt',
    'service.ecommerce.example.result3': 'Kundenzufriedenheit um 42% gestiegen',

    // Business Intelligence (DE placeholders)
    'service.bi.title': 'Business Intelligence & Reporting',
    'service.bi.subtitle': 'Echtzeit-Dashboards, Anomalie-Warnungen und saubere Daten — vollautomatisch.',
    'service.bi.hero': 'Business Intelligence & Reporting',
    'service.bi.impact': 'Wisse genau, was in deinem Unternehmen passiert — in Echtzeit.',
    'service.bi.description': 'Echtzeit-Dashboards, Anomalie-Warnungen und saubere Daten — vollautomatisch.',
    'service.bi.what1.title': 'Live-Dashboards',
    'service.bi.what1.desc': 'Echtzeit-KPI-Tracking und Visualisierung',
    'service.bi.what2.title': 'Saubere Daten-Pipelines',
    'service.bi.what2.desc': 'Automatisierte Datenerfassung und -bereinigung',
    'service.bi.what3.title': 'Anomalie-Warnungen',
    'service.bi.what3.desc': 'KI-gestützte Warnungen bei ungewöhnlichen Mustern',
    'service.bi.what4.title': 'Automatisierte Berichte',
    'service.bi.what4.desc': 'Geplante Berichte werden automatisch zugestellt',
    'service.bi.benefit1.title': 'KPI-Dashboards',
    'service.bi.benefit1.desc': 'Angepasste Echtzeit-Dashboards',
    'service.bi.benefit2.title': 'Multi-Source-Sync',
    'service.bi.benefit2.desc': 'Datenaggregation aus mehreren Systemen',
    'service.bi.benefit3.title': 'KI-Anomalieerkennung',
    'service.bi.benefit3.desc': 'Automatische Erkennung ungewöhnlicher Muster',
    'service.bi.process1.title': 'Workflow-Analyse',
    'service.bi.process1.desc': 'Datenquellen und Berichtsanforderungen identifizieren',
    'service.bi.process2.title': 'Automatisierungsdesign',
    'service.bi.process2.desc': 'Automatisierte BI- und Reporting-Workflows gestalten',
    'service.bi.process3.title': 'Systemimplementierung',
    'service.bi.process3.desc': 'Dashboards und Daten-Pipelines erstellen',
    'service.bi.process4.title': 'Optimierung & Skalierung',
    'service.bi.process4.desc': 'BI-Automatisierung optimieren und erweitern',
    'service.bi.example.title': 'SaaS-Unternehmen',
    'service.bi.example.scenario': 'Ein SaaS-Unternehmen hatte Daten über 8 Tools verteilt, mit 2 Tagen pro Woche für manuelle Berichte.',
    'service.bi.example.solution': 'Erstellung eines zentralisierten BI-Dashboards mit Echtzeit-Datenintegration und automatisierten Warnungen.',
    'service.bi.example.result1': 'Berichtszeit von 2 Tagen auf 10 Minuten reduziert',
    'service.bi.example.result2': 'Abwanderungsrate um 35% durch Frühintervention gesunken',
    'service.bi.example.result3': 'Datengetriebene Entscheidungen um 400% gestiegen',

    // Workflow & Internal Automation (DE placeholders)
    'service.workflows.title': 'Workflow- & interne Automatisierung',
    'service.workflows.subtitle': 'Verbinde deine Tools und eliminiere manuelle Aufgaben in deinem gesamten Unternehmen.',
    'service.workflows.hero': 'Workflow- & interne Automatisierung',
    'service.workflows.impact': 'Jedes Team arbeitet schneller, wenn die Software zusammenarbeitet.',
    'service.workflows.description': 'Verbinde deine Tools und eliminiere manuelle Aufgaben in deinem gesamten Unternehmen.',
    'service.workflows.what1.title': 'Aufgaben, die sich selbst zuweisen',
    'service.workflows.what1.desc': 'Automatisierte Aufgabenerstellung und -zuweisung',
    'service.workflows.what2.title': 'Tools, die sich automatisch synchronisieren',
    'service.workflows.what2.desc': 'Nahtlose Integration zwischen all deinen Tools',
    'service.workflows.what3.title': 'Interne Workflows, die fließen',
    'service.workflows.what3.desc': 'Genehmigungsprozesse und Übergaben automatisiert',
    'service.workflows.what4.title': 'Bessere Zusammenarbeit',
    'service.workflows.what4.desc': 'Teams bleiben automatisch synchron',
    'service.workflows.benefit1.title': 'Tool-Integrationen',
    'service.workflows.benefit1.desc': 'Verbinde alle deine Geschäftstools',
    'service.workflows.benefit2.title': 'Aufgabenautomatisierung',
    'service.workflows.benefit2.desc': 'Automatisierte Aufgabenerstellung und -verwaltung',
    'service.workflows.benefit3.title': 'Mehrstufige Workflows',
    'service.workflows.benefit3.desc': 'Komplexe mehrstufige automatisierte Prozesse',
    'service.workflows.process1.title': 'Workflow-Analyse',
    'service.workflows.process1.desc': 'Interne Workflows und Tool-Landschaft erfassen',
    'service.workflows.process2.title': 'Automatisierungsdesign',
    'service.workflows.process2.desc': 'Automatisierte interne Workflows gestalten',
    'service.workflows.process3.title': 'Systemimplementierung',
    'service.workflows.process3.desc': 'Workflow-Automatisierung erstellen und integrieren',
    'service.workflows.process4.title': 'Optimierung & Skalierung',
    'service.workflows.process4.desc': 'Workflows kontinuierlich optimieren',
    'service.workflows.example.title': 'Beratungsunternehmen',
    'service.workflows.example.scenario': 'Ein Beratungsunternehmen verlor täglich 3 Stunden pro Mitarbeiter durch ineffiziente Genehmigungsprozesse.',
    'service.workflows.example.solution': 'Aufbau eines digitalen Workflow-Hubs mit automatisierten Genehmigungen und Echtzeit-Status-Tracking.',
    'service.workflows.example.result1': 'Genehmigungszeiten von 5 Tagen auf 4 Stunden reduziert',
    'service.workflows.example.result2': 'Mitarbeiterzufriedenheit um 40% gestiegen',
    'service.workflows.example.result3': 'Produktivität um 25% verbessert',

    // Process Page (DE placeholders)
    'process.hero.title': 'Unser bewährter Prozess für deinen',
    'process.hero.highlight': 'Automatisierungserfolg',
    'process.hero.subtitle': 'Von der Erstanalyse bis zur Implementierung - so transformieren wir systematisch deine Geschäftsprozesse in effiziente, automatisierte Workflows.',
    'process.hero.timeline': '4-8 Wochen typische Dauer',
    'process.hero.teamSize': 'Dediziertes Expertenteam',
    'process.step1.title': 'Analyse & Strategie',
    'process.step1.subtitle': 'Wir erfassen deine Workflows, Tools und Engpässe, um die Automatisierungsmöglichkeiten mit höchster Wirkung zu identifizieren.',
    'process.step1.detailedDescription': 'Wir erfassen deine Workflows, Tools und Engpässe, um die Automatisierungsmöglichkeiten mit höchster Wirkung zu identifizieren.',
    'process.step1.duration': '1-2 Wochen',
    'process.step1.deliverable1': 'Prozessübersicht mit Systemlandschaft',
    'process.step1.deliverable2': 'Automatisierungs-Impact-Assessment',
    'process.step1.deliverable3': 'Priorisierte Opportunity-Roadmap',
    'process.step2.title': 'Lösungsdesign',
    'process.step2.subtitle': 'Wir entwerfen klare Automatisierungspläne, die auf dein Unternehmen und deine Systeme zugeschnitten sind.',
    'process.step2.detailedDescription': 'Wir entwerfen klare Automatisierungspläne, die auf dein Unternehmen und deine Systeme zugeschnitten sind.',
    'process.step2.duration': '1-2 Wochen',
    'process.step2.deliverable1': 'Technische Architektur-Blueprint',
    'process.step2.deliverable2': 'Systemintegrationsplan',
    'process.step2.deliverable3': 'Benutzeroberflächen-Mockups',
    'process.step3.title': 'Implementierung',
    'process.step3.subtitle': 'Wir bauen, verbinden und testen deine automatisierten Workflows — schnell und zuverlässig.',
    'process.step3.detailedDescription': 'Wir bauen, verbinden und testen deine automatisierten Workflows — schnell und zuverlässig.',
    'process.step3.duration': '2-4 Wochen',
    'process.step3.deliverable1': 'Voll funktionsfähiges Automatisierungssystem',
    'process.step3.deliverable2': 'Umfassendes Team-Training',
    'process.step3.deliverable3': 'Dokumentation und Benutzerhandbücher',
    'process.step4.title': 'Optimierung & Support',
    'process.step4.subtitle': 'Wir verfeinern und erweitern deine Automatisierung, während dein Team wächst.',
    'process.step4.detailedDescription': 'Wir verfeinern und erweitern deine Automatisierung, während dein Team wächst.',
    'process.step4.duration': 'Fortlaufend',
    'process.step4.deliverable1': 'Performance-Monitoring-Dashboard',
    'process.step4.deliverable2': 'Regelmäßige Optimierungsberichte',
    'process.step4.deliverable3': '24/7 technischer Support',
    'process.deliverables.title': 'Schlüsselergebnisse',
    'process.benefits.title': 'Warum unser Prozess funktioniert',
    'process.benefits.subtitle': 'Bewährte Methodik, die Ergebnisse für Unternehmen wie deines liefert',
    'process.benefit1.title': 'Minimale Unterbrechung',
    'process.benefit1.description': 'Unser schrittweiser Ansatz stellt sicher, dass dein Geschäftsbetrieb während der Implementierung reibungslos weiterläuft',
    'process.benefit2.title': 'Messbare Ergebnisse',
    'process.benefit2.description': 'Klare KPIs und regelmäßige Berichte halten dich über die Auswirkungen der Automatisierung auf dein Geschäft informiert',
    'process.benefit3.title': 'Zukunftssicher',
    'process.benefit3.description': 'Skalierbare Lösungen, die mit deinem Unternehmen wachsen und sich an sich ändernde Anforderungen anpassen',
    'process.cta.title': 'Bereit, dein Unternehmen zu transformieren?',
    'process.cta.description': 'Lass uns besprechen, wie unser bewährter Prozess deine Abläufe optimieren und deine Produktivität steigern kann.',
    'process.cta.button': 'Projekt starten',
    'process.cta.joinTeam.button': 'Team beitreten',
    'process.cta.joinTeam.emailPrompt': 'Bitte gib deine E-Mail-Adresse ein, um die Team-Einladung zu erhalten:',
    'process.cta.joinTeam.success': 'Einladung gesendet!',
    'process.cta.joinTeam.checkEmail': 'Bitte überprüfe deine E-Mails für den Matrix-Einladungslink.',
    'process.cta.joinTeam.error': 'Fehler',
    'process.cta.joinTeam.invalidEmail': 'Bitte gib eine gültige E-Mail-Adresse ein.',
    'process.cta.joinTeam.tryAgain': 'Einladung konnte nicht gesendet werden. Bitte versuche es erneut.',
    'process.cta.joinTeam.sending': 'Wird gesendet...',

    // Automation Benefits (DE placeholders)
    'benefits.title': 'Intelligentere Systeme.',
    'benefits.title.highlight': 'Bessere Arbeitstage.',
    'benefits.subtitle': 'Entdecke, wie Automatisierung deine Geschäftsabläufe transformiert und nachhaltiges Wachstum vorantreibt',
    'benefits.time.title': 'Automatisierte Workflows',
    'benefits.time.description': 'Setze wertvolle Stunden frei, indem du dich wiederholende Aufgaben automatisierst und deinem Team ermöglichst, sich auf strategische Initiativen zu konzentrieren',
    'benefits.efficiency.title': 'Klare Team-Kommunikation',
    'benefits.efficiency.description': 'Optimieren Sie Workflows und eliminieren Sie Engpässe, um die Gesamtproduktivität in allen Abteilungen zu steigern',
    'benefits.accuracy.title': 'Reduzierter manueller Aufwand',
    'benefits.accuracy.description': 'Reduzieren Sie menschliche Fehler und gewährleisten Sie konsistente Qualität mit automatisierten Prozessen und Validierung',
    'benefits.speed.title': 'Schnellere Ausführung',
    'benefits.speed.description': 'Beschleunigen Sie Geschäftsprozesse und liefern Sie Ergebnisse schneller mit automatisierten Workflows',
    'benefits.security.title': 'Weniger Fehler',
    'benefits.security.description': 'Implementieren Sie standardisierte Sicherheitsprotokolle und reduzieren Sie Schwachstellen durch automatisierte Compliance',
    'benefits.satisfaction.title': 'Echtzeit-Einblicke',
    'benefits.satisfaction.description': 'Verbessern Sie die Mitarbeitermoral, indem Sie mühsame Aufgaben eliminieren und sinnvolle Arbeit ermöglichen',
    'benefits.insights.title': 'Erhöhte Produktivität',
    'benefits.insights.description': 'Gewinnen Sie Echtzeit-Transparenz und umsetzbare Erkenntnisse durch automatisiertes Reporting und Analytics',
    'benefits.innovation.title': 'Skalierbare Operationen',
    'benefits.innovation.description': 'Schaffen Sie Kapazitäten für Innovation und Wachstum durch Automatisierung routinemäßiger Operationen',
    'benefits.quality.title': 'Vorhersehbarere Ergebnisse',
    'benefits.quality.description': 'Liefern Sie jedes Mal zuverlässige Ergebnisse mit standardisierten automatisierten Prozessen',

    // Pricing
    'pricing.title': 'Transparente',
    'pricing.title.highlight': 'Preisgestaltung',
    'pricing.subtitle': 'Wählen Sie die Anzahl der zu automatisierenden Tools – je mehr, desto günstiger',
    'pricing.button': 'Projekt anfragen',
    'pricing.tool.title': 'Wir automatisieren Ihre Plattformen und Systeme',
    'pricing.tool.description': 'Professionelle Prozessautomatisierung für Ihr Unternehmen',
    'pricing.tool.selectLabel': 'Anzahl der zu automatisierenden Systeme',
    'pricing.tool.tools': 'Systeme',
    'pricing.tool.discount': 'Rabatt',
    'pricing.tool.perTool': 'pro System',
    'pricing.tool.included': 'Im Preis enthalten',
    'pricing.tool.note': 'Preise verstehen sich zzgl. MwSt.',
    'pricing.tool.feature1': 'Umfassende Prozessanalyse und Bedarfsermittlung',
    'pricing.tool.feature2': 'Maßgeschneiderte Automatisierungslösungen für Ihre Tools',
    'pricing.tool.feature3': 'Professionelle Integration in bestehende Systeme',
    'pricing.tool.feature4': 'Komplette Übergabe der entwickelten Infrastruktur',
    'pricing.tool.feature5': 'KI-gestützte Workflows und intelligente Optimierung',
    'pricing.tool.feature6': '12 Wochen Premium Support und Wartung',
    'pricing.tool.feature7': 'Schulung Ihres Teams und vollständige Dokumentation',

    // Blog (DE placeholders)
    'blog.title': 'Blog',
    'blog.subtitle': 'Einblicke und Expertise zur Automatisierung für kleine und mittelständische Unternehmen',
    'blog.back': 'Zurück zum Blog',
    'blog.read.more': 'Weiterlesen',
    'blog.article.back': 'Zurück zum Blog',
    'blog.article.published': 'Veröffentlicht',
    'blog.article.reading.time': 'Lesezeit',
    'blog.article.min.read': 'Min. Lesezeit',

    // Blog Artikel
    'blog.article1.title': 'Der ROI der Automatisierung: Echte Zahlen für kleine Unternehmen',
    'blog.article1.excerpt': 'Entdecken Sie, wie kleine Unternehmen messbare Renditen durch strategische Automatisierungsinvestitionen erzielen, mit echten Fallstudien und Finanzprognosen.',
    'blog.article1.content': 'Automatisierung ist nicht nur für Großunternehmen mit unbegrenzten Budgets. Kleine Unternehmen erzielen bemerkenswerte Renditen bei Automatisierungsinvestitionen – oft innerhalb der ersten Monate. Erfahren Sie mehr über echte Fallstudien mit 300-800% jährlichem ROI.',

    'blog.article2.title': 'Fünf Prozesse, die jedes kleine Unternehmen zuerst automatisieren sollte',
    'blog.article2.excerpt': 'Starten Sie Ihre Automatisierungsreise richtig. Erfahren Sie, welche fünf Prozesse die schnellsten Erfolge und größte Wirkung liefern.',
    'blog.article2.content': 'Nicht alle Automatisierungsprojekte sind gleich. Dieser Leitfaden zeigt die fünf kritischen Prozesse: Lead-Management, Rechnungsverarbeitung, Kunden-Onboarding, Dateneingabe und Reporting.',

    'blog.article3.title': 'Den "Zu klein für Automatisierung" Mythos brechen',
    'blog.article3.excerpt': 'Denken Sie, Ihr Unternehmen ist zu klein für Automatisierung? Denken Sie noch einmal nach. Kleine Unternehmen profitieren sogar mehr.',
    'blog.article3.content': 'Der Glaube "wir sind zu klein für Automatisierung" ist einer der schädlichsten Irrtümer. Die Realität? Kleine Unternehmen profitieren MEHR von Automatisierung als Großunternehmen.',

    'blog.article4.title': 'Die versteckten Kosten manueller Prozesse in kleinen Unternehmen',
    'blog.article4.excerpt': 'Manuelle Prozesse kosten mehr als nur Zeit. Entdecken Sie die versteckten finanziellen Auswirkungen.',
    'blog.article4.content': 'Manuelle Prozesse kosten weit mehr als Sie denken. Neben direkten Arbeitskosten gibt es versteckte Ausgaben: Fehlerkorrektur, Opportunitätskosten, Mitarbeiterfluktuation. Für ein typisches 10-Personen-Unternehmen kosten manuelle Prozesse über 215.000€ jährlich.',

    'blog.article5.title': 'Wie man mit Automatisierung beginnt, ohne das Team zu überfordern',
    'blog.article5.excerpt': 'Automatisierung muss nicht störend sein. Lernen Sie unseren bewährten schrittweisen Ansatz kennen.',
    'blog.article5.content': 'Erfolgreiche Automatisierung dreht sich nicht um Technologie – sondern um Menschen. Lernen Sie unseren bewährten 5-Phasen-Ansatz: Erst zuhören, schnelle Erfolge, Team einbeziehen, gründlich schulen und kontinuierlich verbessern.',

    'blog.article6.title': 'Zukunftssicherheit deines Unternehmens: Automatisierungstrends 2025',
    'blog.article6.excerpt': 'Bleibe voraus. Erkunde neue Automatisierungstechnologien und Strategien für 2025.',
    'blog.article6.content': 'Die Automatisierungslandschaft entwickelt sich rasant. Sechs Schlüsseltrends definieren 2025: KI-erweiterte Automatisierung, Hyper-Integration, No-Code als Standard, autonome Agenten, branchenspezifische Pakete und proaktive Automatisierung.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored === 'de' || stored === 'en') ? stored : 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as TranslationKey] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
