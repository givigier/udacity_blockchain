const bitcoin = require('bitcoinjs-lib')
const bitcoinMessage = require('bitcoinjs-message')

const address = '17RebJGPcUX3z7zoWJdmUgkBbvZ7BAKPCB'
const signature_1 = 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWlFhsh3DiW6N0rE'
const signature_2 = 'IFn36Idac3dLo3JvQ8/+AMfgQXbj9h3WIjDXJSUO+0ZbSOVEMhQK+t6RU3CC7ECvq9QshbRtLMLThDfCxa1RkYM='
const signature_3 = 'ICcppPF+jJ+9NlvssL+qfcZP9VRbcBq8Drpw91vo+Z5hHkBuLTy+9q70u+Roi03XUIIRw+x9TU5K6FFm6Dhu718='
const signature_4 = 'HKLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPOUFtDKtx98vHFGUWlFhsh3DiW6N0rE'
const message = 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.'

const sigs = [signature_1, signature_2, signature_3, signature_4];

for (var i = 0; i < sigs.length; i++) {
  var current_sig = sigs[i];
  console.log("Checking sig #" + (i+1) + ": " + current_sig);
  var isValid = bitcoinMessage.verify(message, address, current_sig);
  console.log(isValid);
  console.log('---');
}
