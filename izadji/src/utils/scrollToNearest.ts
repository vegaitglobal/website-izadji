const slideToContent = (nextContent: Element) => {
  nextContent?.scrollIntoView({
    behavior: 'smooth',
  });
};

export default slideToContent;
