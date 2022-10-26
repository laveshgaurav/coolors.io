import html2canvas from "html2canvas";

export const generateHexCodeString = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};

export const isLight = (color) => {
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
};

export const exportAsImage = async (element, imageFileName) => {
  // let width = element.offsetWidth;
  // let height = element.offsetHeight;
  // console.log(width, height);
  // element.style.width = "720px";
  // element.style.height = "1080px";
  const canvas = await html2canvas(element, {
    // width: 720,
    // height: 1080,
    scale: 1,
  });
  // element.style.width = `${width}px`;
  // element.style.height = `${height}px`;
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};
