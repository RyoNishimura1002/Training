const quiz=[
    {
      question:'この中で一番面積が広いのは？',
      choices:['青森県','秋田県','長野県','新潟県'],
      answer:'長野県'
    }, {
      question:'この中で2番目に流域面積が長いのは？',
      choices:['信濃川','石狩川','利根川','北上川'],
      answer:'石狩川'
    }, {
      question:'この中で東京からの直線距離が一番近いのは？',
      choices:['ソウル','平壌','北京','台北'],
      answer:'ソウル'
    },{
      question:'これらの軽バンのうち、駆動方式がRR(リアエンジンリアドライブ)なのは？',
      choices:['アクティ','サンバー','エブリィ','ハイゼットカーゴ'],
      answer:'サンバー'
    }
  ];
  
  const $window=window;
  const $doc=document;
  const $question=$doc.getElementById('js-question');
  const $buttons=$doc.querySelectorAll('.btn');
  
  const quizLen=quiz.length;
  let quizCount=0;
  let score=0;
  
  const init =()=>{
    $question.textContent=quiz[quizCount].question;
    
    const buttonLen=$buttons.length;
    let btnIndex=0;
    
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].choices[btnIndex];
      btnIndex++;
    }
  };
  
  const transition=()=>{
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      result();
    }
  };
  
  const judge=(elm)=>{
    if(elm.textContent===quiz[quizCount].answer){
      $window.alert('正解です!');
      score++;
    } else {
      $window.alert('不正解です!');
    }
    transition();
  };
  
  const result=()=>{
    $question.textContent='お疲れ様でした！あなたのスコアは'+score+'/'+quizLen+'です';
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let choicesIndex = 0;
  let choicesLen = quiz[quizCount].choices.length;
  
  while(choicesIndex < choicesLen){
    $buttons[choicesIndex].addEventListener('click',(e)=>{
      judge(e.target);
    });
    choicesIndex++;
  }