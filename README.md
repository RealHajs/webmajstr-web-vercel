# Webmajstr Website

Moderní webová stránka pro Webmajstr s admin panelem a databází.

## 🚀 Rychlé zprovoznění

### 1. Instalace závislostí
```bash
npm install
```

### 2. Spuštění XAMPP
1. Spusťte XAMPP Control Panel
2. Zapněte **Apache** a **MySQL** služby
3. Ujistěte se, že MySQL běží na portu 3306

### 3. Inicializace databáze
```bash
npm run db:init
```

Tento příkaz:
- Vytvoří databázi `webmajstr_db`
- Vytvoří všechny potřebné tabulky
- Vloží výchozí data (partnery, aktuality, služby)

### 4. Spuštění vývojového serveru
```bash
npm run dev
```

Web bude dostupný na: http://localhost:3000

## 📊 Admin Panel

Admin panel je dostupný na: http://localhost:3000/admin

### Funkce admin panelu:
- **Dashboard** - Přehled statistik a aktivit
- **Partneři/Streamers** - Správa partnerů a jejich stránek
- **Aktuality** - Správa článků a novinek
- **Nastavení** - Konfigurace webu

## 🗄️ Databáze

### Struktura databáze:
- `partners` - Partneři a streamers
- `news` - Aktuality a články
- `services` - Služby a balíčky
- `contacts` - Kontaktní zprávy
- `settings` - Nastavení webu
- `users` - Uživatelé admin panelu

### Testování připojení:
```bash
npm run db:test
```

## 🔧 Konfigurace

### Databázové připojení
Konfigurace je v `lib/database.ts`:
- Host: localhost
- Port: 3306
- User: root
- Password: (prázdné pro XAMPP)
- Database: webmajstr_db

### Změna konfigurace
Pokud používáte jiné nastavení XAMPP, upravte `lib/database.ts` a `scripts/init-database.js`.

## 📁 Struktura projektu

```
├── app/                    # Next.js App Router
│   ├── admin/             # Admin panel stránky
│   ├── api/               # API endpointy
│   └── [slug]/            # Dynamické stránky partnerů
├── components/            # React komponenty
│   ├── admin/            # Admin komponenty
│   └── ui/               # UI komponenty
├── lib/                  # Utility funkce
│   └── database.ts       # Databázové připojení
├── scripts/              # Skripty
│   ├── database-setup.sql
│   ├── seed-data.sql
│   └── init-database.js
└── public/               # Statické soubory
```

## 🐛 Řešení problémů

### Databáze se nepřipojuje
1. Zkontrolujte, že XAMPP běží
2. Zkontrolujte, že MySQL služba je aktivní
3. Zkontrolujte port 3306
4. Spusťte `npm run db:test`

### Admin panel nefunguje
1. Zkontrolujte, že databáze je inicializována
2. Zkontrolujte konzoli pro chyby
3. Zkontrolujte Network tab v DevTools

### Chyby při ukládání
1. Zkontrolujte, že všechny povinné pole jsou vyplněna
2. Zkontrolujte, že slug je unikátní
3. Zkontrolujte konzoli pro detaily chyby

## 📝 API Endpointy

### Partneři
- `GET /api/partners` - Seznam všech partnerů
- `POST /api/partners` - Vytvoření nového partnera
- `GET /api/partners/[id]` - Detail partnera
- `PUT /api/partners/[id]` - Aktualizace partnera
- `DELETE /api/partners/[id]` - Smazání partnera

### Dashboard
- `GET /api/dashboard/stats` - Statistiky pro dashboard

### Aktuality
- `GET /api/news` - Seznam všech aktualit
- `POST /api/news` - Vytvoření nové aktuality

## 🚀 Produkční nasazení

Pro produkční nasazení:
1. Změňte databázové přihlašovací údaje
2. Nastavte environment proměnné
3. Spusťte `npm run build`
4. Spusťte `npm start`

## 📞 Podpora

Pro technickou podporu kontaktujte: info@webmajstr.com 