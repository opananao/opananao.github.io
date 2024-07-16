import App from './components/App.html';

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'svelte' }
});
function abc() {
  var a= 5;
  function xyz() {
    console.log(a);
  }return xyz();
}
abc();
