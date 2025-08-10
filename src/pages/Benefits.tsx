import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lock, CreditCardSolid, DashboardSpeed } from "iconoir-react";

const Benefits = () => {
  const cards = [
    {
      logo: <Lock strokeWidth={1.7} className="w-8 h-8 text-blue-900" />,
      text: "Secure Transactions",
      description:
        "Our robust systems and stringent security ensure your sensitive information is protected.",
    },
    {
      logo: (
        <CreditCardSolid strokeWidth={1.7} className="w-8 h-8 text-blue-900" />
      ),
      text: "Continuous Innovation",
      description:
        "We strive to stay ahead of industry trends and technologies.",
    },
    {
      logo: (
        <DashboardSpeed strokeWidth={1.7} className="w-8 h-8 text-blue-900" />
      ),
      text: "Maximum Performance",
      description:
        "Experience unmatched speed and reliability with our services.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-12 px-4 gap-[25px] mb-[60px]">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
        Benefits of choosing BHARAT PAYE Services
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="pt-0 flex flex-col w-full md:w-1/3 shadow-md hover:shadow-lg hover:scale-[1.05] transition rounded-xl border border-gray-200"
          >
            <CardHeader className="flex flex-col items-center justify-center bg-gray-100 rounded-t-xl py-10 space-y-3">
              {card.logo}
              <h3 className="text-lg font-semibold text-blue-900">
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
      </div>
    </div>
  );
};

export default Benefits;
