import Navigo from "navigo";
import header from "./header";
import signup from "./signup";


const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = header.render();
    document.getElementById("lab3").innerHTML = content;

};

router.on({
    "/": () => {
        print();
    },
    "/signup": () => {
        print(signup.render());
    },
});
router.resolve();