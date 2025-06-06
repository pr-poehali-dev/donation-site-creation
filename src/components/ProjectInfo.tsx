import { Card, CardContent } from "@/components/ui/card";

const ProjectInfo = () => {
  const features = [
    {
      icon: "🎯",
      title: "Наша миссия",
      description:
        "Создание инновационного продукта, который поможет решить важную социальную проблему",
    },
    {
      icon: "👥",
      title: "Команда",
      description:
        "Опытные специалисты с многолетним стажем в области разработки и социальных проектов",
    },
    {
      icon: "📈",
      title: "Прогресс",
      description:
        "Уже достигнуты важные промежуточные цели, проект находится в активной фазе развития",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            О проекте
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы создаём что-то действительно важное и значимое. Ваша поддержка
            поможет нам довести проект до конца и принести пользу многим людям.
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
            Зачем нам нужна поддержка?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Собранные средства пойдут на разработку, тестирование и запуск
            продукта. Мы обещаем полную прозрачность использования средств и
            регулярные отчёты о прогрессе. Каждый донат приближает нас к цели и
            помогает сделать мир немного лучше.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
