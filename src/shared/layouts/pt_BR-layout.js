export default {
  layout: {
    default: [
      "' 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} q w e r t y u i o p ' [",
      '{lock} a s d f g h j k l ç ~ ] {enter}',
      '{shift} \\ z x c v b n m , . ; / {shift}',
      '.com @ {space} {close}',
    ],
    shift: [
      '" ! @ # $ % ^ & * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P ` {',
      '{lock} A S D F G H J K L Ç ^ } {enter}',
      '{shift} | Z X C V B N M < > : ? {shift}',
      '.com @ {space} {close}',
    ],
  },
  layoutCandidates: { a: 'á à ã', e: 'é è ê ë', i: 'í ì', o: 'ô ö ò ó õ', u:'û ü ù ú' },
};

//http://www.mhavila.com.br/link/unix/abnt2/
