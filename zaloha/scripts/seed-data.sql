-- Seed data for Webmajstr database

USE webmajstr_db;

-- Insert default admin user (password should be hashed in real application)
INSERT INTO users (username, email, password_hash, role) VALUES
('admin', 'admin@webmajstr.com', '########', 'admin');

-- Insert services
INSERT INTO services (name, slug, description, price_from, price_unit, icon, sort_order) VALUES
('Tvorba webových stránek', 'tvorba-webu', 'Moderní, responzivní webové stránky optimalizované pro všechna zařízení', 6990.00, 'project', 'Globe', 1),
('Správa sociálních sítí', 'sprava-socialnich-siti', 'Komplexní správa všech sociálních platforem včetně tvorby obsahu', 1490.00, 'month', 'Share2', 2),
('SEO strategie s AI', 'seo-ai', 'Nejmodernější SEO optimalizace využívající umělou inteligenci', 3990.00, 'project', 'Search', 3),
('2D grafika', '2d-grafika', 'Tvorba kompletní vizuální identity včetně loga a grafických materiálů', 2990.00, 'project', 'Palette', 4),
('Reklama na rally autě', 'rally-reklama', 'Unikátní možnost propagace na závodních autech při rally soutěžích', 6000.00, 'month', 'Car', 5),
('Reklama v e-sportu', 'esport-reklama', 'Marketing přes profesionální e-sportové týmy a turnaje', 4000.00, 'month', 'Gamepad2', 6),
('Webhosting', 'webhosting', 'Spolehlivý a rychlý webhosting s 99.9% dostupností', 150.00, 'month', 'Server', 7),
('Správa domény', 'sprava-domeny', 'Kompletní správa domén včetně registrace a DNS nastavení', 250.00, 'year', 'Link', 8);

-- Insert packages
INSERT INTO packages (name, slug, description, price, features, is_popular, sort_order) VALUES
('Standardní balíček', 'standardni', 'Základní balíček pro malé firmy a začínající podnikatele', 1990.00, 
'["Správa webu", "Základní SEO optimalizace", "Správa jedné sociální sítě", "Online podpora"]', FALSE, 1),

('Rozšířený balíček', 'rozsireny', 'Nejpopulárnější balíček pro střední firmy', 3990.00,
'["Vše ze standardního balíčku", "Správa až tří sociálních sítí", "Rozšířená SEO optimalizace", "Nastavení a správa reklam na sociálních sítích (do 500 Kč/měsíc za reklamu)", "Grafické práce (2D grafika pro web, bannery)", "Rychlá podpora (preferovaný kontakt)"]', TRUE, 2),

('Pro velké firmy / korporáty', 'korporatni', 'Kompletní řešení pro velké firmy a korporace', 7990.00,
'["Vše z rozšířeného balíčku", "Správa neomezeného počtu sociálních sítí", "Individuální SEO strategie s využitím AI", "Reklamní kampaně na sociálních sítích (do 2 000 Kč/měsíc za reklamu)", "2D grafika, tvorba kompletní firemní identity", "Fyzická reklama na rally autě", "Online propagace v e-sportu a přes globální influencery", "Nonstop podpora"]', FALSE, 3);

-- Insert partners
INSERT INTO partners (name, nick, slug, country, website_url, bio, social_links, sort_order) VALUES
('StreamerCZ', 'StreamerCZ', 'streamercz', 'CZ', 'https://twitch.tv/streamercz', 
'Profesionální streamer se zaměřením na FPS hry a e-sport. Více než 50k followerů na Twitchi.',
'{"twitch": "https://twitch.tv/streamercz", "youtube": "https://youtube.com/streamercz", "instagram": "https://instagram.com/streamercz", "twitter": "https://twitter.com/streamercz"}', 1),

('ProGamer', 'ProGamer_SK', 'progamer', 'SK', 'https://youtube.com/progamer',
'E-sportový profesionál a content creator. Specializace na MOBA hry a coaching.',
'{"youtube": "https://youtube.com/progamer", "twitch": "https://twitch.tv/progamer", "discord": "https://discord.gg/progamer"}', 2),

('TechReviewer', 'TechReview_CZ', 'techreviewer', 'CZ', 'https://techreviewer.cz',
'Recenze technologií, hardware a software. Pomáháme lidem vybrat správnou techniku.',
'{"youtube": "https://youtube.com/techreviewer", "website": "https://techreviewer.cz", "facebook": "https://facebook.com/techreviewer"}', 3);

