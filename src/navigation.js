import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [

    {
      text: 'A propos',
      links: [
        {
          text: 'Qui nous sommes',
          href: getPermalink('/who'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Liste des articles',
          href: getBlogPermalink(),
        },
        {
          text: 'Récolte en cours',
          href: getPermalink('recolte-en-cours', 'post'),
        },
      ],
    },
   
  ],
};

export const footerData = {
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/veritable_assurance_sante/' },
    
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Site web crée sur la base de <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
