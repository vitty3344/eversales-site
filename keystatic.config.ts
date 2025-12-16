// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud', // We start with 'local' mode for development
  },
    cloud: {
    project: 'eversales/eversales-site',
  },
  collections: {
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*', // Where to save the files
      format: { data: 'json' }, // We are using JSON files
      schema: {
        title: fields.slug({ name: { label: 'Event Title' } }),
        date: fields.date({ label: 'Date' }),
        location: fields.text({ label: 'Location' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Workshop', value: 'Workshop' },
            { label: 'Webinar', value: 'Webinar' },
            { label: 'Accelerator', value: 'Accelerator' },
            { label: 'Bootcamp', value: 'Bootcamp' },
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