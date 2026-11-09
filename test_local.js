function getLocalISODate(d = new Date()) {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().split('T')[0];
}
console.log(getLocalISODate());
