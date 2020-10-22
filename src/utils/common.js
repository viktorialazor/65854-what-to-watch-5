import {RATING_MIN, RATING_MAX, VOTES_MIN, VOTES_MAX, REVIEWS_TEXT, YEAR, MAX_MONTH_GAP, MAX_DAYS_GAP, MAX_HOURS_GAP, MAX_MINUTES_GAP, REVIEWS_AUTHORS} from "../const.js";

export const getRandomInteger = (from = 0, to = 1) => {
  const lower = Math.ceil(Math.min(from, to));
  const upper = Math.floor(Math.max(from, to));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloat = (from = 1, to = 10) => {
  const lower = Math.min(from, to);
  const upper = Math.max(from, to);
  let number = (lower + Math.random() * (upper - lower + 1)).toFixed(1);

  if (number >= 10) {
    number = 10;
  }

  return number;
};

export const generateDescription = () => {

  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  const totalStrings = getRandomInteger(1, 5);
  let description = ``;
  let descriptionsFilm = descriptions.slice();

  for (let i = 0; i < totalStrings; i++) {
    let randomIndex = getRandomInteger(0, descriptionsFilm.length - 1);

    if (i > 0 && i < totalStrings) {
      description += ``;
    }

    description += descriptionsFilm[randomIndex];
    descriptionsFilm.splice(randomIndex, 1);
  }

  return description;
};

export const generateRating = () => {
  const rating = getRandomFloat(RATING_MIN, RATING_MAX);
  let ratingDescription = ``;
  let totalRating = {};

  if (rating < 3) {
    ratingDescription = `Bad`;
  } else if (rating >= 3 && rating < 5) {
    ratingDescription = `Normal`;
  } else if (rating >= 5 && rating < 7) {
    ratingDescription = `Good`;
  } else if (rating >= 7 && rating < 9) {
    ratingDescription = `Very good`;
  } else {
    ratingDescription = `Awesome`;
  }

  totalRating.rating = parseFloat(rating);
  totalRating.ratingDescription = ratingDescription;

  return totalRating;
};

export const generateVotes = () => {
  return getRandomInteger(VOTES_MIN, VOTES_MAX);
};

export const generateReviewDate = () => {
  const monthGap = getRandomInteger(-MAX_MONTH_GAP, MAX_MONTH_GAP);
  const daysGap = getRandomInteger(-MAX_DAYS_GAP, MAX_DAYS_GAP);
  const hoursGap = getRandomInteger(-MAX_HOURS_GAP, MAX_HOURS_GAP);
  const minutesGap = getRandomInteger(-MAX_MINUTES_GAP, MAX_MINUTES_GAP);
  const currentDate = new Date();

  currentDate.setFullYear(YEAR, monthGap, daysGap);
  currentDate.setHours(hoursGap, minutesGap);

  return new Date(currentDate);
};

export const humanizeDate = (date) => {
  return date.toLocaleString(`en-US`, {year: `numeric`, month: `numeric`, day: `numeric`, hour: `numeric`, minute: `numeric`});
};

export const generateReviewAuthor = () => {
  const randomIndex = getRandomInteger(0, REVIEWS_AUTHORS.length - 1);

  return REVIEWS_AUTHORS[randomIndex];
};

export const generateReviewText = () => {
  const randomIndex = getRandomInteger(0, REVIEWS_TEXT.length - 1);

  return REVIEWS_TEXT[randomIndex];
};
