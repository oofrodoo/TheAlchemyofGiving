PGDMP  %    
                }            alchemy_giving    17.4    17.4     "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            %           1262    24580    alchemy_giving    DATABASE     t   CREATE DATABASE alchemy_giving WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
    DROP DATABASE alchemy_giving;
                     postgres    false            �            1259    24582    users    TABLE     ?  CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(20) DEFAULT 'user'::character varying,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    24581    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    218            &           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    217            �           2604    24585    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218                      0    24582    users 
   TABLE DATA           L   COPY public.users (id, name, email, password, role, created_at) FROM stdin;
    public               postgres    false    218   �       '           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 5, true);
          public               postgres    false    217            �           2606    24591    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public                 postgres    false    218            �           2606    24589    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218               t  x�m�]o�@���Wx�]�q>�|\e]����nz3:�����nL�4&��}�s�'�e�,g%`�-�L���n�
��f�ѨX� V17�ů�\�����xx��U-{��=�Y�=��?��,��"�=���b�F��0D���h����R�&Nr��LI�)!�Tռ�e	թܡ��R�*~WЕ<��;#�{'��2m#��V#
��kInY4lk4�N�u�ЛygVJ�]��S�=ա���,��tȏ�`���?�"��bٷ��$��G,ϕˉ� ���`��s�iaJ蕡�8�.�/����}\�i��]QD���@��:9���P\�N�ީ7_L?���-�i#��L��F��78���C     