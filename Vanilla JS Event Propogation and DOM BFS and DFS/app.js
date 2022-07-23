const table = document.getElementById('table');

const tds = document.getElementsByTagName('td');

// for(let td of tds) {
//     td.addEventListener('click', () => {
//         td.style.background = 'red';
//     })
// } THIS IS THE BAD WAY WITHOUT USING BENEFIT OF EVENT BUBBLING, this will add an event listerner to every single new td

table.addEventListener('click', (e) => {
    if(e.target.tagName === 'TD') {
        e.target.style.background = 'red';
    }
}); // this is the better way with adding only one event listener, this way if we add new tds we still only have one event listener

// DFT

const dft = (root) => {
   const nodes = [];

   if(root !== null) {
       const stack = [ root ];

       while(stack.length > 0) {
           const current = stack.pop();
           nodes.push(current);

           const children = current.children;
           for(let child of children) {
               stack.push(child);
           }
       }
   }

   return nodes;
}

const bft = (root) => {
    const result = [];

    if(root !== null) {
        const queue = [ root ];

        while(queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            const children = current.children;
            for(let child of children) {
                queue.push(child);
            }
        }
    }

    return result;
}

const root = document.body;

console.log(dft(root));
console.log(bft(root));

