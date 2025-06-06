import { Card, CardContent } from "@/components/ui/card";

const ProjectInfo = () => {
  const features = [
    {
      icon: "🎮",
      title: "Геймплей",
      description:
        "Улучшение игрового опыта через покупку скинов, рангов и особых привилегий в Minecraft",
    },
    {
      icon: "🏆",
      title: "Достижения",
      description:
        "Активный игрок с опытом, стремящийся к новым высотам в мире Minecraft",
    },
    {
      icon: "🎯",
      title: "Цели",
      description:
        "Создание уникального игрового контента и развитие аккаунта egor202411 до премиум уровня",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Об игроке egor202411
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Привет! Я активный игрок в Minecraft, который любит строить,
            исследовать и создавать что-то новое. Ваша поддержка поможет мне
            получить крутые скины и ранги!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            На что пойдут донаты?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Все собранные средства пойдут на улучшение игрового аккаунта:
            покупку премиум скинов, VIP рангов на серверах, игровой валюты и
            эксклюзивного контента. Каждый донат делает игру интереснее и
            помогает развивать аккаунт egor202411!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
