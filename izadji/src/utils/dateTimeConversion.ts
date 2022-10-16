import dayjs from 'dayjs';

const monthSwitch = (monthNumber: string) => {
  switch (monthNumber) {
    case '1': {
      return 'JAN';
    }
    case '2': {
      return 'FEB';
    }
    case '3': {
      return 'MAR';
    }
    case '4': {
      return 'APR';
    }
    case '5': {
      return 'MAJ';
    }
    case '6': {
      return 'JUN';
    }
    case '7': {
      return 'JUL';
    }
    case '8': {
      return 'AVG';
    }
    case '9': {
      return 'SEP';
    }
    case '10': {
      return 'OKT';
    }
    case '11': {
      return 'NOV';
    }
    case '12': {
      return 'DEC';
    }
  }
};

const dayOfTheWeekSwitch = (dayOfTheWeek: string) => {
  switch (dayOfTheWeek) {
    case 'Monday': {
      return 'PONEDELJAK';
    }
    case 'Tuesday': {
      return 'UTORAK';
    }
    case 'Wednesday': {
      return 'SREDA';
    }
    case 'Thursday': {
      return 'ČETVRTAK';
    }
    case 'Friday': {
      return 'PETAK';
    }
    case 'Saturday': {
      return 'SUBOTA';
    }
    case 'Sunday': {
      return 'NEDELJA';
    }
    default: {
      ('DAN DOGAĐAJA');
    }
  }
};

export const convertDate = (date: string) => {
  const [_, month, day] = date.split('-');

  return `${day}.${monthSwitch(month)}`;
};

export const convertWeekDay = (date: string) => {
  console.log(dayjs(date).format('dddd'));
  return dayOfTheWeekSwitch(dayjs(date).format('dddd'));
};
