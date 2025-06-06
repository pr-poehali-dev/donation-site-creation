import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
          Поддержите игрока egor202411
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Помогите развить мой Minecraft аккаунт! Ваши донаты пойдут на покупку
          скинов, рангов, привилегий и другого игрового контента. Каждый рубль
          поможет улучшить игровой опыт!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg"
          >
            Поддержать проект
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
