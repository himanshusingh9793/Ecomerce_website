var MenuItem = document.getElementById("MenuItems");
MenuItem.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItem.style.maxHeight == "0px") {
    MenuItem.style.maxHeight = "200px";
  }
  else 
  {
    MenuItem.style.maxHeight = "0px";

  }
}