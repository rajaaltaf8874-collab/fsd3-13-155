import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {

    const cin = readline.createInterface({
        input: stdin,
        output: stdout
    });

    let choice;

    do {

        console.log("\nWelcome to shopping cart 🛍️");
        console.log("1 --------- Add to cart");
        console.log("2 --------- Show cart");
        console.log("3 --------- Remove from cart");
        console.log("4 --------- Update Quantity");
        console.log("5 --------- Checkout");

        choice = Number(await cin.question("Enter your choice: "));

        console.log("Entered choice:", choice);

        switch (Number(choice)) {

            case 1:
                console.log("add to cart");
                break;

            case 2:
                console.log("show cart items");
                break;

            case 3:
                console.log("remove items");
                break;

            case 4:
                console.log("update quantity");
                break;

            case 5:
                console.log("see you later");
                process.exit();
                break;

            default:
                console.log("invalid choice, try again");
        }

    } while (choice != "5");

    cin.close();
};

main();
