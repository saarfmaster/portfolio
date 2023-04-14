var CashInHand = prompt("Enter the total amount of cash you own: ");
var Debts = prompt("Enter the total amount of debts you own: ");
var ZakaatableMoney = CashInHand-Debts;
var Zakaat= ZakaatableMoney / 40;


if (ZakaatableMoney < 400) {
    alert("Zakaat is not due on your wealth");
} else {
    alert("Your Zakaat is $"+Zakaat);
}