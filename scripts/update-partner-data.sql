-- Update partner data with new fields for better presentation

USE webmajstr_db;

-- Update StreamerCZ with detailed information
UPDATE partners SET 
    bio = 'Profesionální streamer se zaměřením na FPS hry a e-sport. Více než 50k followerů na Twitchi. Specializuji se na Counter-Strike 2, Valorant a další kompetitivní hry. Pravidelně streamuji každý den od 18:00 a víkendy od 14:00.',
    background_color = '#7c3aed',
    text_color = '#ffffff',
    stats = '{"followers": "52,000", "avgViewers": "1,200", "hoursStreamed": "2,400+"}',
    achievements = '["Top 10 CS2 hráč v ČR", "Partner Twitch streamer", "Vítěz Czech Gaming League 2024"]',
    social_links = '{"twitch": "https://twitch.tv/streamercz", "youtube": "https://youtube.com/streamercz", "instagram": "https://instagram.com/streamercz", "twitter": "https://twitter.com/streamercz"}'
WHERE slug = 'streamercz';

-- Update ProGamer with detailed information  
UPDATE partners SET 
    bio = 'E-sportový profesionál a content creator ze Slovenska. Specializace na MOBA hry a coaching. Pomáhám hráčům zlepšit se v League of Legends a Dota 2.',
    background_color = '#dc2626',
    text_color = '#ffffff',
    stats = '{"subscribers": "85,000", "avgViews": "15,000", "videosPublished": "450+"}',
    achievements = '["Diamond rank v League of Legends", "Certifikovaný coach", "100k+ subscribers na YouTube"]',
    social_links = '{"youtube": "https://youtube.com/progamer", "twitch": "https://twitch.tv/progamer", "discord": "https://discord.gg/progamer"}'
WHERE slug = 'progamer';

-- Update TechReviewer with detailed information
UPDATE partners SET 
    bio = 'Recenze technologií, hardware a software. Pomáháme lidem vybrat správnou techniku. Specializuji se na testování nejnovějších technologií a poskytování nezávislých recenzí.',
    background_color = '#059669',
    text_color = '#ffffff',
    stats = '{"subscribers": "45,000", "avgViews": "8,500", "reviewsPublished": "200+"}',
    achievements = '["Certifikovaný tech reviewer", "Spolupráce s předními značkami", "Více než 5 milionů zhlédnutí"]',
    social_links = '{"youtube": "https://youtube.com/techreviewer", "website": "https://techreviewer.cz", "facebook": "https://facebook.com/techreviewer"}'
WHERE slug = 'techreviewer';

-- Insert sample admin activity log entries
INSERT INTO admin_activity_log (user_id, action, entity_type, entity_id, details, ip_address) VALUES
(1, 'partner_created', 'partner', 1, '{"name": "StreamerCZ", "slug": "streamercz"}', '192.168.1.1'),
(1, 'partner_updated', 'partner', 1, '{"field": "bio", "old_value": "Short bio", "new_value": "Extended bio"}', '192.168.1.1'),
(1, 'news_published', 'news', 1, '{"title": "Nová spolupráce s ProGaming týmem"}', '192.168.1.1');
