// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rittenworxhandyman.net',
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/home': '/',
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
    '/handyman-resources': '/blog',

    // Legacy URLs still indexed in GSC (missing redirects)
    '/flooring-installation-repair.html': '/services/flooring',
    '/home-exterior-and-siding': '/services',
    '/handyman-and-home-repair-services': '/services',
    '/areas-we-serve': '/locations',
    '/plumbing-service': '/services',
    '/seasonal-outdoor-home-maintenance': '/blog',

    // 404s from GSC Coverage report — blog posts on deleted/renamed URLs
    '/how-to-choose-a-handyman-in-somerville': '/blog',
    '/how-to-find-quality-home-repairs-in-decatur': '/blog',
    '/somerville-resident-s-guide-to-home-exterior-repairs': '/blog',
    '/understanding-general-home-repairs-for-renters-and-owners-in-decatur-al': '/blog',
    '/how-electrical-work-services-keep-your-somerville-al-home-safe-and-efficient': '/blog',
    '/which-painting-services-boost-curb-appeal-in-madison-al': '/blog',
    '/what-to-expect-from-electrical-services-in-madison': '/blog',

    // 404s — service/resource pages without redirects
    '/electrical-services': '/services',
    '/electrical-work.html': '/services',
    '/plumbing-repairs.html': '/services',
    '/general-home-repairs': '/services',
    '/faq': '/',

    // 404s — service area pages
    '/service-area/arab-al': '/locations',
    '/service-area/': '/locations',

    // 404s — misc
    '/new-page': '/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.rittenworxhandyman.net/',
        'https://www.rittenworxhandyman.net/services/',
        'https://www.rittenworxhandyman.net/locations/',
        'https://www.rittenworxhandyman.net/about/',
        'https://www.rittenworxhandyman.net/contact/'
      ],
      serialize(item) {
        // Set custom priorities based on page importance
        if (item.url === 'https://www.rittenworxhandyman.net/') {
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
