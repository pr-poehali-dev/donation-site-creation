import { Progress } from "@/components/ui/progress";

const DonationProgress = () => {
  const targetAmount = 50000;
  const currentAmount = 12750;
  const progress = (currentAmount / targetAmount) * 100;
  const daysLeft = 30;
  const backers = 89;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-gray-600">собрано</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {daysLeft}
              </div>
              <div className="text-gray-600">дней осталось</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {backers}
              </div>
              <div className="text-gray-600">поддержали</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Прогресс сбора</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3 bg-gray-200" />
            <div className="text-center text-gray-600">
              Цель: {targetAmount.toLocaleString("ru-RU")} ₽
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProgress;
