# Заметки по проекту «МебельДом» (магазин мебели на Next.js)

## Что сделано

Простой интернет-магазин мебели:
1. Файл с данными о товарах (многомерная структура)
2. Главная страница — каталог (плитка карточек)
3. Страница товара — полное описание

Этого достаточно для проходного балла.

---

## Подробное описание действий

### 1. Создание структуры проекта

Создал папки:
```
src/app/
src/app/product/[id]/
src/data/
```

Файлы конфигурации:
- package.json
- tsconfig.json
- next.config.ts (с разрешением picsum.photos для картинок)
- .gitignore

### 2. Файл с данными

**Файл:** `src/data/products.ts`

Интерфейс Product:
- id, name, price
- category (Диваны, Столы, Шкафы...)
- material (материал)
- image, description

Массив из 8 товаров мебели.
Функции: getAllProducts(), getProductById()

### 3. Главная страница

**Файл:** `src/app/page.tsx`

- Получаю товары через getAllProducts()
- Сетка карточек (CSS Grid)
- Карточка = Link на /product/[id]
- В карточке: картинка, категория, название, цена

### 4. Страница товара

**Файл:** `src/app/product/[id]/page.tsx`

- Динамический роут [id]
- generateStaticParams()
- Полное описание, материал, артикул, цена, картинка
- Ссылка «← В каталог»

---

## Структура

```
nextjs-mebel/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # каталог
│   │   ├── page.module.css
│   │   ├── globals.css
│   │   └── product/[id]/
│   │       ├── page.tsx          # страница товара
│   │       └── page.module.css
│   └── data/
│       └── products.ts
├── package.json
├── next.config.ts
└── NOTES.md
```

---

## Запуск

```bash
cd nextjs-mebel
npm install
npm run dev
```

http://localhost:3000

---

## Вопросы преподавателя

**Q: Почему Next.js?**  
A: Современный React-фреймворк, App Router, удобный роутинг и SSG.

**Q: Что такое generateStaticParams?**  
A: Функция, которая заранее генерирует страницы для всех id при сборке.

**Q: Зачем category и material?**  
A: Чтобы данные были чуть богаче, чем просто name+price. Показывает, что структура продумана.
