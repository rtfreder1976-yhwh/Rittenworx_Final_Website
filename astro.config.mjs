// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://madisonhandymanpro.com',
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/home': '/',
    '/index.html': '/',
    '/about.html': '/about',
    '/contact.html': '/contact',
    '/quote.html': '/quote',
    '/services.html': '/services',
    '/locations.html': '/locations',
    '/madison.html': '/locations/madison',
    '/huntsville.html': '/locations/huntsville',
    '/athens.html': '/locations/athens',
    '/decatur.html': '/locations/decatur',
    '/madison-al.html': '/locations/madison',
    '/huntsville-al.html': '/locations/huntsville',
    '/athens-al.html': '/locations/athens',
    '/decatur-al.html': '/locations/decatur',
    '/somerville.html': '/locations/decatur/somerville',
    '/sommerville.html': '/locations/decatur/somerville',
    '/triana.html': '/locations/madison',
    '/harvest.html': '/locations/madison/harvest',
    '/hartselle.html': '/locations/decatur',
    '/service-area/decatur-al': '/locations/decatur',
    '/service-area/madison-al': '/locations/madison',
    '/service-area/huntsville-al': '/locations/huntsville',
    '/service-area/athens-al': '/locations/athens',
    '/service-area/somerville-al': '/locations/decatur/somerville',
    '/service-area/triana-al': '/locations/madison',
    '/service-area/harvest-al': '/locations/madison/harvest',
    '/service-area/hartselle-al': '/locations/decatur',
    '/service-area/meridianville-al': '/locations/huntsville',
    '/service-area/hazel-green-al': '/locations/huntsville',
    '/drywall.html': '/services/drywall',
    '/painting.html': '/services/painting',
    '/flooring.html': '/services/flooring',
    '/gutter-cleaning.html': '/services/gutter-cleaning',
    '/gutter-cleaning-repair.html': '/services/gutter-cleaning',
    '/carpentry-wood-repair.html': '/services/finish-carpentry',
    '/furniture-assembly.html': '/services',
    '/tv-mounting.html': '/services',
    '/pressure-washing.html': '/services',
    '/deck-building-repair.html': '/services',
    '/door-window-installation.html': '/services',
    '/fence-installation-repair.html': '/services',
    '/handyman-services-madison-al': '/locations/madison',
    '/handyman-services-huntsville-al': '/locations/huntsville',
    '/drywall-repair-madison-al': '/services/drywall-repair-madison-al',
    '/gutter-installation-harvest-al': '/services/gutter-installation-harvest-al',
    '/painting-services-huntsville-al': '/services/interior-painting-huntsville-al',
    '/finding-reliable-general-contractors-in-huntsville': '/blog',
    '/how-much-does-interior-painting-cost-in-huntsville': '/blog/how-much-does-interior-painting-cost-in-huntsville',
    '/faq.html': '/',
    '/handyman-resources': '/blog'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://madisonhandymanpro.com/',
        'https://madisonhandymanpro.com/services/',
        'https://madisonhandymanpro.com/locations/',
        'https://madisonhandymanpro.com/about/',
        'https://madisonhandymanpro.com/contact/'
      ],
      serialize(item) {
        // Set custom priorities based on page importance
        if (item.url === 'https://madisonhandymanpro.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/services')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/contact')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/locations')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/about')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ]
});
