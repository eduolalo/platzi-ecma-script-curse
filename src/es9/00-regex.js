const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matchers = regex.exec('2024-10-30');

console.table(matchers);
