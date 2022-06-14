let field = []
let row;
let col;
let img;


function preload()
{
    img = loadImage('1.png');
}
function setup()
{


    let factor = 5;
    //img.updatePixels();

    img.loadPixels();
    //console.log(img.width);
    //console.log(img.height);

    row =factor*img.height/10;
    col = factor*img.width/10;
    createCanvas(img.width*factor, img.height*factor);

    for(let x = 0; x < img.height; x++)
    {
        let temp = []
        for(let y = 0; y < img.width; y++)
        {
            if(x%(10/factor)==0 && y%(10/factor) ==0)
            {
                let rgba = img.get(x,y);
                let gcv = 1 - Math.floor(1.999*(((rgba[0] + rgba[1] + rgba[2])/3)/255));
                temp.push(gcv);
                //console.log(gcv);
            }

        }
        if (temp.length != 0)
        {
            field.push(temp);
        }
        
    }

    //console.log(field);

/*    for(let i = 0; i < row; i++)
    {
        temp = []
        for(let j =0; j < col; j++)
        {
            temp.push(Math.floor(2*Math.random()))
        }
        field.push(temp)
    }*/

}


function draw()
{
    background(255);
    //image(img,0,0);
/*    for(let i = 0; i < row; i++)
    {
        for(let j = 0; j < col; j++)
        {
            stroke(255*field[i][j])
            ellipse(i*10,j*10,3,3)
        }
    }*/

    for(let i = 0; i < row-1; i++)
    {
        for(let j =0; j < col-1; j++)
        {
            
            let temp = 8*field[i][j] + 4*field[i+1][j] + 2*field[i+1][j+1]+ 1*field[i][j+1];

            switch(temp)
            {
                case 1:
                    stroke(0);
                    line(i*10,j*10+5,i*10+5,(j+1)*10);
                    break;
                case 2:
                    stroke(0);
                    line((i+1)*10,j*10+5,i*10+5,(j+1)*10);
                    break;
                case 3:
                    stroke(0);
                    line(i*10,j*10+5,(i+1)*10,j*10+5);
                    break;
                case 4:
                    stroke(0);
                    line(i*10 + 5,j*10,(i+1)*10,j*10+5);
                    break;
                case 5:
                    stroke(0);
                    line(i*10 + 5,j*10,i*10,j*10+5);
                    line((i+1)*10,j*10+5,i*10 + 5,(j+1)*10);
                    break;
                case 6:
                    stroke(0);
                    line(i*10+5,j*10,i*10+5,(j+1)*10);
                    break;
                case 7:
                    stroke(0);
                    line(i*10+5,j*10,i*10,j*10+5);
                    break;
                case 8:
                    stroke(0);
                    line(i*10+5,j*10,i*10,j*10+5);
                    break;
                case 9:
                    stroke(0);
                    line(i*10+5,j*10,i*10+5,(j+1)*10);
                    break;
                case 10:
                    stroke(0);
                    line(i*10+5,j*10,(i+1)*10,j*10+5);
                    line(i*10,j*10+5,i*10+5,(j+1)*10);
                    break;
                case 11:
                    stroke(0);
                    line(i*10 + 5,j*10,(i+1)*10,j*10+5);
                    break;
                case 12:
                    stroke(0);
                    line(i*10,j*10+5,(i+1)*10,j*10+5);
                    break;
                case 13:
                    stroke(0);
                    line((i+1)*10,j*10+5,i*10+5,(j+1)*10);
                    break;
                case 14:
                    stroke(0);
                    line(i*10,j*10+5,i*10+5,(j+1)*10);
                    break;
            }
        }
    }
    //image(img,0,0);

}

