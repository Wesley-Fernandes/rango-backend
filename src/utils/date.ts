import {
    differenceInHours,
    differenceInMinutes,
    endOfMonth,
    startOfMonth,
  } from 'date-fns';

  export const getDatasParams = async (now:Date = new Date()) => {
    const lastMomentOfCurrentMonth = endOfMonth(now);
    const firstMomentOfCurrentMonth = startOfMonth(now);
  
    const max = lastMomentOfCurrentMonth.toISOString();
    const min = firstMomentOfCurrentMonth.toISOString();
  
    return { max, min };
  };

  export const getMouthParams = async (now: Date) => {
    const lastMomentOfCurrentMonth = endOfMonth(now);
    const firstMomentOfCurrentMonth = startOfMonth(now);
    const max = lastMomentOfCurrentMonth.getTime();
    const min = firstMomentOfCurrentMonth.getTime();
    return { max, min };
  }

  export const converToMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  export const convertToDateString = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString('pt-BR').replace(',', ' ');
  };

  export const convertToDate = (timestamp: number) => {
    return new Date(timestamp * 1000);
  };