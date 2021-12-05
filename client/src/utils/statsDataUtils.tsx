/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { isThisWeek, isToday, isThisMonth } from 'date-fns';
import { task } from '../context/state';

type temp={day: number; month: number; week: number}
type Stats= { created: temp; done: temp };
type row={type: string; day: number; week: number; month: number};

const creatRow = (type: string, day: number, week: number, month: number): row => ({
  type, day, week, month,
});

function createData(stats: any): row[] {
  return Object.keys(stats)
    .map((key) => creatRow(key, stats[key].day, stats[key].week, stats[key].month));
}

function WhenIs(type: keyof Stats, date: 'doneDate' | 'creationDate', t: task, stats: Stats) {
  if (isToday(new Date(t[date] || 0))) { stats[type].day += 1; }
  if (isThisWeek(new Date(t[date] || 0))) { stats[type].week += 1; }
  if (isThisMonth(new Date(t[date] || 0))) { stats[type].month += 1; }
}

const statsExtractor = (tasks: task[]) => {
  const stats: Stats = {
    created: {
      day: 0,
      week: 0,
      month: 0,
    },
    done: {
      day: 0,
      week: 0,
      month: 0,
    },
  };
  tasks.forEach(
    (t: task) => {
      WhenIs('created', 'creationDate', t, stats);
      if (t.done) WhenIs('done', 'doneDate', t, stats);
    },
  );

  return createData(stats);
};

export default statsExtractor;
