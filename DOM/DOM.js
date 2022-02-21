document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button')
    let btnText = document.createTextNode('1. Alert!')
    btn.appendChild(btnText)
    document.body.appendChild(btn)
    let btnTwo = document.getElementById('TextBtn')
    let btnText2 = document.getElementById('TextBox')

    btn.addEventListener('click', function () {
        alert('Nice Message.')
    })

    btnTwo.addEventListener('click', function () {
        alert(btnText2.value)
    })

    let para = document.createElement('p')
    let paraText = document.createTextNode('4. Click on me to change my color!')
    para.appendChild(paraText)
    document.body.appendChild(para)
    para.addEventListener('click', function () {
        let colorNum = Math.floor(Math.random() * 10)
        if (colorNum == 1) {
            para.style.color = 'purple'
        } else if (colorNum == 2) {
            para.style.color = 'green'
        } else if (colorNum == 3) {
            para.style.color = 'blue'
        } else if (colorNum == 4) {
            para.style.color = 'pink'
        } else if (colorNum == 5) {
            para.style.color = 'brown'
        } else if (colorNum == 6) {
            para.style.color = 'tomato'
        } else if (colorNum == 7) {
            para.style.color = 'indigo'
        } else if (colorNum == 8) {
            para.style.color = 'fuchsia'
        } else if (colorNum == 9) {
            para.style.color = 'coral'
        }
    })

    let colorDiv = document.getElementById('colorDiv')
    colorDiv.style.backgroundColor = 'yellow'

    colorDiv.addEventListener("mouseenter", function () {
        colorDiv.style.backgroundColor = 'orange'
    })
    colorDiv.addEventListener('mouseleave', function () {
        colorDiv.style.backgroundColor = 'yellow'
    })

    let btnThree = document.createElement('button')
    let btnTextThree = document.createTextNode('5. Add Name')
    btnThree.appendChild(btnTextThree)
    document.body.appendChild(btnThree)
    let newDiv = document.createElement('div')
    let newSpan = document.createElement('span')
    let nameSpan = document.createTextNode('Jake Watters')

    btnThree.addEventListener('click', function () {
        newSpan.appendChild(nameSpan)
        newDiv.appendChild(newSpan)
        document.body.appendChild(newDiv)
    })

    let friendsArray = ['Danny', 'Denny', 'Donny', 'Diplo', 'Jeremy', 'Adam', 'Badam', 'Smokey', 'The Bandit', 'Christopher Lee']
    let friendsBtn = document.getElementById('friendsBtn')
    let friendsUL = document.getElementById('friendsUL')

    let friendsBtnName = document.createTextNode('6. List My Friends')
    friendsBtn.appendChild(friendsBtnName)

    friendsBtn.addEventListener('click', function () {
        for (i = 0; i < friendsArray.length; ++i) {
            let friendsLI = document.createElement('li')
            friendsNameList = document.createTextNode(friendsArray[i])
            friendsLI.appendChild(friendsNameList)
            friendsUL.appendChild(friendsLI)
        }




    })



})