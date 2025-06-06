import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки формы
    console.log("Donation submitted:", { amount, email, name });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900 font-montserrat">
              Произвольная сумма
            </CardTitle>
            <p className="text-gray-600">
              Введите любую сумму, которую готовы пожертвовать
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сумма (₽)
                </label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Введите сумму"
                  className="text-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-12"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg font-medium"
              >
                Пожертвовать {amount && `${amount} ₽`}
              </Button>
            </form>

            <div className="text-center text-sm text-gray-500">
              🔒 Безопасная оплата через защищённое соединение
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DonationForm;
