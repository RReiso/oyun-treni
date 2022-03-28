const checkType = (img) => {
  if (img.slice(0, 38) !== "https://productimages.hepsiburada.net/") {
    return "/images/train.png";
  }
  return img;
};

export default checkType;
