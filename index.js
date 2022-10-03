function newImage(x,y,z){
    let object = document.createElement('img')
    object.src = x
    object.style.position = 'fixed'
    object.style.left = y
    object.style.bottom = z
    document.body.append(object)
    return object
}

function newItem(x,y,z){
    let object = newImage(x,y,z)

    object.addEventListener('dblclick', function(){
        object.remove()
    })
}

newImage('assets/green-character.gif','100px','100px')
newImage('assets/tree.png','200px','300px')
newImage('assets/pillar.png','350px','100px')
newImage('assets/pine-tree.png','450px','200px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px','425px')

newItem('assets/sword.png','500px','405px')
newItem('assets/shield.png','165px','185px')
newItem('assets/staff.png','600px','100px')