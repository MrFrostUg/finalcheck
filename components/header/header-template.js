export default function header_template() {
  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
       
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Round_Landmark_School_Icon_-_Transparent.svg/1200px-Round_Landmark_School_Icon_-_Transparent.svg.png" alt="icon" width="80" height="60">
     
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
                <a class="nav-link active" data-pagename="home" id="home-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" data-pagename="class" id="classes-link" aria-current="page" href="#">Classes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" data-pagename="teacher" id="teachers-link" aria-current="page" href="#">Teachers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" data-pagename="student" id="students-link" aria-current="page" href="#">Students</a>
            </li>
          </ul>
  
          <picture class=w-10 h-10"">
              <img src="./pictures/person.png" class="custom-image rounded" alt="Person">
          </picture>
        </div>
      </div>
    </nav>
`;
}

