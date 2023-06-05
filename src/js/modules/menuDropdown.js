export const menuDropDown = () => {
    let dropDown = false;

    const dropDownIcon = document.getElementById("dropDownIcon");
    const navBar = document.getElementsByClassName("nav-bar")[0];
    const main = document.getElementById("main");

    dropDownIcon.addEventListener("click", () => {
        if(!dropDown) {
            navBar.style.marginTop="100px";
            navBar.style.boxShadow="0px 1px 1px 0px rgba(0, 0, 0, 0.3)";
            main.style.padding="125px 10px";
            dropDown = true;
        } else {
            navBar.style.marginTop="0";
            navBar.style.boxShadow="none";
            main.style.padding="80px 10px";
            dropDown = false;
        }
    })

}