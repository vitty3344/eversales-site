// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'eversales/eversales-site',
  },
  collections: {
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Event Title' } }),
        date: fields.date({ label: 'Date' }),
        // ADD THIS LINE:
        time: fields.text({ label: 'Time (e.g. 2:00 PM - 3:30 PM)', defaultValue: '' }),
        location: fields.text({ label: 'Location' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Workshop', value: 'Workshop' },
            { label: 'Webinar', value: 'Webinar' },
            { label: 'Accelerator', value: 'Accelerator' },
            { label: 'Bootcamp', value: 'Bootcamp' },
            { label: 'Masterclass', value: 'Masterclass' },
          ],
          defaultValue: 'Webinar',
        }),
        price: fields.text({ label: 'Price (e.g. Free or $2,500)' }),
        link: fields.url({ label: 'Registration Link' }),
        isFeatured: fields.checkbox({ label: 'Feature on Homepage?' }),
      },
    }),
  },
});