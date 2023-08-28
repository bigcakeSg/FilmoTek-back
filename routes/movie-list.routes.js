const express = require('express');
const router = express.Router();

const movieList = [
  // Spielberg
  'tt0067023',
  'tt0072226',
  'tt0073195',
  'tt0075860',
  'tt0078723',
  'tt0082971',
  'tt0083866',
  'tt0086491',
  'tt0087469',
  'tt0088939',
  'tt0092965',
  'tt0097576',
  'tt0096794',
  'tt0102057',
  'tt0107290',
  'tt0108052',
  'tt0119567',
  'tt0118607',
  'tt0120815',
  'tt0212720',
  'tt0181689',
  'tt0264464',
  'tt0362227',
  'tt0407304',
  'tt0408306',
  'tt0367882',
  'tt0983193',
  'tt1568911',
  'tt0443272',
  'tt3682448',
  'tt3691740',
  'tt6294822',
  'tt1677720',
  'tt3581652',
  'tt14208870',
  // Wacho
  'tt0115736',
  'tt0133093',
  'tt0234215',
  'tt0242653',
  'tt0811080',
  'tt1371111',
  'tt1617661',
  'tt10838180',
  // Fincher
  'tt0103644',
  'tt0114369',
  'tt0119174',
  'tt0137523',
  'tt0258000',
  'tt0443706',
  'tt0421715',
  'tt1285016',
  'tt1568346',
  'tt2267998',
  // Cameron,
  'tt0082910',
  'tt0088247',
  'tt0090605',
  'tt0096754',
  'tt0103064',
  'tt0111503',
  'tt0120338',
  'tt0499549',
  // Nolan
  'tt0209144',
  'tt0278504',
  'tt0372784',
  'tt0482571',
  'tt0468569',
  'tt1375666',
  'tt1345836',
  'tt0816692',
  'tt5013056',
  'tt6723592',
  // Bay
  'tt0112442',
  'tt0117500',
  'tt0172156',
  'tt0399201',
  'tt0418279',
  'tt1055369',
  'tt1399103',
  'tt1980209',
  'tt2109248',
  'tt4172430',
  'tt3371366',
  'tt4998632',
  // Lynch
  'tt0074486',
  'tt0080678',
  'tt0100935',
  'tt0105665',
  'tt0116922',
  'tt0166924',
  // Kubrick,
  'tt0054331',
  'tt0056193',
  'tt0057012',
  'tt0062622',
  'tt0066921',
  'tt0081505',
  'tt0093058',
  'tt0120663',
  // De Palma
  'tt0063036',
  'tt0065641',
  'tt0065836',
  'tt0070698',
  'tt0071994',
  'tt0074991',
  'tt0074285',
  'tt0077588',
  'tt0080661',
  'tt0082085',
  'tt0086250',
  'tt0086984',
  'tt0094226',
  'tt0097027',
  'tt0099165',
  'tt0105217',
  'tt0106519',
  'tt0117060',
  'tt0120832',
  'tt0183523',
  'tt0280665',
  'tt0387877',
  'tt0937237',
  'tt1829012',
  // Carpenter
  'tt0074156',
  'tt0077651',
  'tt0080749',
  'tt0082340',
  'tt0084787',
  'tt0085333',
  'tt0088172',
  'tt0090728',
  'tt0093777',
  'tt0096256',
  'tt0104850',
  'tt0113409',
  'tt0114852',
  'tt0116225',
  'tt0120877',
  'tt0228333',
  'tt1369706',
  // Zemeckis
  'tt0088011',
  'tt0088763',
  'tt0096438',
  'tt0096874',
  'tt0099088',
  'tt0104070',
  'tt0109830',
  'tt0118884',
  'tt0161081',
  'tt0162222',
  'tt0338348',
  'tt0442933',
  'tt1067106',
  'tt1907668',
  'tt3488710',
  'tt3640424',
  'tt3289724',
  'tt0805647',
  // Burton
  'tt0089791',
  'tt0094721',
  'tt0096895',
  'tt0099487',
  'tt0103776',
  'tt0109707',
  'tt0116996',
  'tt0162661',
  'tt0133152',
  'tt0319061',
  'tt0367594',
  'tt0121164',
  'tt0408236',
  'tt1014759',
  'tt1142977',
  'tt1126590',
  // Hitchcock
  'tt0017075',
  'tt0018328',
  'tt0018876',
  'tt0018756',
  'tt0020142',
  'tt0019702',
  'tt0021015',
  'tt0021165',
  'tt0022395',
  'tt0021128',
  'tt0023395',
  'tt0023285',
  'tt0024747',
  'tt0025452',
  'tt0026029',
  'tt0028231',
  'tt0028212',
  'tt0029811',
  'tt0030341',
  'tt0031505',
  //
  'tt0032976',
  'tt0032484',
  'tt0033922',
  'tt0034248',
  'tt0035279',
  'tt0036342',
  'tt0037017',
  'tt0036621',
  'tt0036659',
  'tt0038109',
  'tt0038787',
  'tt0039694',
  'tt0040746',
  'tt0042004',
  'tt0042994',
  'tt0044079',
  'tt0045897',
  'tt0046912',
  'tt0047396',
  'tt0048728',
  'tt0048750',
  'tt0049470',
  'tt0051207',
  'tt0050064',
  'tt0052357',
  'tt0053125',
  'tt0054215',
  'tt0056869',
  'tt0058329',
  'tt0061107',
  'tt0065112',
  'tt0068611',
  'tt0074512',
  // Lean
  'tt0050212',
  'tt0056172',
  'tt0059113',
  'tt0066319',
  'tt0087892',
  // Polanski
  'tt0061655',
  'tt0063522',
  'tt0071315',
  'tt0142688',
  'tt0253474',
  'tt1139328'
];

router.get('/', (req, res) => {
  res.json(movieList);
});

module.exports = router;
