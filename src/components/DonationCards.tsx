import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DonationCards = () => {
  const donationTiers = [
    {
      amount: 500,
      title: "Спасибо",
      description: "Благодарность в соцсетях",
      popular: false,
    },
    {
      amount: 2000,
      title: "Поддержка",
      description: "Именная благодарность + стикерпак",
      popular: true,
    },
    {
      amount: 5000,
      title: "Помощь",
      description: "Всё выше + эксклюзивные материалы",
      popular: false,
    },
    {
      amount: 10000,
      title: "Вклад",
      description: "Всё выше + персональная встреча",
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Выберите сумму поддержки
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative transition-all hover:scale-105 hover:shadow-xl ${
                tier.popular
                  ? "ring-2 ring-purple-500 bg-purple-50"
                  : "bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярно
                  </span>
                </div>
              )}

              <CardContent className="p-6 text-center space-y-4">
                <div className="text-2xl font-bold text-purple-600">
                  {tier.amount.toLocaleString("ru-RU")} ₽
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {tier.title}
                </h3>
                <p className="text-gray-600 text-sm">{tier.description}</p>
                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  Поддержать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCards;
