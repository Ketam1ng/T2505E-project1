async function NavComponent() {
    const url = `https://dummyjson.com/product/categories?limit=5`;
    let ul = ``;
    try {
        const rs = await fetch(url);
        const data = await rs.json();
        
        data.map(e=>{
            ul += `<li class="nav-item">
            <a class="nav-link" href="#">${e.name}</a>
            </li>`;
        });
    } catch (error) {
            
    }
        const html = `
        <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        ${ul}
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
        </a>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul class="navbar-nav md-2 mb-lg-0">
        <li class="nav-item">
        <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
        </li>
        <li class="nav-item">
        <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a>
        </li>
        </ul>
        </div>
        </div>
        `;
        console.log(html);
        const navs = document.getElementsByClassName("nav-component");// array
        for(var i=0;i<navs.length;i++){
            navs[i].innerHTML = html;
        }
    }
NavComponent();