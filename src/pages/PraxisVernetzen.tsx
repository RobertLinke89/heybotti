import { memo } from "react";
import Header from "@/components/Header";
import HealthcareHero from "@/components/HealthcareHero";
import HealthcareSections from "@/components/HealthcareSections";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const MemoizedHeader = memo(Header);
const MemoizedHealthcareHero = memo(HealthcareHero);
const MemoizedHealthcareSections = memo(HealthcareSections);
const MemoizedProjectForm = memo(ProjectForm);
const MemoizedFooter = memo(Footer);
const MemoizedCookieBanner = memo(CookieBanner);

const PraxisVernetzen = () => {
  return (
    <div className="min-h-screen font-raleway bg-background">
      <MemoizedHeader />
      <MemoizedHealthcareHero />
      <MemoizedHealthcareSections />
      <div id="contact-form">
        <MemoizedProjectForm />
      </div>
      <MemoizedFooter />
      <MemoizedCookieBanner />
    </div>
  );
};

export default PraxisVernetzen;
