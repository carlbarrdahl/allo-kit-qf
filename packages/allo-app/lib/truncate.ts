export const truncate = (str = "", max = 20, sep = "...") => {
  const len = str.length;
  if (len > max) {
    const seplen = sep.length;

    if (seplen > max) {
      return str.substr(len - max);
    }

    const n = -0.5 * (max - len - seplen);

    const center = len / 2;

    const front = str.substr(0, center - n);
    const back = str.substr(len - center + n); // without second arg, will automatically go to end of line.

    return front + sep + back;
  }

  return str;
};
