
fetch('birthdays.json')
    .then(response => response.json())
    .then(data => {
       
        document.getElementById('current-birthday-name').textContent = data.currentBirthday.name;
        document.getElementById('current-birthday-date').textContent = data.currentBirthday.date;
        document.getElementById('current-profile-img').src = data.currentBirthday.image;

        
        const upcomingBirthdayList = document.getElementById('upcoming-birthday-list');

        
        const upcomingBirthdays = data.upcomingBirthdays.slice(0, 2);  

        upcomingBirthdays.forEach(upcomingBirthday => {
            const upcomingItem = document.createElement('div');
            upcomingItem.classList.add('upcoming-item');

            const img = document.createElement('img');
            img.classList.add('profile-img-small');
            img.src = upcomingBirthday.image;
            img.alt = 'Profile Picture';

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('upcoming-info');

            const name = document.createElement('p');
            name.classList.add('name');
            name.textContent = upcomingBirthday.name;

            const date = document.createElement('p');
            date.classList.add('date');
            date.textContent = upcomingBirthday.date;

            infoDiv.appendChild(name);
            infoDiv.appendChild(date);
            upcomingItem.appendChild(img);
            upcomingItem.appendChild(infoDiv);
            upcomingBirthdayList.appendChild(upcomingItem);
        });
    })
    .catch(error => console.error('Error fetching birthday data:', error));
