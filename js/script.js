// javascript start 

// example 01 start 
function showDate(){
    document.getElementById('sdate').innerHTML = Date();
}

// example 02 start 
function textChange(){
    document.getElementById('tchange').innerHTML = "Hello JavaScript"
}

// example 03 start
function happy(){
    document.getElementById('happysad').src = "images/chiens-funny-animals.gif";
}
function sad(){
    document.getElementById('happysad').src = "images/sad-sea.gif";
}

// example 04 start
function changefs(){
    document.getElementById('changefs').style.fontSize = '30px';
}

// example 05 start
function changefc(){
    document.getElementById('changefc').style.color = "red";
}

// example 06 start
function changebg(){
    document.getElementById('changebg').style.backgroundColor = "red";
    document.getElementById('changebg').style.color = "white";
}

// example 07 start
function show(){
    document.getElementById("showhide").style.display = "block";
}
function hide(){
    document.getElementById("showhide").style.display = "none";
}

// example 08 start
function walert(){
    window.alert("Welcome");
}

// example 09 start
function dwrite(){
    document.write("HI I am JavaScript bla bla bla bla..................");
}

// example 10 start
function wprint(){
    window.print();
}


// javascript end 




// jquery start 



$(document).ready(function(){


    // example 01 start 
    $('#jqshow').on('click', function(){
        $('.s_hide').show();
    })
    
    $('#jqhide').on('click', function(){
        $('.s_hide').hide();
    }) 
    // example 01 end 
    
    // example 02 start 
    $('.p_hide').on('click', function(){
        $(this).hide();
    })
    // example 02 end 
    
    // example 03 start 
    $('#alert').on('click', function(){
        alert('Welcome.........');
    });
    // example 03 end 

    // example 04 start 
    $('.focus').on('focus' ,function(){
        $(this).css("background-color", "blue");
    });
    $('.focus').on('blur' ,function(){
        $(this).css("background-color", "green");
    })
    // example 04 end 

    // example 05 start 
    $(".bg_c").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    }  
    });
    // example 05 end
    
    // example 06 start
    $('#h_hide').on('click' ,function(){
        $('.hen').hide();
    }) 
    // example 06 end
    
    // example 07 start
    $('.an_show').on('click', function(){
        $('.ani').show();
    });
    $('.an_hide').on('click', function(){
        $('.ani').hide();
    });
    $('.an_toggle').on('click', function(){
        $('.ani').toggle();
    });
    // example 07 end 
    
    // example 8 start 
    $('.fade_in').on('click', function(){
        $('.div1').fadeIn();
        $('.div2').fadeIn("slow");
        $('.div3').fadeIn('3000');
    });
    // example 8 end 

    // example 9 start 
    $('.fade_out').on('click', function(){
        $('.div4').fadeOut();
        $('.div5').fadeOut("slow");
        $('.div6').fadeOut('3000');
    });
    // example 9 end 

    // example 10 start 
    $('.fade_togg').on('click', function(){
        $('.div7').fadeToggle();
        $('.div8').fadeToggle("slow");
        $('.div9').fadeToggle('1000');
    });
    // example 10 end 

    // jq ui xm 1 start 
    $( "#draggable" ).draggable({ snap: true });
    $( "#draggable2" ).draggable({ snap: ".ui-widget-header" });
    $( "#draggable3" ).draggable({ snap: ".ui-widget-header", snapMode: "outer" });
    $( "#draggable4" ).draggable({ grid: [ 20, 20 ] });
    $( "#draggable5" ).draggable({ grid: [ 80, 80 ] });
    // jq ui xm 1 end
    
    // jq ui xm 2 start 
    
    $( "#sortable" ).sortable();
    // jq ui xm 2 end 










    });
    
    
    


// jqurey end 