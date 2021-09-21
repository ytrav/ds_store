//Adding functionality to searchbar
var terms = new Array();
var max = 5;
            
for (i=1;i<=max;i++) { 
    terms[i] = new Array();
}
            
terms[1]['search'] = 'apple macbook pro 13 2020'; 
terms[1]['des'] = 'Apple Macbook Pro 13" 2020'; 
terms[1]['lnk'] = 'apple-macbook-pro-2020.html';

terms[2]['search'] = 'google pixel book pixelbook go'; 
terms[2]['des'] = 'Google PixelBook Go'; 
terms[2]['lnk'] = 'google-pixelbook-go.html';

terms[3]['search'] = 'apple iphone 12 phone'; 
terms[3]['des'] = 'Apple iPhone 12'; 
terms[3]['lnk'] = 'iphone-12-purple.html';

terms[4]['search'] = 'microsoft surface go 2'; 
terms[4]['des'] = 'Microsoft Surface Go 2'; 
terms[4]['lnk'] = 'microsoft-surface-go-2.html';


terms[5]['search'] = 'samsung tv qled 8k 4k'; 
terms[5]['des'] = 'Samsung QLED TV'; 
terms[5]['lnk'] = 'samsung-tv.html';
function search() {
    var input = document.getElementById('search_input').value.toLowerCase();
    var i=0;
    var list="";
    var pos=-1;
                
    if(input!="") { 
        for(i=1; i<=max; i++) { 
            pos= terms[i]['search'].indexOf(input);
            
            if(pos!=-1) { 
                list= list + '<a class="search_lnk" href="'+terms[i]['lnk']+'">' + terms[i]['des'] + '</a>' + '<br>'; 
            }   
            pos=-1;
        }
        if(list==""){ 
            document.getElementById("listing").innerHTML = "";
            document.getElementById("listing").style.display = "none";
        } else { 
            document.getElementById("listing").innerHTML = list;
            document.getElementById("listing").style.display = "block";
        }
    }
}

//Hiding searchbar when clicked outside of it
document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('listing');

    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
}.bind(this));