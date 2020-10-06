var board=new Array();
var score=0;


$(document).ready(function(){
    newgame();
});//括号why这样



function newgame(){
    //初始化棋盘格
    init();



    //随机在两个格子里生成随机数
    generateOneNumber();
    generateOneNumber();


}


function init(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var gridCell=$('#grid-cell-'+i+"-"+j);
            gridCell.css('top',getPosTop(i,j));//getPosTop放去support文件下
            gridCell.css('left',getPosLeft(i,j));
        }
    }


 
    for(var i=0;i<4;i++){
        board[i]=new Array();
        for(var j=0;j<4;j++)
        board[i][j]=0;
        
    }
    
    updateBoardView();

}



function updateBoardView(){
    $(".number-cell").remove();
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++){
            $("#number-cell").append('<div class="number-cell" id="number-cell-${i}-${j}"></div>')
            var theNumberCell=$('#number-cell-'+i+'-'+j);
            
            if(board[i][j]==0){//数字中没有数字是不会显示的
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j)+50);//把这个0点放在格子的最中间，即看不见。不写px单位？ 
                theNumberCell.css('left',getPosLeft(i,j)+50);
        

            }
            else{
                theNumberCell.css('width','100px');
                theNumberCell.css('height','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color',getNumberColor(board[i][j]));//这个是设置前景色
                theNumberCell.text(board[i][j]);
            }




        }

}


function generateOneNumber(){//随机生成一个数字
    if(nospace(board))
        return false;

    //随机生成一个位置
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));
    while(true){
        if(board[randx][randy]==0)
            break;
        
            randx=parseInt(Math.floor(Math.random()*4));
            randy=parseInt(Math.floor(Math.random()*4));
           
    }



    //随机生成一个数字
    var randNumber=Math.random()<0.5?2:4;


    //在随机位置显示随机数字
    board[randx][randy]=randNumber;
    showNumberWithAnimation(randx,randy,randNumber);

    
    
        return true; 
}