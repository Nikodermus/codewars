function findSuperMan(string) {
  if ((
    string
      .match(/s.*u.*p.*e.*r.*m.*a.*n/gi) &&
      !string
        .match(/(su|up|pe|er|rm|ma|an)/gi)
  ) ||
    (
      [...string]
        .reverse()
        .join('')
        .match(/s.*u.*p.*e.*r.*m.*a.*n/gi) &&
      ![...string]
        .reverse()
        .join('')
        .match(/(su|up|pe|er|rm|ma|an)/gi)
    )) {
    return 'Hi, SuperMan!';
  }
  return 'Are you crazy?';
}


print([
  findSuperMan(' hsupermancdf'), //cra
  findSuperMan(' n a m r e p u s '), // sup
  findSuperMan('ulqevwxpetsd tptcf'), //cra
  findSuperMan('hello, i am SxUxPxExRxMxAxN'), //sup
  findSuperMan('jfc Szzw qUdzgh Pz gRddxyRq Mqlvgc yN oddN'), //cra
]);
