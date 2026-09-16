--
-- PostgreSQL database dump
--

\restrict 5EyV1XZpgGjmCRN9MvRJoSiaSTCcJPXP7YUfQz1M5dSi078E6jUEn6ZVhdtXjHh

-- Dumped from database version 17.10 (Postgres.app)
-- Dumped by pg_dump version 17.10 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE library;
--
-- Name: library; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE library WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';


\unrestrict 5EyV1XZpgGjmCRN9MvRJoSiaSTCcJPXP7YUfQz1M5dSi078E6jUEn6ZVhdtXjHh
\connect library
\restrict 5EyV1XZpgGjmCRN9MvRJoSiaSTCcJPXP7YUfQz1M5dSi078E6jUEn6ZVhdtXjHh

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title text,
    author text,
    price real,
    page_count integer,
    publisher text,
    publication_date date
);


--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: employees; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    email text,
    password text NOT NULL,
    salary integer,
    CONSTRAINT employees_salary_check CHECK ((salary >= 0))
);


--
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Name: employees id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.books (id, title, author, price, page_count, publisher, publication_date) FROM stdin;
1	The Design of Everyday Things: Revised and Expanded Edition	Don Norman	12.92	368	Basic Books	2013-11-05
2	Introduction to Analytic and Probabilistic Number Theory	Gerald Tenenbaum	89	629	American Mathematical Society	2015-07-16
3	Flatland: A Romance of Many Dimensions	Edwin A. Abbott	3	96	Dover Publications	1992-09-21
4	House of Leaves	Mark Z. Danielewski	15.18	709	Pantheon	2000-03-07
5	You Don't Know JS: Up & Going	Kyle Simpson	2.99	88	O'Reilly Media	2015-04-10
6	You Don't Know JS: Scope & Closures	Kyle Simpson	17.09	98	O'Reilly Media	2014-03-24
7	You Don't Know JS: this & Object Prototypes	Kyle Simpson	12.11	174	O'Reilly Media	2014-07-27
8	You Don't Know JS: Types & Grammar	Kyle Simpson	11.92	198	O'Reilly Media	2015-02-14
9	You Don't Know JS: Async & Performance	Kyle Simpson	13.67	296	O'Reilly Media	2015-03-09
10	You Don't Know JS: ES6 & Beyond	Kyle Simpson	20.09	278	O'Reilly Media	2015-12-27
11	Elementary Differential Equations	William Trench	42.95	605	Brooks Cole	1999-10-28
12	JavaScript: The Good Parts	Douglas Crockford	19.11	176	O'Reilly Media	2008-05-01
13	Harry Potter and the Sorcerer's Stone	J. K. Rowling	7.06	309	Scholastic	1999-09-08
14	Harry Potter And The Chamber Of Secrets	J. K. Rowling	7.39	341	Scholastic	2000-08-15
15	Harry Potter And The Prisoner of Azkaban	J. K. Rowling	7.39	448	Scholastic	2001-09-11
16	Harry Potter And The Goblet of Fire	J. K. Rowling	9.78	752	Scholastic	2002-07-30
17	Harry Potter And The Order Of The Phoenix	J. K. Rowling	8.59	896	Scholastic	2004-08-10
18	Harry Potter And The Half-Blood Prince	J. K. Rowling	9.26	652	Scholastic	2006-07-25
19	Harry Potter And The Deathly Hallows	J. K. Rowling	11.03	759	Scholastic	2009-07-07
20	Effective Java	Joshua Bloch	49.78	416	Addison-Wesley Professional	2018-01-06
21	Discrete Mathematics and Its Applications Seventh Edition	Kenneth Rosen	169.03	1072	McGraw-Hill Education	2011-06-14
22	Power-Up: Unlocking the Hidden Mathematics in Video Games	Matthew Lane	22.2	264	Princeton University Press	2017-05-23
23	How to Avoid Huge Ships	John Trimmer	112.42	112	Cornell Maritime Pr	1993-03-01
24	Multiplicative Number Theory	Harold Davenport	63.96	182	Springer	2000-10-31
25	Goodnight Moon	Margaret Wise Brown	12.79	32	HarperCollins	2007-01-23
26	I Want My Hat Back	Jon Klassen	13.59	40	Candlewick Press	2011-09-27
27	Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race	Margot Lee Shetterly	9.98	368	William Morrow Paperbacks	2016-12-06
28	Born A Crime: Stories from a South African Childhood	Trevor Noah	16.16	304	Spiegel & Grau	2016-11-15
29	Between the World and Me	Ta-Nehisi Coates	10.35	176	Spiegel & Grau	2015-07-14
30	What If?: Serious Scientific Answers to Absurd Hypothetical Questions	Randall Munroe	13.89	320	Houghton Mifflin Harcourt	2014-09-02
31	Give Us the Ballot: The Modern Struggle for Voting Rights in America	Ari Berman	19.49	384	Farrar, Straus and Giroux	2015-08-04
32	Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy	Cathy O'Neil	11	288	Broadway Books	2017-09-05
33	How Not to Be Wrong: The Power of Mathematical Thinking	Jordan Ellenberg	11.55	480	Penguin Books	2015-05-26
34	Dreamland: The True Tale of America's Opiate Epidemic	Sam Quinones	12.23	384	Bloomsbury Press	2016-04-05
35	A Wrinkle in Time	Madeleine L'Engle	4.64	256	Square Fish	2007-05-01
36	Charlie and the Chocolate Factory	Roald Dahl	6.39	155	Puffin Modern Classics	2004-04-12
37	Guns, Germs, and Steel: The Fates of Human Societies	Jared Diamond	16.71	528	W. W. Norton & Company	2005-07-17
38	The Omnivore's Dilemma: A Natural History of Four Meals	Michael Pollan	12.56	450	Penguin	2007-08-28
39	The Wind-Up Bird Chronicle	Haruki Murakami	11.52	607	Vintage	1998-09-01
40	Where the Sidewalk Ends	Shel Silverstein	17.13	176	HarperCollins	2000-10-03
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.employees (id, email, password, salary) FROM stdin;
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.books_id_seq', 40, true);


--
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.employees_id_seq', 1, false);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: employees employees_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_email_key UNIQUE (email);


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict 5EyV1XZpgGjmCRN9MvRJoSiaSTCcJPXP7YUfQz1M5dSi078E6jUEn6ZVhdtXjHh

