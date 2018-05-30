// import compTrans from './compTrans.js';


export default function loaderKill(){

  var loader = document.getElementById('loader');
  var root = document.getElementById('root');
  let oldChildren = document.createElement('div');
  oldChildren.setAttribute("id", "oldChildren" );
  var fragment = document.createDocumentFragment();
  let i = 1;
  while (root.childNodes.length > 0) {
    oldChildren.appendChild(root.childNodes[0]);
  }
  root.parentNode.removeChild(root);
    setInterval(function(){
      if (i===1) {
        while(loader.firstChild){
          fragment.appendChild(loader.firstChild);
        }
        loader.parentNode.replaceChild(fragment,loader);
        let root = document.createElement('div');
        root.setAttribute("id", "root" );
        document.body.appendChild(root);
        i--;
        while (oldChildren.childNodes.length > 0) {
          root.appendChild(oldChildren.childNodes[0]);
            // compTrans();
        }
        console.log(i);
        console.log('loader removed');
      }
    }, 1000);

}
