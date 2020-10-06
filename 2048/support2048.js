function getPosTop(i,j){
    return 20+i*120;
}

function getPosLeft(i,j){
    return 20+j*120;
}

function getNumberBackgroundColor(number){
    switch(number){
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#eee4da";break;
        case 32:return "#eee4da";break;
        case 64:return "#eee4da";break;
        case 128:return "#eee4da";break;
        case 256:return "#eee4da";break;
        case 512:return "#eee4da";break;
        case 1024:return "#eee4da";break;
        case 2048:return "#eee4da";break;
        case 4096:return "#eee4da";break;
        case 8192:return "#eee4da";break;
     }

     return "black";
}

function getNumberColor(number){
    if(number<=4)
        return "#776e65";
    return 'white';
}


function nospace(board){
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++)
            if(board[i][j]==0)
                return false;
    
    return true;

        
}