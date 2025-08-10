import BBPS from "@/assets/BBPS";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import InfiniteScroll from "@/components/ui/InfiniteCard";
import {
  Bbq,
  DropletSolid,
  EvPlugCharging,
  MobileVoice,
  Tram,
} from "iconoir-react";

const Services = () => {
  const cards = [
    {
      logo: (
        <EvPlugCharging strokeWidth={1.7} className="w-8 h-8 text-blue-900" />
      ),
      text: "Electricity",
      description:
        "No more standing in long queues to pay your electricity bills. Our platform allows you to pay your electricity bills online, anytime, anywhere.",
    },
    {
      logo: (
        <DropletSolid strokeWidth={1.7} className="w-8 h-8 text-blue-900" />
      ),
      text: "Water Bill Payment",
      description:
        "Never miss a water bill payment again. Our online water bill payment service is designed to help you manage your water bills with ease.",
    },
    {
      logo: <MobileVoice strokeWidth={1.7} className="w-8 h-8 text-blue-900" />,
      text: "Mobile Recharge",
      description:
        "Stay connected with seamless mobile recharge services. Whether it's prepaid or postpaid, we provide instant recharge options for all major telecom operators.",
    },
    {
      logo: <Tram strokeWidth={1.7} className="w-8 h-8 text-blue-900" />,
      text: "Ticket Booking (Bus, Train, Flight)",
      description:
        "Planning a trip? Book your bus, train, or flight tickets with us. Our platform offers a seamless booking experience with real-time availability and the best prices.",
    },
    {
      logo: <Bbq strokeWidth={1.7} className="w-8 h-8 text-blue-900" />,
      text: "Gas Bill Payment & Booking",
      description:
        "Booking gas cylinder and paying gas bill is now just a few clicks away. We offer an efficient and user-friendly platform for all your gas bookings and payments.",
    },
    {
      logo: <BBPS className="h-10" />,
      text: "Bharat Bill Payment System (BBPS)",
      description:
        "Paying your bills has never been easier. With our integrated BBPS service, you can quickly and securely pay all your utility bills. Enjoy the convenience of managing all your payments in one place.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-2">
        Our Services
      </h2>
      <p className="text-gray-600 mb-15 text-center max-w-2xl">
        At BHARAT PAYE we provide the best services to our customers
      </p>
      <InfiniteScroll
        speed={30}
        items={cards.map((card, index) => (
          <Card
            key={index}
            className="pt-0 flex flex-col min-w-[300px] max-w-[350px] shadow-md hover:shadow-lg transition rounded-xl border border-gray-200"
          >
            <CardHeader className="flex flex-col items-center justify-center bg-gray-100 rounded-t-xl py-10 space-y-3">
              {card.logo}
              <h3 className="text-blue-900 font-semibold text-center">
                {card.text}
              </h3>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-center text-center p-6">
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      ></InfiniteScroll>
    </div>
  );
};

export default Services;
