export const localTheme = localStorage.getItem('pt-theme') || "dark";

export const setLocalTheme = theme => {
  localStorage.setItem("pt-theme", theme);
}