import BudgetBreakdown from "../../Elements/HomeEl/BudgetBreakdown";
import VisionStatement from "../../Elements/HomeEl/VisionStatement";
import OurTeam from "../../Elements/HomeEl/OurTeam";
import OurServices from "../../Elements/HomeEl/OurServices";
import AboutUsSection from "../../Elements/HomeEl/AboutUsSection";
import BudgetSection from "../../Elements/HomeEl/BudgetSection";
import LayoutEl from "../../Shared/LayoutEl";
const Homepage = () => {
  return (
    <LayoutEl>
      <div id="hero">
        <AboutUsSection />
      </div>
      <div id="vision-statement">
        <VisionStatement />
      </div>
      <div id="our-team">
        <OurTeam/>
      </div>
      <div id="our-services">
        <OurServices />
      </div>
      <div id="budget-section">
        <BudgetSection />
      </div>
      <div id="budget-breakdown">
        <BudgetBreakdown />
      </div>
    </LayoutEl>
  );
};

export default Homepage;
