class UI {
    constructor() {
        this.profileContainer = document.getElementById('profileContainer');
        this.alert = document.getElementById('alert')
    }
    showProfile(profile) {
        this.profileContainer.innerHTML =
            `
            <div class="card card-body">
                <div class="row">
                    <div class=" col-md-3">
                        <img class="img-thumbnail" src="https://via.placeholder.com/300.png/09f/fff/">
                    </div>
                    <div class=" col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">Name:${profile.name}</li>
                            <li class="list-group-item">UserName:${profile.username}</li>
                            <li class="list-group-item">Email:${profile.email}</li>
                            <li class="list-group-item">Adres:
                                    ${profile.address.street}
                                    ${profile.address.suite}
                                    ${profile.address.city}
                                    ${profile.address.zipcode}
                            </li>
                            <li class="list-group-item">${profile.phone}</li>
                            <li class="list-group-item"> ${profile.company.name}</li>         
                        </ul>
                        <h4 class="mt-4">Todo list</h4>
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                
                </div>

            </div>
        `;

    }
    showAlert(text) {
        this.alert.innerHTML = `${text} Bulunamadı.`;
    }

    showTodo(todo){
        
        let html="";


        todo.forEach(item => {
            
            if(item.completed){
                html+=`
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>    
                `;
            }else{
                html+=`
                <li class="list-group-item bg-danger">
                    ${item.title}
                </li>    
            `;
            }

        });


        this.profileContainer.querySelector('#todo').innerHTML = html;

    }

    clear() {
        this.alert.innerHTML = "";
        this.profileContainer.innerHTML = "";
    }
}