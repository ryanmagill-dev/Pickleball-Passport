// Clinic Week (Nov 2 to 5, 2026) has ended. No offers. Pages stay reachable.
const clinicWeekJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EventSeries',
      '@id': 'https://www.thepickleballpassport.org/clinics#clinic-week',
      name: 'Bangkok Pickleball Clinic Week with Coach Travis Rhea (Nov 2 to 5, 2026)',
      description:
        'Four pickleball sessions in Bangkok, November 2 to 5, 2026, with Coach Travis Rhea. This event has ended.',
      url: 'https://www.thepickleballpassport.org/clinics',
      startDate: '2026-11-02T11:00:00+07:00',
      endDate: '2026-11-05T14:00:00+07:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: [
        { '@id': 'https://www.thepickleballpassport.org/clinics#venue-arise' },
        { '@id': 'https://www.thepickleballpassport.org/clinics#venue-papaya' },
        { '@id': 'https://www.thepickleballpassport.org/clinics#venue-pick-a-court' },
      ],
      organizer: { '@id': 'https://www.thepickleballpassport.org/#organization' },
      maximumAttendeeCapacity: 6,
      subEvent: [
        { '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-02' },
        { '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-03' },
        { '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-04' },
        { '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-05' },
      ],
    },
    {
      '@type': 'Place',
      '@id': 'https://www.thepickleballpassport.org/clinics#venue-arise',
      name: 'Arise Pickleball at BEAT Discovery Udomsuk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2784 Sukhumvit 66/1 Rd',
        addressLocality: 'Bang Na',
        addressRegion: 'Bangkok',
        postalCode: '10260',
        addressCountry: 'TH',
      },
    },
    {
      '@type': 'Place',
      '@id': 'https://www.thepickleballpassport.org/clinics#venue-papaya',
      name: 'Papaya Pickleball Club',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '142/2 Soi Pattanakarn 44',
        addressLocality: 'Suan Luang',
        addressRegion: 'Bangkok',
        postalCode: '10250',
        addressCountry: 'TH',
      },
    },
    {
      '@type': 'Place',
      '@id': 'https://www.thepickleballpassport.org/clinics#venue-pick-a-court',
      name: 'Pick A Court Sukhumvit 62',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5 Soi Sukhumvit 62 Yaek 8',
        addressLocality: 'Phra Khanong Tai',
        addressRegion: 'Bangkok',
        postalCode: '10260',
        addressCountry: 'TH',
      },
    },
    {
      '@type': 'Event',
      '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-02',
      name: 'Clinic Week Bangkok, Mon 2 Nov: Mindset seminar with Coach Travis Rhea',
      startDate: '2026-11-02T11:00:00+07:00',
      endDate: '2026-11-02T14:00:00+07:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@id': 'https://www.thepickleballpassport.org/clinics#venue-arise' },
      superEvent: { '@id': 'https://www.thepickleballpassport.org/clinics#clinic-week' },
      maximumAttendeeCapacity: 6,
    },
    {
      '@type': 'Event',
      '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-03',
      name: 'Clinic Week Bangkok, Tue 3 Nov: Coached open play',
      startDate: '2026-11-03T11:00:00+07:00',
      endDate: '2026-11-03T14:00:00+07:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@id': 'https://www.thepickleballpassport.org/clinics#venue-papaya' },
      superEvent: { '@id': 'https://www.thepickleballpassport.org/clinics#clinic-week' },
      maximumAttendeeCapacity: 6,
    },
    {
      '@type': 'Event',
      '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-04',
      name: 'Clinic Week Bangkok, Wed 4 Nov: Mindset seminar with Coach Travis Rhea',
      startDate: '2026-11-04T11:00:00+07:00',
      endDate: '2026-11-04T14:00:00+07:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@id': 'https://www.thepickleballpassport.org/clinics#venue-arise' },
      superEvent: { '@id': 'https://www.thepickleballpassport.org/clinics#clinic-week' },
      maximumAttendeeCapacity: 6,
    },
    {
      '@type': 'Event',
      '@id': 'https://www.thepickleballpassport.org/clinics#session-2026-11-05',
      name: 'Clinic Week Bangkok, Thu 5 Nov: Wrap-up hour and mini tournament at Pick A Court',
      startDate: '2026-11-05T11:00:00+07:00',
      endDate: '2026-11-05T14:00:00+07:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@id': 'https://www.thepickleballpassport.org/clinics#venue-pick-a-court' },
      superEvent: { '@id': 'https://www.thepickleballpassport.org/clinics#clinic-week' },
      maximumAttendeeCapacity: 6,
    },
  ],
};

export function ClinicWeekJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicWeekJsonLd) }}
    />
  );
}
