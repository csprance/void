-- # Role ENUMS
CREATE TABLE "public"."Role" (
    "value" text PRIMARY KEY NOT NULL,
    "level" text NOT NULL
);
COMMENT ON TABLE "public"."Role" IS
    E'An enum table of all the possible roles that a user can be';
INSERT INTO "public"."Role" ("value", "level") VALUES
  ('public', '1 Everyone starts as public'),
  ('user', '2 This is the base user role'),
  ('manager', '3 This is what a manager would be. They can do most things'),
  ('admin', '4 You can do everything but core system actions'),
  ('superAdmin', '5 This is the super admin and everytime it''s used it''s logged')
;

-- user_role Table
CREATE TABLE "public"."user_role" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "role" TEXT NOT NULL,
    "active" bool DEFAULT FALSE,
    "user_id" uuid NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT "users_role_role_fkey" FOREIGN KEY ("role") REFERENCES "public"."Role" ("value") ON UPDATE RESTRICT ON DELETE RESTRICT,
    UNIQUE ("role", "user_id") -- Add this line
);
COMMENT ON TABLE "public"."user_role" IS E'A relational table that contains all the roles assigned to a specific user';
COMMENT ON COLUMN "public"."user_role"."id" IS E'The primary key of the user_roles table';
COMMENT ON COLUMN "public"."user_role"."role" IS E'The string name of the role the user should have';
COMMENT ON COLUMN "public"."user_role"."user_id" IS E'The foreign key to the user id that this role belongs to';
COMMENT ON COLUMN "public"."user_role"."active" IS E'Is this role the current active role. A user can have many roles and one active one';
COMMENT ON COLUMN "public"."user_role"."created_at" IS E'When was this role originally assigned to this user';


CREATE OR REPLACE FUNCTION public.set_one_active_role()
    RETURNS TRIGGER AS $$
BEGIN
    -- Check if the role being inserted or updated is set to active
    IF NEW.active THEN
        -- Update all other roles for this user to inactive
        UPDATE public.user_role
        SET active = FALSE
        WHERE user_id = NEW.user_id AND id <> NEW.id;
    END IF;

    -- Return the new record to be inserted or updated
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_one_active_role
    BEFORE INSERT OR UPDATE ON public.user_role
    FOR EACH ROW
EXECUTE FUNCTION public.set_one_active_role();

-- # Audit table
SELECT audit.audit_table ('public.user_role', TRUE, FALSE);
