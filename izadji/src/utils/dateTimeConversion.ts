import dayjs from 'dayjs';

const monthSwitch = (monthNumber: string) => {
  switch (monthNumber) {
    case '1': {
      return 'JANUAR';
    }
    case '2': {
      return 'FEBRUAR';
    }
    case '3': {
      return 'MART';
    }
    case '4': {
      return 'APRIL';
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
      return 'AVGUST';
    }
    case '9': {
      return 'SEPTEMBAR';
    }
    case '10': {
      return 'OKTOBAR';
    }
    case '11': {
      return 'NOVEMBAR';
    }
    case '12': {
      return 'DECEMBAR';
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

export const convertDate = (date: string, isShort: boolean) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, month, day] = date.split('-');

  return isShort
    ? `${day}.${monthSwitch(month)?.slice(0, 3)}`
    : `${day}.${monthSwitch(month)}`;
};

export const convertWeekDay = (date: string) => {
  return dayOfTheWeekSwitch(dayjs(date).format('dddd'));
};
