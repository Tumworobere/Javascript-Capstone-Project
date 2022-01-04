const itemsCounter = (htmlElement) => {
  if (htmlElement) {
    return htmlElement.childElementCount;
  }
  return 0;
};

export default itemsCounter;
