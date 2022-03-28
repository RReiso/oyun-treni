const checkType = (img) => {
  if (
    img.slice(0, 37) !== "https://productimages.hepsiburada.net" &&
    img.slice(0, 25) !== "http://res.cloudinary.com"
  ) {
    return "/images/train.png";
  }
  return img;
};

export default checkType;
