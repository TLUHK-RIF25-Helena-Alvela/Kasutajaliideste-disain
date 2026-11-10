// Verified timetable data for group RIF 2 on 12 November 2026.
// Source: docs/tunniplaan-naidis.png (checked by the author).
// `room: null` means the room is not set in the official timetable.

export const timetable = {
  date: '2026-11-12',
  group: {
    code: 'RIF 2',
    programName: 'Rakendusinformaatika 2. kursus',
  },
  lessons: [
    {
      start: '10:00',
      end: '13:15',
      title: 'Veebiraamistike rakendamine',
      courseCode: 'HKI5122.HK',
      teacher: 'Juho Kalberg',
      room: null,
      volume: 4,
    },
    {
      start: '14:15',
      end: '17:30',
      title: 'Kasutajaliidese disain',
      courseCode: 'HKI5120.HK',
      teacher: 'Juho Kalberg',
      room: null,
      volume: 4,
    },
  ],
};
