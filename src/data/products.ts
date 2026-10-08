// Файл с данными о мебели
// Многомерная структура: массив объектов товаров

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;      // категория: диван, стол, шкаф и т.д.
  material: string;      // материал
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Диван «Комфорт»",
    price: 45900,
    category: "Диваны",
    material: "Ткань, дерево",
    image: "https://picsum.photos/id/101/400/300",
    description: "Удобный трёхместный диван с мягкими подушками. Каркас из натурального дерева, обивка — износостойкая ткань. Подходит для гостиной. Размеры: 220×95×85 см."
  },
  {
    id: 2,
    name: "Стол обеденный «Сканди»",
    price: 18900,
    category: "Столы",
    material: "Массив дуба",
    image: "https://picsum.photos/id/102/400/300",
    description: "Обеденный стол в скандинавском стиле. Столешница из массива дуба, ножки — массив. Рассчитан на 6 человек. Размеры: 160×90×75 см."
  },
  {
    id: 3,
    name: "Шкаф-купе «Модерн»",
    price: 52900,
    category: "Шкафы",
    material: "ЛДСП, зеркало",
    image: "https://picsum.photos/id/103/400/300",
    description: "Вместительный шкаф-купе с двумя зеркальными дверями. Внутри: полки, штанга для одежды, ящики. Цвет — белый дуб. Размеры: 200×60×240 см."
  },
  {
    id: 4,
    name: "Кресло «Релакс»",
    price: 24900,
    category: "Кресла",
    material: "Кожзам, металл",
    image: "https://picsum.photos/id/104/400/300",
    description: "Мягкое кресло с высокой спинкой. Обивка — экокожа, каркас металлический. Отлично смотрится в кабинете или гостиной. Размеры: 80×85×110 см."
  },
  {
    id: 5,
    name: "Кровать «Сон» 160×200",
    price: 38900,
    category: "Кровати",
    material: "Дерево, ткань",
    image: "https://picsum.photos/id/106/400/300",
    description: "Двуспальная кровать с мягким изголовьем. Ортопедическое основание в комплекте. Подходит матрас 160×200. Цвет — серый. Размеры: 170×210×100 см."
  },
  {
    id: 6,
    name: "Тумба прикроватная «Лайт»",
    price: 7900,
    category: "Тумбы",
    material: "ЛДСП",
    image: "https://picsum.photos/id/107/400/300",
    description: "Компактная прикроватная тумба с одним ящиком и полкой. Лёгкий современный дизайн. Цвет — белый. Размеры: 45×40×50 см."
  },
  {
    id: 7,
    name: "Стеллаж «Лофт»",
    price: 15900,
    category: "Стеллажи",
    material: "Металл, дерево",
    image: "https://picsum.photos/id/108/400/300",
    description: "Открытый стеллаж в стиле лофт. Металлический каркас + деревянные полки. 5 уровней хранения. Размеры: 80×35×180 см."
  },
  {
    id: 8,
    name: "Письменный стол «Офис»",
    price: 12900,
    category: "Столы",
    material: "ЛДСП, металл",
    image: "https://picsum.photos/id/109/400/300",
    description: "Практичный письменный стол для дома или офиса. Есть ящик и полка для системного блока. Размеры: 120×60×75 см."
  }
];

// Получить все товары
export function getAllProducts(): Product[] {
  return products;
}

// Найти товар по id
export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
