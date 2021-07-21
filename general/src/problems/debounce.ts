
console.log("###-- Debounce --###");


function debounce(fn: Function, time: number, context: void) {
  let timeout: ReturnType < typeof setTimeout > ;
  let callbackArgs: typeof arguments;

  return function() {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(context, ...Array.from(callbackArgs), time));
  }
}

function run() {
  console.log('print me');
}
const testDebounce = debounce(run, 1);
testDebounce();
testDebounce();
