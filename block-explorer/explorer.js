const be = require('blockexplorer');

function getBlock(index) {
  be.blockIndex(index).then((result) => {
    let hashAux = JSON.parse(result).blockHash;
    be.block(hashAux).then((result) => {
      console.log(result);
    });
  }).catch((err) => {
    console.log(err);
  });
}

getBlock(0);
