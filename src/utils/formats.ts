export const formatToMoney = (amount: string | number, decimalCount = 2, decimal = '.', thousands = ',') => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = Number(amount) < 0 ? '-' : '';

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();

    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(Number(amount) - Number(i))
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};

export const formatToMoneyWithCurrency = (
  amount: string | number,
  decimalCount = 2,
  decimal = '.',
  thousands = ','
) => {
  try {
    return `R${formatToMoney(amount, decimalCount, decimal, thousands)}`;
  } catch (e) {
    console.log(e);
  }
};

export const parseToJSON = (data: any) => JSON.parse(data);

export const getYear = (dateString: string) => {
  try {
    let date = new Date(dateString);

    return date.getFullYear();
  } catch (error) {
    console.log('Extract Year error: ' + error);
  }
};

export const isTodayOrPast = (date: string) => {
  try {
    return new Date(date) <= new Date();
  } catch (error) {
    console.log('Check if Date has passed error :', error);
  }
};

export const formatUCTtoISO = (uctDate: string) => {
  try {
    let date = new Date(uctDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    let mString = '';
    let dString = '';

    if (dt < 10) {
      dString = '0' + dt;
    } else {
      dString = dt.toString();
    }

    if (month < 10) {
      mString = '0' + month;
    } else {
      mString = month.toString();
    }

    let isoDate = year + '-' + mString + '-' + dString;

    return isoDate;
  } catch (error) {
    console.log('Date Formatting Error :', error);
  }
};
