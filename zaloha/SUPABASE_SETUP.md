# Supabase Setup pro Webmajstr

Tento soubor obsahuje instrukce pro nastavení Supabase databáze pro Webmajstr projekt.

## 📋 Požadavky

- Supabase účet
- Přístup k Supabase dashboardu
- SQL editor nebo Supabase CLI

## 🚀 Kroky pro nastavení

### 1. Vytvoření nového projektu v Supabase

1. Jděte na [supabase.com](https://supabase.com)
2. Přihlaste se do svého účtu
3. Klikněte na "New Project"
4. Vyplňte údaje:
   - **Name**: `webmajstr-db`
   - **Database Password**: `Hajs@&0601097420`
   - **Region**: Vyberte nejbližší region (např. West Europe)
5. Klikněte na "Create new project"

### 2. Získání přístupových údajů

Po vytvoření projektu získáte:
- **Project URL**: `https://xmyvauemrpgytkrfhnrn.supabase.co`
- **API Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteXZhdWVtcnBneXRrcmZobnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MjYwNTgsImV4cCI6MjA2OTMwMjA1OH0.S8TQ8Lv2JvqI5HeidZE_B9N4Ht7A7i_jxJjq8GuQmaM`

### 3. Spuštění SQL skriptu

1. V Supabase dashboardu jděte na **SQL Editor**
2. Klikněte na **New Query**
3. Zkopírujte obsah souboru `scripts/supabase-setup.sql`
4. Vložte do SQL editoru
5. Klikněte na **Run** pro spuštění

### 4. Ověření nastavení

Po spuštění SQL skriptu byste měli vidět:
- 4 tabulky: `partners`, `news`, `contacts`, `services`
- Výchozí data v tabulkách
- Indexy pro optimalizaci výkonu
- RLS (Row Level Security) politiky

## 📊 Struktura databáze

### Tabulka `partners`
- **id**: BIGSERIAL PRIMARY KEY
- **name**: VARCHAR(255) NOT NULL
- **nick**: VARCHAR(100)
- **slug**: VARCHAR(255) NOT NULL UNIQUE
- **country**: VARCHAR(100)
- **website_url**: TEXT
- **bio**: TEXT
- **social_links**: JSONB
- **logo_url**: TEXT
- **profile_image_url**: TEXT
- **is_active**: BOOLEAN DEFAULT true
- **sort_order**: INTEGER DEFAULT 0
- **created_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()
- **updated_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()

### Tabulka `news`
- **id**: BIGSERIAL PRIMARY KEY
- **title**: VARCHAR(255) NOT NULL
- **slug**: VARCHAR(255) NOT NULL UNIQUE
- **excerpt**: TEXT
- **content**: TEXT
- **image_url**: TEXT
- **author**: VARCHAR(255)
- **published_at**: TIMESTAMP WITH TIME ZONE
- **is_published**: BOOLEAN DEFAULT false
- **meta_title**: VARCHAR(255)
- **meta_description**: TEXT
- **created_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()
- **updated_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()

### Tabulka `contacts`
- **id**: BIGSERIAL PRIMARY KEY
- **name**: VARCHAR(255) NOT NULL
- **email**: VARCHAR(255) NOT NULL
- **subject**: VARCHAR(255)
- **message**: TEXT NOT NULL
- **status**: VARCHAR(50) DEFAULT 'new'
- **created_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()
- **updated_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()

### Tabulka `services`
- **id**: BIGSERIAL PRIMARY KEY
- **name**: VARCHAR(255) NOT NULL
- **description**: TEXT
- **price**: DECIMAL(10,2)
- **is_active**: BOOLEAN DEFAULT true
- **sort_order**: INTEGER DEFAULT 0
- **created_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()
- **updated_at**: TIMESTAMP WITH TIME ZONE DEFAULT NOW()

## 🔐 Bezpečnost

### Row Level Security (RLS)
- Všechny tabulky mají povolené RLS
- Veřejný přístup pro čtení dat
- Autentifikace vyžadována pro admin operace

### Politiky
- **Čtení**: Veřejný přístup ke všem datům
- **Zápis kontaktů**: Veřejný přístup
- **Admin operace**: Vyžaduje autentifikaci

## 🛠️ Testování připojení

Pro otestování připojení můžete použít:

```bash
npm run dev
```

A pak navštívit:
- `/admin` - Admin panel
- `/aktuality` - Stránka s aktualitami
- `/spoluprace` - Stránka s partnery

## 📝 Poznámky

1. **API Key**: Používá se `anon` klíč pro veřejný přístup
2. **Automatické timestampy**: `created_at` a `updated_at` se automaticky aktualizují
3. **Indexy**: Vytvořeny pro optimalizaci výkonu
4. **Výchozí data**: Obsahuje ukázková data pro testování

## 🔧 Troubleshooting

### Problém: "Cannot connect to database"
- Zkontrolujte Project URL a API Key v `lib/supabase.ts`
- Ověřte, že projekt je aktivní v Supabase dashboardu

### Problém: "Table does not exist"
- Spusťte SQL skript znovu
- Zkontrolujte, že všechny tabulky byly vytvořeny

### Problém: "Permission denied"
- Zkontrolujte RLS politiky
- Ověřte, že API Key má správná oprávnění

## 📞 Podpora

Pro další pomoc kontaktujte vývojový tým nebo nahlédněte do Supabase dokumentace. 