import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useI18nField from '@/hooks/useI18nField';

import { Contact } from '@/types/Contact';
import ContactItem from '@/components/Contact/ContactItem';
import Title from '@/components/commons/Title';

const namespaces = ['contacts', 'common'];

interface ContactsProps {
  contacts: Contact[];
}

const Contacts = ({ contacts }: ContactsProps) => {
  const title = useI18nField('title', namespaces);
  return (
    <>
      <Head>
        <title>{`${title} | Rômulo`}</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 px-6 md:space-y-16 md:px-32">
        <Title text={title} />
        <ul className="table mx-auto space-y-6 md:space-y-8">
          {contacts.map((contact) => (
            <ContactItem key={contact.name} contact={contact} />
          ))}
        </ul>
      </div>
    </>
  );
};

const loadContacts = async (): Promise<Contact[]> => {
  const res = await fetch(
    'https://gist.githubusercontent.com/romulofreires1/bb94772f28a03bd61a3cbdb3c9ec60a2/raw/social-media.json',
  );
  return res.json();
};

export const getStaticProps: GetStaticProps<ContactsProps> = async ({
  locale,
}) => {
  const contacts = await loadContacts();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, namespaces)),
      contacts,
    },
    revalidate: 60,
  };
};

export default Contacts;
