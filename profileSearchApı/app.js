const prof = new Profile();
const uı=new UI()
const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup', (event) => {
    uı.clear();
    const text = event.target.value;
    if (text !== '') {
        prof.getProfile(text)
        .then(res => {
            if (res.profile.length === 0) {
                    uı.showAlert(text)
            }
            else {
                uı.showProfile(res.profile[0]);
                uı.showTodo(res.todo);
            }
        }

        ).catch(err=>{ uı.showAlert(text);
        
        })
    }


})