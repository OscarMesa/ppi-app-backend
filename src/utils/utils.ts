import { add } from 'date-fns';

export enum AssignationWaveEnum {
  INIT = 0,
}

export enum DriverScheduleStatusEnum {
  TO_BE_CONFIRMED = 1,
  CONFIRMED = 2,
  CANCELLED = 3,
}

export const calculateDay = (
  startDate: Date,
): { startDate: Date; endDate: Date } => {
  const endDate = add(startDate, { days: 7 });
  return { startDate, endDate };
};

export const getBeareTokenAuth = ({ headers }): string => {
  const authorization = headers.authorization || headers.Authorization;
  return authorization ? authorization.substring(7) : null;
};

export const getDayName = (day: number): string => {
  const days = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
  };
  return days[day];
};

export const getMonthName = (month: number): string => {
  const months = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
  };
  return months[month];
};
