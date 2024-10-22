-- --------------------------------------------------------
-- Admin Users
-- --------------------------------------------------------
-- csprance (Admin, User, Public, Manager)
INSERT INTO public.user (id, username, email, created_at, updated_at, active, avatar, cell, city, country, first_name, last_name, job_title, theme_name)
  VALUES (E'02ec8c1b-a640-4e62-9a5e-ab0a9a74d033',E'Christopher Sprance',E'chrissprance@gmail.com',E'2023-10-13 19:14:49.389270 +00:00',E'2023-10-13 19:14:49.389270 +00:00',false,'https://lh3.googleusercontent.com/a/ACg8ocIeNEO7RUnJpjK_Tfz7odQ_ttVjfuO1rIQ89OKic2kXGqzV=s96-c',E'843-555-5555',E'Digital',E'Underground',E'Chris',E'Sprance',E'Chump','light');

-- csprance Roles
INSERT INTO public.user_role (role, user_id, active)
    VALUES (E'admin', E'02ec8c1b-a640-4e62-9a5e-ab0a9a74d033', true);
INSERT INTO public.user_role (role, user_id)
    VALUES (E'user', E'02ec8c1b-a640-4e62-9a5e-ab0a9a74d033');
INSERT INTO public.user_role (role, user_id)
    VALUES (E'manager', E'02ec8c1b-a640-4e62-9a5e-ab0a9a74d033');
INSERT INTO public.user_role (role, user_id)
    VALUES (E'public', E'02ec8c1b-a640-4e62-9a5e-ab0a9a74d033');

-- --------------------------------------------------------
-- TEST Users
-- --------------------------------------------------------
-- Joe Dirt (User)
INSERT INTO public.user (id, username, email, created_at, updated_at, active, avatar, cell, city, country, first_name, last_name, job_title, theme_name)
  VALUES (E'04505126-bffd-42f4-b2bc-60526249afce', E'jdirt', E'jdirt@void', E'2022-02-16T04:12:49.818781+00:00', E'2022-02-16T04:12:49.818781+00:00', FALSE, E'https://avatars.githubusercontent.com/u/7902617?v=4', E'555-555-5555', E'Digital', E'Underground', E'Joe', E'Dirt', E'Daaaang', E'dark');
-- Joe Dirt user role
INSERT INTO public.user_role (role, user_id, active)
    VALUES (E'user', E'04505126-bffd-42f4-b2bc-60526249afce', true);
INSERT INTO public.user_role (role, user_id)
    VALUES (E'public', E'04505126-bffd-42f4-b2bc-60526249afce');
-- Michael Scott (Manager)
INSERT INTO public.user (id, username, email, created_at, updated_at, active, avatar, cell, city, country, first_name, last_name, job_title, theme_name)
VALUES (E'04505126-bffd-42f4-b2bc-60526249afc1', E'mscott', E'mscott@void', E'2022-02-16T04:12:49.818781+00:00', E'2022-02-16T04:12:49.818781+00:00', FALSE, E'https://avatars.githubusercontent.com/u/7902617?v=4', E'555-555-5555', E'Scranton', E'United State', E'Michael', E'Scott', E'Regional Manager',E'light');
-- Michael Scott user role
INSERT INTO public.user_role (role, user_id, active)
    VALUES (E'manager', E'04505126-bffd-42f4-b2bc-60526249afc1', true);
INSERT INTO public.user_role (role, user_id)
    VALUES (E'public', E'04505126-bffd-42f4-b2bc-60526249afc1');
