export const LOGO_URL =
  "https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png";
export const LOGIN_BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const getRandomPhotoURL = () => {
  const photos = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg",
    "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",
  ];
  return photos[Math.floor(Math.random() * photos.length)];
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWYyMjIxNTVmNzdjYzU5NDRmYWU1Mjk3ZjdkMmI4YiIsInN1YiI6IjY0NDExODc0ZTJiY2E4MDUwOTQyYzE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.thOSjcFNLuOOFUJz3zAdn3I_KiMs1UtMJposbCdeaMM",
  },
};
