CREATE TYPE user_role AS ENUM ('superadmin', 'admin', 'manager', 'customer');

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(100)        NOT NULL,
  email         VARCHAR(150)        NOT NULL UNIQUE,
  password      VARCHAR(255)        NOT NULL,
  role          user_role           NOT NULL DEFAULT 'customer',
  is_active     BOOLEAN             NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMP           NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMP           NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admin_sessions (
  id            SERIAL PRIMARY KEY,
  user_id       INT                 NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ip_address    VARCHAR(45),
  user_agent    TEXT,
  created_at    TIMESTAMP           NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admin_audit_log (
  id            SERIAL PRIMARY KEY,
  user_id       INT                 NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  action        VARCHAR(100)        NOT NULL,
  target_table  VARCHAR(50),
  target_id     INT,
  details       JSONB,
  created_at    TIMESTAMP           NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email    ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role     ON users(role);
CREATE INDEX IF NOT EXISTS idx_audit_user     ON admin_audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_action   ON admin_audit_log(action);
CREATE INDEX IF NOT EXISTS idx_sessions_user  ON admin_sessions(user_id);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

INSERT INTO users (name, email, password, role) VALUES
  ('Super Admin', 'superadmin@explosion.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'superadmin'),
  ('Admin Geral', 'admin@explosion.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
  ('Gerente Loja', 'manager@explosion.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'manager')
ON CONFLICT (email) DO NOTHING;