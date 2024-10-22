create table public.settings
(
    name  text  not null primary key,
    value jsonb DEFAULT JSONB_BUILD_OBJECT() not null
);
comment on table public.settings is 'Contains all the settings for the application.';
comment on column public.settings.name is 'The nested name of the setting. Used as a primary key (ex: storage.local.root)';
comment on column public.settings.value is 'The value of the setting as JSONB';

CREATE VIEW flat_settings AS
SELECT jsonb_object_agg(name, value) AS settings
FROM public.settings;

-- # Audit table
SELECT audit.audit_table ('public.settings', TRUE, FALSE);
