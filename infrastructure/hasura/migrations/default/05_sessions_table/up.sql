CREATE TABLE public.sessions (
     id uuid DEFAULT public.gen_random_uuid() NOT NULL,
     "sessionToken" text NOT NULL,
     "userId" uuid NOT NULL,
     expires timestamptz
);

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.user(id) ON UPDATE RESTRICT ON DELETE CASCADE;
