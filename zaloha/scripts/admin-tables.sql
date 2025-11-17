-- Additional tables for admin functionality

USE webmajstr_db;

-- Admin sessions table
CREATE TABLE admin_sessions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Partner page customization
ALTER TABLE partners ADD COLUMN background_color VARCHAR(7) DEFAULT '#7c3aed';
ALTER TABLE partners ADD COLUMN text_color VARCHAR(7) DEFAULT '#ffffff';
ALTER TABLE partners ADD COLUMN custom_css TEXT;
ALTER TABLE partners ADD COLUMN stats JSON;
ALTER TABLE partners ADD COLUMN achievements JSON;

-- Update existing partners with new fields
UPDATE partners SET 
    background_color = '#7c3aed',
    text_color = '#ffffff',
    stats = '{"followers": "0", "avgViewers": "0", "hoursStreamed": "0"}',
    achievements = '[]'
WHERE background_color IS NULL;

-- Activity log for admin actions
CREATE TABLE admin_activity_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id INT,
    details JSON,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- File uploads table
CREATE TABLE file_uploads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size INT NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    uploaded_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
);
