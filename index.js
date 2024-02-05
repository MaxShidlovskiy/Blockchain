// let crypto = require (`crypto`);
// let text = `hash this`;
// let hash = crypto.createHash(`sha256`).update(text).digest(`hex`);

// console.log(hash);

const {Block, BlockChain} = require(`./blockchain`);

const test = new BlockChain();

test.addBlock(new Block(Date.now().toString(), {from: `ivan`, to: `petrov`, amount: 1101111001}));
test.addBlock(new Block(Date.now().toString(), {from: `dima`, to: `belsky`, amount: 1011010111}));
test.addBlock(new Block(Date.now().toString(), {from: `egor`, to: `kachan`, amount: 1011100010}));
test.addBlock(new Block(Date.now().toString(), {from: `alex`, to: `prigah`, amount: 1011010101}));
test.addBlock(new Block(Date.now().toString(), {from: `gleb`, to: `markin`, amount: 1010101101}));
test.addBlock(new Block(Date.now().toString(), {from: `odor`, to: `alexis`, amount: 1010101011}));

console.log (test.chain);