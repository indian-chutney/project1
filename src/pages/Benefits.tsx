import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Profit from "./../assets/profit.svg";
import SuperFast from "./../assets/rocket.svg";
import SimpleUI from "./../assets/ui.svg";
import Trusted from "./../assets/secure.svg";

const Benefits = () => {
  const cards = [
    {
      logo: <img src={Profit} alt="High Profit Logo" className="h-10" />,
      text: "High Profit",
      description:
        "BharatPaye gives Opportunity to Earn Highest Profit in Industry.",
    },
    {
      logo: <img src={SuperFast} alt="Super Fast Logo" className="h-10" />,
      text: "Super Fast",
      description:
        "BharatPaye provides Super Fast Service with Highest Success Ratio.",
    },
    {
      logo: <img src={SimpleUI} alt="Simple UI Logo" className="h-10" />,
      text: "Simple UI",
      description:
        "BharatPaye is Very Easy and Simple to Use with Smooth Interface.",
    },
    {
      logo: <img src={Trusted} alt="Trusted Logo" className="h-10" />,
      text: "Trusted",
      description:
        "BharatPaye is 100% Trustable with Mutual Cooperation & Transparency.",
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