-- Insert news articles
INSERT INTO news (title, slug, excerpt, content, author, published_at, is_published, meta_title, meta_description) VALUES
('Nová spolupráce s ProGaming týmem', 'nova-spoluprace-progaming', 
'Zahajujeme partnerství s jedním z nejúspěšnějších e-sportových týmů v regionu.',
'Jsme nadšeni, že můžeme oznámit naši novou spolupráce s ProGaming týmem, který patří mezi nejúspěšnější e-sportové organizace ve střední Evropě. Toto partnerství představuje významný milník v našem rozvoji služeb zaměřených na gaming a e-sport komunitu.',
'Webmajstr Team', '2025-01-15 10:00:00', TRUE,
'Webmajstr zahajuje spolupráci s ProGaming týmem', 'Nové partnerství v oblasti e-sport marketingu přináší rozšíření služeb pro gaming komunitu.'),

('AI SEO dosáhlo nových výsledků', 'ai-seo-vysledky', 
'Naše AI SEO strategie přinesla klientům průměrně 150% nárůst organického trafficu.',
'Implementace našich AI-powered SEO nástrojů přinesla výjimečné výsledky. Klienti zaznamenali průměrný nárůst organického trafficu o 150%, přičemž některé weby dosáhly až 300% zvýšení návštěvnosti.',
'SEO tým', '2025-01-10 14:30:00', TRUE,
'AI SEO strategie přináší 150% nárůst trafficu', 'Webmajstr AI SEO nástroje dosahují výjimečných výsledků pro klienty.');

-- Insert default settings
INSERT INTO settings (setting_key, setting_value, setting_type, description) VALUES
('site_title', 'Webmajstr - Váš partner pro digitální růst', 'text', 'Hlavní titulek webu'),
('site_description', 'Komplexní webové řešení, SEO s AI, reklama na rally autě a v e-sportu', 'text', 'Popis webu'),
('contact_email', 'info@webmajstr.com', 'text', 'Hlavní kontaktní e-mail'),
('contact_phone', '+420 721 020 161', 'text', 'Hlavní kontaktní telefon'),
('primary_color', '#7c3aed', 'text', 'Primární barva webu'),
('secondary_color', '#a855f7', 'text', 'Sekundární barva webu'),
('default_language', 'cs', 'text', 'Výchozí jazyk webu'),
('smtp_host', '########', 'text', 'SMTP server pro odesílání e-mailů'),
('smtp_username', '########', 'text', 'SMTP uživatelské jméno'),
('smtp_password', '########', 'text', 'SMTP heslo');

-- Insert SEO data for main pages
INSERT INTO seo_pages (page_type, page_slug, meta_title, meta_description, meta_keywords) VALUES
('homepage', '', 'Webmajstr - Tvorba webů, SEO s AI, Rally reklama | Webmajstr', 
'Komplexní webové řešení, SEO s AI, reklama na rally autě a v e-sportu. Tvorba webů, správa sociálních sítí a unikátní marketingové kanály.', 
'webmajstr, tvorba webů, SEO, AI, rally reklama, e-sport marketing'),

('services', '', 'Služby - Tvorba webů, SEO, Marketing | Webmajstr',
'Kompletní spektrum digitálních služeb od tvorby webů po unikátní marketingové kanály. Balíčky služeb pro každou firmu.',
'služby, balíčky, tvorba webů, SEO, sociální sítě, rally reklama'),

('pricing', '', 'Ceník služeb - Transparentní ceny | Webmajstr',
'Transparentní ceník všech našich služeb. Tvorba webů od 6990 Kč, SEO od 3990 Kč, hosting od 150 Kč/měsíc.',
'ceník, ceny, tvorba webů, SEO, hosting, domény'),

('partnerships', '', 'Spolupráce - Naši partneři a influenceři | Webmajstr',
'Přehled našich partnerů, streamerů a influencerů. Možnosti spolupráce v oblasti digitálního marketingu.',
'spolupráce, partneři, streamers, influenceři, e-sport'),

('contact', '', 'Kontakt - Webmajstr s.r.o. | +420 721 020 161',
'Kontaktujte nás pro nezávaznou konzultaci. Telefon: +420 721 020 161, e-mail: info@webmajstr.com',
'kontakt, telefon, e-mail, konzultace, webmajstr');
