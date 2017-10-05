// evenOdd takes an input n and determines if it is an even number
function evenOdd(n) {
    // First remind the user what number they entered
    console.log();

    // Determine whether the number is even
    if () {
        console.log();
    } else {
        console.log();
    }
}
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
evenOdd(2);
printme('Testing...');
printme(`\t did you properly return the user input?\t ${out[0] == 'You entered 2.'} `);
const a = [3, 4];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    evenOdd(a[i]);
    const t = a[i] % 2 == 0 ? 'even' : 'odd';
    printme(`\t did you properly return a statement for ${t} values?\t ${out[1] == 'Your number is ' + t + '!'}`);
}
