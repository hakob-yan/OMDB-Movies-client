export const formatTitle = (title: string) => {
  if (!title) return title;
  var formattedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  formattedTitle = formattedTitle.replace(/[^A-Za-z0-9 ]/g, "");
  return formattedTitle;
};
