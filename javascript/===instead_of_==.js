// The == or != operator if it necessary convert data automatically.
// The === or !== operator will not convert data. It only compares the value and the type so it's faster then ==.

[10] === 10    // is false
[10]  == 10    // is true
'10' == 10     // is true
'10' === 10    // is false
[]   == 0     // is true
[] ===  0     // is false
'' == false   // is true but true == "a" is false
'' ===   false // is false
