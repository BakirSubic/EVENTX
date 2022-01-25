function restaurantChange() {
    setTimeout(function() {
        document.body.style.backgroundImage = "url('assets/restaurant.jpeg')";
        }, 100);

}

function clubChange() {
    setTimeout(function() {
    document.body.style.backgroundImage = "url('assets/background.png')";
    }, 100);
}

function mainChange() {
    setTimeout(function() {
    document.body.style.backgroundImage = "url('assets/main.jpeg')";
    }, 100);
}

function hideEvent() {
    const element = document.getElementById('remove');
    element.classList.add('removeEvent');
    document.getElementById("location").innerHTML = "Showing events near you";
        const justify = document.getElementsByClassName('eventCollection');
        for (let i = 0; i < justify.length; i++) {
            justify[i].style.justifyContent = 'space-evenly';
        }
    alert("Showing events near: Ilidža");
}

function showEvent() {
        const element = document.getElementById('remove');
        element.classList.remove('removeEvent');
        document.getElementById("location").innerHTML = "Showing all events";
    const justify = document.getElementsByClassName('eventCollection');
    for (let i = 0; i < justify.length; i++) {
        justify[i].style.justifyContent = 'space-between';
    }
    alert("Showing all events")
    }

function book() {
    alert("Booking was successful, your code is:" + Math.floor((Math.random() * 1000) + 1))
}