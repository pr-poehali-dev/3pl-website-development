import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const services = [
    {
      icon: "Warehouse",
      title: "3PL Логистика",
      description: "Комплексные логистические решения с региональными складами по всей России"
    },
    {
      icon: "Package",
      title: "Ответственное хранение",
      description: "Профессиональное складское хранение с полным контролем качества"
    },
    {
      icon: "Truck",
      title: "Доставка день-в-день",
      description: "Оперативная доставка в день заказа по всем регионам присутствия"
    },
    {
      icon: "ShoppingCart",
      title: "B2B Продажи",
      description: "Прямые поставки запчастей для корпоративных клиентов"
    },
    {
      icon: "Store",
      title: "Розничная сеть",
      description: "Развиваем сеть розничных точек продаж по всей стране"
    },
    {
      icon: "ShoppingBag",
      title: "Маркетплейсы",
      description: "Продаём запчасти на всех крупнейших торговых площадках"
    }
  ];

  const advantages = [
    { number: "5000+", label: "Наименований в наличии" },
    { number: "15", label: "Региональных складов" },
    { number: "24/7", label: "Круглосуточная поддержка" },
    { number: "99%", label: "Точность комплектации" }
  ];

  const warehouses = [
    { city: "Москва", area: "12 000 м²", status: "Центральный" },
    { city: "Санкт-Петербург", area: "8 500 м²", status: "Региональный" },
    { city: "Екатеринбург", area: "6 000 м²", status: "Региональный" },
    { city: "Новосибирск", area: "5 500 м²", status: "Региональный" },
    { city: "Краснодар", area: "4 800 м²", status: "Региональный" },
    { city: "Казань", area: "4 200 м²", status: "Региональный" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-tech-blue to-tech-orange rounded-lg flex items-center justify-center">
              <Icon name="Boxes" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-tech-dark">AutoLog3PL</span>
          </div>
          <nav className="hidden md:flex gap-8">
            {["Услуги", "Логистика", "Запчасти", "Склады", "О компании", "Партнёрам", "Контакты"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-700 hover:text-tech-blue transition-colors font-medium">
                {item}
              </a>
            ))}
          </nav>
          <Button className="bg-tech-orange hover:bg-tech-orange/90 text-white">
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-tech-blue/10 text-tech-blue border-tech-blue/20 px-4 py-1">
                Лидер 3PL-решений в России
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-tech-dark leading-tight">
                Логистика нового поколения
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Комплексные решения для хранения и доставки запчастей. 
                Региональные склады, B2B/B2C продажи, доставка день-в-день.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Начать работу
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 to-tech-orange/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-tech-dark to-slate-800 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {advantages.map((adv, i) => (
                    <div key={i} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur">
                      <div className="text-4xl font-bold text-white mb-2">{adv.number}</div>
                      <div className="text-slate-300 text-sm">{adv.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-tech-orange/10 text-tech-orange border-tech-orange/20 mb-4">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-4">
              Полный спектр 3PL-решений
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              От складского хранения до доставки конечному потребителю
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-2 hover:border-tech-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-tech-blue to-tech-orange rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-tech-dark mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="склады" className="py-20 px-4 bg-gradient-to-br from-tech-dark to-slate-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">
              Наша география
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Региональные склады
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Развитая складская сеть обеспечивает быструю доставку в любую точку страны
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouses.map((warehouse, i) => (
              <Card key={i} className="bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{warehouse.city}</h3>
                      <p className="text-slate-400">{warehouse.area}</p>
                    </div>
                    <Badge className="bg-tech-orange text-white border-0">
                      {warehouse.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Доставка день-в-день</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="запчасти" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-tech-blue/10 text-tech-blue border-tech-blue/20">
                Запасные части
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-tech-dark">
                5000+ наименований всегда в наличии
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Запчасти для российских и иностранных автомобилей. 
                Работаем с B2B-сегментом, развиваем розничную сеть, 
                продаём на всех крупных маркетплейсах.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { icon: "CheckCircle2", text: "Оригинальные запчасти" },
                  { icon: "CheckCircle2", text: "Гарантия качества" },
                  { icon: "CheckCircle2", text: "Конкурентные цены" },
                  { icon: "CheckCircle2", text: "Техническая поддержка" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name={item.icon as any} className="text-tech-orange" size={24} />
                    <span className="text-lg text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-tech-orange hover:bg-tech-orange/90 text-white mt-6">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Двигатель", "Подвеска", "Тормоза", "Электрика"].map((category, i) => (
                <Card key={i} className="border-2 hover:border-tech-blue transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="Wrench" className="text-tech-blue" size={24} />
                    </div>
                    <h4 className="font-bold text-tech-dark">{category}</h4>
                    <p className="text-sm text-slate-600 mt-1">500+ позиций</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="партнёрам" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-tech-orange/10 text-tech-orange border-tech-orange/20">
              Партнёрам
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-tech-dark">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Мы открыты для партнёрства с автосервисами, дилерскими центрами 
              и розничными магазинами. Выгодные условия для оптовых клиентов.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                { icon: "Users", title: "Индивидуальный подход", desc: "Персональный менеджер" },
                { icon: "TrendingDown", title: "Оптовые цены", desc: "Скидки до 40%" },
                { icon: "Clock", title: "Быстрая доставка", desc: "День-в-день" }
              ].map((item, i) => (
                <Card key={i} className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-tech-blue to-tech-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} className="text-white" size={28} />
                    </div>
                    <h4 className="font-bold text-tech-dark mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white text-lg px-10 mt-8">
              <Icon name="Handshake" size={20} className="mr-2" />
              Стать партнёром
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-tech-dark text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-tech-orange rounded-lg flex items-center justify-center">
                  <Icon name="Boxes" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">AutoLog3PL</span>
              </div>
              <p className="text-slate-400 text-sm">
                Современные 3PL-решения для автомобильного бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">3PL Логистика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Складское хранение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Склады</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёрам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@autolog3pl.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Складская, 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 AutoLog3PL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
