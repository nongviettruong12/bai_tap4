const data = [
    {
        id: 1,
        status: 'Open',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 2,
        status: 'Closed',
        name:'RE: File Recovery Request',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'7:45pm, 28/02/2024'
    }, {
        id: 3,
        status: 'In Progress',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 4,
        status: 'Open',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 5,
        status: 'Closed',
        name:'RE: File Recovery Request',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'7:45pm, 28/02/2024'
    },
    {
        id: 6,
        status: 'Closed',
        name:'RE: File Recovery Request',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'7:45pm, 28/02/2024'
    },
    {
        id: 7,
        status: 'Open',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 8,
        status: 'Open',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 9,
        status: 'Closed',
        name:'RE: File Recovery Request',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'7:45pm, 28/02/2024'
    },
    {
        id: 10,
        status: 'In Progress',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 11,
        status: 'Closed',
        name:'RE: File Recovery Request',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'7:45pm, 28/02/2024'
    },
    {
        id: 12,
        status: 'In Progress',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 13,
        status: 'In Progress',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 14,
        status: 'Closed',
        name:'RE: File Recovery Request',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'7:45pm, 28/02/2024'
    },
    {
        id: 15,
        status: 'Open',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
    {
        id: 16,
        status: 'In Progress',
        name:'RE: Laptop cannot change',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid cupid. Ut enim ad minim veniam, quis nostrud',
        team:'IT Dept',
        date_time:'4:30pm, 22/02/2024'
    },
]
const cardContainer = document.getElementById('card-container');

data.forEach(item => {
    const card = document.createElement('div');

    card.classList.add('col-12' , 'col-sm-6', 'col-md-4', 'col-lg-3','gap-3' );
    card.innerHTML = `
     <div class="card">
     <div class="card-header d-flex justify-content-between align-items-center">
         <div class="d-flex align-items-center">
             <input type="checkbox" class="me-2" />
             <span>ID #${item.id}</span>
         </div>
         <button class="btn btn-${item.status === 'Open' ? 'success' : item.status === 'Closed' ? 'danger' : 'warning'} btn-sm">
             ${item.status}
         </button>
     </div>
     <div class="card-body">
         <h5 class="card-title">${item.name}</h5>
         <p class="card-text">${item.content}</p>
     </div>
     <div class="card-footer d-flex justify-content-between align-items-center">
         <span class="badge bg-secondary">${item.team}</span>
         <span class="text-muted">${item.date_time}</span>
     </div>
     </div>
    `;

    cardContainer.appendChild(card);
});