import serviceImage1 from "../assets/Images/service1.jpg";
import serviceImage2 from "../assets/Images/service2.jpg";
import serviceImage3 from "../assets/Images/service3.jpg";

import { TabProps } from "../components/Services/components/ServicesTab";

export const servicesData: ServiceDataProps = {
  recording: {
    title: "Recording",
    p: "We provide best quality recordings with professional attitude ant insights. Our gear is unmatched, we have legendary SM58 and Beta58 microphones.",
    src: serviceImage1,
    reversed: false,
    padding: "none",
  },
  mixing: {
    title: "Mixing",
    p: "Our mixes are on fire! Like literally there was one time, mix was so good, that laptop started burning",
    src: serviceImage2,
    reversed: true,
    padding: "small",
  },
  mastering: {
    title: "Mastering",
    p: "We are the masters of mastering, our main public array system is so terrible. If your song sounds good on our system, it will sound good anywhere else",
    src: serviceImage3,
    reversed: false,
    padding: "big",
  },
};

interface ServiceDataProps {
  recording: TabProps;
  mixing: TabProps;
  mastering: TabProps;
}
