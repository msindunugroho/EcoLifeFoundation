export const menuDropDown = () => {
    let dropDown = false;
    const dropDownIcon = document.getElementById("dropDownIcon");
    const main = document.getElementById("main");
    const navBar = document.getElementsByClassName("nav-bar")[0];
    const loging = document.getElementsByClassName("loging")[0];

    dropDownIcon.addEventListener("click", () => {
        if(!dropDown) {
            navBar.style.marginTop="0px";
            loging.style.marginTop="0px";
            main.style.padding="130px 40px 80px 40px";
            dropDown = true;
        } else {
            navBar.style.marginTop="-50px";
            loging.style.marginTop="-50px";
            main.style.padding="80px 40px";
            dropDown = false;
        }
    })
}