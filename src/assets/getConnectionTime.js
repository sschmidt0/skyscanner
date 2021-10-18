export const getConnectionTime = (segmentsInfo) => {
  const dateList = [];
  const difference = [];

  if (segmentsInfo.length > 0) {
    segmentsInfo.map(element => {
      dateList.push(new Date(element[0].DepartureDateTime));
      dateList.push(new Date(element[0].ArrivalDateTime));
      return dateList;
    });

    for (let i = 1; i <= dateList.length / 2; i++) {
      difference.push(((dateList[2*i] - dateList[2*i-1]) / 60000));
    };
    return difference.filter(value => !Number.isNaN(value)).map(element => {
      return (element < 60
      ? `0h ${element}`
      : (element % 60 === 0)
      ? `${Math.floor(element / 60)}h 00`
      : `${Math.floor(element / 60)}h ${element % 60}`)
    });
  }
};




