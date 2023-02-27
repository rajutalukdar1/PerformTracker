export const localTheme = localStorage.getItem('pt-theme') || "light";

export const setLocalTheme = theme => {
  localStorage.setItem("pt-theme", theme);
}