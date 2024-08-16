// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size = `medium`, message = `I love TS`) {
    console.log(`The size is ${size} and the text printed is: "${message}"`);
}
make_shirt();
make_shirt(`Large`);
make_shirt('Small', 'TypeScript is awesome!');
export {};
