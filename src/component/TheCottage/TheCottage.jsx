import PropertySpecs from "../Home/PropertySpecs";
import AdditionalPricing from "./AdditionalPricing";
import AmenitiesIcons from "./amenitiesIcons";
import AmenitiesSection from "./AmenitiesSection";
import AvailabilityCalendar from "./AvailabilityCalendar";
import PropertySpaces from "./PropertySpaces";
import RatesSection from "./RatesSection";
import TheCottageHero from "./TheCottageHero";

function TheCottage() {
    return (
        <div className="the-cottage ">
            <TheCottageHero />
       
          <AmenitiesIcons />
            <AmenitiesSection />
            <RatesSection />
            <AdditionalPricing />
            <AvailabilityCalendar />

        </div>
    );
}
export default TheCottage;