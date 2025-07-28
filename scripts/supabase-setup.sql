-- Supabase Database Setup for Webmajstr
-- Tento soubor obsahuje všechny SQL příkazy pro vytvoření tabulek a vložení výchozích dat

-- Vytvoření tabulky partners
CREATE TABLE IF NOT EXISTS partners (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nick VARCHAR(100),
    slug VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(100),
    website_url TEXT,
    bio TEXT,
    social_links JSONB,
    logo_url TEXT,
    profile_image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vytvoření tabulky news
CREATE TABLE IF NOT EXISTS news (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT,
    image_url TEXT,
    author VARCHAR(255),
    published_at TIMESTAMP WITH TIME ZONE,
    is_published BOOLEAN DEFAULT false,
    meta_title VARCHAR(255),
    meta_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vytvoření tabulky contacts (pro kontaktní formuláře)
CREATE TABLE IF NOT EXISTS contacts (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vytvoření tabulky services (pro služby)
CREATE TABLE IF NOT EXISTS services (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vytvoření indexů pro lepší výkon
CREATE INDEX IF NOT EXISTS idx_partners_slug ON partners(slug);
CREATE INDEX IF NOT EXISTS idx_partners_active ON partners(is_active);
CREATE INDEX IF NOT EXISTS idx_partners_sort ON partners(sort_order, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_news_slug ON news(slug);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_news_created ON news(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active);
CREATE INDEX IF NOT EXISTS idx_services_sort ON services(sort_order);

-- Vložení výchozích dat pro partnery
INSERT INTO partners (name, nick, slug, country, website_url, bio, social_links, logo_url, profile_image_url, is_active, sort_order) VALUES
('Jan Novák', 'jannovak', 'jan-novak', 'Česká republika', 'https://twitch.tv/jannovak', 'Profesionální streamer a content creator se zaměřením na FPS hry. Spolupracuji s Webmajstr na rozvoji gaming komunity.', '{"twitch": "https://twitch.tv/jannovak", "youtube": "https://youtube.com/@jannovak", "instagram": "https://instagram.com/jannovak"}', '/placeholder-logo.png', '/placeholder-user.jpg', true, 1),
('Marie Svobodová', 'mariesvoboda', 'marie-svobodova', 'Slovensko', 'https://youtube.com/@mariesvoboda', 'Gaming influencerka a youtuberka. Zaměřuji se na RPG hry a lifestyle content. Spolupráce s Webmajstr mi pomohla růst.', '{"youtube": "https://youtube.com/@mariesvoboda", "instagram": "https://instagram.com/mariesvoboda", "tiktok": "https://tiktok.com/@mariesvoboda"}', '/placeholder-logo.png', '/placeholder-user.jpg', true, 2),
('Petr Černý', 'petrcerny', 'petr-cerny', 'Česká republika', 'https://instagram.com/petrcerny', 'Fitness influencer a gaming enthusiast. Kombinuji zdravý životní styl s gaming kulturou. Webmajstr mi pomohl s marketingem.', '{"instagram": "https://instagram.com/petrcerny", "youtube": "https://youtube.com/@petrcerny", "facebook": "https://facebook.com/petrcerny"}', '/placeholder-logo.png', '/placeholder-user.jpg', true, 3);

-- Vložení výchozích dat pro aktuality
INSERT INTO news (title, slug, excerpt, content, image_url, author, published_at, is_published, meta_title, meta_description) VALUES
('Nová spolupráce s ProGaming týmem', 'nova-spoluprace-progaming', 'Zahajujeme partnerství s jedním z nejúspěšnějších e-sportových týmů v regionu. Tato spolupráce přinese nové možnosti pro naše klienty.', 'Webmajstr je hrdý na oznámení nové spolupráce s ProGaming týmem, jedním z nejúspěšnějších e-sportových týmů v regionu. Tato strategická partnerství otevírá nové možnosti pro naše klienty v oblasti gaming marketingu a e-sportové reklamy.', '/placeholder.jpg', 'Webmajstr Team', '2025-01-15 10:00:00+01', true, 'Nová spolupráce s ProGaming týmem - Webmajstr', 'Webmajstr zahajuje partnerství s ProGaming týmem. Nové možnosti pro gaming marketing a e-sportovou reklamu.'),
('AI SEO dosáhlo nových výsledků', 'ai-seo-nove-vysledky', 'Naše AI SEO strategie přinesla klientům průměrně 150% nárůst organického trafficu. Objevte, jak AI mění SEO.', 'Naše pokročilé AI SEO řešení dosáhlo výjimečných výsledků. Klienti zaznamenali průměrný nárůst organického trafficu o 150% během prvních 3 měsíců. AI technologie analyzuje trh v reálném čase a optimalizuje obsah pro maximální viditelnost.', '/placeholder.jpg', 'AI Team', '2025-01-10 14:30:00+01', true, 'AI SEO - 150% nárůst organického trafficu', 'Webmajstr AI SEO strategie přinesla klientům průměrně 150% nárůst organického trafficu.'),
('Rally sezóna 2025 začíná', 'rally-sezona-2025', 'Připravujeme se na novou rally sezónu s rozšířenými reklamními možnostmi. Unikátní marketingové příležitosti pro vaši značku.', 'Rally sezóna 2025 je za dveřmi a Webmajstr se připravuje na další rok úspěšné spolupráce s rally týmy. Rozšířili jsme naše reklamní možnosti a nabízíme unikátní marketingové příležitosti pro značky, které chtějí oslovit motorsport komunitu.', '/placeholder.jpg', 'Rally Team', '2025-01-05 09:15:00+01', true, 'Rally sezóna 2025 - Nové reklamní možnosti', 'Webmajstr připravuje rally sezónu 2025 s rozšířenými reklamními možnostmi pro vaši značku.');

-- Vložení výchozích dat pro služby
INSERT INTO services (name, description, price, is_active, sort_order) VALUES
('Tvorba webových stránek', 'Kompletní tvorba moderních, responzivních webových stránek s optimalizací pro vyhledávače.', 15000.00, true, 1),
('SEO optimalizace', 'Komplexní SEO optimalizace pro zvýšení viditelnosti ve vyhledávačích.', 8000.00, true, 2),
('AI SEO strategie', 'Pokročilé SEO využívající umělou inteligenci pro maximální výsledky.', 12000.00, true, 3),
('Gaming marketing', 'Marketingové kampaně cílené na gaming komunitu a e-sport.', 10000.00, true, 4),
('Rally reklama', 'Unikátní reklamní příležitosti v rally sportu.', 20000.00, true, 5),
('Správa sociálních sítí', 'Kompletní správa a optimalizace sociálních sítí.', 5000.00, true, 6);

-- Vytvoření triggeru pro automatické aktualizace updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Aplikování triggeru na všechny tabulky
CREATE TRIGGER update_partners_updated_at BEFORE UPDATE ON partners FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Nastavení RLS (Row Level Security) - povolení přístupu pro anon a authenticated uživatele
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Politiky pro čtení dat (veřejný přístup)
CREATE POLICY "Partners are viewable by everyone" ON partners FOR SELECT USING (true);
CREATE POLICY "News are viewable by everyone" ON news FOR SELECT USING (true);
CREATE POLICY "Services are viewable by everyone" ON services FOR SELECT USING (true);

-- Politiky pro zápis kontaktů (veřejný přístup)
CREATE POLICY "Contacts can be inserted by everyone" ON contacts FOR INSERT WITH CHECK (true);

-- Politiky pro admin operace (vyžadují autentifikaci)
CREATE POLICY "Partners can be managed by authenticated users" ON partners FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "News can be managed by authenticated users" ON news FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Contacts can be managed by authenticated users" ON contacts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Services can be managed by authenticated users" ON services FOR ALL USING (auth.role() = 'authenticated'); 