CREATE TABLE public."user"
(
    -- Identifiers
    "id"          UUID                PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "username"    CITEXT              UNIQUE NOT NULL,
    "email"       VARCHAR(255)        UNIQUE NOT NULL,

    -- Timestamps
    "created_at"  TIMESTAMPTZ         DEFAULT NOW() NOT NULL,
    "updated_at"  TIMESTAMPTZ         DEFAULT NOW() NOT NULL,
    "last_activity"  TIMESTAMPTZ      DEFAULT NOW() NOT NULL,

    -- Status and Metadata
    "active"      BOOLEAN             DEFAULT FALSE NOT NULL,
    "theme_name"  VARCHAR(32)         DEFAULT 'light' NOT NULL,
    "avatar"      TEXT                DEFAULT '' NOT NULL,
    "meta"        JSONB               DEFAULT json_build_object() NOT NULL,

    -- Personal Information
    "first_name"  VARCHAR(100)        DEFAULT '' NOT NULL,
    "last_name"   VARCHAR(100)        DEFAULT '' NOT NULL,
    "job_title"   VARCHAR(100)        DEFAULT '' NOT NULL,
    "cell"        VARCHAR(15)         DEFAULT '' NOT NULL,
    "city"        VARCHAR(100)        DEFAULT '' NOT NULL,
    "country"     VARCHAR(100)        DEFAULT '' NOT NULL,

    -- Security
    "emailVerified" TIMESTAMPTZ
);


CREATE INDEX idx_user_username ON public."user" ("username");

COMMENT ON TABLE public.user IS 'This is the table of all the users of the application along with their data.';
COMMENT ON COLUMN public.user.username IS 'The username of the user.';
COMMENT ON COLUMN public.user.email IS 'The users email. This must be unique per user';
COMMENT ON COLUMN public.user.active IS 'Is the user currently active right now in the application.';
COMMENT ON COLUMN public.user.avatar IS 'The user profile image (Avatar) a link to a graphic (if any)';
COMMENT ON COLUMN public.user.cell IS 'A cell phone number for the User.  Personnel Data.';
COMMENT ON COLUMN public.user.city IS 'Current city of User.  Personnel Data.';
COMMENT ON COLUMN public.user.country IS 'Current country of User.   Personnel Data.';
COMMENT ON COLUMN public.user.meta IS 'Extra metadata in JSON format about the user';
COMMENT ON COLUMN public.user.first_name IS 'First name of the user.  Personnel Data.';
COMMENT ON COLUMN public.user.last_name IS 'Last name of the User. Personnel Data.';
COMMENT ON COLUMN public.user.job_title IS 'The job title of the user. Personnel Data.';
COMMENT ON COLUMN public.user.theme_name IS 'The currently set theme of the user can be one of any set theme';
COMMENT ON COLUMN public.user.last_activity IS 'When was the user last active';

CREATE TRIGGER set_public_user_updated_at
    BEFORE UPDATE ON public.user
    FOR EACH ROW
    EXECUTE FUNCTION public.set_current_timestamp_updated_at ();

COMMENT ON TRIGGER set_public_user_updated_at ON public.user IS
    'trigger to set value of column "updated_at" to current timestamp on row update';

-- Create our default system user with a specific uuid. Not meant to be used only for logging data
INSERT INTO public.user ("id", "username", "email", "theme_name", "active", "avatar", "cell", "city", "country", "first_name", "last_name", "job_title")
    VALUES (E'9ee5cd60-6878-4d8f-ab3c-175c9b612445', E'system', E'system@void-app.org', 'light', TRUE, E'/logo.svg', E'555-555-5555', E'System', E'App', E'System', E'User', E'System');

-- # Audit table
SELECT audit.audit_table ('public.user', TRUE, FALSE, '{created_at,updated_at,id,username}');

