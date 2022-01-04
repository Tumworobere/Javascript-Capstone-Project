const commentsCounter = (htmlElement) => {
  if (htmlElement) {
    return htmlElement.childElementCount;
  }
  return 0;
};

export default commentsCounter;
