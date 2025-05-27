function getISOWeekNumber(date = new Date()) {
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);

    target.setDate(target.getDate() + 3 - ((target.getDay() + 6) % 7));

    const firstThursday = new Date(target.getFullYear(), 0, 4);
    firstThursday.setDate(
        firstThursday.getDate() + 3 - ((firstThursday.getDay() + 6) % 7)
    );

    const weekNumber =
        1 + Math.round((target.getTime() - firstThursday.getTime()) / (7 * 24 * 60 * 60 * 1000));
    return weekNumber;
}

export const isoWeek = getISOWeekNumber();
