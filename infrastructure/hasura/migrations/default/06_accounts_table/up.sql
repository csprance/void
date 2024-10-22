CREATE TABLE public.accounts (
     id uuid DEFAULT public.gen_random_uuid() NOT NULL,
     type text NOT NULL,
     provider text NOT NULL,
     "providerAccountId" text NOT NULL,
     refresh_token text,
     access_token text,
     expires_at bigint,
     token_type text,
     scope text,
     id_token text,
     session_state text,
     oauth_token_secret text,
     oauth_token text,
     "userId" uuid NOT NULL,
     refresh_token_expires_in bigint
);

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.user(id) ON UPDATE RESTRICT ON DELETE CASCADE;
