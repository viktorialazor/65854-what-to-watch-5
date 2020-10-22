import {FILMS_AMOUNT, REVIEWS_MIN, REVIEWS_MAX} from "../const.js";
import {getRandomInteger, generateReviewText, generateRating, generateReviewAuthor, generateReviewDate, humanizeDate} from "../utils/common.js";

const generateReview = () => {
  const reviewsQuantity = getRandomInteger(REVIEWS_MIN, REVIEWS_MAX);
  let reviews = [];

  for (let i = 0; i < reviewsQuantity; i++) {
    const reviewDate = generateReviewDate();

    let review = {
      text: generateReviewText(),
      rating: generateRating(),
      author: generateReviewAuthor(),
      date: humanizeDate(reviewDate),
      dateTime: new Date(reviewDate).toISOString().substring(0, 10).toString()
    };

    reviews.push(review);
  }

  return reviews;
};

const generateReviews = () => {
  let review = [];
  let reviews = [];

  for (let i = 0; i < FILMS_AMOUNT; i++) {
    review = generateReview();
    reviews.push(review);
  }

  return reviews;
};

const reviews = generateReviews();

export default reviews;
