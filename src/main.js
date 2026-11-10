import './styles/main.css';
import { timetable } from './data/timetable.js';

const ROOM_MISSING_LONG = 'tunniplaanis märkimata';
const ROOM_MISSING_SHORT = 'Ruum märkimata';

// Builds a local Date from "YYYY-MM-DD" and "HH:MM".
function toDate(isoDate, time) {
  const [year, month, day] = isoDate.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// ISO 8601 week number.
function getWeekNumber(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayOfWeek = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayOfWeek);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  return Math.ceil(((target - yearStart) / 86400000 + 1) / 7);
}

function formatDay(date) {
  const text = new Intl.DateTimeFormat('et-EE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(date);
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Marks each lesson as past, current, next or upcoming relative to `now`.
function addStatuses(lessons, isoDate, now) {
  let nextFound = false;
  return lessons.map((lesson) => {
    const startsAt = toDate(isoDate, lesson.start);
    const endsAt = toDate(isoDate, lesson.end);
    let status = 'upcoming';
    if (endsAt <= now) {
      status = 'past';
    } else if (startsAt <= now) {
      status = 'current';
      nextFound = true;
    } else if (!nextFound) {
      status = 'next';
      nextFound = true;
    }
    return { ...lesson, status };
  });
}

function field(root, name) {
  return root.querySelector(`[data-field="${name}"]`);
}

function setTime(element, isoDate, time) {
  element.textContent = time;
  element.dateTime = `${isoDate}T${time}`;
}

function renderHeader({ date, group }, now) {
  const day = toDate(date, '00:00');
  const dayElement = field(document, 'day');
  dayElement.textContent = formatDay(day);
  dayElement.dateTime = date;

  const meta = [];
  if (isSameDay(day, now)) meta.push('Täna');
  meta.push(`${getWeekNumber(day)}. nädal`);
  field(document, 'day-meta').textContent = meta.join(' · ');

  field(document, 'group').textContent = group.code;
  field(document, 'program').textContent = group.programName;
}

function renderNextLesson(lessons, isoDate) {
  const section = document.querySelector('.next-lesson');
  const featured =
    lessons.find((lesson) => lesson.status === 'current') ||
    lessons.find((lesson) => lesson.status === 'next');

  const content = field(section, 'content');
  const empty = field(section, 'empty');

  if (!featured) {
    field(section, 'label').textContent = 'Päeva tunnid';
    content.hidden = true;
    empty.hidden = false;
    empty.textContent = lessons.length
      ? 'Selle päeva tunnid on läbi.'
      : 'Sellel päeval tunde ei ole.';
    return;
  }

  field(section, 'label').textContent =
    featured.status === 'current' ? 'Käimasolev tund' : 'Järgmine tund';
  setTime(field(section, 'start'), isoDate, featured.start);
  setTime(field(section, 'end'), isoDate, featured.end);
  field(section, 'title').textContent = featured.title;
  field(section, 'room').textContent = featured.room || ROOM_MISSING_LONG;
  field(section, 'teacher').textContent = featured.teacher;
}

function renderLessonList(lessons, isoDate) {
  const list = field(document, 'lesson-list');
  const template = document.querySelector('#lesson-template');

  field(document, 'count').textContent = `(${lessons.length})`;

  lessons.forEach((lesson, index) => {
    const item = template.content.firstElementChild.cloneNode(true);
    const previous = lessons[index - 1];

    if (previous && previous.end !== lesson.start) {
      const breakElement = field(item, 'break');
      breakElement.textContent = `Vahe ${previous.end}–${lesson.start}`;
      breakElement.hidden = false;
    }

    setTime(field(item, 'start'), isoDate, lesson.start);
    setTime(field(item, 'end'), isoDate, lesson.end);
    field(item, 'title').textContent = lesson.title;
    field(item, 'room').textContent = lesson.room ? `Ruum ${lesson.room}` : ROOM_MISSING_SHORT;
    field(item, 'teacher').textContent = lesson.teacher;

    const statusLabels = { current: 'Käimas', next: 'Järgmine' };
    if (statusLabels[lesson.status]) {
      const statusElement = field(item, 'status');
      statusElement.textContent = statusLabels[lesson.status];
      statusElement.hidden = false;
    }
    item.querySelector('.lesson').classList.add(`lesson--${lesson.status}`);

    list.append(item);
  });
}

const now = new Date();
const lessons = addStatuses(timetable.lessons, timetable.date, now);

renderHeader(timetable, now);
renderNextLesson(lessons, timetable.date);
renderLessonList(lessons, timetable.date);
