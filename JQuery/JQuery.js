$(document).ready(function () {
    let button = ("<button id= 'alertBtn' >1. Alert!</button>")
    $("body").append(button)
    $('#colorChange').css('background-color', 'yellow')
    let para = ("<p id='pColor'>4. Click on me to change my color!</p>")
    $("body").append(para)
    let nameBtn = ("<button id='name'>5. Add Name</button>")
    $("body").append(nameBtn)
    let nameDiv = ("<div id='nameDiv'></div>")
    $("body").append(nameDiv)
    let nameSpan = ("<span id='nameSpan'>Jacob Watters</span>")
    let friendsArray = ['Danny', 'Denny', 'Donny', 'Diplo', 'Jeremy', 'Adam', 'Badam', 'Smokey', 'The Bandit', 'Christopher Lee']
    
    
    
    
    
    $('#alertBtn').on("click", function () {
        alert("Nice Message.")
    })
    $('#TextBtn').on('click', function () {
        let txtBoxTxt = $("#TextBox").val()
        alert(txtBoxTxt)
    })
    $('#colorChange').mouseenter(function () {
        $('#colorChange').css('background-color', 'orange')
    })
    $('#colorChange').mouseleave(function () {
        $('#colorChange').css('background-color', 'yellow')
    })
    $('#pColor').on('click', function () {
        $('#pColor').css('color', randoColor())
    })
    $('#name').on('click', function () {
        $('#nameDiv').append(nameSpan)
    })
    
    function randoColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    $('#ulBtn').on('click',function(){
        for (i = 0; i < friendsArray.length; ++i){
            let friendsLi = ("<li id='friendsLi'>"+friendsArray[i]+"</li>")
            $('#friendsUl').append(friendsLi)
        }
    })
    
})